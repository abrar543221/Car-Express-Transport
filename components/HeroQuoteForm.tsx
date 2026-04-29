"use client";

import { useState, useRef } from "react";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

type Condition  = "Running" | "Non-running";
type Transport  = "Open" | "Enclosed";

const LIBRARIES: ("places")[] = ["places"];

const AUTO_OPTIONS: google.maps.places.AutocompleteOptions = {
  componentRestrictions: { country: "us" },
  types: ["(cities)"],
};

export default function HeroQuoteForm() {
  const [step, setStep]               = useState<1 | 2>(1);
  const [condition, setCondition]     = useState<Condition>("Running");
  const [transport, setTransport]     = useState<Transport>("Open");
  const [origin, setOrigin]           = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus]           = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg]       = useState("");

  // Autocomplete instance refs
  const acOriginRef = useRef<google.maps.places.Autocomplete | null>(null);
  const acDestRef   = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY ?? "",
    libraries: LIBRARIES,
  });

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) return;
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const data = {
      fullName:      fd.get("fullName")  as string,
      email:         fd.get("email")     as string,
      phone:         fd.get("phone")     as string,
      origin,
      destination,
      condition,
      transportType: transport,
    };

    try {
      const res    = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#141E30] border border-white/[0.09] rounded-lg text-white text-sm " +
    "placeholder-white/25 focus:outline-none focus:border-orange-500/50 focus:ring-1 " +
    "focus:ring-orange-500/15 transition-all";

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-green-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Quote Request Submitted!</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">
          Our team will contact you within{" "}
          <span className="text-orange-500 font-semibold">24 hours</span> with your free quote.
        </p>
        <button
          onClick={() => { setStatus("idle"); setStep(1); setOrigin(""); setDestination(""); }}
          className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  /* ── Loading skeleton (Google Maps not ready) ── */
  if (!isLoaded) {
    return (
      <div className="space-y-3.5 animate-pulse">
        <div className="grid grid-cols-2 gap-3">
          <div className="h-11 bg-white/5 rounded-lg" />
          <div className="h-11 bg-white/5 rounded-lg" />
        </div>
        <div className="h-11 bg-white/5 rounded-lg" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-11 bg-white/5 rounded-lg" />
          <div className="h-11 bg-white/5 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-11 bg-white/5 rounded-lg" />
          <div className="h-11 bg-white/5 rounded-lg" />
        </div>
        <div className="h-12 bg-orange-500/20 rounded-lg" />
      </div>
    );
  }

  return (
    <div>
      {/* ── STEP 1 — Shipping details ── */}
      {step === 1 && (
        <form onSubmit={handleStep1} className="space-y-3.5">

          {/* FROM / TO — Google Autocomplete */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500/60 pointer-events-none" />
                <Autocomplete
                  onLoad={(ac) => { acOriginRef.current = ac; }}
                  onPlaceChanged={() => {
                    const place = acOriginRef.current?.getPlace();
                    setOrigin(place?.formatted_address ?? "");
                  }}
                  options={AUTO_OPTIONS}
                >
                  <input
                    type="text"
                    placeholder="Origin city or ZIP"
                    required
                    defaultValue={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className={`${inputClass} pl-9`}
                  />
                </Autocomplete>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500/60 pointer-events-none" />
                <Autocomplete
                  onLoad={(ac) => { acDestRef.current = ac; }}
                  onPlaceChanged={() => {
                    const place = acDestRef.current?.getPlace();
                    setDestination(place?.formatted_address ?? "");
                  }}
                  options={AUTO_OPTIONS}
                >
                  <input
                    type="text"
                    placeholder="Destination city or ZIP"
                    required
                    defaultValue={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={`${inputClass} pl-9`}
                  />
                </Autocomplete>
              </div>
            </div>
          </div>

          {/* Vehicle Condition */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">
              Vehicle Condition
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["Running", "Non-running"] as Condition[]).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCondition(opt)}
                  className={`py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                    condition === opt
                      ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                      : "bg-[#141E30] text-white/40 border border-white/[0.08] hover:text-white/65"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Transport Type */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">
              Transport Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["Open", "Enclosed"] as Transport[]).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setTransport(opt)}
                  className={`py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                    transport === opt
                      ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                      : "bg-[#141E30] text-white/40 border border-white/[0.08] hover:text-white/65"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-black text-[15px] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 group"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-[11px] text-white/25 leading-relaxed">
            By submitting, you consent to receive SMS and emails. Reply STOP to opt-out.
          </p>
        </form>
      )}

      {/* ── STEP 2 — Contact info ── */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-3.5">

          {/* Route summary pill */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <div className="flex-1 text-xs text-white/65 truncate">
              <span className="text-orange-400 font-semibold">{origin}</span>
              <span className="text-white/35 mx-2">→</span>
              <span className="text-orange-400 font-semibold">{destination}</span>
              <span className="text-white/30 mx-2">·</span>
              <span className="text-white/50">{condition} · {transport}</span>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-white/35 hover:text-white/65 transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-white/45 text-xs text-center pb-1">
            Enter your contact info to receive your free quote.
          </p>

          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            required
            minLength={2}
            className={inputClass}
            disabled={status === "loading"}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className={inputClass}
            disabled={status === "loading"}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className={inputClass}
            disabled={status === "loading"}
          />

          {status === "error" && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <p className="text-xs text-red-300">{errorMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-orange-500 hover:bg-orange-400 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-[15px] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 group"
          >
            {status === "loading" ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
            ) : (
              <>Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>

          <p className="text-center text-[11px] text-white/25">
            No spam. We&apos;ll only contact you about your quote.
          </p>
        </form>
      )}
    </div>
  );
}
