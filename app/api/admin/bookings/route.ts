import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase-admin";

function isAuthorized(request: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return true; // open in dev if no password set
  return request.headers.get("authorization") === `Bearer ${pw}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getAdminClient();
  const { data, error } = await db
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
