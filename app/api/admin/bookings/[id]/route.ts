import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase-admin";

function isAuthorized(request: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return true;
  return request.headers.get("authorization") === `Bearer ${pw}`;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const db = getAdminClient();
  const { error } = await db.from("bookings").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { status } = await request.json();

  const db = getAdminClient();
  const { error } = await db.from("bookings").update({ status }).eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
