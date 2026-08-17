const ACCESS_GRANTING_STATUSES = new Set(["active", "trialing"]);

/**
 * Returns true when a subscription status currently grants paid product access.
 * Ignores scheduled_change — access is based on live status only.
 */
export function subscriptionGrantsAccess(status: string): boolean {
  return ACCESS_GRANTING_STATUSES.has(status);
}

export function describeAccessStatus(status: string): string {
  if (subscriptionGrantsAccess(status)) {
    return "active";
  }
  if (status === "past_due") {
    return "past_due";
  }
  if (status === "paused") {
    return "paused";
  }
  if (status === "canceled") {
    return "canceled";
  }
  return status;
}
