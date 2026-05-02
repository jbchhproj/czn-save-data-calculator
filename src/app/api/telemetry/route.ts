import { NextResponse } from "next/server";
import { validateTelemetryPayload } from "@/lib/telemetry/validateTelemetryPayload";

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

  return NextResponse.json({ ok: true, payload });
}
