"use client";

import { useState, useRef, FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";

/* ── GTA city list ────────────────────────────────────────────────── */
const gtaCities = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Markham",
  "Vaughan",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Ajax",
  "Pickering",
  "Whitby",
  "Oshawa",
  "Newmarket",
  "Aurora",
  "Other",
];

/* ── Shared field style ───────────────────────────────────────────── */
const fieldCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 " +
  "placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316] " +
  "focus:border-transparent transition text-sm disabled:opacity-50 disabled:cursor-not-allowed";

/* ── Label ────────────────────────────────────────────────────────── */
function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-[#F97316] ml-0.5">*</span>}
    </label>
  );
}

/* ── Types ────────────────────────────────────────────────────────── */
type Status = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  roofType: string;
  jobType: string;
  urgency: string;
  message: string;
}

const emptyFields: FormFields = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  roofType: "",
  jobType: "",
  urgency: "",
  message: "",
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function QuoteForm({
  defaultCity = "",
  defaultJobType = "",
}: {
  defaultCity?: string;
  defaultJobType?: string;
}) {
  const [fields, setFields] = useState<FormFields>({
    ...emptyFields,
    city: defaultCity,
    jobType: defaultJobType,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // When the form first rendered — the API rejects submissions faster than a person could type
  const startedAt = useRef(Date.now());

  const isLoading = status === "loading";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const website = new FormData(e.currentTarget).get("website");
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          website,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      track("Quote Submitted", { city: fields.city, jobType: fields.jobType, urgency: fields.urgency });
      setStatus("success");
      setFields(emptyFields);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  /* ── Success state ──────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 p-10 text-center">
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.8} />
          </div>
        </div>
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Quote Request Sent!</h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          Thanks! We&apos;ve received your request and a local roofing expert will be
          in touch within a few hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-[#F97316] hover:underline font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  /* ── Form ───────────────────────────────────────────────────────── */
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>

        {/* Full Name */}
        <div>
          <Label htmlFor="name" required>Full Name</Label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            required
            value={fields.name}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldCls}
          />
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" required>Phone Number</Label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(416) 555-0100"
              required
              value={fields.phone}
              onChange={handleChange}
              disabled={isLoading}
              className={fieldCls}
            />
          </div>
          <div>
            <Label htmlFor="email" required>Email Address</Label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
              value={fields.email}
              onChange={handleChange}
              disabled={isLoading}
              className={fieldCls}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address" required>Property Address</Label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="123 Main St, Toronto, ON"
            required
            value={fields.address}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldCls}
          />
        </div>

        {/* City */}
        <div>
          <Label htmlFor="city" required>Your City</Label>
          <select
            id="city"
            name="city"
            required
            value={fields.city}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldCls}
          >
            <option value="" disabled>Select your city</option>
            {gtaCities.map((city) => (
              <option key={city} value={city.toLowerCase().replace(/\s+/g, "-")}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Roof Type */}
        <div>
          <Label htmlFor="roofType" required>Roof Type</Label>
          <select
            id="roofType"
            name="roofType"
            required
            value={fields.roofType}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldCls}
          >
            <option value="" disabled>Select roof type</option>
            <option value="shingle">Shingle Roof</option>
            <option value="metal">Metal Roof</option>
            <option value="flat">Flat Roof</option>
            <option value="unknown">Not Sure</option>
          </select>
        </div>

        {/* Job Type + Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="jobType" required>Job Type</Label>
            <select
              id="jobType"
              name="jobType"
              required
              value={fields.jobType}
              onChange={handleChange}
              disabled={isLoading}
              className={fieldCls}
            >
              <option value="" disabled>Select job type</option>
              <option value="repair">Roof Repair</option>
              <option value="replacement">Roof Replacement</option>
              <option value="inspection">Roof Inspection</option>
              <option value="emergency">Emergency</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="urgency" required>Urgency</Label>
            <select
              id="urgency"
              name="urgency"
              required
              value={fields.urgency}
              onChange={handleChange}
              disabled={isLoading}
              className={fieldCls}
            >
              <option value="" disabled>Select urgency</option>
              <option value="emergency">Emergency — ASAP</option>
              <option value="week">Within a Week</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">
            Message{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your roofing issue, roof age, or any other helpful details..."
            value={fields.message}
            onChange={handleChange}
            disabled={isLoading}
            className={`${fieldCls} resize-none`}
          />
        </div>

        <div className="border-t border-gray-100 pt-2" />

        {/* Error banner */}
        {status === "error" && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-bold py-4 rounded-xl text-base shadow-md shadow-[#F97316]/25 transition-all duration-150"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending your request…
            </>
          ) : (
            "Get My Free Quote"
          )}
        </button>

        <p className="text-center text-xs text-gray-400 leading-relaxed">
          No spam. No obligation.{" "}
          <span className="font-medium text-gray-500">We typically respond within a few hours.</span>
        </p>
        {/* Honeypot — hidden from people, bots tend to fill it in */}
        <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor="quote-website">Website</label>
          <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
      </form>
    </div>
  );
}
