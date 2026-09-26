import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  let body: Record<string, string>;

  const ct = request.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    body = await request.json();
  } else {
    const fd = await request.formData();
    body = Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, String(v)]),
    );
  }

  // Honeypot
  if (body._honey) return NextResponse.json({ ok: true });

  if (!body.name?.trim() || !body.phone?.trim() || !body.message?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, and message are required" },
      { status: 400 },
    );
  }

  const db = getAdminClient();
  const { error } = await db.from("bookings").insert({
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email?.trim() || null,
    // Store combined vehicle string in vehicle_make; year/model left null
    vehicle_make: body.vehicle?.trim() || null,
    description: body.message.trim(),
    // Marker so admin can distinguish contact vs quote submissions
    service: "[Contact Form]",
  });

  if (error) {
    console.error("[contact] insert error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please call us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
