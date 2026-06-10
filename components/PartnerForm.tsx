"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const fieldCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 " +
  "placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316] " +
  "focus:border-transparent transition text-sm disabled:opacity-50 disabled:cursor-not-allowed";

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

interface Fields {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceAreas: string;
  yearsInBusiness: string;
  licensed: string;
  message: string;
}

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  serviceAreas: "",
  yearsInBusiness: "",
  licensed: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function PartnerForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isLoading = status === "loading";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setFields(empty);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 p-10 text-center">
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.8} />
          </div>
        </div>
        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Application Received!</h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          Thanks for your interest in joining the LocalRoofer.ca network. We&apos;ll review your
          application and be in touch within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-[#F97316] hover:underline font-medium"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>

        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" required>Your Name</Label>
            <input id="name" name="name" type="text" placeholder="John Smith"
              required value={fields.name} onChange={handleChange} disabled={isLoading}
              className={fieldCls} />
          </div>
          <div>
            <Label htmlFor="company" required>Company Name</Label>
            <input id="company" name="company" type="text" placeholder="Smith Roofing Ltd."
              required value={fields.company} onChange={handleChange} disabled={isLoading}
              className={fieldCls} />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" required>Phone Number</Label>
            <input id="phone" name="phone" type="tel" placeholder="(416) 555-0100"
              required value={fields.phone} onChange={handleChange} disabled={isLoading}
              className={fieldCls} />
          </div>
          <div>
            <Label htmlFor="email" required>Email Address</Label>
            <input id="email" name="email" type="email" placeholder="john@smithroofing.ca"
              required value={fields.email} onChange={handleChange} disabled={isLoading}
              className={fieldCls} />
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <Label htmlFor="serviceAreas" required>Cities / Service Areas Covered</Label>
          <input id="serviceAreas" name="serviceAreas" type="text"
            placeholder="e.g. Toronto, North York, Scarborough, Markham"
            required value={fields.serviceAreas} onChange={handleChange} disabled={isLoading}
            className={fieldCls} />
        </div>

        {/* Years in Business + Licensed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="yearsInBusiness" required>Years in Business</Label>
            <select id="yearsInBusiness" name="yearsInBusiness" required
              value={fields.yearsInBusiness} onChange={handleChange} disabled={isLoading}
              className={fieldCls}>
              <option value="" disabled>Select range</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1–3 years">1–3 years</option>
              <option value="3–5 years">3–5 years</option>
              <option value="5–10 years">5–10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
          <div>
            <Label htmlFor="licensed" required>Licensed &amp; Insured in Ontario?</Label>
            <select id="licensed" name="licensed" required
              value={fields.licensed} onChange={handleChange} disabled={isLoading}
              className={fieldCls}>
              <option value="" disabled>Select one</option>
              <option value="yes">Yes — fully licensed &amp; insured</option>
              <option value="no">Not yet</option>
              <option value="unsure">Not sure</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">
            Anything else?{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <textarea id="message" name="message" rows={4}
            placeholder="Tell us about your crew size, specialties, equipment, or anything that sets you apart..."
            value={fields.message} onChange={handleChange} disabled={isLoading}
            className={`${fieldCls} resize-none`} />
        </div>

        <div className="border-t border-gray-100 pt-2" />

        {status === "error" && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2} />
            <span>{errorMsg}</span>
          </div>
        )}

        <button type="submit" disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base shadow-md shadow-[#F97316]/25 transition-all duration-150">
          {isLoading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
          ) : (
            "Apply to Join the Network"
          )}
        </button>

        <p className="text-center text-xs text-gray-400 leading-relaxed">
          We review all applications within{" "}
          <span className="font-medium text-gray-500">1–2 business days</span>.
        </p>
      </form>
    </div>
  );
}
