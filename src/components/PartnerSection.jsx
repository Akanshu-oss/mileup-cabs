import React, { useState } from 'react';
import { 
  Handshake, 
  Car, 
  Banknote, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function PartnerSection() {
  const [partnerName, setPartnerName] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerCity, setPartnerCity] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('Executive Sedan (4+1)');
  const [plateType, setPlateType] = useState('Commercial Yellow Plate');
  const [hillExperience, setHillExperience] = useState('Yes, Experienced with Uttarakhand Hills');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = 
      `🤝 *New Vehicle / Driver Partner Application*\n\n` +
      `👤 *Partner Name:* ${partnerName.trim() || 'Not provided'}\n` +
      `📱 *Contact Phone:* ${partnerPhone.trim() || 'Not provided'}\n` +
      `📍 *Operating Base City:* ${partnerCity.trim() || 'Not provided'}\n` +
      `🚗 *Vehicle Category:* ${vehicleCategory}\n` +
      `🚘 *Vehicle Model & Year:* ${vehicleModel.trim() || 'Not specified'}\n` +
      `🏷 *Plate / Permit:* ${plateType}\n` +
      `⛰️ *Hill Driving Experience:* ${hillExperience}\n\n` +
      `Hello MileUp Cabs team! I would like to attach my vehicle / partner with your network for outstation, airport, and tour duties. Please guide me with onboarding.`;

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const partnerBenefits = [
    {
      icon: Banknote,
      title: "Guaranteed & Timely Settlements",
      desc: "Transparent fares with prompt payment settlements directly to your bank account or cash. Zero hidden cuts."
    },
    {
      icon: MapPin,
      title: "High-Value Outstation & Airport Runs",
      desc: "Get long-distance duties like Delhi IGI Airport, Char Dham, Corbett, and Nainital instead of low-paying short city rides."
    },
    {
      icon: ShieldCheck,
      title: "Dignified Corporate & Family Clients",
      desc: "Drive verified families, pilgrims, and corporate executives who treat drivers with utmost respect."
    },
    {
      icon: Clock,
      title: "100% Flexible Driving Schedule",
      desc: "Drive full-time with our network or pick up lucrative outstation trips during your vehicle's idle days. No lock-in."
    }
  ];

  return (
    <section id="partner" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-4 h-4 text-amber-400" />
            Driver-Cum-Owners &amp; Fleet Operators
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Attach Your Cab &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">Grow Your Daily Earnings</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Own a Sedan, 6+1 MPV, or Tempo Traveller? Partner with <strong className="text-white">MileUp Cabs</strong>. Get continuous outstation bookings, guaranteed payments, and 24x7 route support across North India.
          </p>
        </div>

        {/* Two-Column Layout: Left (Benefits & Eligibility), Right (Application Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Benefits & Fleet Requirments (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 4 Core Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partnerBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-amber-400/50 transition-all duration-200 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Vehicles We Are Onboarding */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Car className="w-4 h-4" />
                Vehicles Currently Accepted
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-bold text-white">⭐ Executive Sedans</div>
                  <div className="text-slate-400 mt-1">Dzire, Aura, Tigor, Etios</div>
                  <div className="text-amber-400 font-semibold mt-1">Highest Booking Volume</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-bold text-white">🚙 6+1 &amp; 7+1 MPVs</div>
                  <div className="text-slate-400 mt-1">Ertiga, Carens, Innova Crysta</div>
                  <div className="text-emerald-400 font-semibold mt-1">Hill &amp; Family Circuits</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-bold text-white">🚐 Tempo Travellers</div>
                  <div className="text-slate-400 mt-1">12, 17, 20 &amp; 26 Seaters</div>
                  <div className="text-blue-400 font-semibold mt-1">Pilgrimages &amp; Char Dham</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                *We welcome individual driver-owners, commercial taxi permit holders, and local travel fleet operators across Delhi NCR, Uttarakhand, and Western UP.
              </p>
            </div>

            {/* Direct Calling Hotline for Partners */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs text-blue-300 font-bold uppercase tracking-wider">Prefer Speaking Directly?</div>
                <div className="text-sm font-black text-white mt-0.5">Call our Chauffeur &amp; Fleet Desk directly</div>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={`tel:${SITE_CONFIG.primaryPhone}`}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-blue-600/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 {SITE_CONFIG.primaryPhone}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.secondaryPhone}`}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition border border-slate-700"
                >
                  <span>Desk 2</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Partner Onboarding Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Fast-Track Registration</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
              Join Our Driver Network
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill details below. Our onboarding desk will connect with you on WhatsApp within 30 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Singh"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs sm:text-sm font-semibold outline-none transition"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Calling Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98370XXXXX"
                  value={partnerPhone}
                  onChange={(e) => setPartnerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs sm:text-sm font-semibold outline-none transition"
                />
              </div>

              {/* Operating City */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Operating City / Base Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi, Haridwar, Kashipur, Dehradun..."
                  value={partnerCity}
                  onChange={(e) => setPartnerCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs sm:text-sm font-semibold outline-none transition"
                />
              </div>

              {/* Vehicle Category & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vehicle Category
                  </label>
                  <select
                    value={vehicleCategory}
                    onChange={(e) => setVehicleCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs font-semibold outline-none transition cursor-pointer"
                  >
                    <option value="Executive Sedan (4+1)">Executive Sedan (4+1)</option>
                    <option value="6+1 Seater MPV">6+1 Seater MPV</option>
                    <option value="Innova Crysta Premium">Innova Crysta Premium</option>
                    <option value="Tempo Traveller (12-20 Seater)">Tempo Traveller</option>
                    <option value="Other Taxi / Cab">Other Taxi / Cab</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Model &amp; Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dzire 2023"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs font-semibold outline-none transition"
                  />
                </div>
              </div>

              {/* Plate / Permit Status */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registration Plate / Permit
                </label>
                <select
                  value={plateType}
                  onChange={(e) => setPlateType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs font-semibold outline-none transition cursor-pointer"
                >
                  <option value="Commercial Yellow Plate (All-India / State Permit)">
                    Commercial Yellow Plate (All-India / State Permit)
                  </option>
                  <option value="Private Registration (Tour Chauffeur Driven)">
                    Private Registration (Self-Chauffeur Driven)
                  </option>
                  <option value="Fleet / Travel Agency Partner">
                    Fleet / Travel Agency Partner
                  </option>
                </select>
              </div>

              {/* Hill Driving Experience */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mountain / Hill Experience
                </label>
                <select
                  value={hillExperience}
                  onChange={(e) => setHillExperience(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 text-slate-900 text-xs font-semibold outline-none transition cursor-pointer"
                >
                  <option value="Yes, Experienced with Uttarakhand Hills">
                    Yes, Experienced with Uttarakhand Hills &amp; Ghats
                  </option>
                  <option value="Only Plain Highway & Airport Expressways">
                    Only Plain Highway &amp; Airport Expressways
                  </option>
                  <option value="Both Plain & Mountain Routes">
                    Both Plain &amp; Mountain Routes
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit Partner Application via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Joining Fee • 100% Free Onboarding</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
