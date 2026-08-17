#!/usr/bin/env bash
# Creates IAGO Digital product catalog in Paddle sandbox.
# Requires: PADDLE_API_KEY (sandbox key containing _sdbx)
set -euo pipefail

API_BASE="https://sandbox-api.paddle.com"
API_KEY="${PADDLE_API_KEY:?Set PADDLE_API_KEY to your sandbox API key}"

paddle_post() {
  local endpoint="$1"
  local body="$2"
  curl -sS -X POST "${API_BASE}${endpoint}" \
    -H "Authorization: Bearer ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d "${body}"
}

extract_id() {
  python3 -c "import sys,json; d=json.load(sys.stdin); print(d['data']['id'])" 2>/dev/null \
    || python3 -c "import sys,json; d=json.load(sys.stdin); print(json.dumps(d, indent=2)); sys.exit(1)"
}

echo "=== Creating Paddle sandbox catalog for IAGO Digital ==="
echo

# ── Products ────────────────────────────────────────────────────────────────

echo "Creating product: Pagina Web Basica..."
PRO_WEB=$(paddle_post "/products" '{
  "name": "Pagina Web Basica",
  "tax_category": "standard",
  "description": "Landing page o sitio web basico con diseno premium, hosting y mantenimiento mensual."
}' | extract_id)
echo "  Product ID: ${PRO_WEB}"

echo "Creating product: SEO..."
PRO_SEO=$(paddle_post "/products" '{
  "name": "SEO",
  "tax_category": "standard",
  "description": "Auditorias tecnicas, optimizacion on-page y estrategia de contenido para posicionamiento organico."
}' | extract_id)
echo "  Product ID: ${PRO_SEO}"

echo "Creating product: Automatizaciones..."
PRO_AUTO=$(paddle_post "/products" '{
  "name": "Automatizaciones",
  "tax_category": "standard",
  "description": "Chatbots, flujos con IA, integraciones y dashboards que eliminan trabajo manual repetitivo."
}' | extract_id)
echo "  Product ID: ${PRO_AUTO}"

echo

# ── Helper: create recurring price with 7-day trial + country overrides ────

create_recurring_price() {
  local product_id="$1"
  local name="$2"
  local description="$3"
  local usd_amount="$4"
  local interval="$5"
  local frequency="$6"
  local gb_amount="$7"
  local ie_amount="$8"
  local au_amount="$9"

  paddle_post "/prices" "$(cat <<EOF
{
  "product_id": "${product_id}",
  "name": "${name}",
  "description": "${description}",
  "unit_price": {
    "amount": "${usd_amount}",
    "currency_code": "USD"
  },
  "billing_cycle": {
    "interval": "${interval}",
    "frequency": ${frequency}
  },
  "trial_period": {
    "interval": "day",
    "frequency": 7
  },
  "unit_price_overrides": [
    {
      "country_codes": ["GB"],
      "unit_price": { "amount": "${gb_amount}", "currency_code": "GBP" }
    },
    {
      "country_codes": ["IE"],
      "unit_price": { "amount": "${ie_amount}", "currency_code": "EUR" }
    },
    {
      "country_codes": ["AU"],
      "unit_price": { "amount": "${au_amount}", "currency_code": "AUD" }
    }
  ],
  "tax_mode": "account_setting"
}
EOF
)" | extract_id
}

# ── Helper: create one-time development fee price ───────────────────────────

create_onetime_price() {
  local product_id="$1"
  local name="$2"
  local description="$3"
  local usd_amount="$4"
  local gb_amount="$5"
  local ie_amount="$6"
  local au_amount="$7"

  paddle_post "/prices" "$(cat <<EOF
{
  "product_id": "${product_id}",
  "name": "${name}",
  "description": "${description}",
  "unit_price": {
    "amount": "${usd_amount}",
    "currency_code": "USD"
  },
  "unit_price_overrides": [
    {
      "country_codes": ["GB"],
      "unit_price": { "amount": "${gb_amount}", "currency_code": "GBP" }
    },
    {
      "country_codes": ["IE"],
      "unit_price": { "amount": "${ie_amount}", "currency_code": "EUR" }
    },
    {
      "country_codes": ["AU"],
      "unit_price": { "amount": "${au_amount}", "currency_code": "AUD" }
    }
  ],
  "tax_mode": "account_setting"
}
EOF
)" | extract_id
}

# ── Pagina Web Basica prices ─────────────────────────────────────────────────
# Base: $35/mo, $350/yr, $400 dev
# Overrides (PPP-adjusted starting points):
#   GB: £28/mo, £280/yr, £320 dev
#   IE: €32/mo, €320/yr, €365 dev
#   AU: A$55/mo, A$550/yr, A$620 dev

echo "Pagina Web Basica — Monthly..."
PRI_WEB_MO=$(create_recurring_price "${PRO_WEB}" \
  "Pagina Web Basica — Mensual" \
  "Pagina Web Basica — suscripcion mensual (7 dias de prueba gratis)" \
  "3500" "month" 1 "2800" "3200" "5500")
echo "  Price ID: ${PRI_WEB_MO}"

echo "Pagina Web Basica — Annual..."
PRI_WEB_YR=$(create_recurring_price "${PRO_WEB}" \
  "Pagina Web Basica — Anual" \
  "Pagina Web Basica — suscripcion anual (7 dias de prueba gratis)" \
  "35000" "year" 1 "28000" "32000" "55000")
echo "  Price ID: ${PRI_WEB_YR}"

echo "Pagina Web Basica — Development fee..."
PRI_WEB_DEV=$(create_onetime_price "${PRO_WEB}" \
  "Pagina Web Basica — Tarifa de desarrollo" \
  "Tarifa unica de desarrollo e implementacion inicial" \
  "40000" "32000" "36500" "62000")
echo "  Price ID: ${PRI_WEB_DEV}"

echo

# ── SEO prices ───────────────────────────────────────────────────────────────
# Base: $45/mo, $450/yr, $800 dev
# Overrides:
#   GB: £36/mo, £360/yr, £640 dev
#   IE: €41/mo, €410/yr, €730 dev
#   AU: A$70/mo, A$700/yr, A$1240 dev

echo "SEO — Monthly..."
PRI_SEO_MO=$(create_recurring_price "${PRO_SEO}" \
  "SEO — Mensual" \
  "SEO — suscripcion mensual (7 dias de prueba gratis)" \
  "4500" "month" 1 "3600" "4100" "7000")
echo "  Price ID: ${PRI_SEO_MO}"

echo "SEO — Annual..."
PRI_SEO_YR=$(create_recurring_price "${PRO_SEO}" \
  "SEO — Anual" \
  "SEO — suscripcion anual (7 dias de prueba gratis)" \
  "45000" "year" 1 "36000" "41000" "70000")
echo "  Price ID: ${PRI_SEO_YR}"

echo "SEO — Development fee..."
PRI_SEO_DEV=$(create_onetime_price "${PRO_SEO}" \
  "SEO — Tarifa de desarrollo" \
  "Tarifa unica de auditoria e implementacion SEO inicial" \
  "80000" "64000" "73000" "124000")
echo "  Price ID: ${PRI_SEO_DEV}"

echo

# ── Automatizaciones prices ──────────────────────────────────────────────────
# Base: $120/mo, $1200/yr, $1200 dev
# Overrides:
#   GB: £95/mo, £950/yr, £950 dev
#   IE: €109/mo, €1090/yr, €1090 dev
#   AU: A$185/mo, A$1850/yr, A$1850 dev

echo "Automatizaciones — Monthly..."
PRI_AUTO_MO=$(create_recurring_price "${PRO_AUTO}" \
  "Automatizaciones — Mensual" \
  "Automatizaciones — suscripcion mensual (7 dias de prueba gratis)" \
  "12000" "month" 1 "9500" "10900" "18500")
echo "  Price ID: ${PRI_AUTO_MO}"

echo "Automatizaciones — Annual..."
PRI_AUTO_YR=$(create_recurring_price "${PRO_AUTO}" \
  "Automatizaciones — Anual" \
  "Automatizaciones — suscripcion anual (7 dias de prueba gratis)" \
  "120000" "year" 1 "95000" "109000" "185000")
echo "  Price ID: ${PRI_AUTO_YR}"

echo "Automatizaciones — Development fee..."
PRI_AUTO_DEV=$(create_onetime_price "${PRO_AUTO}" \
  "Automatizaciones — Tarifa de desarrollo" \
  "Tarifa unica de desarrollo e implementacion (cotizacion base; puede variar segun necesidades)" \
  "120000" "95000" "109000" "185000")
echo "  Price ID: ${PRI_AUTO_DEV}"

echo
echo "=== Catalog created successfully ==="
echo
echo "PRODUCT & PRICE MAPPING"
echo "──────────────────────────────────────────────────────────────"
printf "%-30s %-30s %s\n" "Product" "Price" "Paddle ID"
echo "──────────────────────────────────────────────────────────────"
printf "%-30s %-30s %s\n" "Pagina Web Basica" "Product" "${PRO_WEB}"
printf "%-30s %-30s %s\n" "" "Monthly (7-day trial)" "${PRI_WEB_MO}"
printf "%-30s %-30s %s\n" "" "Annual (7-day trial)" "${PRI_WEB_YR}"
printf "%-30s %-30s %s\n" "" "Development fee (one-time)" "${PRI_WEB_DEV}"
printf "%-30s %-30s %s\n" "SEO" "Product" "${PRO_SEO}"
printf "%-30s %-30s %s\n" "" "Monthly (7-day trial)" "${PRI_SEO_MO}"
printf "%-30s %-30s %s\n" "" "Annual (7-day trial)" "${PRI_SEO_YR}"
printf "%-30s %-30s %s\n" "" "Development fee (one-time)" "${PRI_SEO_DEV}"
printf "%-30s %-30s %s\n" "Automatizaciones" "Product" "${PRO_AUTO}"
printf "%-30s %-30s %s\n" "" "Monthly (7-day trial)" "${PRI_AUTO_MO}"
printf "%-30s %-30s %s\n" "" "Annual (7-day trial)" "${PRI_AUTO_YR}"
printf "%-30s %-30s %s\n" "" "Development fee (one-time)" "${PRI_AUTO_DEV}"
