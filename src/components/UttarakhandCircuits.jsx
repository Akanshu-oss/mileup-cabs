import React from 'react';
import { Plane, Mountain, Compass, MapPin, Clock, MessageCircle, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function UttarakhandCircuits() {
  const getCircuitWhatsApp = (title) => {
    const text = `Hello! I would like to enquire about the cab package for *${title}*. Please share itinerary options and fares.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getAirportWhatsApp = (name) => {
    const text = `Hello! I want to book an airport cab transfer for *${name}*. Please share rates for Executive Sedan and 6+1 MPV.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Dedicated Hill Leisure circuits (excluding Char Dham which has its own showcase below)
  const leisureCircuits = [
    {
      title: "Jim Corbett • Nainital • Kainchi Dham",
      route: "Ramnagar Safari • Naini Lake • Neem Karoli Baba Ashram",
      duration: "2 - 4 Days",
      desc: "Our core local specialty. Seamless resort transfers in Corbett, jungle safari gates, boating on Naini Lake, and blessings at Kainchi Dham.",
      badge: "Local Specialty"
    },
    {
      title: "Haridwar • Rishikesh • Dehradun • Mussoorie",
      route: "Ganga Aarti • White Water Rafting • Queen of Hills",
      duration: "3 - 5 Days",
      desc: "The quintessential Uttarakhand leisure and spiritual route. Smooth highway and hill driving with scenic halts and sunset mountain views.",
      badge: "Popular Leisure"
    }
  ];

  return (
    <section id="circuits" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: AIRPORT TRANSFERS ================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Plane className="w-3.5 h-3.5 text-blue-600" />
              24x7 Airport Transfers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Punctual Airport Pickups &amp; Drops
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Guaranteed on-time arrivals with flight tracking. Our Executive Sedan ensures full trunk space for international luggage with zero CNG queue delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE_CONFIG.airports.map((airport, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-sm hover:shadow-lg hover:border-blue-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                      {airport.code}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {airport.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1.5">{airport.name}</h3>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-600" /> {airport.distance}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {airport.time}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {airport.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href={getAirportWhatsApp(airport.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <Plane className="w-3.5 h-3.5 text-blue-400" />
                    <span>Book Airport Transfer</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: POPULAR LEISURE CIRCUITS ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Mountain className="w-3.5 h-3.5 text-emerald-700" />
              Weekend &amp; Hill Station Tours
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Uttarakhand Leisure Circuits
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore tiger safaris, scenic Himalayan lakes, and spiritual Ganga aarti in private chauffeur comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leisureCircuits.map((circ, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-500 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold px-3 py-0.5 rounded-full bg-emerald-600 text-white">
                      {circ.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {circ.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1.5">{circ.title}</h3>
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-50/80 p-2 rounded-xl border border-emerald-100 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{circ.route}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {circ.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={getCircuitWhatsApp(circ.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Fare on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.primaryPhone}`}
                    className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
