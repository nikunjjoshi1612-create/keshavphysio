import React from "react";
import Link from "next/link";
import {
  Calendar,
  ClipboardCheck,
  Compass,
  Activity,
  TrendingUp,
  CheckCircle2,
  FileText,
  Clock,
  Shirt,
  Phone,
  ArrowRight
} from "lucide-react";
import { PATIENT_JOURNEY, CLINIC_INFO } from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Patient Recovery Journey | Keshav Advanced Physiotherapy Center",
  description: "Understand our 5-step clinical pathway: Book, Assess, Plan, Treat, and Progress. Clear, supportive physiotherapy in Ahmedabad."
};

export default function PatientJourneyPage() {
  const stepsIcons = [Calendar, ClipboardCheck, Compass, Activity, TrendingUp];

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Clinical Pathway
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The 5-Step Patient Journey
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your very first contact to regaining pain-free functional movement, our care follows a structured, transparent, and respectful roadmap.
          </p>
        </MotionReveal>
      </div>

      {/* 5 Steps Detailed Visual Timeline */}
      <div className="space-y-6">
        {PATIENT_JOURNEY.map((item, idx) => {
          const Icon = stepsIcons[idx];
          return (
            <MotionReveal
              key={item.step}
              direction="up"
              delay={idx * 0.08}
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-teal-300 transition-all shadow-xs">
                {/* Step Number Badge */}
                <div className="flex md:flex-col items-center gap-3 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xl font-black font-mono text-teal-800/40">
                    {item.step}
                  </span>
                </div>

                {/* Step Details */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Step {item.step} — {item.title}
                    </h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </MotionReveal>
          );
        })}
      </div>

      {/* Patient Preparation Advice */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
        <MotionReveal direction="up">
          <h2 className="text-2xl font-bold text-slate-900">
            How to Prepare for Your First Assessment
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            A few practical tips to make your initial clinical consultation smooth and productive:
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <MotionReveal direction="up" delay={0.05}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Comfortable Attire</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wear loose-fitting track pants, shorts, or a comfortable t-shirt so our clinicians can examine joint movement and muscle function easily.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.1}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Medical Documents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bring any relevant surgical discharge summaries, orthopedic prescriptions, X-rays, or MRI reports from your treating doctor.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Arrive 10 Mins Early</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For in-clinic visits, arriving slightly ahead of time allows for seamless registration and uninterrupted one-on-one assessment.
              </p>
            </div>
          </MotionReveal>
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-slate-200">
          <span className="text-xs text-slate-600">
            Ready to embark on your recovery journey?
          </span>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Contact Our Clinic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
