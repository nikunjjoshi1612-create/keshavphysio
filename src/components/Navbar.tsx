"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/physioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const [conditionsDropdown, setConditionsDropdown] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Notification Strip (without phone number) */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-700 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Center & Home Physiotherapy in South Ahmedabad
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Ghodasar, Near Siddhinath Park Society, Ahmedabad
            </span>
          </div>
          <div className="text-slate-500 font-medium">
            Clinical Hours: 8:00 AM – 1:00 PM & 4:00 PM – 8:30 PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white border border-teal-200/80 shadow-xs transition-transform group-hover:scale-105 shrink-0 flex items-center justify-center p-0.5">
                <Image
                  src="/images/keshav_logo.webp"
                  alt="Keshav Advanced Physiotherapy Center Logo"
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                    KESHAV
                  </span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded-sm bg-teal-50 text-teal-700 border border-teal-100 font-bold tracking-wider uppercase">
                    Advanced
                  </span>
                </div>
                <span className="text-xs tracking-wide text-slate-500 font-medium">
                  Physiotherapy Center • Ghodasar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Home tab removed) */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Treatments Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentsDropdown(true)}
                onMouseLeave={() => setTreatmentsDropdown(false)}
              >
                <Link
                  href="/services"
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    pathname.startsWith("/services") && pathname !== "/services/advanced-equipment"
                      ? "text-teal-700 bg-teal-50/70"
                      : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                  }`}
                >
                  Treatments
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 opacity-60" />
                </Link>

                {treatmentsDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-lg border border-slate-100 p-2 py-3 z-50">
                    <Link
                      href="/services/center-physiotherapy"
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors font-medium cursor-pointer"
                    >
                      Center Physiotherapy
                      <span className="block text-xs font-normal text-slate-400">In-clinic assessment & rehab</span>
                    </Link>
                    <Link
                      href="/services/home-physiotherapy"
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors font-medium cursor-pointer"
                    >
                      Physiotherapy at Home
                      <span className="block text-xs font-normal text-slate-400">Home visits across South Ahmedabad</span>
                    </Link>
                    <Link
                      href="/services/manual-therapy"
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors font-medium cursor-pointer"
                    >
                      Manual Therapy
                      <span className="block text-xs font-normal text-slate-400">Hands-on joint & soft tissue mobilisations</span>
                    </Link>
                    <Link
                      href="/services/advanced-equipment"
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors font-medium cursor-pointer"
                    >
                      Advanced Equipment Suite
                      <span className="block text-xs font-normal text-slate-400">Laser, PEMF, Traction, Ultrasound</span>
                    </Link>
                    <Link
                      href="/services/biomechanics-rehabilitation"
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors font-medium cursor-pointer"
                    >
                      Biomechanics & Posture
                      <span className="block text-xs font-normal text-slate-400">Root-cause movement retraining</span>
                    </Link>
                    <div className="border-t border-slate-100 my-1 pt-1">
                      <Link
                        href="/services"
                        className="block px-3 py-1.5 text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                      >
                        Explore All Treatments →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Conditions Dropdown (renamed from Conditions Treated) */}
              <div
                className="relative"
                onMouseEnter={() => setConditionsDropdown(true)}
                onMouseLeave={() => setConditionsDropdown(false)}
              >
                <Link
                  href="/conditions"
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    pathname.startsWith("/conditions")
                      ? "text-teal-700 bg-teal-50/70"
                      : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                  }`}
                >
                  Conditions
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 opacity-60" />
                </Link>

                {conditionsDropdown && (
                  <div className="absolute top-full -left-12 w-80 bg-white rounded-xl shadow-lg border border-slate-100 p-2 py-3 z-50 grid grid-cols-1 gap-1">
                    <div className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Major Clinical Conditions
                    </div>
                    <Link
                      href="/conditions/low-back-pain"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Low Back Pain & Sciatica
                    </Link>
                    <Link
                      href="/conditions/neck-pain"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Neck Pain & Spondylosis
                    </Link>
                    <Link
                      href="/conditions/knee-osteoarthritis"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Knee Osteoarthritis & TKR
                    </Link>
                    <Link
                      href="/conditions/frozen-shoulder"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Frozen Shoulder & Rotator Cuff
                    </Link>
                    <Link
                      href="/conditions/tennis-elbow"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Tennis Elbow
                    </Link>
                    <Link
                      href="/conditions/stroke-rehabilitation"
                      className="px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      Stroke & Neuro Rehabilitation
                    </Link>
                    <div className="border-t border-slate-100 mt-1 pt-2 px-3">
                      <Link
                        href="/conditions"
                        className="text-xs font-semibold text-teal-700 hover:underline block cursor-pointer"
                      >
                        View All 24 Documented Conditions →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/services/advanced-equipment"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive("/services/advanced-equipment")
                    ? "text-teal-700 bg-teal-50/70"
                    : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                }`}
              >
                Equipment
              </Link>

              <Link
                href="/team"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive("/team")
                    ? "text-teal-700 bg-teal-50/70"
                    : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                }`}
              >
                Our Team
              </Link>

              <Link
                href="/patient-journey"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive("/patient-journey")
                    ? "text-teal-700 bg-teal-50/70"
                    : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                }`}
              >
                Patient Journey
              </Link>

              <Link
                href="/faq"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive("/faq")
                    ? "text-teal-700 bg-teal-50/70"
                    : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                }`}
              >
                FAQs
              </Link>
            </nav>

            {/* Desktop Action Button: Replaced 'Book Appointment' & Removed Phone Number */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-xs cursor-pointer ${
                  isActive("/contact")
                    ? "bg-teal-800 text-white"
                    : "bg-teal-700 hover:bg-teal-800 text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-semibold cursor-pointer"
              >
                Contact
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Treatments
            </Link>
            <div className="pl-4 space-y-1.5 border-l-2 border-teal-100 my-1">
              <Link
                href="/services/center-physiotherapy"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-600 hover:text-teal-700 py-1 cursor-pointer"
              >
                • Center Physiotherapy
              </Link>
              <Link
                href="/services/home-physiotherapy"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-600 hover:text-teal-700 py-1 cursor-pointer"
              >
                • Physiotherapy at Home
              </Link>
              <Link
                href="/services/manual-therapy"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-600 hover:text-teal-700 py-1 cursor-pointer"
              >
                • Manual Therapy
              </Link>
              <Link
                href="/services/advanced-equipment"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-600 hover:text-teal-700 py-1 cursor-pointer"
              >
                • Advanced Equipment Suite
              </Link>
            </div>
            <Link
              href="/conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Conditions
            </Link>
            <Link
              href="/services/advanced-equipment"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Equipment
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Our Team
            </Link>
            <Link
              href="/patient-journey"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Patient Journey
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-teal-700 text-white font-medium shadow-xs cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
