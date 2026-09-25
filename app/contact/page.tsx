import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us — Blue Rose Auto Body Springfield, OR",
  description:
    "Contact Blue Rose Auto Body & Collision in Springfield, OR. Call (541) 641-8877, get directions, or use our online form. Serving Eugene and all of Lane County.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Contact", href: "/contact/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Contact Blue Rose Auto Body &amp; Collision
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-2xl">
            Call us, visit our Springfield shop, or send us a message. We&apos;re here Monday–Friday 8 AM–5 PM and
            Saturday 10 AM–5 PM.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div className="space-y-6">
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-5">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B] hover:text-[#E74C3C] font-bold text-lg transition-colors">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Address</p>
                      <address className="not-italic text-[#9CA3AF] text-sm">
                        {BUSINESS.address.street}<br />
                        {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                      </address>
                      <a
                        href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C0392B] text-sm font-semibold hover:text-[#E74C3C] transition-colors mt-1 inline-block"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Hours</p>
                      <ul className="text-[#9CA3AF] text-sm space-y-0.5">
                        <li>Monday – Friday: 8:00 AM – 5:00 PM</li>
                        <li>Saturday: 10:00 AM – 5:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[#2E3035] bg-[#1A1B1E]" style={{ height: "300px" }}>
                <iframe
                  title="Blue Rose Auto Body & Collision location map"
                  src="https://maps.google.com/maps?q=3436+Olympic+St+Ste+200+Springfield+OR+97478&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-[#9CA3AF] text-sm mb-6">We&apos;ll respond as soon as possible during business hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Name *</label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Phone *</label>
          <input id="contact-phone" name="phone" type="tel" required autoComplete="tel" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="(541) 555-0000" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="contact-vehicle" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Vehicle (Year / Make / Model)</label>
        <input id="contact-vehicle" name="vehicle" type="text" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="e.g. 2019 Toyota Camry" />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Message *</label>
        <textarea id="contact-message" name="message" required rows={4} className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm resize-none" placeholder="Describe your vehicle damage or question…" />
      </div>
      <button type="submit" className="w-full py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-2 focus:ring-offset-[#1A1B1E]">
        Send Message
      </button>
      <p className="text-[#9CA3AF] text-xs text-center">
        Or call us directly at{" "}
        <a href="tel:+15416418877" className="text-[#C0392B] hover:text-[#E74C3C] font-semibold">(541) 641-8877</a>
      </p>
    </form>
  );
}
