import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import TestData from "./testdata";

export const runtime = "nodejs";

export async function POST() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "Server configuration error" },
      { status: 500 },
    );
  }

  try {
    const sql = neon(databaseUrl);
    const result = await sql`
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
            {TestData.events[0].eventName},
            {TestData.events[0].anonymousUserId},
            {TestData.events[0].wasDisabled},
            {TestData.events[0].clientCreatedAt},
            {TestData.events[0].country},
            {TestData.events[0].region},
            {TestData.events[0].metadata}
        );
    `;
  } catch (error) {
    console.error("Failed to insert telemetry event", error);

    return NextResponse.json(
      { ok: false, error: "Failed to record telemetry event" },
      { status: 500 },
    );
  }
}
