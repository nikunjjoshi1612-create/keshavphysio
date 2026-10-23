"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { CONDITIONS, ConditionItem } from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";

export default function ConditionFilterGrid({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Spine & Back",
    "Shoulder & Arm",
    "Knee & Lower Limb",
    "Neurological",
    "Post-Surgical & Trauma"
  ];

  const filteredConditions = CONDITIONS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.commonPresentations.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const displayList = limit ? filteredConditions.slice(0, limit) : filteredConditions;

  return (
    <div className="space-y-8">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white shadow-2xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search symptoms or condition..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Condition Cards Grid: Whole card clickable */}
      {displayList.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <p className="text-slate-600 font-medium">No specific condition matched &ldquo;{searchQuery}&rdquo;</p>
          <p className="text-xs text-slate-400">
            Try searching for other terms like back pain, knee, sports, stroke, or consult our therapists directly.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-xs text-teal-700 font-semibold hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((condition, idx) => (
            <MotionReveal
              key={condition.slug}
              direction="up"
              delay={(idx % 3) * 0.08}
              className="h-full"
            >
              <Link
                href={`/conditions/${condition.slug}`}
                className="block h-full bg-white rounded-3xl border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Condition Photo Banner */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <Image
                      src={condition.image || "/images/spine-rehab.webp"}
                      alt={condition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-teal-800 border border-slate-200/60 shadow-2xs">
                      {condition.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-mono text-white/90">
                      #{idx + 1}
                    </div>
                  </div>

                  {/* Lowered / Compact Card Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug line-clamp-1">
                      {condition.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {condition.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span className="group-hover:underline">View Condition Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      )}

      {limit && CONDITIONS.length > limit && (
        <div className="text-center pt-4">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-teal-800 hover:border-teal-300 font-semibold text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <span>Explore All 24 Documented Conditions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
