import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read Quickship's Terms of Use governing acceptable use of our website and online services.",
};

export default function TermsOfUsePage() {
  return (
    <PolicyLayout title="Terms of Use" lastUpdated="April 26, 2026">
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-cyan-800 text-sm font-medium bg-cyan-50 border border-cyan-200/80 rounded-lg px-4 py-3">
          [PLACEHOLDER — CLIENT TO FILL] This is a template Terms of Use document. Please review and update all sections with accurate information before publishing.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing the Quickship website at quickship.com, you confirm that you are at least 18 years of age, have read and understood these Terms of Use, and agree to be legally bound by them.
        </p>

        <h2>2. Permitted Use</h2>
        <p>
          You may use our website for lawful purposes only. Specifically, you are permitted to:
        </p>
        <ul>
          <li>Browse information about our services</li>
          <li>Submit quote requests through our contact forms</li>
          <li>Access any materials we make available for download</li>
          <li>Contact us through provided channels</li>
        </ul>

        <h2>3. Prohibited Activities</h2>
        <p>You may not use our website to:</p>
        <ul>
          <li>Violate any local, state, national, or international laws or regulations</li>
          <li>Transmit any unsolicited or unauthorized advertising or promotional materials</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
          <li>Attempt to gain unauthorized access to any portion or feature of the website</li>
          <li>Use any robot, spider, or other automatic device to monitor or copy web pages</li>
          <li>Introduce viruses, Trojan horses, worms, or other malicious code</li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>
        <p>
          The Quickship website and all of its content, features, and functionality — including but not limited to text, graphics, logos, button icons, images, audio clips, and software — are owned by Quickship or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial purposes only.
        </p>

        <h2>5. User-Generated Content</h2>
        <p>
          [PLACEHOLDER — CLIENT TO FILL] If your website allows users to submit content (reviews, comments, etc.), describe the rules and rights associated with user-generated content here.
        </p>

        <h2>6. Third-Party Links and Content</h2>
        <p>
          Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. Quickship does not warrant that the website will be uninterrupted, timely, secure, or error-free.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Quickship shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, our website or services.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Quickship and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your violation of these Terms of Use.
        </p>

        <h2>10. Changes to Terms of Use</h2>
        <p>
          We may revise these Terms of Use at any time by updating this page. By continuing to use the website after changes are made, you accept the revised terms.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          Questions about these Terms of Use may be directed to:{" "}
          <a href="mailto:abrarshabbir58@gmail.com">abrarshabbir58@gmail.com</a>
        </p>
      </div>
    </PolicyLayout>
  );
}
