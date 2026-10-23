import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONDITIONS, CLINICAL_PHILOSOPHY, CLINIC_INFO } from "@/data/physioData";
import ConditionFilterGrid from "@/components/ConditionFilterGrid";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Conditions & Treatments Directory | Keshav Advanced Physiotherapy Center",
  description: "Browse 24+ musculoskeletal, neurological, sports, and post-operative conditions treated at Keshav Advanced Physiotherapy Center in Ahmedabad."
};

export default function ConditionsPage() {
  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Clinical Conditions & Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conditions We Treat
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every clinical condition requires tailored examination, movement screening, and progressive exercise rehabilitation. Browse through our detailed guides for symptom presentations, physiotherapy management, and rehabilitation goals.
          </p>
        </MotionReveal>

        <MotionReveal direction="up" delay={0.1}>
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-teal-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Medical Referral & Coordination Notice: </span>
              For many musculoskeletal concerns, patients can consult our physiotherapists directly. When symptoms are severe, rapidly worsening, or associated with major trauma or neurological compromise, we coordinate closely with treating orthopaedic surgeons and physicians.
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Filter and Grid (All 24 conditions) */}
      <section className="pt-4">
        <ConditionFilterGrid />
      </section>

      {/* Direct Help Banner */}
      <MotionReveal direction="up">
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              Can&apos;t find your exact diagnosis on this list?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Our clinical team treats a wide spectrum of complex joint, spinal, and nerve presentations. Call us for a quick consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
