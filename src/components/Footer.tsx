"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ShieldCheck, HeartPulse, ArrowUpRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLINIC_INFO, SERVICES, CONDITIONS } from "@/data/physioData";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      {/* Upper Footer Action Bar */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Clinical Hours</div>
                <div className="text-sm font-semibold text-slate-800">
                  Mon – Sat: 8:00 AM - 1:00 PM & 4:00 PM - 8:30 PM
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Center Location</div>
                <div className="text-sm font-semibold text-slate-800">
                  Ghodasar, South Ahmedabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Clinic Brand & Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-white border border-teal-200/80 shadow-xs shrink-0 flex items-center justify-center p-0.5">
                <Image
                  src="/images/keshav_logo.webp"
                  alt="Keshav Advanced Physiotherapy Center Logo"
                  width={72}
                  height={72}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 tracking-tight block">KESHAV ADVANCED</span>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block">Physiotherapy Center</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              One Place • Infinite Physiotherapy Solutions. Combining thorough clinical assessment, individualized active exercise, manual therapy, and supportive modalities for lasting recovery.
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Clinic Location
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {CLINIC_INFO.address}
              </p>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-teal-700 font-semibold hover:underline mt-1.5 cursor-pointer"
              >
                Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="pt-3 flex flex-wrap items-center gap-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-emerald-800 text-xs font-semibold hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/30 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold hover:bg-teal-100 transition-colors border border-teal-200 cursor-pointer"
                >
                  <Phone className="w-3 h-3 text-teal-700" />
                  <span>Clinic: {CLINIC_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.homePhoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200 cursor-pointer"
                >
                  <Phone className="w-3 h-3 text-emerald-700" />
                  <span>Home Care: {CLINIC_INFO.homePhone}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Home Visit Service Area</span>
                <a
                  href={`tel:${CLINIC_INFO.homePhoneRaw}`}
                  className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 normal-case"
                >
                  <Phone className="w-3 h-3" />
                  <span>{CLINIC_INFO.homePhone}</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated home visits across Ghodasar, Maninagar, Isanpur, Vatva, Kankaria, C.T.M, Jasodanagar and adjacent South Ahmedabad localities.
              </p>
            </div>
          </div>

          {/* Col 3: Core Treatments */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Specialized Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-teal-700 font-semibold hover:underline cursor-pointer">
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Conditions */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Conditions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CONDITIONS.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/conditions" className="text-teal-700 font-semibold hover:underline cursor-pointer">
                  View All 24 Conditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Links & Team */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Information & Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/team" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  Our Team & Leadership
                </Link>
              </li>
              <li>
                <Link href="/patient-journey" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  5-Step Patient Journey
                </Link>
              </li>
              <li>
                <Link href="/services/advanced-equipment" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  Advanced Equipment Suite
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  Contact Our Clinic
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-600 hover:text-teal-700 transition-colors cursor-pointer">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer from Master Document */}
        <div className="mt-12 p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
          <HeartPulse className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">Clinical Notice: </span>
            At Keshav Advanced Physiotherapy Center, advanced electrotherapy equipment is utilized as supportive therapy to modulate acute symptoms and support exercise. Equipment does not replace in-depth clinical assessment, active rehabilitation, or appropriate medical coordination with your treating physician.
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Keshav Advanced Physiotherapy Center. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-600 cursor-pointer">Privacy Policy</Link>
            <Link href="/privacy-policy" className="hover:text-slate-600 cursor-pointer">Website Terms</Link>
            <span className="text-teal-700 font-medium">Ghodasar, Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
