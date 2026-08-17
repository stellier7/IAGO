"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/account";
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!response.ok) {
      let serverError = "login_failed";
      try {
        const payload = (await response.json()) as {
          error?: string;
          detail?: string;
        };
        serverError = payload.error ?? serverError;
        if (payload.error === "server_misconfigured") {
          setError(
            "Inicio de sesión no disponible: falta SESSION_SECRET en Vercel. Agrega la variable de entorno y redeploy.",
          );
          return;
        }
      } catch {
        // ignore JSON parse errors
      }

      if (response.status === 400) {
        setError("Ingresa un email válido.");
        return;
      }

      setError(
        serverError === "login_failed"
          ? "No pudimos iniciar sesión. Intenta de nuevo."
          : "No pudimos iniciar sesión. Revisa tu email.",
      );
      return;
    }

    router.push(nextPath);
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-ink-line/15 bg-white p-8">
      <h1 className="font-display text-3xl font-bold tracking-tightest text-ink">
        Iniciar sesión
      </h1>
      <p className="mt-2 text-sm text-mute">
        Usa el mismo email de tu compra en Paddle para acceder a tu cuenta.
      </p>
      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border border-ink-line/20 px-4 py-3 text-sm outline-none ring-coral focus:ring-2"
            placeholder="tu@email.com"
          />
        </label>
        {error && (
          <p className="text-sm text-coral" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition hover:bg-coral disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Continuar"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="flex min-h-screen items-center justify-center bg-bone px-6 pb-24 pt-32">
        <Suspense
          fallback={
            <div className="h-64 w-full max-w-md animate-pulse rounded-2xl bg-white" />
          }
        >
          <LoginForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
