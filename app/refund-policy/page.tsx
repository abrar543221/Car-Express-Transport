import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read Quickship's Refund Policy to understand our process for cancellations, refunds, and service credits.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" lastUpdated="April 26, 2026">
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-cyan-800 text-sm font-medium bg-cyan-50 border border-cyan-200/80 rounded-lg px-4 py-3">
          [PLACEHOLDER — CLIENT TO FILL] This is a template Refund Policy. Please review and update all sections with accurate information relevant to your business before publishing.
        </p>

        <h2>1. Overview</h2>
        <p>
          At Quickship, we stand behind the quality of our logistics services. This Refund Policy outlines the circumstances under which refunds or service credits may be issued, and the process for submitting a refund request.
        </p>

        <h2>2. Cancellation Policy</h2>
        <h3>2.1 Cancellations Before Pickup</h3>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe the timeframe and conditions under which a shipment can be cancelled before pickup, and what fees (if any) apply.
        </p>

        <h3>2.2 Cancellations After Pickup</h3>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe whether cancellations are permitted after a shipment has been picked up, and what fees or charges apply in that case.
        </p>

        <h2>3. Refund Eligibility</h2>
        <p>You may be eligible for a full or partial refund in the following circumstances:</p>
        <ul>
          <li>
            <strong>Service failure:</strong> [PLACEHOLDER] Define what constitutes a service failure (e.g., significant delay beyond promised delivery window).
          </li>
          <li>
            <strong>Lost shipment:</strong> [PLACEHOLDER] Define your policy for shipments that are confirmed lost in transit.
          </li>
          <li>
            <strong>Damaged goods:</strong> [PLACEHOLDER] Define your policy for shipments that arrive damaged due to carrier fault.
          </li>
          <li>
            <strong>Duplicate charges:</strong> If you were charged more than once for the same service, we will issue a full refund for the duplicate charge.
          </li>
        </ul>

        <h2>4. Non-Refundable Situations</h2>
        <p>Refunds will not be issued in the following situations:</p>
        <ul>
          <li>Delays caused by weather, natural disasters, or force majeure events</li>
          <li>Delays caused by incorrect address information provided by the customer</li>
          <li>Damage resulting from improper packaging by the customer</li>
          <li>Shipments of prohibited or restricted items</li>
          <li>
            [PLACEHOLDER — CLIENT TO FILL] Add any other non-refundable situations relevant to your services.
          </li>
        </ul>

        <h2>5. How to Request a Refund</h2>
        <p>To submit a refund request:</p>
        <ul>
          <li>Contact us at <a href="mailto:abrarshabbir58@gmail.com">abrarshabbir58@gmail.com</a> within <strong>[PLACEHOLDER — specify number of days]</strong> days of the issue occurring</li>
          <li>Include your shipment reference number, a description of the issue, and any supporting documentation (photos, tracking history, etc.)</li>
          <li>Our team will review your request and respond within <strong>[PLACEHOLDER — specify number of business days]</strong> business days</li>
        </ul>

        <h2>6. Refund Processing</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] Describe how approved refunds are processed — e.g., returned to original payment method, issued as account credit — and the typical processing timeframe.
        </p>

        <h2>7. Service Credits</h2>
        <p>
          In some cases, in lieu of a monetary refund, we may offer a service credit applicable to future shipments. [PLACEHOLDER — CLIENT TO FILL] Describe the conditions under which credits are offered and any expiration terms.
        </p>

        <h2>8. Disputes</h2>
        <p>
          If you disagree with a refund determination, you may escalate your concern by contacting us directly. We are committed to resolving disputes fairly and in good faith.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          Quickship reserves the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated effective date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For refund inquiries, reach us at:{" "}
          <a href="mailto:abrarshabbir58@gmail.com">abrarshabbir58@gmail.com</a>
        </p>
      </div>
    </PolicyLayout>
  );
}
