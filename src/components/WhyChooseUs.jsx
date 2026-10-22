import React from 'react';
import { Shield, Clock, PhoneForwarded, Map, Award, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Clock,
      title: "Guaranteed Punctual, Zero Cancellations",
      desc: "Unlike app-based aggregators that cancel early-morning airport trips, we confirm your ride in advance with a 100% on-time arrival guarantee."
    },
    {
      icon: Award,
      title: "10+ Years Hill & Highway Mastery",
      desc: "Driven by verified professionals with deep expertise on high-altitude Uttarakhand roads, Kumaon ghats, and mountain routes."
    },
    {
      icon: PhoneForwarded,
      title: "Direct Booking Desk & Route Expertise",
      desc: "Speak directly with experienced transport coordinators who know exact route timings, road conditions, and transparent flat fares."
    },
    {
      icon: Shield,
      title: "Authorized, Insured & Verified Fleet",
      desc: "Fully compliant and verified vehicles with passenger insurance, fitness certification, and expert drivers for highways and hills."
    },
    {
      icon: Map,
      title: "Nepal Cross-Border Specialists",
      desc: "No vehicle switching at the border. We guide and handle full border pass, customs tax (Bhansar), and direct hotel drop."
    },
    {
      icon: Sparkles,
      title: "Spotless & Sanitized Interiors",
      desc: "Both our Executive Sedan and 6+1 MPV are washed, vacuumed, and air-conditioned before every trip for optimal travel comfort."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            Corporate &amp; Outstation Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reliability, Transparency &amp; Verified Safety
          </h2>
          <p className="mt-4 text-base text-slate-600">
            For over a decade, regular corporate executives, pilgrims, and families across Delhi NCR, Uttarakhand, and northern hubs have trusted MileUp Cabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-lg transition duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
