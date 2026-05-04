import type { TelemetryEventName } from "./events";
import type { TelemetryEvent } from "./types";

const maxBatchSize = 10;
const flushDelayMilliseconds = 2000;

let pendingEvents: TelemetryEvent[] = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;

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

async function sendTelemetryEvents(events: TelemetryEvent[]) {
  if (events.length === 0) {
    return;
  }

  const payload = {
    anonymousUserId: getAnonymousUserId(),
    events,
  };

  await fetch("/api/telemetry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

function scheduleFlush() {
  if (flushTimer !== null) {
    return;
  }

  flushTimer = setTimeout(() => {
    void flushTelemetryEvents();
  }, flushDelayMilliseconds);
}

async function flushTelemetryEvents() {
  if (flushTimer !== null) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }

  const eventsToSend = pendingEvents;
  pendingEvents = [];

  await sendTelemetryEvents(eventsToSend);
}

export function trackTelemetryEvent(
  eventName: TelemetryEventName,
  wasDisabled: boolean,
  metadata: Record<string, unknown>,
) {
  pendingEvents.push({
    eventName,
    wasDisabled,
    clientCreatedAt: new Date().toISOString(),
    metadata,
  });

  if (pendingEvents.length >= maxBatchSize) {
    void flushTelemetryEvents();
    return;
  }

  scheduleFlush();
}
