import type { TelemetryEventName } from "./events";

export type TelemetryEvent = {
  eventName: TelemetryEventName;
  wasDisabled: boolean;
  clientCreatedAt: string;
  metadata: Record<string, unknown>;
};

export type TelemetryPayload = {
  anonymousUserId: string;
  country?: string;
  region?: string;
  events: TelemetryEvent[];
};
