import Link from "next/link";
import { Car, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Open Transport", href: "/" },
  { label: "Enclosed Transport", href: "/" },
  { label: "Door-to-Door", href: "/" },
  { label: "Expedited Shipping", href: "/" },
  { label: "Motorcycle Transport", href: "/" },
  { label: "Classic Car Shipping", href: "/" },
];

const supportLinks = [
  { label: "FAQ", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060810] relative">
      {/* Top gold gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Car className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-[1rem] font-black font-roboto text-white leading-tight">
                Car Express<span className="text-orange-500"> Transport</span>
              </span>
            </Link>

            <p className="text-white/40 text-[13px] leading-relaxed mb-6">
              Premium auto transport services across all 50 states. Your vehicle, delivered safely and on time — every time.
            </p>

            {/* Contact info */}
            <ul className="space-y-3 mb-7">
              <li>
                <a
                  href="tel:+18881234567"
                  className="flex items-center gap-2.5 text-white/50 hover:text-orange-500 text-[13px] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  (888) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@carexpresstransport.com"
                  className="flex items-center gap-2.5 text-white/50 hover:text-orange-500 text-[13px] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  info@carexpresstransport.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-[13px]">
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                </div>
                Available Nationwide
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-[11px] font-black font-roboto text-orange-500 uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/45 hover:text-white text-[13px] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Our Services ── */}
          <div>
            <h4 className="text-[11px] font-black font-roboto text-orange-500 uppercase tracking-[0.2em] mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/45 hover:text-white text-[13px] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Support ── */}
          <div>
            <h4 className="text-[11px] font-black font-roboto text-orange-500 uppercase tracking-[0.2em] mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/45 hover:text-white text-[13px] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-roboto">
            © {currentYear}{" "}
            <span className="text-white/45">Car Express Transport</span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-and-conditions" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-orange-500 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
