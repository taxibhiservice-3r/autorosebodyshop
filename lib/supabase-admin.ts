import { createClient } from "@supabase/supabase-js";

export function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export type BookingStatus = "new" | "contacted" | "booked" | "completed" | "cancelled";

export interface Booking {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  vehicle_year: string | null;
  vehicle_make: string | null;
  vehicle_model: string | null;
  service: string | null;
  insurance_claim: string | null;
  description: string | null;
  preferred_date: string | null;
  status: BookingStatus;
}
