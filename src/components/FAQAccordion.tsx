"use client";

import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FAQS, CLINIC_INFO } from "@/data/physioData";
import { motion, AnimatePresence } from "framer-motion";
import MotionReveal from "@/components/MotionReveal";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Treatments", "Sessions", "Home Visits"];

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIdx(0);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-teal-700 text-white shadow-2xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <MotionReveal
              key={idx}
              direction="up"
              delay={idx * 0.04}
              className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 text-xs font-bold shrink-0 mt-0.5">
                    Q
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1 rounded-full text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-teal-700" : ""}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 mt-1 pl-14">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </MotionReveal>
          );
        })}
      </div>

      {/* Direct Contact Card */}
      <div className="mt-8 p-6 rounded-2xl bg-teal-50/60 border border-teal-100 max-w-xl mx-auto text-center space-y-3">
        <p className="text-xs sm:text-sm font-medium text-slate-700">
          Have a specific clinical or scheduling question not answered here?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors shadow-2xs cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
