import { Environment, Paddle } from "@paddle/paddle-node-sdk";

const VALID_ENVIRONMENTS = new Set<string>(["sandbox", "production"]);

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Configure it in your environment before using the Paddle server SDK.`,
    );
  }
  return value;
}

export function getPaddleEnvironmentName(): "sandbox" | "production" {
  const environment =
    process.env.PADDLE_ENVIRONMENT ??
    process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT;

  if (!environment) {
    throw new Error(
      "PADDLE_ENVIRONMENT is not set. Configure PADDLE_ENVIRONMENT (or NEXT_PUBLIC_PADDLE_ENVIRONMENT) before using the Paddle server SDK.",
    );
  }

  if (!VALID_ENVIRONMENTS.has(environment)) {
    throw new Error(
      `PADDLE_ENVIRONMENT must be "sandbox" or "production", got "${environment}".`,
    );
  }

  return environment as "sandbox" | "production";
}

export function getPaddleApiKey(): string {
  return requireEnv("PADDLE_API_KEY");
}

export function getPaddleWebhookSecret(): string {
  return requireEnv("PADDLE_WEBHOOK_SECRET");
}

export function getPaddleServerClient(): Paddle {
  const environmentName = getPaddleEnvironmentName();
  const environment =
    environmentName === "sandbox"
      ? Environment.sandbox
      : Environment.production;

  return new Paddle(getPaddleApiKey(), { environment });
}

export function isPaddleServerConfigured(): boolean {
  const apiKey = process.env.PADDLE_API_KEY;
  const environment =
    process.env.PADDLE_ENVIRONMENT ??
    process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT;

  return Boolean(apiKey && environment && VALID_ENVIRONMENTS.has(environment));
}
