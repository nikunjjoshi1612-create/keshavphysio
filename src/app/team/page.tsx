import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  Home,
  Building2,
  HeartPulse,
  Users,
  MapPin
} from "lucide-react";
import {
  TEAM_MEMBERS,
  TEAM_PHILOSOPHY,
  CLINIC_INFO,
  CLINICAL_AWARDS
} from "@/data/physioData";
import MotionReveal from "@/components/MotionReveal";
import AwardsGallery from "@/components/AwardsGallery";

export const metadata = {
  title: "Our Clinical Team | Keshav Advanced Physiotherapy Center",
  description: "Meet Dr. Nikunj Arvindkumar Joshi (MPT Orthopaedics) and Dr. Priyanshi D. Vani (MPT Sports), verified clinical specialists in Ahmedabad."
};

export default function TeamPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <MotionReveal direction="up">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Clinical Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Clinical Leadership
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our center is guided by highly qualified physiotherapy professionals with recognized postgraduate degrees, specialized sports fellowships, and a deep commitment to ethical patient rehabilitation.
          </p>
        </MotionReveal>

        <MotionReveal direction="up" delay={0.1}>
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-teal-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Verified Credentials Notice: </span>
              In strict adherence to medical ethics, our team presents only verified academic qualifications, recognized fellowships, and clinical areas of expertise.
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Leadership Profiles */}
      <div className="space-y-12">
        {TEAM_MEMBERS.map((member, idx) => (
          <MotionReveal
            key={member.id}
            direction={idx % 2 === 0 ? "left" : "right"}
            delay={0.1}
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-start hover:border-teal-300 transition-all">
              {/* Doctor Photo */}
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-xs bg-slate-100 mx-auto lg:mx-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                />
              </div>

              {/* Bio & Clinical Focus */}
              <div className="space-y-5 flex-1">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                    {member.designation}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {member.name}
                  </h2>
                  <div className="inline-block px-3 py-1 rounded-lg bg-teal-50 border border-teal-200/60 text-xs font-semibold text-teal-800 mt-2">
                    {member.qualification}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Personal Clinical Quote */}
                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-teal-600 text-xs sm:text-sm text-slate-700 italic">
                  &ldquo;{member.quote}&rdquo;
                </div>

                {/* Clinical Focus Badges */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                    Clinical Focus & Specialization:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.clinicalFocus.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-3 py-1 rounded-xl bg-slate-100/80 text-slate-700 font-medium border border-slate-200/60"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <Link
                    href={`/contact?therapist=${encodeURIComponent(member.name)}#contact-form`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-teal-200" />
                    <span>Consult with {member.name.split(" ")[0]} {member.name.split(" ")[1]}</span>
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      {/* National Honors, Clinical Awards & Media Recognition */}
      <div className="space-y-8 pt-4">
        <MotionReveal direction="up">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              Clinical Milestones & Honors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              National Awards & Media Recognition
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our clinical leaders and center have been recognized at premier national medical institutions, including AIIMS New Delhi, celebrating patient-centered excellence and evidence-based physiotherapy.
            </p>
          </div>
        </MotionReveal>

        <AwardsGallery awards={CLINICAL_AWARDS} />
      </div>

      {/* Team Philosophy Section */}
      <MotionReveal direction="up">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-teal-50/90 to-white border border-teal-200/80 text-center space-y-4 max-w-4xl mx-auto shadow-xs">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block">
            Our Core Patient Care Philosophy
          </span>
          <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic max-w-2xl mx-auto">
            &ldquo;{TEAM_PHILOSOPHY}&rdquo;
          </blockquote>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            We prioritize active patient education and gradual movement independence over passive dependency on machines or long-term clinic retention.
          </p>
        </div>
      </MotionReveal>

      {/* In-Home Clinical Standards */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-8">
        <MotionReveal direction="up">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
              In-Home Clinical Standards
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Our Home Physiotherapy Team Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              For home visits, the assigned physiotherapist is chosen according to availability, location, patient mobility requirements, and clinical specialty matching.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-teal-800">01. Home Assessment</span>
            <p className="text-xs text-slate-600">
              Comprehensive functional screening of stairs, beds, chairs, and home fall hazards.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-teal-800">02. Tailored Plan</span>
            <p className="text-xs text-slate-600">
              Individualized exercise regimen adapted directly to the patient&apos;s living environment.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-teal-800">03. Caregiver Training</span>
            <p className="text-xs text-slate-600">
              Hands-on training for family members on safe transfer mechanics and assist protocols.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-teal-800">04. Progress Milestones</span>
            <p className="text-xs text-slate-600">
              Structured reassessment to transition safely from bedside care to independent walking.
            </p>
          </div>
        </div>

        {/* Coverage Note */}
        <div className="p-4 rounded-2xl bg-slate-100/70 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Service Coverage Notice: </span>
              Home visits are actively served in Ghodasar, Maninagar, Isanpur, Vatva, Kankaria, C.T.M, Jasodanagar, and adjacent South Ahmedabad localities. Standard service and travel charges apply based on distance.
            </div>
          </div>
          <a
            href={`tel:${CLINIC_INFO.homePhoneRaw}`}
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Home Care: {CLINIC_INFO.homePhone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
