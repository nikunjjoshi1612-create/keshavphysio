"use client";

import React, { useState } from "react";
import { Building2, Home, CheckCircle2, Send, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLINIC_INFO, CONDITIONS } from "@/data/physioData";

interface BookingFormProps {
  defaultCareType?: "center" | "home";
  defaultCondition?: string;
}

export default function BookingForm({
  defaultCareType = "center",
  defaultCondition = ""
}: BookingFormProps) {
  const [careType, setCareType] = useState<"center" | "home">(defaultCareType);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: defaultCondition || "low-back-pain",
    date: "",
    timeSlot: "Morning (8:00 AM - 1:00 PM)",
    homeArea: "Ghodasar",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello Keshav Physiotherapy,\n` +
      `I would like to consult:\n` +
      `• Care Type: ${careType === "center" ? "Center Physiotherapy (Ghodasar)" : "Physiotherapy at Home"}\n` +
      `• Name: ${formData.name || "Patient"}\n` +
      `• Phone: ${formData.phone || "Not specified"}\n` +
      `• Condition: ${formData.condition}\n` +
      `• Preferred Time: ${formData.timeSlot}\n` +
      (careType === "home" ? `• Locality: ${formData.homeArea}\n` : "") +
      (formData.notes ? `• Details: ${formData.notes}` : "")
    );
    const targetPhone = careType === "home" ? CLINIC_INFO.homePhoneRaw : CLINIC_INFO.phoneRaw;
    window.open(`https://wa.me/91${targetPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Care Type Selection Tabs */}
      <div className="flex p-1.5 bg-slate-100/80 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => setCareType("center")}
          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            careType === "center"
              ? "bg-white text-teal-800 shadow-xs border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Building2 className="w-4 h-4 text-teal-600" />
          <span>Center Physiotherapy</span>
        </button>
        <button
          type="button"
          onClick={() => setCareType("home")}
          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            careType === "home"
              ? "bg-white text-teal-800 shadow-xs border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Home className="w-4 h-4 text-teal-600" />
          <span>Physiotherapy at Home</span>
        </button>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Inquiry Request Received</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-slate-700">{formData.name}</span>. Our clinical coordinator will call you at <span className="font-semibold text-slate-700">{formData.phone}</span> shortly to coordinate your {careType === "center" ? "center visit" : "home visit"}.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-teal-700 hover:underline font-semibold cursor-pointer"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {careType === "home" && (
            <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-teal-800 space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="font-bold">Home Visit Note:</span>
                <span>Available in Ghodasar, Maninagar, Isanpur, Vatva, Kankaria, C.T.M, Jasodanagar & surrounding South Ahmedabad areas.</span>
              </div>
              <div className="flex items-center gap-1.5 pt-1 text-teal-900 font-medium border-t border-teal-100/60">
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Home Care Helpline: </span>
                <a href={`tel:${CLINIC_INFO.homePhoneRaw}`} className="font-bold text-teal-800 hover:underline">
                  {CLINIC_INFO.homePhone}
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Patel"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9898773128"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Condition or Area of Concern *
              </label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors cursor-pointer"
              >
                {CONDITIONS.map((c) => (
                  <option key={c.slug} value={c.title}>
                    {c.title}
                  </option>
                ))}
                <option value="General Consultation">Other / General Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Preferred Time Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors cursor-pointer"
              >
                <option value="Morning (8:00 AM - 11:00 AM)">Morning (8:00 AM - 11:00 AM)</option>
                <option value="Mid-day (11:00 AM - 1:00 PM)">Mid-day (11:00 AM - 1:00 PM)</option>
                <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                <option value="Night (6:30 PM - 8:30 PM)">Night (6:30 PM - 8:30 PM)</option>
              </select>
            </div>
          </div>

          {careType === "home" ? (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Home Locality in South Ahmedabad *
              </label>
              <select
                value={formData.homeArea}
                onChange={(e) => setFormData({ ...formData, homeArea: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors cursor-pointer"
              >
                {CLINIC_INFO.homeServiceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Symptoms / Doctor Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Knee pain while walking, back stiffness after sitting..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/40 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all hover:shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit {careType === "center" ? "Clinic Inquiry" : "Home Visit Request"}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="py-3 px-4 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
