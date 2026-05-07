"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { fadeUp, stagger } from "@/lib/motion";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    value: "abrarshabbir58@gmail.com",
    href: "mailto:abrarshabbir58@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Coverage",
    value: "Nationwide — All 50 States",
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Response Time",
    value: "Within 24 hours, guaranteed",
    href: null,
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Support",
    value: "Dedicated account managers",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Contact Us
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black font-syne text-slate-900 mb-4">
            Let&apos;s get your freight moving
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-600 text-lg max-w-xl mx-auto">
            Fill out the form below and a Quickship specialist will be in touch within 24 hours with a tailored quote.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-slate-900 font-medium text-sm">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-slate-900 font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="p-5 rounded-xl bg-cyan-50 border border-cyan-100">
              <p className="text-cyan-800 text-sm font-medium mb-1">Quick tip</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Include as much detail as possible about your shipment — size, weight, origin, destination, and timeline.
                This helps us give you the most accurate quote.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-bold font-syne text-slate-900 mb-1">Get a Free Quote</h2>
              <p className="text-slate-500 text-sm mb-8">We&apos;ll respond within 24 hours.</p>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
