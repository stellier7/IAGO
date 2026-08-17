export type PaddleEnvironment = "sandbox" | "production";

function assertPaddleEnvironment(value: string | undefined): PaddleEnvironment {
  if (!value) {
    throw new Error(
      "NEXT_PUBLIC_PADDLE_ENVIRONMENT is not set. Set it to \"sandbox\" or \"production\".",
    );
  }
  if (value !== "sandbox" && value !== "production") {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_ENVIRONMENT must be "sandbox" or "production", got "${value}".`,
    );
  }
  return value;
}

export function getPaddleEnvironment(): PaddleEnvironment {
  return assertPaddleEnvironment(process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT);
}

export function getPaddleClientToken(): string {
  const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  if (!token) {
    throw new Error("NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not set.");
  }
  return token;
}

export function getPaddlePublicConfig() {
  return {
    environment: getPaddleEnvironment(),
    clientToken: getPaddleClientToken(),
  } as const;
}
