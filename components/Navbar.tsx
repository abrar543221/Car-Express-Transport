"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Car, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/96 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/[0.06]"
          : "bg-navy-900/80 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-orange-400 transition-colors">
              <Car className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-[1.05rem] font-black font-roboto text-white tracking-tight leading-tight">
              Car Express<span className="text-orange-500"> Transport</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              (888) 123-4567
            </a>
            <Link
              href="/#quote-form"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-md border-t border-white/8 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white/75 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 px-4 py-3 text-white/60 text-sm"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              (888) 123-4567
            </a>
            <Link
              href="/"
              onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="block px-4 py-3 bg-orange-500 hover:bg-orange-400 text-white text-center font-bold rounded-lg transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
