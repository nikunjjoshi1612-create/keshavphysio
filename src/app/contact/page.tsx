import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Home,
  ArrowUpRight
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLINIC_INFO } from "@/data/physioData";
import BookingForm from "@/components/BookingForm";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Contact Us | Keshav Advanced Physiotherapy Center",
  description: "Contact Keshav Advanced Physiotherapy Center in Ghodasar, Ahmedabad. Center treatments and home physiotherapy visits. Center: 9898773128 | Home Care: 9328150133."
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Contact & Consultations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Our Clinical Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Get in touch with us for clinic appointments in Ghodasar or to schedule home physiotherapy visits across South Ahmedabad.
          </p>
        </MotionReveal>
      </div>

      {/* Main Contact Grid & Form */}
      <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <MotionReveal direction="up" delay={0.1}>
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">
                Clinic Details & Helpline
              </h2>

              <div className="space-y-5">
                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Clinic Center Helpline
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-lg font-bold text-teal-800 hover:text-teal-900 transition-colors cursor-pointer"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Ghodasar clinic consultations & appointments
                    </span>
                  </div>
                </div>

                {/* Home Care Helpline */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">
                      Home Care Helpline
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.homePhoneRaw}`}
                      className="text-lg font-bold text-emerald-800 hover:text-emerald-900 transition-colors cursor-pointer"
                    >
                      {CLINIC_INFO.homePhone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Dedicated helpline for home physiotherapy visits
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      WhatsApp Inquiries
                    </span>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 hover:underline block cursor-pointer"
                    >
                      Chat on WhatsApp (+91 9898773128)
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Send prescription, reports or inquire about visits
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Center Address
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {CLINIC_INFO.address}
                    </p>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-teal-700 font-semibold hover:underline mt-1 cursor-pointer"
                    >
                      Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Operating Timings
                    </span>
                    <p className="text-xs text-slate-700 font-medium">
                      Mon – Sat: 8:00 AM – 1:00 PM & 4:00 PM – 8:30 PM
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Sunday: By Appointment Only (Emergency / Post-op)
                    </span>
                  </div>
                </div>
              </div>

              {/* Home Visit Areas */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Home Physiotherapy Localities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {CLINIC_INFO.homeServiceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Book Home Care:</span>
                  <a
                    href={`tel:${CLINIC_INFO.homePhoneRaw}`}
                    className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{CLINIC_INFO.homePhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Contact / Consultation Request Form */}
        <div className="lg:col-span-7">
          <MotionReveal direction="up" delay={0.15}>
            <BookingForm />
          </MotionReveal>
        </div>
      </div>

      {/* Full-Width Map Section (aligning with other components above) */}
      <section className="w-full">
        <MotionReveal direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Clinic Location & Directions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Easily accessible in Ghodasar, South Ahmedabad
                </p>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-teal-800 text-xs font-semibold hover:border-teal-300 transition-colors shadow-2xs self-start sm:self-auto cursor-pointer"
              >
                <span>Navigate via Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-600" />
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <iframe
                title="Keshav Advanced Physiotherapy Center Full Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.846549216016!2d72.6074218!3d22.9926458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c18b76c8c3%3A0x7d6f5f9b4181a95b!2sGhodasar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Address:</strong> GF/11, Shree Nivas Complex, Next to Gurukul Classes, Near Siddhinath Park Society, Ghodasar, Ahmedabad, Gujarat 380050</span>
                </div>
                <span className="text-teal-700 font-medium shrink-0">Near Siddhinath Park Society</span>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
}
