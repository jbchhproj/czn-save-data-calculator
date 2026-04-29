import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "DATABASE_URL is not configured" },
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
