import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CONDITIONS,
  SERVICES,
  CLINIC_INFO,
  CLINICAL_PHILOSOPHY
} from "@/data/physioData";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldAlert,
  Target,
  Stethoscope,
  Activity,
  ArrowRight,
  ShieldCheck,
  ClipboardList
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import BookingForm from "@/components/BookingForm";

interface ConditionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.slug === slug);
  if (!condition) return { title: "Condition Not Found" };

  return {
    title: `${condition.title} Physiotherapy Treatment | Keshav Center Ahmedabad`,
    description: `${condition.shortDesc} Evidence-based physiotherapy assessment and management in Ghodasar, Ahmedabad.`,
  };
}

export default async function SingleConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  // Related conditions in the same category
  const relatedConditions = CONDITIONS.filter(
    (c) => c.category === condition.category && c.slug !== slug
  ).slice(0, 3);

  return (
    <div className="py-10 sm:py-14 space-y-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <MotionReveal direction="up" delay={0.05}>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700 cursor-pointer">Home</Link>
          <span>/</span>
          <Link href="/conditions" className="hover:text-teal-700 cursor-pointer">Conditions</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{condition.title}</span>
        </div>
      </MotionReveal>

      {/* Hero & Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-5">
          <MotionReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider">
                {condition.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Verified Clinical Protocol
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              {condition.title}
            </h1>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {condition.fullIntro}
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#book-condition"
                className="px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>Inquire About This Condition</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm hover:border-teal-300 transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Clinic</span>
              </Link>
            </div>
          </MotionReveal>
        </div>

        {condition.image && (
          <div className="lg:col-span-4">
            <MotionReveal direction="scale" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 bg-slate-100">
                <Image
                  src={condition.image}
                  alt={condition.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </MotionReveal>
          </div>
        )}
      </section>

      {/* Grid: Common Presentations & Assessment */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Common Presentations */}
        <MotionReveal direction="left" delay={0.1}>
          <div className="h-full bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Common Presentations</h2>
                <span className="text-[11px] text-slate-400">Typical symptoms and patient experiences</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {condition.commonPresentations.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>

        {/* Assessment May Include */}
        <MotionReveal direction="right" delay={0.15}>
          <div className="h-full bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Assessment May Include</h2>
                <span className="text-[11px] text-slate-400">Comprehensive baseline clinical evaluation</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {condition.assessmentIncludes.map((a, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </section>

      {/* Physiotherapy Management */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 space-y-6">
        <MotionReveal direction="up">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Physiotherapy Management May Include
              </h2>
              <span className="text-xs text-slate-400">
                Multi-faceted therapeutic approach adapted to your recovery stage
              </span>
            </div>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {condition.physioManagement.map((m, idx) => (
            <MotionReveal key={idx} direction="up" delay={idx * 0.05}>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 h-full">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                  {m}
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Rehabilitation Goals & Medical Coordination Alert */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Goals */}
        <div className="md:col-span-6">
          <MotionReveal direction="up">
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-teal-50/70 border border-teal-200/80 space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <Target className="w-5 h-5 text-teal-700" />
                <span>Rehabilitation Goals</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-950 leading-relaxed font-medium">
                {condition.rehabilitationGoals}
              </p>
            </div>
          </MotionReveal>
        </div>

        {/* Medical Coordination Note */}
        <div className="md:col-span-6">
          <MotionReveal direction="up" delay={0.1}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <ShieldAlert className="w-5 h-5 text-amber-700" />
                <span>Medical Coordination Protocol</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {condition.medicalCoordination}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive Consultation Request Pre-filled */}
      <section id="book-condition" className="pt-6">
        <MotionReveal direction="up">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Schedule Your Assessment
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Get Started with {condition.title} Care
            </h2>
            <p className="text-xs text-slate-500">
              Consult with Dr. Nikunj Joshi and Dr. Priyanshi Vani at our Ghodasar clinic or request a home visit.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <BookingForm defaultCondition={condition.title} />
          </div>
        </MotionReveal>
      </section>

      {/* Related Conditions in same category - Whole card clickable */}
      {relatedConditions.length > 0 && (
        <section className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              Related {condition.category} Conditions
            </h3>
            <Link
              href="/conditions"
              className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
            >
              View All 24 Conditions →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedConditions.map((rel) => (
              <Link
                key={rel.slug}
                href={`/conditions/${rel.slug}`}
                className="block rounded-3xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <Image
                      src={rel.image || "/images/spine-rehab.webp"}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:underline">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
