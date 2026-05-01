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
