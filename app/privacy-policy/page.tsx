import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy — Blue Rose Auto Body & Collision",
  description: "Privacy policy for Blue Rose Auto Body & Collision in Springfield, OR.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} />
          <h1 className="text-3xl font-black text-white mb-2 mt-2">Privacy Policy</h1>
          <p className="text-[#9CA3AF]">Last updated: September 2025</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-xl max-w-3xl prose-dark">
          <p>
            {BUSINESS.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our
            website or contact us for services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our contact and estimate request forms, including
            your name, phone number, email address, vehicle information, and description of service needed. We use this
            information solely to respond to your inquiry and provide the requested service estimate.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            Information you provide is used to: contact you about your estimate or service request, communicate with
            your insurance company on your behalf (with your permission), and improve our services. We do not sell,
            rent, or share your personal information with third parties for marketing purposes.
          </p>
          <h2>Cookies and Analytics</h2>
          <p>
            Our website may use analytics tools (such as Google Analytics) to understand how visitors use our site.
            These tools collect anonymous usage data. You can disable cookies in your browser settings.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (Google Maps, social media platforms). We are not
            responsible for the privacy practices of those sites.
          </p>
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information. However, no method of transmission over
            the internet is 100% secure.
          </p>
          <h2>Contact Us</h2>
          <p>
            For privacy-related questions, contact us at:
            <br />
            {BUSINESS.name}
            <br />
            {BUSINESS.address.full}
            <br />
            Phone: <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B]">{BUSINESS.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
