"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Headphones,
  Star,
  CheckCircle2,
  Car,
  Zap,
  Truck,
  MapPin,
  ShieldCheck,
  Calendar,
  Users,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { value: "10,000+", label: "Vehicles Shipped", icon: <Truck className="w-5 h-5" /> },
  { value: "50", label: "States Covered", icon: <MapPin className="w-5 h-5" /> },
  { value: "15+", label: "Years Experience", icon: <Calendar className="w-5 h-5" /> },
  { value: "98%", label: "Satisfaction Rate", icon: <Users className="w-5 h-5" /> },
];

const features = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Reliability & Speed",
    desc: "With a network of reliable carriers, we ensure your vehicle gets shipped on time without compromise.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Competitive Pricing",
    desc: "Live quotes and price comparisons ensure utmost transparency. No hidden charges — ever.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Expertise & Experience",
    desc: "After shipping over 10,000 vehicles, we stand at the top with a wide network of verified carriers.",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you every step of the way.",
  },
];

const steps = [
  {
    step: "01",
    title: "Request a Quote",
    desc: "Fill out our quick form with your pickup and delivery details.",
  },
  {
    step: "02",
    title: "Book Your Order",
    desc: "Review your quote, confirm details, and lock in your rate.",
  },
  {
    step: "03",
    title: "Vehicle Pickup",
    desc: "A verified carrier picks up your vehicle at the scheduled time.",
  },
  {
    step: "04",
    title: "Safe Delivery",
    desc: "Your vehicle is delivered safely to its destination. Done!",
  },
];

const services = [
  {
    icon: <Car className="w-5 h-5" />,
    title: "Open Transport",
    desc: "The most affordable and popular way to ship your vehicle across the country on an open carrier.",
    badge: "Most Popular",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enclosed Transport",
    desc: "Premium protection for luxury, classic, or high-value vehicles in fully enclosed trailers.",
    badge: "Premium",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Door-to-Door",
    desc: "We pick up and deliver your vehicle as close to your door as safely possible.",
    badge: "Convenient",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Expedited Shipping",
    desc: "Need it fast? Our expedited service prioritizes your vehicle for the quickest turnaround.",
    badge: "Fast",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    route: "California → Texas",
    rating: 5,
    text: "Car Express Transport made my cross-country move so much easier. My car arrived on time and in perfect condition!",
  },
  {
    name: "James R.",
    route: "New York → Florida",
    rating: 5,
    text: "Best price I found after comparing 5 different companies. The driver was professional and communicated throughout.",
  },
  {
    name: "Lisa K.",
    route: "Illinois → Arizona",
    rating: 5,
    text: "Shipped my classic Mustang enclosed. They treated it like their own. Highly recommend for luxury vehicles!",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Car garage background — same image as Why Choose Us */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Heavy dark overlay — left side darker so text stays legible */}
        <div className="absolute inset-0 bg-[#080C18]/85" />
        {/* Extra left vignette to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C18]/60 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-orange-500/40 rounded-full text-orange-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-7"
              >
                <Car className="w-3.5 h-3.5" />
                Nationwide Auto Transport
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-black font-roboto text-white leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
              >
                Premium{" "}
                <span className="text-orange-500">Auto</span>
                <br />
                <span className="text-orange-500">Shipping</span>
                <br />
                You Can Trust
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md"
              >
                Car Express Transport delivers safe, reliable, and affordable vehicle shipping across all 50 states. Get your free quote in under 2 minutes.
              </motion.p>

              {/* Stats row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-black text-base leading-none">10,000+</div>
                    <div className="text-white/45 text-[11px] mt-0.5">Vehicles Shipped</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-black text-base leading-none">4.8/5</div>
                    <div className="text-white/45 text-[11px] mt-0.5">Customer Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
                {[
                  { icon: <Shield className="w-3 h-3" />, label: "FMCSA Licensed" },
                  { icon: <CheckCircle2 className="w-3 h-3" />, label: "Fully Insured" },
                  { icon: <Star className="w-3 h-3 fill-current" />, label: "BBB Accredited" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-white/60"
                  >
                    <span className="text-orange-500">{b.icon}</span>
                    {b.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Quote Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] -z-10" />
              <div className="relative rounded-2xl bg-[#0C1220] border border-white/[0.13] shadow-2xl shadow-black/80 overflow-hidden">
                {/* Form header */}
                <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-6 h-[3px] bg-orange-500 rounded-full flex-shrink-0" />
                    <h2 className="text-white font-black font-roboto text-[13px] tracking-[0.2em] uppercase">
                      Request a Quote
                    </h2>
                  </div>
                  <p className="text-white/35 text-[12px]">Free, no-obligation estimate</p>
                </div>
                <div className="p-6">
                  <HeroQuoteForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#080D1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="flex flex-col p-6 rounded-xl bg-[#0D1526] border border-white/[0.07]"
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-lg bg-[#1A2540] flex items-center justify-center text-orange-500 mb-4">
                  {s.icon}
                </div>
                {/* Number */}
                <span className="text-3xl sm:text-4xl font-black font-roboto text-orange-500 leading-none mb-2">
                  {s.value}
                </span>
                {/* Label */}
                <span className="text-white/45 text-[11px] font-bold uppercase tracking-[0.15em]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Car garage background — fixed parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#080C18]/80" />
        {/* Top + bottom fades */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#080D1B] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080D1B] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — centred */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-white"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              The{" "}
              <span className="text-orange-500">Gold Standard</span>{" "}
              in Auto Transport
            </motion.h2>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={`p-6 rounded-xl border border-white/[0.07] transition-all duration-300 hover:border-orange-500/25 ${i === 1
                  ? "bg-[#131929]"
                  : "bg-[#0D1120]"
                  }`}
              >
                {/* Icon box */}
                <div className="w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-500 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold font-roboto text-white mb-2.5">
                  {f.title}
                </h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Truck background — fixed parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Heavy dark overlay matching the design */}
        <div className="absolute inset-0 bg-[#080C18]/90" />
        {/* Top + bottom edge fades */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#090B13] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#090B13] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              How It{" "}
              <span className="text-orange-500">Works</span>
            </motion.h2>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Number box + connector row */}
                <div className="flex items-center w-full justify-center mb-6">
                  {/* Number box — warm dark bg matching the design */}
                  <div className="w-[68px] h-[68px] rounded-2xl bg-[#1C1A08]/90 border border-orange-500/25 flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/40">
                    <span className="text-[1.6rem] font-black font-roboto text-orange-500 leading-none">
                      {s.step}
                    </span>
                  </div>

                  {/* Connector line between boxes — desktop only */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(50%+34px)] right-[calc(-50%+34px)] top-[34px] h-px bg-gradient-to-r from-white/20 to-white/5" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold font-roboto text-white mb-2">
                  {s.title}
                </h3>
                {/* Description */}
                <p className="text-white/50 text-[13px] leading-relaxed max-w-[200px]">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OUR SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#090B13] relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Our{" "}
              <span className="text-orange-500">Services</span>
            </motion.h2>
          </motion.div>

          {/* 2×2 grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="relative p-7 rounded-xl bg-[#0D1020] border border-white/[0.07] hover:border-orange-500/20 transition-all duration-300"
              >
                {/* Top row: icon left, badge right */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#1A2030] flex items-center justify-center text-orange-500 flex-shrink-0">
                    {s.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 border border-orange-500/30 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] text-orange-500/80">
                    {s.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold font-roboto text-white mb-2.5">
                  {s.title}
                </h3>
                {/* Description */}
                <p className="text-white/40 text-[13px] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Porsche car background — fixed parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark overlay — lighter to let the car show through */}
        <div className="absolute inset-0 bg-[#080C18]/90" />
        {/* Top & bottom edge fades */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090B13] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090B13] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-orange-500 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              What Our{" "}
              <span className="text-orange-500">Customers</span>{" "}Say
            </motion.h2>
          </motion.div>

          {/* Review cards — fully transparent, floating over the bg */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="flex flex-col"
              >
                {/* Stars + large decorative 99 quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  {/* 99-style quote mark — matches the design */}
                  <span
                    className="font-black font-roboto text-orange-500/35 select-none leading-none"
                    style={{ fontSize: "3.5rem" }}
                  >
                    &#8221;
                  </span>
                </div>

                {/* Quote */}
                <p className="text-white/70 text-[13.5px] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Name + route with left accent bar */}
                <div className="flex items-start gap-3">
                  <div className="w-[3px] h-8 bg-orange-500 rounded-full mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold font-roboto text-sm leading-tight">{t.name}</p>
                    <p className="text-white/40 text-[12px] mt-1">{t.route}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px)`,
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-orange-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              Get Started Today
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne text-white mb-4">
              Ready to{" "}
              <span className="text-orange-500">Ship Your Vehicle?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-10">
              We give you, no obligation quote. Our transport vehicle are standing by.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold text-base rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18881234567"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-orange-500/50 text-white/70 hover:text-white font-semibold text-base rounded-xl transition-all duration-200"
              >
                (888) 123-4567
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
