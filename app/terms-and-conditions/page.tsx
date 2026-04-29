import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read Quickship's Terms and Conditions governing the use of our logistics services and website.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="April 26, 2026">
      <div className="space-y-6 text-white/65 leading-relaxed">
        <p className="text-orange-400 text-sm font-medium bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-3">
          [PLACEHOLDER — CLIENT TO FILL] This is a template Terms and Conditions document. Please review and update all sections with accurate information before publishing.
        </p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing and using the Quickship website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          Quickship provides freight and logistics brokerage services, connecting businesses with qualified carriers for domestic and cross-border shipments. Our services include:
        </p>
        <ul>
          <li>Freight quotes and booking</li>
          <li>Shipment tracking and monitoring</li>
          <li>Carrier coordination and management</li>
          <li>Customer support and account management</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>As a user of Quickship services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information about your shipments</li>
          <li>Ensure all goods are properly packaged and labeled</li>
          <li>Comply with all applicable laws and regulations regarding your shipments</li>
          <li>Not ship prohibited or restricted items without proper authorization</li>
          <li>Pay all fees and charges in a timely manner</li>
        </ul>

        <h2>4. Prohibited Items</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] List all items that cannot be shipped through Quickship, including but not limited to hazardous materials, illegal substances, perishables requiring special handling, etc.
        </p>

        <h2>5. Pricing and Payment</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe your pricing structure, payment terms, accepted payment methods, invoicing procedures, and consequences for late payments.
        </p>

        <h2>6. Liability and Insurance</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Define your liability limits for lost, damaged, or delayed shipments. Describe available cargo insurance options and claims procedures.
        </p>

        <h2>7. Cancellations and Modifications</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Explain your policies for cancelling or modifying booked shipments, including any applicable fees or notice requirements.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content on the Quickship website, including text, graphics, logos, and software, is the property of Quickship and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          Our services are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not guarantee that services will be uninterrupted, error-free, or meet your specific requirements.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Specify the maximum liability Quickship will accept for any claims arising from use of the services, including direct, indirect, and consequential damages.
        </p>

        <h2>11. Dispute Resolution</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe how disputes will be resolved — e.g., negotiation, mediation, arbitration, or litigation — and specify the governing jurisdiction.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Specify which state&apos;s or country&apos;s laws govern these terms.
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Continued use of our services following notification of changes constitutes acceptance of the updated terms.
        </p>

        <h2>14. Contact</h2>
        <p>
          For questions about these Terms and Conditions, contact us at:{" "}
          <a href="mailto:abrarshabbir58@gmail.com">abrarshabbir58@gmail.com</a>
        </p>
      </div>
    </PolicyLayout>
  );
}
