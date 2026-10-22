import React from 'react';
import { Users, Wind, Check, Phone, MessageCircle, Luggage, ShieldCheck, Sparkles, Car } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Fleet() {
  const getWhatsAppLink = (carName, hasCarrier) => {
    const carrierNote = hasCarrier ? " with extra top luggage carrier" : "";
    const text = `Hello! I would like to enquire about booking the ${carName}${carrierNote}. Please share fare and availability.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Executive Vehicle Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Spotless, Chauffeur-Driven Fleet
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Our <strong className="text-slate-900">Executive Sedan (4+1)</strong> is the #1 recommended choice for Char Dham Yatra and outstation drops, accompanied by our spacious <strong className="text-slate-900">6+1 Seater MPV</strong> and group Tempo Travellers.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.fleet.map((car) => (
            <div
              key={car.id}
              className={`rounded-3xl border overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col justify-between ${
                car.id === 'sedan'
                  ? 'border-blue-400 bg-gradient-to-b from-blue-50/50 via-white to-white ring-2 ring-blue-500/30 shadow-lg'
                  : car.id === 'mpv'
                  ? 'border-slate-200 bg-white shadow-sm'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="p-6 pb-4">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        car.id === 'sedan'
                          ? 'bg-blue-600 text-white'
                          : car.isOwned
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      {car.id === 'sedan' ? '⭐ #1 Best Value & Popular' : car.isOwned ? 'Dedicated Fleet' : 'Commercial Partner Network'}
                    </span>
                    <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg">
                      {car.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900">{car.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{car.modelClass} • {car.category}</p>
                </div>

                {/* Sedan Advantage Callout */}
                {car.id === 'sedan' && (
                  <div className="mx-6 mb-4 p-3 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-blue-900">#1 Choice for Char Dham &amp; Outstation:</strong>
                      Full 100% luggage boot space for 2-3 large bags. Exceptional mountain agility on narrow Himalayan ghats, supreme comfort, and lowest travel costs for 1-4 passengers.
                    </div>
                  </div>
                )}

                {/* 6+1 Seater MPV Roof Carrier Callout */}
                {car.id === 'mpv' && (
                  <div className="mx-6 mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
                    <Luggage className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-emerald-900">Roof Luggage Carrier Option:</strong>
                      Equipped with a sturdy top luggage carrier on request. Easily handles extra suitcases, backpacks, and hill tour baggage so 6-7 passengers enjoy uncrowded legroom.
                    </div>
                  </div>
                )}

                {/* Specs Strip */}
                <div className="px-6 py-3 bg-slate-100/70 border-y border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-1 font-bold text-slate-900">
                      <Users className="w-4 h-4 text-blue-600" />
                      {car.capacity.split(' ')[0]} Seater
                    </span>
                    <span className="text-[11px] text-slate-500">{car.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-slate-200 px-1">
                    <span className="flex items-center gap-1 font-bold text-slate-900">
                      <Luggage className="w-4 h-4 text-emerald-600" /> Luggage
                    </span>
                    <span className="text-[11px] text-slate-500 line-clamp-1">{car.hasCarrier ? 'Boot + Roof Rack' : '100% Trunk Boot'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-1 font-bold text-slate-900">
                      <Wind className="w-4 h-4 text-indigo-600" /> Climate
                    </span>
                    <span className="text-[11px] text-slate-500">Chilled AC</span>
                  </div>
                </div>

                {/* Description & Features */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {car.description}
                  </p>

                  <div className="space-y-2 text-xs font-semibold text-slate-700">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(car.name, car.hasCarrier)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.primaryPhone}`}
                  className="py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call For Rate</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Char Dham & Outstation Sedan Preference */}
        <div className="mt-12 bg-slate-900 text-slate-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase mb-2">
              <Car className="w-3.5 h-3.5 text-blue-400" />
              Higher Travel Value &amp; Mountain Comfort
            </div>
            <h4 className="text-xl font-bold text-white">Traveling with 1 to 4 Passengers? Book our Sedan!</h4>
            <p className="text-sm text-slate-400 max-w-2xl">
              Enjoy private comfort, effortless overtaking on mountain curves, full luggage trunk space, and our most economical flat-rate fares for Char Dham Yatra and outstation runs.
            </p>
          </div>
          <a
            href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I want to book an Executive Sedan (4+1). Please share rates.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-blue-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Sedan Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
