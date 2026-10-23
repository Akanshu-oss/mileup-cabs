import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Select Route & Vehicle',
      description: 'Enter your pickup point, destination, date, and select either our Executive Sedan (Swift Dzire) or Family MPV (Ertiga 6+1).'
    },
    {
      step: '02',
      title: 'Receive Flat Quote',
      description: 'Our 24x7 booking desk provides an all-inclusive quote over WhatsApp or phone with zero hidden tolls, state taxes, or surprises.'
    },
    {
      step: '03',
      title: 'Ride with Confidence',
      description: 'A verified, mountain-trained chauffeur arrives 15 minutes early in a spotless, sanitized car with dedicated luggage space.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0ED] border border-[#E5E4DF] text-xs font-semibold text-[#D99A20] uppercase tracking-wider mb-3">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#686B73]">
            Effortless booking from initial inquiry to curbside arrival.
          </p>
        </div>

        {/* 3 Numbered Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E5E4DF] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#D99A20] font-mono tracking-tight mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#17191D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#686B73] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0ED] text-[11px] font-semibold text-[#17191D] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A20]"></span>
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Quick Support Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F0F0ED] border border-[#E5E4DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center sm:text-left">
            <span className="font-bold text-[#17191D]">Need urgent cab dispatch within 30–45 minutes?</span>
            <p className="text-[#686B73] mt-0.5">Our 24x7 desk in Kashipur is active around the clock for immediate pickups.</p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="px-5 py-2.5 rounded-xl bg-[#17191D] hover:bg-[#D99A20] text-white text-xs font-bold tracking-wide transition shadow-sm shrink-0"
          >
            Call Desk: +91 {SITE_CONFIG.primaryPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
