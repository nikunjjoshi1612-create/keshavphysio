"use client";

import React from "react";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLINIC_INFO } from "@/data/physioData";

export default function FloatingActions() {
  return (
    <aside aria-label="Quick Contact Actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phoneRaw}`}
        aria-label="Call clinic directly"
        className="group flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white pl-4 pr-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border border-teal-600/50"
      >
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          Call Now
        </span>
        <div className="w-8 h-8 rounded-full bg-teal-600/80 flex items-center justify-center text-white shrink-0 shadow-inner">
          <Phone className="w-4 h-4 animate-pulse" />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with clinic on WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border border-emerald-400/50"
      >
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp
        </span>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
          <WhatsAppIcon className="w-4.5 h-4.5 fill-white" />
        </div>
      </a>
    </aside>
  );
}
