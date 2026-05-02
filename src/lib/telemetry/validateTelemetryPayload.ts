import { allowedTelemetryEventNames } from "./events";
import type { TelemetryPayload } from "./types";

function isObject(value: unknown): boolean {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAllowedEventName(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  for (const eventName of allowedTelemetryEventNames) {
    if (value === eventName) {
      return true;
    }
  }

  return false;
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

  const payloadObject = value as Record<string, unknown>;

  if (typeof payloadObject.anonymousUserId !== "string") {
    return null;
  }

  if (
    payloadObject.country !== undefined &&
    typeof payloadObject.country !== "string"
  ) {
    return null;
  }

  if (
    payloadObject.region !== undefined &&
    typeof payloadObject.region !== "string"
  ) {
    return null;
  }

  if (!Array.isArray(payloadObject.events)) {
    return null;
  }

  if (payloadObject.events.length < 1 || payloadObject.events.length > 25) {
    return null;
  }

  for (const item of payloadObject.events) {
    if (!isObject(item)) {
      return null;
    }

    const eventObject = item as Record<string, unknown>;

    if (!isAllowedEventName(eventObject.eventName)) {
      return null;
    }

    if (typeof eventObject.wasDisabled !== "boolean") {
      return null;
    }

    if (!isValidDateString(eventObject.clientCreatedAt)) {
      return null;
    }

    if (!isObject(eventObject.metadata)) {
      return null;
    }
  }

  return payloadObject as TelemetryPayload;
}
