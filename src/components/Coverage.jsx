import React from 'react';
import { ShieldCheck, MapPin, Check, Car, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Coverage() {
  const fleetOptions = [
    {
      name: 'Executive Sedan',
      model: 'Maruti Suzuki Swift Dzire',
      capacity: '4 Passengers + Chauffeur',
      luggage: '100% Dedicated Boot Space',
      badge: 'Primary Fleet',
      bestFor: 'Airport drops, business travel, couples & small families',
      points: [
        'Dedicated luggage trunk accommodating 2-3 large travel suitcases',
        'Exceptional agility on narrow mountain roads & hill curves',
        'Chilled automatic climate control and smooth highway suspension'
      ]
    },
    {
      name: 'Family MPV',
      model: 'Maruti Suzuki Ertiga (6+1)',
      capacity: '6 Passengers + Chauffeur',
      luggage: 'Flexible Boot + Top Carrier',
      badge: 'Family & Hill Tours',
      bestFor: 'Extended family groups, Corbett resorts, and Char Dham tours',
      points: [
        'Spacious 3-row seating with generous legroom for 6 passengers',
        'Dual air-conditioning with dedicated rear ceiling vents',
        'Optional secure roof luggage carrier for additional travel bags'
      ]
    }
  ];

  const popularRoutes = [
    { route: 'Delhi IGI Airport (DEL) ↔ Kashipur', distance: '240 km', time: '4.5 - 5.0 Hrs', desc: 'Doorstep pickup to T1, T2, or T3 with flight delay monitoring.' },
    { route: 'Delhi NCR ↔ Jim Corbett (Ramnagar)', distance: '260 km', time: '5.0 Hrs', desc: 'Direct resort gate transfers and safari junction connections.' },
    { route: 'Delhi NCR ↔ Nainital & Bhimtal', distance: '315 km', time: '6.5 Hrs', desc: 'Scenic mountain highway run with hill-certified chauffeurs.' },
    { route: 'Delhi NCR ↔ Haridwar & Rishikesh', distance: '225 km', time: '4.5 Hrs', desc: 'Pilgrimage and yoga retreat transfers via smooth expressway.' },
    { route: 'Kashipur ↔ Pantnagar Airport (PGH)', distance: '65 km', time: '1.2 Hrs', desc: 'Fast regional flight transfer and SIIDCUL industrial connects.' },
    { route: 'Delhi / Uttarakhand ↔ Banbasa (Nepal)', distance: '340 km', time: '7.0 Hrs', desc: 'Direct border transfer with Bhansar customs & permit guidance.' }
  ];

  return (
    <section id="coverage" className="py-20 sm:py-28 bg-[#F0F0ED] border-t border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E4DF] text-xs font-semibold text-[#D99A20] uppercase tracking-wider mb-3">
            Fleet &amp; Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            Our Fleet &amp; Frequent Routes
          </h2>
          <p className="mt-3 text-base text-[#686B73] leading-relaxed">
            Operating from our central desk in Kashipur with daily scheduled runs across Delhi NCR, Uttarakhand, and North India.
          </p>
        </div>

        {/* Fleet Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {fleetOptions.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E4DF] shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#D99A20] bg-[#FDF8F0] px-3 py-1 rounded-full border border-[#EAD7B0]">
                    {car.badge}
                  </span>
                  <div className="text-xs font-semibold text-[#686B73]">
                    {car.capacity}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#17191D]">
                  {car.name}
                </h3>
                <div className="text-xs font-medium text-[#D99A20] mt-0.5 mb-2">
                  {car.model}
                </div>
                <p className="text-xs text-[#686B73] mb-6">
                  Best for: {car.bestFor}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#F0F0ED] text-xs text-[#17191D]">
                  {car.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D99A20] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F0F0ED] flex items-center justify-between text-xs">
                <span className="text-[#686B73]">Luggage: <strong className="text-[#17191D]">{car.luggage}</strong></span>
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello! I want to check availability for ${car.name} (${car.model}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#17191D] hover:text-[#D99A20] transition"
                >
                  Check Availability &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Coverage & Frequent Routes */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E5E4DF] shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          <div className="border-b border-[#E5E4DF] pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-[#17191D]">
                Frequent Travel Corridors
              </h3>
              <p className="text-xs text-[#686B73] mt-1">
                Verified highway distances via Google Maps with door-to-door pickup.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#17191D] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D99A20]" />
              <span>Base: Kashipur, Uttarakhand</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {popularRoutes.map((rt, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E4DF] space-y-1.5">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-[#17191D] text-sm">{rt.route}</span>
                </div>
                <div className="text-[#D99A20] font-semibold text-[11px]">
                  {rt.distance} • {rt.time}
                </div>
                <p className="text-[#686B73] text-[11px] leading-relaxed pt-1">
                  {rt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Genuine Trust Commitments Banner */}
          <div className="mt-8 pt-8 border-t border-[#E5E4DF] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#17191D]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D99A20] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold text-[#17191D]">Mountain-Trained Drivers</strong>
                <span className="text-[#686B73]">Over 10 years experience on steep ghats, hill turns, and fog conditions.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D99A20] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold text-[#17191D]">All-Inclusive Pricing</strong>
                <span className="text-[#686B73]">Zero hidden driver allowance, fuel surcharges, or unannounced fees.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D99A20] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold text-[#17191D]">Guaranteed Punctuality</strong>
                <span className="text-[#686B73]">Chauffeurs report 15 minutes early for scheduled airport and morning departures.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
