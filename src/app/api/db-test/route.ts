import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { ok: false, error: "Not found" },
      { status: 404 },
    );
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "Server configuration error" },
      { status: 500 },
    );
  }

  try {
    const sql = neon(databaseUrl);
    const [result] = await sql`
      select
        now() as server_time,
        current_database() as database_name
    `;

    return NextResponse.json({
      ok: true,
      databaseName: result.database_name,
      serverTime: result.server_time,
    });
  } catch (error) {
    console.error("Database test failed", error);

    return NextResponse.json(
      { ok: false, error: "Database connection failed" },
      { status: 500 },
    );
  }
}

/*
in my app id like to collect data from every interactable object
this includes:
post processing button
reset button
deep trauma toggle
tier stepper decrement button
tier stepper select
tier stepper increment button
selection block rules button
selection block stepper decrement button
selection block stepper increment button
kofi link click

as for the table columns we'd have:
id
event name
anonymous user id
user location
created at
client created at

number of clicks
is button disabled (we'd actually want to track if they're clicking disabled buttons, as that would be a strong signal of frustration)


*/
