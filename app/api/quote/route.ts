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

  // Honeypot: silently accept so bots think they succeeded
  if (body._honey) return NextResponse.json({ ok: true });

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }

  const db = getAdminClient();
  const { error } = await db.from("bookings").insert({
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email?.trim() || null,
    vehicle_year: body.vehicle_year?.trim() || null,
    vehicle_make: body.vehicle_make?.trim() || null,
    vehicle_model: body.vehicle_model?.trim() || null,
    service: body.service || null,
    insurance_claim: body.insurance_claim || null,
    description: body.description?.trim() || null,
    preferred_date: body.preferred_date || null,
  });

  if (error) {
    console.error("[quote] insert error:", error);
    return NextResponse.json(
      { error: "Could not save your request. Please call us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
