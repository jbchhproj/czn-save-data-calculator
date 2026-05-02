import type { TelemetryEventName } from "./events";

const country = "US";
const region = "TX";

function getAnonymousUserId(): string {
  const storageKey = "czn_anonymous_user_id";

  const existingUserId = localStorage.getItem(storageKey);

  if (existingUserId) {
    return existingUserId;
  }

  const newUserId = crypto.randomUUID();

  localStorage.setItem(storageKey, newUserId);

  return newUserId;
}

export async function trackTelemetryEvent(
  eventName: TelemetryEventName,
  wasDisabled: boolean,
  metadata: Record<string, unknown>,
) {
  const anonymousUserId = getAnonymousUserId();

  const payload = {
    anonymousUserId,
    country,
    region,
    events: [
      {
        eventName,
        wasDisabled,
        clientCreatedAt: new Date().toISOString(),
        metadata,
      },
    ],
  };

  await fetch("/api/telemetry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
