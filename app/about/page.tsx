"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, TrendingUp, Award } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    desc: "We treat every shipment with the exactness it deserves — right time, right place, every time.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Reliability",
    desc: "Our clients trust us because we do what we say. Consistency is our competitive edge.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    desc: "We see ourselves as an extension of your business — not just a vendor, but a genuine partner.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth",
    desc: "We scale with you. As your business grows, our logistics solutions grow with you.",
  },
];

const stats = [
  { label: "Shipments Delivered", value: "10,000+" },
  { label: "Business Clients", value: "500+" },
  { label: "On-Time Rate", value: "98.7%" },
  { label: "States Covered", value: "All 50" },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black font-syne text-slate-900 leading-tight mb-6">
              We move freight.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">We build trust.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Quickship was founded with a single mission: make shipping simple, fast, and transparent for businesses across the
              country. We&apos;re not just carriers — we&apos;re your logistics partners.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="text-4xl sm:text-5xl font-black font-syne text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500 mb-2">
                  {s.value}
                </div>
                <div className="text-slate-600 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-black font-syne text-slate-900 mb-6">
                Built by shippers, for shippers
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Quickship was born from frustration. Our founders had spent years managing complex supply chains for mid-size
                  businesses, constantly dealing with missed deadlines, opaque pricing, and poor communication from carriers.
                </p>
                <p>
                  So they built the solution they always wished existed: a logistics partner that prioritizes transparency,
                  speed, and genuine customer care over everything else.
                </p>
                <p>
                  Today, Quickship serves hundreds of businesses nationwide, from e-commerce brands shipping parcels to
                  manufacturers moving full truckloads of industrial equipment.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Eye className="w-8 h-8" />,
                  label: "Our Vision",
                  text: "To be the most trusted logistics partner for growing businesses across North America.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  label: "Our Mission",
                  text: "Simplify freight. Eliminate delays. Build relationships that last beyond the first shipment.",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  label: "Our Promise",
                  text: "24-hour response. Full transparency. No surprises on your invoice.",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  label: "Our Values",
                  text: "Reliability, precision, and genuine care for every client — regardless of shipment size.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-cyan-600 mb-3">{item.icon}</div>
                  <h4 className="text-slate-900 font-bold font-syne text-sm mb-2">{item.label}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black font-syne text-slate-900">
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-cyan-100 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold font-syne text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-black font-syne text-slate-900 mb-4">
              Ready to work with us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg mb-8">
              Get your free, no-obligation shipping quote today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-xl shadow-xl group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
