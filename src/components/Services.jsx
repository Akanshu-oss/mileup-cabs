import React from 'react';
import { Plane, Compass, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Services() {
  const services = [
    {
      id: 'airport',
      icon: Plane,
      title: 'Airport Transfers',
      badge: '24x7 Punctual',
      tagline: 'Delhi IGI (T1, T2, T3) • Pantnagar • Dehradun',
      description: 'Reliable, doorstep airport pickups and drops. We track flight statuses in real time to guarantee on-time curbside reception with zero waiting stress.',
      features: [
        'Doorstep pickup directly to Terminal 1, 2, or 3',
        '100% full trunk boot space for international luggage',
        'Flight delay monitoring with complimentary waiting time',
        'Fixed, transparent pricing with all tolls itemized'
      ],
      actionText: 'Book Airport Cab'
    },
    {
      id: 'outstation',
      icon: Compass,
      title: 'Outstation Travel',
      badge: 'One-Way & Round-Trip',
      tagline: 'Delhi NCR • Uttarakhand • Hill Circuits • Nepal',
      description: 'Private chauffeur-driven outstation journeys between Delhi NCR, Kashipur, Jim Corbett, Nainital, Haridwar, Rishikesh, and Nepal cross-border routes.',
      features: [
        'Dedicated mountain-certified professional chauffeurs',
        'Clean Executive Sedans (Dzire) & 6+1 Family MPVs (Ertiga)',
        'Flexible rest halts and customized route itineraries',
        'Cross-border assistance at Banbasa border for Nepal trips'
      ],
      actionText: 'Book Outstation Trip'
    },
    {
      id: 'local',
      icon: Clock,
      title: 'Local & Chauffeur Services',
      badge: 'Flexible Hire',
      tagline: 'Hourly Rental • Industrial Visits • Hill Tours',
      description: 'Dedicated car and driver at your disposal for local city runs, industrial plant visits (SIIDCUL Kashipur / Rudrapur), wedding events, and customized hill tours.',
      features: [
        'Flexible half-day (4h/40km) and full-day (8h/80km) packages',
        'Comfortable air-conditioned sanitized cabin throughout the day',
        'Priority service for corporate guests & industrial executives',
        'Tailored multi-day pilgrimage & resort packages'
      ],
      actionText: 'Book Local Chauffeur'
    }
  ];

  const getServiceWhatsAppUrl = (title) => {
    const message = `Hello! I would like to inquire about booking your ${title} with MileUp Cabs. Please provide current availability and flat rate details.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F0F0ED] border-y border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E4DF] text-xs font-semibold text-[#D99A20] uppercase tracking-wider mb-3">
            Core Travel Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            Thoughtful Travel, Tailored to You.
          </h2>
          <p className="mt-3 text-base text-[#686B73] leading-relaxed">
            We focus exclusively on three dedicated chauffeur services to ensure uncompromising reliability, punctuality, and passenger comfort.
          </p>
        </div>

        {/* 3 Balanced Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E4DF] shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F0ED] border border-[#E5E4DF] flex items-center justify-center text-[#17191D]">
                      <IconComponent className="w-6 h-6 text-[#17191D]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#D99A20] bg-[#FDF8F0] px-3 py-1 rounded-full border border-[#EAD7B0]">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17191D]">
                    {svc.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#D99A20] mt-1 mb-3">
                    {svc.tagline}
                  </div>
                  <p className="text-xs text-[#686B73] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F0F0ED] text-xs text-[#17191D]">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D99A20] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-[#F0F0ED]">
                  <a
                    href={getServiceWhatsAppUrl(svc.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#FAF9F6] hover:bg-[#17191D] text-[#17191D] hover:text-[#FAF9F6] border border-[#E5E4DF] font-bold text-xs flex items-center justify-center gap-2 transition"
                  >
                    <span>{svc.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
