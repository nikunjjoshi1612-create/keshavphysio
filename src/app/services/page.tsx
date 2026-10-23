import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Home, Phone } from "lucide-react";
import { SERVICES, CLINICAL_PHILOSOPHY, CLINIC_INFO } from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Clinical Treatments & Programs | Keshav Advanced Physiotherapy Center",
  description: "Explore our comprehensive clinical and home-based physiotherapy treatments in Ahmedabad. Orthopaedic, sports, neurological, and post-operative care."
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Clinical Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Evidence-Based Physiotherapy Treatments
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At Keshav Advanced Physiotherapy Center, we provide specialized rehabilitation programs combining clinical movement assessment, hands-on manual therapy, therapeutic exercise, and advanced modalities.
          </p>
        </MotionReveal>

        <MotionReveal direction="up" delay={0.1}>
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-teal-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Clinical Care Note: </span>
              {CLINICAL_PHILOSOPHY.disclaimer}
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Treatments Grid with Clickable Whole Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <MotionReveal
            key={service.slug}
            direction="up"
            delay={(idx % 3) * 0.08}
            className="h-full"
          >
            <Link
              href={`/services/${service.slug}`}
              className="block h-full bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-semibold text-teal-800 border border-slate-200/60 shadow-2xs">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Program Highlights:
                    </span>
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-400 group-hover:text-teal-700 transition-colors">
                <span className="font-semibold text-teal-700 group-hover:underline">
                  View Full Treatment Details
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>

      {/* Home vs Center Callout Banner */}
      <MotionReveal direction="up">
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-r from-teal-50/80 via-white to-teal-50/40 border border-teal-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Not sure whether you need Center or Home Physiotherapy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Speak directly with our clinical coordinator at Keshav Advanced Physiotherapy Center. We will evaluate your mobility level, condition, and recommend the best therapeutic setting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
            >
              Contact Our Team
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
