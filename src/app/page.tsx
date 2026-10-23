import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Phone,
  Calendar,
  Building2,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  MapPin,
  Clock,
  HeartHandshake,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import {
  CLINIC_INFO,
  CLINICAL_PHILOSOPHY,
  SERVICES,
  CONDITIONS,
  EQUIPMENT,
  TEAM_MEMBERS,
  TEAM_PHILOSOPHY,
  CLINICAL_AWARDS,
  PATIENT_JOURNEY,
  TESTIMONIALS
} from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";
import BookingForm from "@/components/BookingForm";
import ConditionFilterGrid from "@/components/ConditionFilterGrid";
import FAQAccordion from "@/components/FAQAccordion";
import AwardsGallery from "@/components/AwardsGallery";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden border-b border-slate-100/90 bg-slate-50/40">
        {/* Ambient Hero Background Graphic */}
        <div className="absolute inset-0 -z-10 select-none pointer-events-none">
          <Image
            src="/images/hero-bg.webp"
            alt="Keshav Advanced Physiotherapy Center background graphic"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-90"
          />
          {/* Subtle gradient overlay to preserve contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-slate-50/80" />
        </div>

        <div className="pt-6 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <MotionReveal direction="up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                  <span>{CLINIC_INFO.subtagline}</span>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  One Place. <br />
                  <span className="text-teal-700">Infinite Physiotherapy</span> Solutions.
                </h1>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Comprehensive, evidence-guided rehabilitation at our modern Ghodasar center and professional home visits across South Ahmedabad. Individualized movement assessment, hands-on manual therapy, and active recovery.
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.2}>
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Contact Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
                  >
                    <span>Explore Treatments</span>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            {/* Right Column: Hero Visual with LCP fix and sizes */}
            <div className="lg:col-span-5">
              <MotionReveal direction="scale" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white p-2">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src="/images/hero-clinic.webp"
                      alt="Keshav Advanced Physiotherapy Center interior in Ahmedabad"
                      fill
                      priority
                      loading="eager"
                      fetchPriority="high"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge on Hero Image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white border border-teal-200/90 shrink-0 flex items-center justify-center p-0.5 shadow-xs">
                            <Image
                              src="/images/keshav_logo.webp"
                              alt="Keshav Physiotherapy Logo"
                              width={44}
                              height={44}
                              className="w-full h-full object-contain rounded-full"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">Keshav Advanced Physiotherapy</div>
                            <div className="text-[11px] text-slate-500">Ghodasar, South Ahmedabad</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Open Today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>

          {/* Trust Highlights Strip across full width */}
          <MotionReveal direction="up" delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-8 border-t border-slate-200/80">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">24+</div>
                <div className="text-xs text-slate-500 font-medium">Conditions Documented</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">12+ Yrs</div>
                <div className="text-xs text-slate-500 font-medium">Clinical Excellence</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">2 Modes</div>
                <div className="text-xs text-slate-500 font-medium">Clinic & Home Care</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">10+</div>
                <div className="text-xs text-slate-500 font-medium">Modern Modalities</div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. DUAL CARE DELIVERY: CENTER & HOME CARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Flexible Rehabilitation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Two Tailored Pathways to Full Recovery
            </h2>
            <p className="text-sm text-slate-500">
              Whether you visit our state-of-the-art clinic or require expert bedside therapy at home, our clinical standards remain uncompromising.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Center Physiotherapy - Whole card clickable */}
          <MotionReveal direction="left" delay={0.15}>
            <Link
              href="/services/center-physiotherapy"
              className="block h-full bg-white rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                    Clinic Center
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    Center Physiotherapy
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Ghodasar Clinic • Complete Equipment & Rehab Gym
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Detailed physiotherapy assessment & biomechanical movement analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Orthopaedic, musculoskeletal, sports, and neurological rehabilitation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Hands-on manual therapy & supervised therapeutic exercise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Advanced modalities: Therapeutic Laser, PEMF, Traction, Ultrasound</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Clinic Helpline:</span>
                <span className="font-bold text-teal-800">{CLINIC_INFO.phone}</span>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                <span>Explore Center Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </MotionReveal>

          {/* Card 2: Physiotherapy at Home - Whole card clickable */}
          <MotionReveal direction="right" delay={0.2}>
            <Link
              href="/services/home-physiotherapy"
              className="block h-full bg-white rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    <Home className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                    Home Service
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    Physiotherapy at Home
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    South Ahmedabad Coverage • Bedside Care
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>In-home assessment and customized bedside exercise plan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Post-operative knee & hip replacement rehabilitation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Stroke, Parkinson&apos;s, elderly & mobility-limited functional retraining</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Gait training, caregiver education & scheduled progress reviews</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Home Care Helpline:</span>
                <span className="font-bold text-teal-800">{CLINIC_INFO.homePhone}</span>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                <span>Explore Home Care Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* 3. OUR CLINICAL APPROACH & ETHICAL PHILOSOPHY */}
      <section className="bg-white border-y border-slate-200/80 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <MotionReveal direction="up">
                <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                  Clinical Approach
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {CLINICAL_PHILOSOPHY.headline}
                </h2>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.1}>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {CLINICAL_PHILOSOPHY.body}
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.15}>
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs sm:text-sm text-teal-900 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Our Medical Standard: </span>
                    {CLINICAL_PHILOSOPHY.disclaimer}
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.2}>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-800">Root-Cause Assessment</div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Pinpoint kinetic imbalances rather than treating only the surface symptom.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-800">Active Self-Management</div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Equipping you with structured exercises and knowledge to prevent relapse.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>

            <div className="lg:col-span-6">
              <MotionReveal direction="scale" delay={0.15}>
                <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/90 aspect-16/10">
                  <Image
                    src="/images/clinic-reception.webp"
                    alt="Welcoming reception and clinical environment at Keshav Physiotherapy Ahmedabad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    Welcoming, transparent, and patient-centered environment in Ghodasar
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS SHOWCASE (WHOLE CARD CLICKABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Comprehensive Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Specialized Clinical Treatments
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Every treatment program is structured around evidence-based clinical protocols with dedicated guidance.
              </p>
            </MotionReveal>
          </div>
          <MotionReveal direction="left">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-800 group cursor-pointer"
            >
              <span>Explore All Treatments</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionReveal>
        </div>

        {/* Treatment Cards: Whole Card Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <MotionReveal
              key={service.slug}
              direction="up"
              delay={idx * 0.08}
              className="h-full"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full bg-white rounded-3xl border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-teal-800 border border-slate-200/50">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {service.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-400 group-hover:text-teal-700 transition-colors">
                  <span className="font-semibold text-teal-700 group-hover:underline">
                    View Treatment Details
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* 5. CONDITIONS EXPLORER */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Conditions & Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                What Condition Are You Experiencing?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Explore clinical presentations, our specific physiotherapy assessment protocols, and rehabilitation goals for all 24 master documented conditions.
              </p>
            </MotionReveal>
          </div>

          <ConditionFilterGrid limit={6} />
        </div>
      </section>

      {/* 6. ADVANCED EQUIPMENT & MODALITIES SUITE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Supportive Modalities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Advanced Physiotherapy Equipment Suite
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We utilize calibrated electrotherapy and rehabilitation equipment to modulate acute pain, stimulate cellular healing, and ease muscle guarding so you can engage in active exercise sooner.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.1}>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  Ethical Equipment Policy
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Equipment is presented as supportive therapy. It should not be marketed as a guaranteed cure or as a replacement for clinical assessment and active rehabilitation.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.15}>
              <Link
                href="/services/advanced-equipment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-teal-200" />
                <span>Explore All 10 Equipment Modalities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionReveal>
          </div>

          <div className="lg:col-span-6">
            <MotionReveal direction="scale" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/90 aspect-16/10">
                <Image
                  src="/images/advanced-equipment.webp"
                  alt="Modern advanced physiotherapy equipment suite at Keshav Center Ahmedabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* 6 Key Modalities Cards Grid across full width */}
        <MotionReveal direction="up" delay={0.2} className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {EQUIPMENT.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{item.name}</div>
                  <div className="text-[11px] text-teal-700 font-medium mt-0.5">{item.shortTag}</div>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {item.clinicalUse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>

      {/* 7. CLINICAL LEADERSHIP & VERIFIED TEAM */}
      <section className="bg-white border-y border-slate-200/80 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Verified Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Led by Postgraduate Physiotherapy Specialists
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Only verified qualifications, certifications, and clinical experience. Centered on understanding your movement and goals.
              </p>
            </MotionReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <MotionReveal
                key={member.id}
                direction={idx === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start h-full">
                  <div className="relative w-32 h-40 sm:w-40 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 shadow-xs bg-slate-200 mx-auto md:mx-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 160px, 160px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                        {member.designation}
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-slate-600 bg-white inline-block px-2.5 py-1 rounded-md border border-slate-200 mt-1">
                        {member.qualification}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-teal-500 pl-3 py-0.5">
                      &ldquo;{member.quote}&rdquo;
                    </p>

                    <div>
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Clinical Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.clinicalFocus.slice(0, 4).map((f, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Team Philosophy Note */}
          <MotionReveal direction="up" delay={0.2}>
            <div className="mt-8 p-6 rounded-2xl bg-teal-50/60 border border-teal-100 text-center max-w-3xl mx-auto space-y-1">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                Our Team Philosophy
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                &ldquo;{TEAM_PHILOSOPHY}&rdquo;
              </p>
              <div className="pt-2">
                <Link
                  href="/team"
                  className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                >
                  Learn More About Our Clinic & Home Care Team →
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* NATIONAL HONORS, AWARDS & MEDIA RECOGNITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Proven Excellence & Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              National Medical Honors & Media Spotlight
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Recognized at premier medical institutes including AIIMS New Delhi and featured in news media for high clinical standards and transformative patient recovery outcomes.
            </p>
          </div>
        </MotionReveal>

        <AwardsGallery awards={CLINICAL_AWARDS} />
      </section>

      {/* 8. 5-STEP PATIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <MotionReveal direction="up">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 5-Step Patient Recovery Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              A transparent, supportive path from your first contact to restored mobility and independent living.
            </p>
          </MotionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PATIENT_JOURNEY.map((step, idx) => (
            <MotionReveal
              key={step.step}
              direction="up"
              delay={idx * 0.08}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200/90 p-5 space-y-3 flex flex-col justify-between hover:border-teal-300 hover:shadow-xs transition-all">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-teal-600/40 font-mono">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight">
                      {step.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-teal-700">
                      {step.subtitle}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* 9. PATIENT EXPERIENCES & REVIEWS */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Patient Feedback
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Stories of Restored Mobility
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Real reflections from patients across Ahmedabad recovering from surgery, spinal pain, and injuries.
              </p>
            </MotionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <MotionReveal
                key={idx}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xs transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800">{t.name}</div>
                    <div className="text-[11px] text-teal-700 font-medium">{t.condition}</div>
                    <div className="text-[10px] text-slate-400">{t.location}</div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Contact & Care
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose the care option that best fits your daily routine and functional mobility. Book an in-depth center assessment or request our specialized home physiotherapy visit.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">Direct Helplines</div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Clinic Consultations:</span>
                      <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-teal-700 font-bold hover:underline">{CLINIC_INFO.phone}</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 pt-1.5">
                      <span className="text-slate-500">Home Care Visits:</span>
                      <a href={`tel:${CLINIC_INFO.homePhoneRaw}`} className="text-emerald-700 font-bold hover:underline">{CLINIC_INFO.homePhone}</a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">Center Address</div>
                    <div className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      {CLINIC_INFO.address}
                    </div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-teal-700 hover:underline mt-1 inline-flex items-center gap-1 cursor-pointer"
                    >
                      Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">Operating Hours</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Mon – Sat: 8:00 AM – 1:00 PM & 4:00 PM – 8:30 PM
                    </div>
                    <div className="text-[11px] text-slate-400">Sunday: By Appointment (Emergency/Post-op)</div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div className="lg:col-span-7">
            <MotionReveal direction="up" delay={0.15}>
              <BookingForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="bg-slate-50/70 border-t border-slate-200/80 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <MotionReveal direction="up">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Patient FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Clinical Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Detailed answers to patient questions regarding center vs home care, machine use, and exercise planning.
              </p>
            </MotionReveal>
          </div>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
