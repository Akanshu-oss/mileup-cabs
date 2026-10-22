import React from 'react';
import { MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function RoutesSection() {
  const getRouteWhatsAppLink = (from, to) => {
    const text = `Hello! I would like to check the cab fare from *${from}* to *${to}*. Please share the best rate for Sedan and 6+1 MPV.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="routes" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            Frequent Travel Routes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Outstation &amp; Intercity Runs
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Transparent one-way and round-trip fares with punctual doorstep pickups across Delhi NCR, Uttarakhand, and North Indian destinations.
          </p>
        </div>

        {/* Routes Grid - Exactly 9 cards in a 3x3 balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.routes.map((route, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:bg-white transition flex flex-col justify-between"
            >
              <div>
                {/* Route Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    {route.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{route.time}</span>
                  </div>
                </div>

                {/* Cities */}
                <div className="space-y-1 mb-3">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">From</div>
                  <div className="text-lg font-black text-slate-900">{route.from}</div>
                  <div className="flex items-center gap-1 text-blue-600 my-1">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-xs font-bold">{route.distance}</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">To</div>
                  <div className="text-lg font-black text-slate-900">{route.to}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mt-3 border-t border-slate-200/80 pt-3">
                  {route.highlights}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-slate-200/80">
                <a
                  href={getRouteWhatsAppLink(route.from, route.to)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-300 hover:border-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enquire Fare on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Route Banner */}
        <div className="mt-12 text-center bg-blue-50 border border-blue-200 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto">
          <h4 className="text-base sm:text-lg font-bold text-blue-950">
            Planning a custom hill station holiday or multi-city circuit?
          </h4>
          <p className="text-xs sm:text-sm text-blue-800 mt-1 max-w-xl mx-auto">
            We provide custom point-to-point quotes with complete transparency on state taxes, tolls, and driver allowances.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition"
            >
              Call Desk: +91 {SITE_CONFIG.primaryPhone}
            </a>
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I want a custom quotation for an outstation cab.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
