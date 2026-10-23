import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import { CLINIC_INFO } from "@/data/physioData";

export const metadata = {
  title: "Privacy Policy & Website Terms | Keshav Advanced Physiotherapy Center",
  description: "Privacy policy, patient data security, and terms of service for Keshav Advanced Physiotherapy Center in Ahmedabad."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <MotionReveal direction="up">
        <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
          Privacy Policy & Website Terms
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Last updated: October 2026 • Keshav Advanced Physiotherapy Center, Ghodasar, Ahmedabad
        </p>
      </MotionReveal>

      {/* Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 space-y-8 text-sm text-slate-600 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" />
            1. Patient Data & Medical Confidentiality
          </h2>
          <p>
            At Keshav Advanced Physiotherapy Center, patient confidentiality is held to the highest ethical medical standards. Any personal contact details, health histories, surgical summaries, or medical scans shared through our website, appointment forms, or WhatsApp consultations are strictly confidential.
          </p>
          <p>
            Your clinical records are accessible solely to our authorized physiotherapy practitioners (led by Dr. Nikunj Joshi and Dr. Priyanshi Vani) and clinical coordinators for the sole purpose of providing targeted healthcare and scheduling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            2. Medical Information & Clinical Disclaimer
          </h2>
          <p>
            The educational content, condition overviews, and modality descriptions published on this website are provided strictly for general patient information and guidance. They do not constitute formal medical diagnosis or replace a personalized clinical examination by a licensed medical practitioner.
          </p>
          <p>
            As stated across our clinical protocols: <strong className="text-slate-800">“Equipment supports treatment but does not replace clinical assessment, active rehabilitation or appropriate medical care.”</strong> Patients experiencing red-flag symptoms (severe trauma, sudden bowel/bladder dysfunction, sudden severe weakness) must seek immediate emergency medical care.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-600" />
            3. Home Physiotherapy Service Boundaries
          </h2>
          <p>
            Our home visit services are offered within designated localities of South Ahmedabad (including Ghodasar, Maninagar, Isanpur, Vatva, Kankaria, C.T.M, Jasodanagar). Allocation of visiting physiotherapists depends on schedule availability, travel feasibility, and clinical skill matching. Standard service and travel charges apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800">
            4. Contact Our Privacy Officer
          </h2>
          <p>
            For any questions regarding our data practices or terms, please contact:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
            <div className="font-bold">{CLINIC_INFO.name}</div>
            <div>{CLINIC_INFO.address}</div>
            <div>Clinic Helpline: {CLINIC_INFO.phone} | Home Care: {CLINIC_INFO.homePhone} | Email: {CLINIC_INFO.email}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
