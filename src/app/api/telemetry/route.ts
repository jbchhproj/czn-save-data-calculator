import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { validateTelemetryPayload } from "@/lib/telemetry/validateTelemetryPayload";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const payload = validateTelemetryPayload(body);

  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "DATABASE_URL is not configured" },
      { status: 500 },
    );
  }

  const sql = neon(databaseUrl);

  try {
    for (const event of payload.events) {
      await sql`
        insert into telemetry_events (
          event_name,
          anonymous_user_id,
          was_disabled,
          client_created_at,
          country,
          region,
          metadata
        )
          values (
            ${event.eventName},
            ${payload.anonymousUserId},
            ${event.wasDisabled},
            ${event.clientCreatedAt},
            ${payload.country ?? null},
            ${payload.region ?? null},
            ${JSON.stringify(event.metadata)}
          )
      
      `;
    }
  } catch (error) {
    console.error("Failed to save telemetry", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown database error";

    return NextResponse.json(
      { ok: false, error: "Failed to save telemetry" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    insertedCount: payload.events.length,
  });
}
