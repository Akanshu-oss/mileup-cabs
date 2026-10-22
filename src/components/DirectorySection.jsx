import React, { useState } from 'react';
import { MapPin, Plane, Car, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function DirectorySection() {
  const [activeTab, setActiveTab] = useState('outstation');

  const getRouteWhatsApp = (routeLabel) => {
    const text = `Hello! I would like to check the cab fare and availability for *${routeLabel}*. Please share details for Sedan and 6+1 MPV.`;
    return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              Regional Network &amp; Transfer Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Popular Cab Services &amp; Transfer Hubs
            </h2>
          </div>

          {/* Directory Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
            <button
              type="button"
              onClick={() => setActiveTab('outstation')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'outstation' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Top Outstation Routes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('airports')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'airports' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Airport Cabs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('hourly')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'hourly' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Hourly Rentals
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cities')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'cities' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cities Covered
            </button>
          </div>
        </div>

        {/* Tab 1: Top Outstation Routes */}
        {activeTab === 'outstation' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.directory.outstation.map((item, idx) => (
              <a
                key={idx}
                href={getRouteWhatsApp(item.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 p-4 rounded-2xl transition duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-blue-400 font-semibold mb-1">
                    <span>{item.distance}</span>
                    <span>{item.time}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{item.route}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-emerald-400 font-bold">
                  <span>Enquire Fare</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Tab 2: Airport Cabs */}
        {activeTab === 'airports' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.directory.airports.map((item, idx) => (
              <a
                key={idx}
                href={getRouteWhatsApp(item.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 p-4 rounded-2xl transition duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-emerald-400 font-semibold mb-1">
                    <span>{item.type}</span>
                    <span>{item.time}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{item.route}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-blue-400 font-bold">
                  <span>Flight Pickup / Drop</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Tab 3: Hourly Rentals */}
        {activeTab === 'hourly' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE_CONFIG.directory.hourly.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{pkg.label}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{pkg.desc}</p>
                </div>
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello! I want to enquire about the ${pkg.label}. Please share rates for Sedan & MPV.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Hourly Rental</span>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Cities Covered */}
        {activeTab === 'cities' && (
          <div className="bg-slate-800/40 border border-slate-700/80 rounded-3xl p-6 sm:p-8">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              Regular Service Nodes &amp; Chauffeur Coverage:
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SITE_CONFIG.directory.cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:border-blue-500 hover:text-white transition cursor-default"
                >
                  • {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-700/60">
              *Available for one-way drops, return airport transfers, wedding guest transport, and long-term corporate vehicle leases.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
