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
      <section className="relative min-h-screen flex items-center overflow-hidden" id="quote-form">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-slate-50/70" />

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
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-200 rounded-full text-cyan-700 text-[11px] font-bold uppercase tracking-[0.18em] mb-7 bg-cyan-50/80"
              >
                <Car className="w-3.5 h-3.5" />
                Nationwide Auto Transport
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-black font-roboto text-slate-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
              >
                Premium{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Auto</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Shipping</span>
                <br />
                You Can Trust
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-slate-600 text-base leading-relaxed mb-8 max-w-md"
              >
                Car Express Transport delivers safe, reliable, and affordable vehicle shipping across all 50 states. Get your free quote in under 2 minutes.
              </motion.p>

              {/* Stats row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-base leading-none">10,000+</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Vehicles Shipped</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-cyan-500 text-cyan-500" />
                    ))}
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-base leading-none">4.8/5</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Customer Rating</div>
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-slate-600 bg-white/70"
                  >
                    <span className="text-cyan-600">{b.icon}</span>
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
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-cyan-200/40 to-sky-200/25 -z-10" />
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/50 overflow-hidden">
                <div className="px-6 pt-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-6 h-[3px] bg-gradient-to-r from-teal-500 to-sky-500 rounded-full flex-shrink-0" />
                    <h2 className="text-slate-900 font-black font-roboto text-[13px] tracking-[0.2em] uppercase">
                      Request a Quote
                    </h2>
                  </div>
                  <p className="text-slate-500 text-[12px]">Free, no-obligation estimate</p>
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
      <section className="py-10 bg-slate-50 border-y border-slate-100">
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
                className="flex flex-col p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-cyan-600 mb-4">
                  {s.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-black font-roboto text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500 leading-none mb-2">
                  {s.value}
                </span>
                <span className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.15em]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-cyan-600 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-slate-900"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Gold Standard</span>{" "}
              in Auto Transport
            </motion.h2>
          </motion.div>

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
                className={`p-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-md ${
                  i === 1 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold font-roboto text-slate-900 mb-2.5">{f.title}</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" id="how-it-works">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-slate-50/85" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-cyan-600 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-slate-900"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Works</span>
            </motion.h2>
          </motion.div>

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
                <div className="flex items-center w-full justify-center mb-6">
                  <div className="w-[68px] h-[68px] rounded-2xl bg-white border border-cyan-200 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/10">
                    <span className="text-[1.6rem] font-black font-roboto text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-sky-500 leading-none">
                      {s.step}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(50%+34px)] right-[calc(-50%+34px)] top-[34px] h-px bg-gradient-to-r from-slate-200 to-slate-100" />
                  )}
                </div>

                <h3 className="text-[15px] font-bold font-roboto text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed max-w-[200px]">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OUR SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 bg-white relative border-y border-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-cyan-600 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-slate-900"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Services</span>
            </motion.h2>
          </motion.div>

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
                className="relative p-7 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-cyan-600 flex-shrink-0 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 border border-cyan-200 bg-cyan-50 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-700">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold font-roboto text-slate-900 mb-2.5">{s.title}</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-cyan-600 font-bold text-[11px] uppercase tracking-[0.25em] mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black font-roboto text-slate-900 drop-shadow-sm"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Customers</span>{" "}
              Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="flex flex-col p-6 rounded-2xl bg-white/95 border border-white/70 shadow-lg shadow-slate-900/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                    ))}
                  </div>
                  <span
                    className="font-black font-roboto text-cyan-200 select-none leading-none"
                    style={{ fontSize: "3.5rem" }}
                  >
                    &#8221;
                  </span>
                </div>

                <p className="text-slate-700 text-[13.5px] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-start gap-3">
                  <div className="w-[3px] h-8 bg-gradient-to-b from-teal-500 to-sky-500 rounded-full mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 font-bold font-roboto text-sm leading-tight">{t.name}</p>
                    <p className="text-slate-500 text-[12px] mt-1">{t.route}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(148,163,184,0.12) 20px, rgba(148,163,184,0.12) 21px)`,
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-400/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-cyan-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              Get Started Today
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne text-slate-900 mb-4">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Ship Your Vehicle?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg mb-10">
              We give you, no obligation quote. Our transport vehicle are standing by.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-10 py-4 btn-primary text-base rounded-xl shadow-xl group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18881234567"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 hover:border-cyan-400 text-slate-700 hover:text-slate-900 font-semibold text-base rounded-xl transition-all duration-200 bg-white shadow-sm"
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
