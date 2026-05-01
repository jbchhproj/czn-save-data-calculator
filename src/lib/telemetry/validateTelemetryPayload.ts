import { allowedTelemetryEventNames } from "./events";
import type { TelemetryPayload } from "./types";

function isObject(value: unknown): boolean {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAllowedEventName(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return allowedTelemetryEventNames.includes(
    value as (typeof allowedTelemetryEventNames)[number],
  );
}

function isValidDateString(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return !Number.isNaN(Date.parse(value));
}

export function validateTelemetryPayload(
  value: unknown,
): TelemetryPayload | null {
  if (!isObject(value)) {
    return null;
  }

  const payload = value as Record<string, unknown>;

  if (typeof payload.anonymousUserId !== "string") {
    return null;
  }

  if (payload.country !== undefined && typeof payload.country !== "string") {
    return null;
  }

  if (payload.region !== undefined && typeof payload.region !== "string") {
    return null;
  }

  if (!Array.isArray(payload.events)) {
    return null;
  }

  if (payload.events.length < 1 || payload.events.length > 25) {
    return null;
  }

  for (const item of payload.events) {
    if (!isObject(item)) {
      return null;
    }

    const event = item as Record<string, unknown>;

    if (!isAllowedEventName(event.eventName)) {
      return null;
    }

    if (typeof event.wasDisabled !== "boolean") {
      return null;
    }

    if (!isValidDateString(event.clientCreatedAt)) {
      return null;
    }

    if (!isObject(event.metadata)) {
      return null;
    }
  }

  return payload as TelemetryPayload;
}
