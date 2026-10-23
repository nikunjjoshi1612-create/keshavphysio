import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import { EQUIPMENT, CLINIC_INFO, CLINICAL_PHILOSOPHY } from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Advanced Physiotherapy Equipment & Modalities | Keshav Physiotherapy",
  description: "Explore the advanced supportive modalities at Keshav Advanced Physiotherapy Center in Ahmedabad: Therapeutic Laser, PEMF, Ultrasound, Traction, and Cryotherapy."
};

export default function AdvancedEquipmentPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <MotionReveal direction="up" delay={0.05}>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700 cursor-pointer">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-teal-700 cursor-pointer">Treatments</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Advanced Equipment Suite</span>
        </div>
      </MotionReveal>

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <MotionReveal direction="up" delay={0.1}>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider">
              Supportive Technologies
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Advanced Physiotherapy Equipment
            </h1>
            <p className="text-base sm:text-lg text-teal-800 font-medium">
              Calibrated electrotherapy and recovery modalities supporting active clinical rehabilitation.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Keshav Advanced Physiotherapy Center, our modern clinical facility in Ghodasar is equipped with high-precision rehabilitation modalities. We combine these technologies with manual therapy and progressive movement to accelerate pain relief and stimulate tissue recovery.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            {/* Master Disclaimer Banner from PDF */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                Important Clinical Policy:
              </div>
              <p className="leading-relaxed">
                Equipment is presented as supportive therapy. It should not be marketed as a guaranteed cure or as a replacement for clinical assessment and active rehabilitation.
              </p>
            </div>
          </MotionReveal>
        </div>

        <div className="lg:col-span-5">
          <MotionReveal direction="scale" delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-16/11 bg-slate-100">
              <Image
                src="/images/advanced-equipment.webp"
                alt="Advanced physiotherapy equipment room in Ahmedabad clinic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Modalities Grid (All 10 Modalities from PDF) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <MotionReveal direction="up">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Technology Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Clinical Modality Suite
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Each device is prescribed selectively by our physiotherapists following thorough baseline assessment.
            </p>
          </MotionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT.map((item, idx) => (
            <MotionReveal
              key={item.id}
              direction="up"
              delay={(idx % 3) * 0.08}
              className="h-full"
            >
              <div className="h-full bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                      {item.shortTag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      MOD-0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700 block mb-0.5">Clinical Protocol:</span>
                    {item.clinicalUse}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-slate-600 block">
                      Target Benefits:
                    </span>
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/contact?equipment=${encodeURIComponent(item.name)}#contact-form`}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 block text-center py-2 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors cursor-pointer"
                  >
                    Inquire About Treatment
                  </Link>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Integration Philosophy */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
        <MotionReveal direction="up">
          <h3 className="text-xl font-bold text-slate-900">
            How Modalities Integrate Into Your Treatment Plan
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            In modern physiotherapy, passive machines are never used as isolated treatments. At Keshav Center, modalities are strategically timed at the beginning of a session to desensitize painful tissues, relax protective muscle spasms, and improve joint compliance. This creates an optimal window where our physiotherapists can deliver hands-on manual joint glides and guide you through progressive strengthening exercises.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/services/center-physiotherapy"
              className="px-5 py-2.5 rounded-xl bg-teal-700 text-white text-xs font-semibold hover:bg-teal-800 transition-colors cursor-pointer"
            >
              Learn About Center Physiotherapy
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold hover:border-teal-300 transition-colors cursor-pointer"
            >
              Contact Our Team
            </Link>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
}
