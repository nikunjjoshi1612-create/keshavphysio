import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import MotionReveal from "@/components/MotionReveal";
import { CLINIC_INFO } from "@/data/physioData";

export const metadata = {
  title: "Frequently Asked Questions | Keshav Advanced Physiotherapy Center",
  description: "Get answers to common physiotherapy questions: center vs home care, machine use, post-op protocols, and direct consults."
};

export default function FAQPage() {
  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Patient Help Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our clinical assessment, treatment progression, home visit scheduling, and ethical rehabilitation standards.
          </p>
        </MotionReveal>
      </div>

      {/* Accordion Component */}
      <section className="pt-2">
        <FAQAccordion />
      </section>

      {/* CTA Box */}
      <MotionReveal direction="up">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Ready to begin your individualized recovery?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Contact our clinic today to discuss an assessment in Ghodasar or request a home visit.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-2xs cursor-pointer"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${CLINIC_INFO.homePhoneRaw}`}
              className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-teal-800 font-semibold text-xs sm:text-sm hover:border-teal-300 transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Home Care: {CLINIC_INFO.homePhone}</span>
            </a>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
