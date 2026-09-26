"use client";

import { useEffect, useState, useCallback } from "react";
import type { Booking, BookingStatus } from "@/lib/supabase-admin";

// ── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<BookingStatus, { label: string; color: string; bg: string }> = {
  new:       { label: "New",       color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/30" },
  contacted: { label: "Contacted", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30" },
  booked:    { label: "Booked",    color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/30" },
  completed: { label: "Completed", color: "text-green-400",  bg: "bg-green-400/10 border-green-400/30" },
  cancelled: { label: "Cancelled", color: "text-[#9CA3AF]",  bg: "bg-[#2E3035]/50 border-[#2E3035]" },
};

const FILTERS: { key: "all" | BookingStatus; label: string }[] = [
  { key: "all",       label: "All" },
  { key: "new",       label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "booked",    label: "Booked" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

function formatPreferredDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric",
  });
}

function buildCopyText(b: Booking): string {
  const vehicle = [b.vehicle_year, b.vehicle_make, b.vehicle_model].filter(Boolean).join(" ");
  const lines = [
    `ESTIMATE REQUEST — ${formatDate(b.created_at)}`,
    `Status: ${STATUS_CONFIG[b.status].label}`,
    ``,
    `CUSTOMER`,
    `Name:  ${b.name}`,
    `Phone: ${b.phone}`,
    b.email ? `Email: ${b.email}` : null,
    ``,
    vehicle ? `VEHICLE\n${vehicle}` : null,
    b.service ? `\nSERVICE\n${b.service}` : null,
    b.insurance_claim ? `Insurance: ${b.insurance_claim}` : null,
    b.preferred_date ? `Preferred drop-off: ${formatPreferredDate(b.preferred_date)}` : null,
    b.description ? `\nDECRIPTION\n${b.description}` : null,
  ].filter((l) => l !== null);
  return lines.join("\n");
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [filter, setFilter] = useState<"all" | BookingStatus>("all");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedPw, setSavedPw] = useState("");

  // Restore password from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_pw");
    if (stored) { setSavedPw(stored); setAuthed(true); }
  }, []);

  const fetchBookings = useCallback(async (password: string) => {
    setLoading(true);
    setFetchError("");
    try {
      const res = await fetch("/api/admin/bookings", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.status === 401) { setAuthed(false); setFetchError("Session expired. Please log in again."); return; }
      if (!res.ok) { setFetchError("Failed to load bookings."); return; }
      setBookings(await res.json());
    } catch {
      setFetchError("Network error. Could not reach server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed && savedPw) fetchBookings(savedPw);
  }, [authed, savedPw, fetchBookings]);

  // ── Login ──────────────────────────────────────────────────────────────────
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    const res = await fetch("/api/admin/bookings", {
      headers: { Authorization: `Bearer ${pw}` },
    });
    setAuthLoading(false);
    if (res.ok) {
      sessionStorage.setItem("admin_pw", pw);
      setSavedPw(pw);
      setBookings(await res.json());
      setAuthed(true);
    } else {
      setAuthError("Wrong password. Try again.");
    }
  }

  function logout() {
    sessionStorage.removeItem("admin_pw");
    setAuthed(false);
    setSavedPw("");
    setBookings([]);
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  async function handleDelete(id: string) {
    const res = await fetch(`/api/admin/bookings/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${savedPw}` },
    });
    if (res.ok) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setDeleteConfirm(null);
    }
  }

  async function handleStatusChange(id: string, status: BookingStatus) {
    const res = await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${savedPw}`, "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    }
  }

  async function handleCopy(booking: Booking) {
    await navigator.clipboard.writeText(buildCopyText(booking));
    setCopiedId(booking.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  // ── Filtered data ─────────────────────────────────────────────────────────
  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);
  const newCount = bookings.filter((b) => b.status === "new").length;
  const todayStr = new Date().toDateString();
  const todayCount = bookings.filter(
    (b) => new Date(b.created_at).toDateString() === todayStr,
  ).length;

  // ── Login screen ───────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#C0392B] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Admin Dashboard</h1>
              <p className="text-[#9CA3AF] text-xs">Blue Rose Auto Body</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Password</label>
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                autoFocus
                required
                className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
                placeholder="Enter admin password"
              />
            </div>
            {authError && (
              <p className="text-red-400 text-sm">{authError}</p>
            )}
            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 bg-[#C0392B] hover:bg-[#E74C3C] disabled:opacity-60 text-white font-bold rounded-xl transition-colors"
            >
              {authLoading ? "Checking…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="bg-[#1A1B1E] border-b border-[#2E3035] sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Blue Rose Admin</span>
            <span className="hidden sm:block text-[#9CA3AF] text-sm">— Bookings</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchBookings(savedPw)}
              className="text-[#9CA3AF] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-[#232427]"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              onClick={logout}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-[#232427]"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total", value: bookings.length },
            { label: "New", value: newCount },
            { label: "Today", value: todayCount },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#1A1B1E] border border-[#2E3035] rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map(({ key, label }) => {
            const count = key === "all" ? bookings.length : bookings.filter((b) => b.status === key).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === key
                    ? "bg-[#C0392B] text-white"
                    : "bg-[#1A1B1E] border border-[#2E3035] text-[#9CA3AF] hover:text-white hover:border-[#C0392B]"
                }`}
              >
                {label} {count > 0 && <span className="ml-1 opacity-70">({count})</span>}
              </button>
            );
          })}
        </div>

        {/* Loading / error */}
        {loading && (
          <div className="text-center py-12 text-[#9CA3AF]">Loading bookings…</div>
        )}
        {fetchError && (
          <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {fetchError}
          </div>
        )}

        {/* Empty state */}
        {!loading && !fetchError && filtered.length === 0 && (
          <div className="text-center py-16 text-[#9CA3AF]">
            {filter === "all" ? "No bookings yet." : `No ${filter} bookings.`}
          </div>
        )}

        {/* Booking cards */}
        <div className="space-y-4">
          {filtered.map((booking) => {
            const sc = STATUS_CONFIG[booking.status];
            const vehicle = [booking.vehicle_year, booking.vehicle_make, booking.vehicle_model]
              .filter(Boolean).join(" ");
            const isDeleteConfirming = deleteConfirm === booking.id;
            const isCopied = copiedId === booking.id;

            return (
              <div
                key={booking.id}
                className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl overflow-hidden"
              >
                {/* Card header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#2E3035]">
                  <span className="text-[#9CA3AF] text-xs">{formatDate(booking.created_at)}</span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${sc.bg} ${sc.color}`}>
                      {sc.label}
                    </span>
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value as BookingStatus)}
                      className="text-xs bg-[#232427] border border-[#2E3035] text-[#D1D5DB] rounded-lg px-2 py-1 focus:outline-none focus:border-[#C0392B]"
                    >
                      {(Object.keys(STATUS_CONFIG) as BookingStatus[]).map((s) => (
                        <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 py-4 space-y-3">
                  {/* Customer */}
                  <div>
                    <p className="text-white font-bold text-base">{booking.name}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <a
                        href={`tel:${booking.phone.replace(/\D/g, "")}`}
                        className="text-[#C0392B] hover:text-[#E74C3C] text-sm font-medium transition-colors"
                      >
                        {booking.phone}
                      </a>
                      {booking.email && (
                        <a
                          href={`mailto:${booking.email}`}
                          className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                        >
                          {booking.email}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Vehicle + service */}
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {vehicle && (
                      <div>
                        <span className="text-[#9CA3AF] text-xs uppercase tracking-wide">Vehicle</span>
                        <p className="text-[#D1D5DB] text-sm font-medium">{vehicle}</p>
                      </div>
                    )}
                    {booking.service && (
                      <div>
                        <span className="text-[#9CA3AF] text-xs uppercase tracking-wide">Service</span>
                        <p className="text-[#D1D5DB] text-sm font-medium">{booking.service}</p>
                      </div>
                    )}
                    {booking.insurance_claim && (
                      <div>
                        <span className="text-[#9CA3AF] text-xs uppercase tracking-wide">Insurance</span>
                        <p className="text-[#D1D5DB] text-sm font-medium capitalize">{booking.insurance_claim}</p>
                      </div>
                    )}
                    {booking.preferred_date && (
                      <div>
                        <span className="text-[#9CA3AF] text-xs uppercase tracking-wide">Preferred Date</span>
                        <p className="text-[#D1D5DB] text-sm font-medium">{formatPreferredDate(booking.preferred_date)}</p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {booking.description && (
                    <p className="text-[#9CA3AF] text-sm leading-relaxed border-l-2 border-[#2E3035] pl-3">
                      {booking.description}
                    </p>
                  )}
                </div>

                {/* Card footer — actions */}
                <div className="px-5 py-3 border-t border-[#2E3035] flex items-center gap-3">
                  <button
                    onClick={() => handleCopy(booking)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isCopied
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-[#232427] border border-[#2E3035] text-[#D1D5DB] hover:border-[#C0392B] hover:text-white"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Details
                      </>
                    )}
                  </button>

                  {isDeleteConfirming ? (
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-[#9CA3AF] text-xs">Delete this booking?</span>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-lg transition-colors"
                      >
                        Yes, delete
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-3 py-1.5 bg-[#232427] border border-[#2E3035] text-[#D1D5DB] text-sm rounded-lg hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(booking.id)}
                      className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-[#232427] border border-[#2E3035] text-[#9CA3AF] hover:border-red-500/50 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
