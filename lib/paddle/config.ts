import type { Environments } from "@paddle/paddle-js";

const VALID_ENVIRONMENTS = new Set<Environments>(["sandbox", "production"]);

export function getPaddleEnvironment(): Environments {
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT;
  if (!environment) {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_ENVIRONMENT is not set. Configure it in your environment before using Paddle.`,
    );
  }
  if (!VALID_ENVIRONMENTS.has(environment as Environments)) {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_ENVIRONMENT must be "sandbox" or "production", got "${environment}".`,
    );
  }
  return environment as Environments;
}

export function getPaddleClientToken(): string {
  const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  if (!token) {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not set. Configure it in your environment before using Paddle.`,
    );
  }
  return token;
}

export interface PaddleClientConfig {
  environment: Environments;
  token: string;
}

export function getPaddleClientConfig(): PaddleClientConfig {
  return {
    environment: getPaddleEnvironment(),
    token: getPaddleClientToken(),
  };
}
