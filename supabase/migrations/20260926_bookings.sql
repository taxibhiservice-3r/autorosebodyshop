-- Blue Rose Auto Body — Bookings table
-- Run this in Supabase SQL Editor: Dashboard → SQL Editor → New query

CREATE TABLE IF NOT EXISTS bookings (
  id              UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT now() NOT NULL,
  name            TEXT        NOT NULL,
  phone           TEXT        NOT NULL,
  email           TEXT,
  vehicle_year    TEXT,
  vehicle_make    TEXT,
  vehicle_model   TEXT,
  service         TEXT,
  insurance_claim TEXT,
  description     TEXT,
  preferred_date  DATE,
  status          TEXT        NOT NULL DEFAULT 'new'
    CHECK (status IN ('new','contacted','booked','completed','cancelled'))
);

-- Enable RLS (service_role key bypasses it automatically)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- No anon/public read access — all access is via service_role in API routes
-- (service_role bypasses RLS by design in Supabase)
