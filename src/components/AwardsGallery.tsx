"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { AwardItem } from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";

interface AwardsGalleryProps {
  awards: AwardItem[];
}

export default function AwardsGallery({ awards }: AwardsGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedAward = selectedIndex !== null ? awards[selectedIndex] : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? awards.length - 1 : prev - 1) : null));
  }, [awards.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev === awards.length - 1 ? 0 : prev + 1) : null));
  }, [awards.length]);

  // Handle keyboard navigation: Esc to close, Left/Right arrows to navigate
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {awards.map((award, aIdx) => (
          <MotionReveal key={award.id} direction="up" delay={0.1 * aIdx}>
            <div
              onClick={() => setSelectedIndex(aIdx)}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex flex-col h-full group cursor-pointer"
            >
              <div className="relative aspect-16/11 bg-slate-100 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-teal-800 border border-slate-200/60 shadow-2xs">
                  {award.badge}
                </div>

                {/* Enlarge Hover Overlay Pill */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-3.5 h-3.5 text-teal-700" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    {award.organization}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {award.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-teal-700 group-hover:text-teal-800">
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Verified Recognition
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-teal-600 transition-colors">
                    Enlarge photo &rarr;
                  </span>
                </div>
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedAward && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedAward.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none"
          onClick={handleClose}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-teal-300 border border-white/20">
                {selectedAward.badge}
              </span>
              <span className="text-xs text-slate-400">
                {selectedIndex + 1} of {awards.length}
              </span>
            </div>

            <button
              onClick={handleClose}
              aria-label="Close dialog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Close (Esc)</span>
            </button>
          </div>

          {/* Center Image Container with Navigation Arrows */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            {awards.length > 1 && (
              <button
                onClick={handlePrev}
                aria-label="Previous award"
                className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all backdrop-blur-xs border border-white/20 hover:scale-105 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Arrow */}
            {awards.length > 1 && (
              <button
                onClick={handleNext}
                aria-label="Next award"
                className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all backdrop-blur-xs border border-white/20 hover:scale-105 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Enlarge Image */}
            <div className="relative max-h-[70vh] sm:max-h-[75vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                priority
                sizes="100vw"
                className="object-contain rounded-2xl shadow-2xl drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-white text-center space-y-1.5 shadow-xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
              {selectedAward.organization}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              {selectedAward.title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto">
              {selectedAward.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
