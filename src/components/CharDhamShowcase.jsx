import React from 'react';
import { Mountain, MapPin, Compass, ArrowRight, MessageCircle, Phone, CheckCircle2, ShieldCheck, Sun, Car, Users, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function CharDhamShowcase() {
  const getSingleDhamWhatsApp = (dhamName) => {
    const text = `Namaste! I would like to enquire about Sedan cab booking for *${dhamName}*. Please share vehicle options and quote.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getCompletePackageWhatsApp = (carType = 'Executive Sedan (4+1)') => {
    const text = `Namaste! I want to enquire about the *Complete Char Dham Yatra Cab Package* (Yamunotri, Gangotri, Kedarnath & Badrinath) for *${carType}*. Please share the 9-12 days itinerary and best flat-rate quote.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="chardham-darshan" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Golden / Mountain Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Sun className="w-4 h-4 text-amber-400" />
            Sacred Devbhoomi Uttarakhand Pilgrimage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Holy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">Char Dham Yatra</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Darshan of all four sacred shrines in individual frames. Safe, dependable outstation cab packages driven by senior mountain chauffeurs.
          </p>
        </div>

        {/* 4 Dham Individual Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONFIG.dhams.map((dham) => (
            <div
              key={dham.id}
              className="rounded-3xl border border-slate-700/80 bg-slate-800/60 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-amber-500/10 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Frame */}
                <div className="h-52 overflow-hidden relative bg-slate-900">
                  <img
                    src={dham.image}
                    alt={dham.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/char-dham-yatra.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Order Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                    {dham.order}
                  </div>
                  {/* Altitude Tag */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1">
                    <Mountain className="w-3 h-3 text-amber-400" />
                    <span>{dham.altitude}</span>
                  </div>
                </div>

                {/* Frame Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      {dham.tag}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {dham.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      Presiding: <strong className="text-slate-200">{dham.deity}</strong>
                    </p>
                  </div>

                  {/* Highlights Box */}
                  <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-700/60 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{dham.base}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {dham.highlights}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={getSingleDhamWhatsApp(dham.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-700/80 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs flex items-center justify-center gap-2 transition duration-200 border border-slate-600 hover:border-amber-400"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire {dham.name.split(' ')[0]} Cab</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Complete 4-Dham Unified Package Banner - Highlighting Sedan */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-850 to-slate-800 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* 4 Dham Collage Thumbnail */}
            <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden shrink-0 border border-amber-500/40 shadow-xl bg-slate-900">
              <img
                src="/images/char-dham-yatra.jpg"
                alt="Char Dham Shrines (Badrinath, Kedarnath, Gangotri, Yamunotri)"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Complete 4-Dham Pilgrimage Package
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Best-Selling 4 Dham Tour: <span className="text-amber-300">Executive Sedan (4+1)</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For couples, senior citizens, and families up to 4 members, our <strong className="text-amber-300">Sedan (4+1)</strong> is the #1 recommended choice for Char Dham Yatra. Enjoy smooth hill maneuverability on narrow mountain roads, easy parking at temple bases, full luggage boot capacity, and the most cost-effective private travel experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-1 justify-center lg:justify-start text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-amber-300"><CheckCircle2 className="w-4 h-4 text-amber-400" /> #1 Recommended: Sedan (1-4 Pax)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-slate-400" /> 6+1 MPV for 5-7 Pax</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Tempo Traveller for Groups</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href={getCompletePackageWhatsApp('Executive Sedan 4+1')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>Enquire 4-Dham Sedan Package</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.primaryPhone}`}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-slate-700 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Desk: +91 {SITE_CONFIG.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
