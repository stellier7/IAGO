"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface LiveCatalogResponse {
  ok?: boolean;
  error?: string;
  detail?: string;
  reusedExisting?: boolean;
  createdProductIds?: string[];
  createdPriceIds?: string[];
  singleEnvVar?: { key: string; value: string };
  vercelEnvLines?: string[];
}

export default function LiveCatalogAdminPage() {
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LiveCatalogResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const runSetup = async () => {
    setLoading(true);
    setResult(null);
    setCopied(false);

    try {
      const response = await fetch("/api/admin/live-catalog", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret.trim()}`,
        },
      });

      const payload = (await response.json()) as LiveCatalogResponse;
      setResult(payload);
    } catch (error) {
      setResult({
        error: "Request failed",
        detail: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  const copyJsonEnv = async () => {
    if (!result?.singleEnvVar?.value) {
      return;
    }

    await navigator.clipboard.writeText(result.singleEnvVar.value);
    setCopied(true);
  };

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="font-display text-3xl font-bold tracking-tightest text-ink">
            Configurar catálogo Paddle live
          </h1>
          <p className="mt-3 text-sm text-mute">
            Usa esta página desde tu iPad. Lee o crea el catálogo live usando la
            API key que ya está en Vercel. No hace falta terminal.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-ink-line/15 bg-white p-6">
            <label className="block text-sm font-medium text-ink">
              SYNC_SECRET
            </label>
            <input
              type="password"
              value={secret}
              onChange={(event) => setSecret(event.target.value)}
              placeholder="El valor de SYNC_SECRET en Vercel"
              className="w-full rounded-xl border border-ink-line/20 px-4 py-3 text-sm"
            />
            <p className="text-xs text-mute">
              Si no tienes SYNC_SECRET, créalo en Vercel → Environment Variables
              → Production (cualquier string largo aleatorio) y redeploy.
            </p>
            <button
              type="button"
              onClick={runSetup}
              disabled={loading || !secret.trim()}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition hover:bg-coral disabled:opacity-50"
            >
              {loading ? "Trabajando…" : "Crear o leer catálogo live"}
            </button>
          </div>

          {result?.error && (
            <div className="mt-6 rounded-2xl border border-coral/30 bg-coral/10 p-5 text-sm text-coral">
              <p className="font-medium">{result.error}</p>
              {result.detail && <p className="mt-2 text-ink">{result.detail}</p>}
            </div>
          )}

          {result?.ok && (
            <div className="mt-6 space-y-4 rounded-2xl border border-ink-line/15 bg-white p-6 text-sm">
              <p className="font-medium text-ink">
                {result.reusedExisting
                  ? "Catálogo live encontrado (no se recreó nada)."
                  : "Catálogo live creado."}
              </p>

              {result.singleEnvVar && (
                <div>
                  <p className="text-mute">
                    1. Copia este JSON. 2. En Vercel Production agrega{" "}
                    <code className="rounded bg-bone px-1">
                      {result.singleEnvVar.key}
                    </code>
                    . 3. Redeploy.
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-xl bg-bone p-4 text-xs text-ink">
                    {result.singleEnvVar.value}
                  </pre>
                  <button
                    type="button"
                    onClick={copyJsonEnv}
                    className="mt-3 rounded-full border border-ink-line/20 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {copied ? "Copiado" : "Copiar JSON"}
                  </button>
                </div>
              )}

              {result.vercelEnvLines && (
                <details className="text-mute">
                  <summary className="cursor-pointer font-medium text-ink">
                    Opcional: nueve variables PADDLE_PRICE_*
                  </summary>
                  <pre className="mt-3 overflow-x-auto rounded-xl bg-bone p-4 text-xs">
                    {result.vercelEnvLines.join("\n")}
                  </pre>
                </details>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
