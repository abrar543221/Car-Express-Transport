import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Quickship's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="April 26, 2026">
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-cyan-800 text-sm font-medium bg-cyan-50 border border-cyan-200/80 rounded-lg px-4 py-3">
          [PLACEHOLDER — CLIENT TO FILL] This is a template privacy policy. Please review and update all sections with accurate information before publishing.
        </p>

        <h2>1. Introduction</h2>
        <p>
          Quickship (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our logistics services.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue use of the website and our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information You Provide</h3>
        <p>We may collect personal information you voluntarily provide, including:</p>
        <ul>
          <li>Full name and contact details (email, phone number)</li>
          <li>Company name and business address</li>
          <li>Shipment details and preferences</li>
          <li>Payment and billing information</li>
          <li>Communications you send us</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website and search terms</li>
          <li>Device information and operating system</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and fulfill your shipping requests</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Send service updates and administrative communications</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and ensure security</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe under what circumstances personal data may be shared with third parties (e.g., carrier partners, payment processors, legal authorities).
        </p>

        <h2>5. Data Retention</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Specify how long you retain personal data and what happens to it after the retention period expires.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe your cookie policy, including types of cookies used, their purpose, and how users can manage cookie preferences.
        </p>

        <h2>8. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
        </p>

        <h2>10. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:abrarshabbir58@gmail.com">abrarshabbir58@gmail.com</a>
        </p>
      </div>
    </PolicyLayout>
  );
}
