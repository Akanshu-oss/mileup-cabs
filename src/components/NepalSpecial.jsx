import React from 'react';
import { Compass, ShieldCheck, MapPin, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function NepalSpecial() {
  const handleNepalBooking = () => {
    const text = `Hello! I would like to enquire about cab service for an India to Nepal Tour. Please share details on vehicle rates, border customs (Bhansar), and permit assistance.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="nepal" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Secondary Service: Cross-Border Outstation
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              India to Nepal <span className="text-emerald-400">Direct Cab Service</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Doorstep travel from Delhi NCR, Uttarakhand, or any northern city directly into Nepal. Full assistance for Banbasa / Sonauli vehicle customs (Bhansar) and tourist road permits.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={handleNepalBooking()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Nepal Query on WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call For Advice</span>
            </a>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            {
              title: "Banbasa Border Assistance",
              desc: "Complete support for vehicle customs (Bhansar) and tourist tax formalities at Banbasa / Sonauli."
            },
            {
              title: "Kathmandu & Pokhara",
              desc: "Direct private cab drops to Pashupatinath temple, Phewa Lake, Sarangkot, and city hotels."
            },
            {
              title: "Lumbini & Janakpur",
              desc: "Pilgrimage circuits to Lord Buddha's birthplace and Janaki temple with flexible day halts."
            },
            {
              title: "No Vehicle Switching",
              desc: "Travel comfortably without the hassle of changing cars or boarding crowded cross-border buses."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/60">
              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <span>*Indian citizens only require a valid Voter ID Card or Passport.</span>
          <span className="text-emerald-400 font-medium">Available on advance booking with Sedan or 6+1 MPV</span>
        </div>

      </div>
    </section>
  );
}
