import { NextResponse } from "next/server";
import { validateTelemetryPayload } from "@/lib/telemetry/validateTelemetryPayload";

export async function POST(request: Request) {
  const body = await request.json();

  const payload = validateTelemetryPayload(body);

  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true, payload });
}
