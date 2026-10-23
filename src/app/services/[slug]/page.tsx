import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICES,
  CONDITIONS,
  EQUIPMENT,
  CLINIC_INFO,
  CLINICAL_PHILOSOPHY
} from "@/data/physioData";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HeartPulse,
  Users
} from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import BookingForm from "@/components/BookingForm";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Treatment Not Found" };

  return {
    title: `${service.title} | Keshav Advanced Physiotherapy Center`,
    description: `${service.shortDesc} Expert physiotherapy treatment in Ghodasar, Ahmedabad.`,
  };
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find other treatments for related navigation
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="py-10 sm:py-14 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Back Link */}
      <MotionReveal direction="up" delay={0.05}>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700 cursor-pointer">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-teal-700 cursor-pointer">Treatments</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{service.title}</span>
        </div>
      </MotionReveal>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <MotionReveal direction="up" delay={0.1}>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-teal-800/90 font-medium leading-snug">
              {service.tagline}
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.15}>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.shortDesc}
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#book-service"
                className="px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>Inquire About This Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {service.slug === "home-physiotherapy" ? (
                <a
                  href={`tel:${CLINIC_INFO.homePhoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-semibold text-xs sm:text-sm hover:bg-emerald-100 transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call Home Care: {CLINIC_INFO.homePhone}</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm hover:border-teal-300 transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact Clinic</span>
                </Link>
              )}
            </div>
          </MotionReveal>
        </div>

        <div className="lg:col-span-5">
          <MotionReveal direction="scale" delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-16/11 bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Clinical Overview Paragraphs */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
        <MotionReveal direction="up">
          <h2 className="text-2xl font-bold text-slate-900">
            Clinical Overview & Methodology
          </h2>
          <div className="h-0.5 w-12 bg-teal-600 mt-2 mb-6 rounded-full"></div>
        </MotionReveal>

        <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          {service.overview.map((para, pIdx) => (
            <MotionReveal key={pIdx} direction="up" delay={pIdx * 0.05}>
              <p>{para}</p>
            </MotionReveal>
          ))}
        </div>

        {/* Ethical Medical Notice */}
        <div className="mt-6 p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-teal-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Clinical Care Note: </span>
            {CLINICAL_PHILOSOPHY.disclaimer}
          </div>
        </div>
      </section>

      {/* Program Features & Clinical Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Core Features */}
        <div className="lg:col-span-6 space-y-6">
          <MotionReveal direction="up">
            <h2 className="text-2xl font-bold text-slate-900">
              Core Program Components
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              What you can expect during each phase of therapy:
            </p>
          </MotionReveal>

          <div className="space-y-3">
            {service.features.map((feature, fIdx) => (
              <MotionReveal key={fIdx} direction="up" delay={fIdx * 0.05}>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 hover:border-teal-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {feature}
                  </span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* Clinical Highlights */}
        <div className="lg:col-span-6 space-y-6">
          <MotionReveal direction="up">
            <h2 className="text-2xl font-bold text-slate-900">
              Key Clinical Advantages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Why our evidence-guided protocol achieves sustainable outcomes:
            </p>
          </MotionReveal>

          <div className="space-y-4">
            {service.clinicalHighlights.map((hl, hlIdx) => (
              <MotionReveal key={hlIdx} direction="up" delay={hlIdx * 0.06}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    {hl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                    {hl.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Who is this for? */}
          <MotionReveal direction="up" delay={0.2}>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 mt-6">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-600" />
                Who Should Choose This Program?
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {service.whoIsThisFor.map((item, wIdx) => (
                  <li key={wIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive Booking Section for this Service */}
      <section id="book-service" className="pt-8">
        <MotionReveal direction="up">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Schedule Your Session
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Schedule {service.title}
            </h2>
            <p className="text-xs text-slate-500">
              Select between clinic appointment in Ghodasar or home visit across South Ahmedabad.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <BookingForm
              defaultCareType={service.slug === "home-physiotherapy" ? "home" : "center"}
            />
          </div>
        </MotionReveal>
      </section>

      {/* Other Related Treatments - Whole Card Clickable */}
      <section className="pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            Other Rehabilitation Treatments
          </h3>
          <Link
            href="/services"
            className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
          >
            View All Treatments →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="block p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                <span className="text-[11px] font-semibold text-teal-700 block mb-1">
                  {other.category}
                </span>
                <h4 className="text-base font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {other.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
