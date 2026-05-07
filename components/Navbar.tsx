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
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/60 border-b border-slate-200/90"
          : "bg-white/88 backdrop-blur-sm border-b border-slate-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-sky-500 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/25 group-hover:from-teal-600 group-hover:to-sky-600 transition-all">
              <Car className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-[1.05rem] font-black font-roboto text-slate-900 tracking-tight leading-tight">
              Car Express<span className="text-cyan-600"> Transport</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-teal-500 after:to-sky-500 after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              (888) 123-4567
            </a>
            <Link
              href="/#quote-form"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 btn-primary text-sm rounded-lg shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 px-4 py-3 text-slate-500 text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              (888) 123-4567
            </a>
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block px-4 py-3 btn-primary text-center rounded-lg text-sm shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
