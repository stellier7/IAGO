#!/usr/bin/env bash
# Create IAGO Digital product catalog in Paddle sandbox
set -euo pipefail

API_BASE="https://sandbox-api.paddle.com"
AUTH="Authorization: Bearer ${PADDLE_API_KEY}"

# Country overrides: GB (UK), IE (Ireland), AU (Australia)
# PPP-adjusted from USD base — adjust in Paddle dashboard as needed
declare -A MONTHLY_GBP MONTHLY_EUR MONTHLY_AUD
declare -A ANNUAL_GBP ANNUAL_EUR ANNUAL_AUD
declare -A DEV_GBP DEV_EUR DEV_AUD

MONTHLY_GBP[basico]=2800; MONTHLY_EUR[basico]=3200; MONTHLY_AUD[basico]=5200
MONTHLY_GBP[seo]=4400;    MONTHLY_EUR[seo]=5000;    MONTHLY_AUD[seo]=8200
MONTHLY_GBP[ia]=9500;     MONTHLY_EUR[ia]=11000;    MONTHLY_AUD[ia]=17500

ANNUAL_GBP[basico]=28000; ANNUAL_EUR[basico]=32000; ANNUAL_AUD[basico]=52000
ANNUAL_GBP[seo]=44000;    ANNUAL_EUR[seo]=50000;    ANNUAL_AUD[seo]=82000
ANNUAL_GBP[ia]=95000;     ANNUAL_EUR[ia]=110000;    ANNUAL_AUD[ia]=175000

DEV_GBP[basico]=32000; DEV_EUR[basico]=37000; DEV_AUD[basico]=60000
DEV_GBP[seo]=64000;    DEV_EUR[seo]=74000;    DEV_AUD[seo]=120000
DEV_GBP[ia]=95000;     DEV_EUR[ia]=110000;    DEV_AUD[ia]=175000

api_post() {
  local endpoint="$1"
  local body="$2"
  curl -s -X POST "${API_BASE}${endpoint}" \
    -H "${AUTH}" \
    -H "Content-Type: application/json" \
    -d "${body}"
}

overrides_json() {
  local key="$1"
  local kind="$2" # monthly, annual, dev
  local gbp eur aud
  case "$kind" in
    monthly) gbp="${MONTHLY_GBP[$key]}"; eur="${MONTHLY_EUR[$key]}"; aud="${MONTHLY_AUD[$key]}" ;;
    annual)  gbp="${ANNUAL_GBP[$key]}";  eur="${ANNUAL_EUR[$key]}";  aud="${ANNUAL_AUD[$key]}" ;;
    dev)     gbp="${DEV_GBP[$key]}";     eur="${DEV_EUR[$key]}";     aud="${DEV_AUD[$key]}" ;;
  esac
  cat <<EOF
[
  {"country_codes":["GB"],"unit_price":{"amount":"${gbp}","currency_code":"GBP"}},
  {"country_codes":["IE"],"unit_price":{"amount":"${eur}","currency_code":"EUR"}},
  {"country_codes":["AU"],"unit_price":{"amount":"${aud}","currency_code":"AUD"}}
]
EOF
}

create_product() {
  local key="$1"
  local name="$2"
  local desc="$3"
  local tier="$4"
  api_post "/products" "$(jq -n \
    --arg name "$name" \
    --arg desc "$desc" \
    --arg key "$key" \
    --argjson tier "$tier" \
    '{name: $name, tax_category: "saas", description: $desc, custom_data: {plan: $key, tier: $tier}}')"
}

create_recurring_price() {
  local product_id="$1"
  local name="$2"
  local desc="$3"
  local amount="$4"
  local interval="$5"
  local key="$6"
  local kind="$7"
  local overrides
  overrides=$(overrides_json "$key" "$kind")
  api_post "/prices" "$(jq -n \
    --arg product_id "$product_id" \
    --arg name "$name" \
    --arg desc "$desc" \
    --arg amount "$amount" \
    --arg interval "$interval" \
    --argjson overrides "$overrides" \
    '{
      product_id: $product_id,
      name: $name,
      description: $desc,
      unit_price: {amount: $amount, currency_code: "USD"},
      billing_cycle: {interval: $interval, frequency: 1},
      unit_price_overrides: $overrides
    }')"
}

create_onetime_price() {
  local product_id="$1"
  local name="$2"
  local desc="$3"
  local amount="$4"
  local key="$5"
  local overrides
  overrides=$(overrides_json "$key" "dev")
  api_post "/prices" "$(jq -n \
    --arg product_id "$product_id" \
    --arg name "$name" \
    --arg desc "$desc" \
    --arg amount "$amount" \
    --argjson overrides "$overrides" \
    '{
      product_id: $product_id,
      name: $name,
      description: $desc,
      unit_price: {amount: $amount, currency_code: "USD"},
      billing_cycle: null,
      unit_price_overrides: $overrides,
      custom_data: {type: "development_fee"}
    }')"
}

RESULTS_FILE="/tmp/paddle-catalog-results.json"
echo "[]" > "$RESULTS_FILE"

record() {
  local entry="$1"
  jq --argjson entry "$entry" '. += [$entry]' "$RESULTS_FILE" > "${RESULTS_FILE}.tmp" && mv "${RESULTS_FILE}.tmp" "$RESULTS_FILE"
}

# Plans: key|display_name|monthly_usd|annual_usd|dev_usd|tier|description
PLANS=(
  "basico|Básico|3500|35000|40000|1|Plan Básico — sitio web esencial con hosting y soporte."
  "seo|SEO|5500|55000|80000|2|Plan SEO — sitio optimizado para buscadores y visibilidad."
  "ia|Automatizado con IA|12000|120000|120000|3|Plan Automatizado con IA — sitio inteligente con automatización avanzada."
)

for plan in "${PLANS[@]}"; do
  IFS='|' read -r key name monthly annual dev tier desc <<< "$plan"

  # Reuse Básico if already created
  if [[ "$key" == "basico" ]]; then
    existing=$(curl -s -H "${AUTH}" "${API_BASE}/products?per_page=200" | jq -r '.data[] | select(.custom_data.plan=="basico") | .id' | head -1)
    if [[ -n "$existing" && "$existing" != "null" ]]; then
      product_id="$existing"
      echo "Reusing existing product: $product_id ($name)" >&2
    else
      resp=$(create_product "$key" "$name" "$desc" "$tier")
      product_id=$(echo "$resp" | jq -r '.data.id')
    fi
  else
    resp=$(create_product "$key" "$name" "$desc" "$tier")
    product_id=$(echo "$resp" | jq -r '.data.id')
    if [[ "$product_id" == "null" || -z "$product_id" ]]; then
      echo "Failed to create product $name: $resp" >&2
      exit 1
    fi
  fi

  record "$(jq -n --arg id "$product_id" --arg name "$name" --arg key "$key" '{type:"product", key:$key, name:$name, id:$id}')"

  monthly_resp=$(create_recurring_price "$product_id" "Monthly" "${name} — monthly subscription" "$monthly" "month" "$key" "monthly")
  monthly_id=$(echo "$monthly_resp" | jq -r '.data.id')
  record "$(jq -n --arg id "$monthly_id" --arg name "$name" --arg key "$key" --arg usd "$monthly" '{type:"price", price_type:"monthly", key:$key, product:$name, id:$id, usd_cents:$usd}')"

  annual_resp=$(create_recurring_price "$product_id" "Annual" "${name} — annual subscription" "$annual" "year" "$key" "annual")
  annual_id=$(echo "$annual_resp" | jq -r '.data.id')
  record "$(jq -n --arg id "$annual_id" --arg name "$name" --arg key "$key" --arg usd "$annual" '{type:"price", price_type:"annual", key:$key, product:$name, id:$id, usd_cents:$usd}')"

  dev_resp=$(create_onetime_price "$product_id" "Development fee" "${name} — one-time development fee" "$dev" "$key")
  dev_id=$(echo "$dev_resp" | jq -r '.data.id')
  record "$(jq -n --arg id "$dev_id" --arg name "$name" --arg key "$key" --arg usd "$dev" '{type:"price", price_type:"development_fee", key:$key, product:$name, id:$id, usd_cents:$usd}')"
done

cat "$RESULTS_FILE" | jq .
