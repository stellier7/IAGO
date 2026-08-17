import { ApiError } from "@paddle/paddle-node-sdk";

export type PaddleSyncErrorKind =
  | "config"
  | "auth"
  | "environment"
  | "database"
  | "unknown";

export interface PaddleSyncError {
  kind: PaddleSyncErrorKind;
  message: string;
}

export function describePaddleSyncError(error: unknown): PaddleSyncError {
  if (error instanceof ApiError) {
    const detail = error.detail || error.message;
    const code = error.code.toLowerCase();

    if (
      code.includes("authentication") ||
      code.includes("unauthorized") ||
      detail.toLowerCase().includes("authentication") ||
      detail.toLowerCase().includes("api key")
    ) {
      return {
        kind: "auth",
        message:
          "Paddle rechazó la API key. Genera una nueva en Developer Tools → Authentication (sandbox) y actualiza PADDLE_API_KEY en Vercel sin espacios al inicio o final.",
      };
    }

    return {
      kind: "unknown",
      message: `Paddle respondió con un error: ${detail}`,
    };
  }

  if (error instanceof Error) {
    const message = error.message;

    if (message.includes("PADDLE_ENVIRONMENT")) {
      return {
        kind: "environment",
        message:
          'PADDLE_ENVIRONMENT debe ser exactamente "sandbox" o "production" (minúsculas). Para pruebas usa sandbox.',
      };
    }

    if (message.includes("PADDLE_API_KEY")) {
      return {
        kind: "config",
        message:
          "PADDLE_API_KEY no está configurada en el servidor. Agrégala en Vercel → Environment Variables.",
      };
    }

    if (
      message.includes("Database URL is not set") ||
      message.includes("POSTGRES")
    ) {
      return {
        kind: "database",
        message:
          "No pudimos escribir en Postgres durante la sincronización. Verifica POSTGRES_URL en Vercel.",
      };
    }

    if (
      message.toLowerCase().includes("fetch failed") ||
      message.toLowerCase().includes("network")
    ) {
      return {
        kind: "unknown",
        message:
          "No pudimos contactar la API de Paddle desde el servidor. Intenta redeploy en unos minutos.",
      };
    }

    return {
      kind: "unknown",
      message: `Error de sincronización: ${message}`,
    };
  }

  return {
    kind: "unknown",
    message:
      "No pudimos sincronizar con Paddle. Revisa PADDLE_API_KEY y PADDLE_ENVIRONMENT en Vercel.",
  };
}

export async function verifyPaddleApiAccess(): Promise<{
  ok: boolean;
  environment: string;
  error: PaddleSyncError | null;
}> {
  try {
    const { getPaddleEnvironmentName, getPaddleServerClient } = await import(
      "@/lib/paddle/server"
    );
    const environment = getPaddleEnvironmentName();
    const paddle = getPaddleServerClient();

    const iterator = paddle.customers.list({ perPage: 1 })[Symbol.asyncIterator]();
    await iterator.next();

    return { ok: true, environment, error: null };
  } catch (error) {
    const environment =
      process.env.PADDLE_ENVIRONMENT ??
      process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT ??
      "unknown";

    return {
      ok: false,
      environment,
      error: describePaddleSyncError(error),
    };
  }
}
