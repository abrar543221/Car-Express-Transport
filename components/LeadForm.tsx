"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^[+\d\s\-().]+$/, "Please enter a valid phone number"),
  companyName: z.string().optional(),
  message: z.string().min(10, "Please tell us more — at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface InputFieldProps {
  label: string;
  error?: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}

function InputField({ label, error, icon, required, children }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-cyan-600 ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          {icon}
        </div>
        {children}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-sm shadow-sm";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold font-syne text-slate-900 mb-3">
          You&apos;re all set!
        </h3>
        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-sm">
          Thanks! We&apos;ll be in touch within{" "}
          <span className="text-cyan-600 font-semibold">24 hours</span> with
          your personalized shipping quote.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm rounded-lg transition-all bg-white"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Full Name"
          error={errors.fullName?.message}
          icon={<User className="w-4 h-4" />}
          required
        >
          <input
            {...register("fullName")}
            type="text"
            placeholder="John Smith"
            className={inputClass}
            disabled={status === "loading"}
          />
        </InputField>

        <InputField
          label="Email Address"
          error={errors.email?.message}
          icon={<Mail className="w-4 h-4" />}
          required
        >
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={inputClass}
            disabled={status === "loading"}
          />
        </InputField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Phone Number"
          error={errors.phone?.message}
          icon={<Phone className="w-4 h-4" />}
          required
        >
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
            disabled={status === "loading"}
          />
        </InputField>

        <InputField
          label="Company Name"
          error={errors.companyName?.message}
          icon={<Building2 className="w-4 h-4" />}
        >
          <input
            {...register("companyName")}
            type="text"
            placeholder="Acme Corp (optional)"
            className={inputClass}
            disabled={status === "loading"}
          />
        </InputField>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-slate-700">
          What are you shipping?
          <span className="text-cyan-600 ml-1">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-3.5 text-slate-400 pointer-events-none">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your shipment — type of goods, quantity, origin, destination, frequency..."
            disabled={status === "loading"}
            className={`${inputClass} pl-10 resize-none leading-relaxed`}
          />
        </div>
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-xs text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{errorMsg}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 btn-primary disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-base rounded-xl shadow-xl flex items-center justify-center gap-2.5 group"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Your Request...
          </>
        ) : (
          <>
            Get a Free Quote
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-500">
        No spam. We&apos;ll only contact you about your quote.
      </p>
    </form>
  );
}
