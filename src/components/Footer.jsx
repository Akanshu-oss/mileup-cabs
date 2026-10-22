import React from 'react';
import { Phone, Mail, MapPin, Car, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">Mile<span className="text-blue-400">Up</span> Cabs</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premier 24x7 commercial cab and outstation travel service offering doorstep pickup across Delhi NCR, Delhi IGI Airport, and Uttarakhand destinations. Specializing in punctual airport transfers, Char Dham Yatra, Kumaon hill circuits, and Nepal cross-border travel.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified &amp; Insured Chauffeur-Driven Fleet
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#booking" className="hover:text-white transition">Book a Cab Online</a></li>
              <li><a href="#circuits" className="hover:text-white transition">Airports &amp; Char Dham Yatra</a></li>
              <li><a href="#fleet" className="hover:text-white transition">Our Fleet (Sedan &amp; 6+1 MPV)</a></li>
              <li><a href="#routes" className="hover:text-white transition">Popular Routes &amp; Fares</a></li>
              <li><a href="#nepal" className="hover:text-emerald-400 transition text-emerald-300 font-semibold">India-Nepal Outstation Service</a></li>
              <li><a href="#partner" className="text-amber-400 hover:text-amber-300 font-bold transition flex items-center gap-1.5">★ Attach Taxi / Become a Partner</a></li>
              <li><a href="#why-us" className="hover:text-white transition">Why Choose Our Service</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs &amp; Booking Guidelines</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Key Transfer Circuits</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>• Delhi IGI Airport (T1, T2, T3) Transfers</li>
              <li>• Pantnagar Airport (PGH) Fast Connect</li>
              <li>• Dehradun Jolly Grant Airport Transfers</li>
              <li>• Char Dham Yatra (Kedarnath &amp; Badrinath)</li>
              <li>• Haridwar, Rishikesh &amp; Mussoorie Circuit</li>
              <li>• Jim Corbett &amp; Nainital Lake Tours</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4">Contact Information</h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="space-y-1">
                <div>24x7 Booking Desk: <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="text-white font-bold hover:underline">+91 {SITE_CONFIG.primaryPhone}</a></div>
                <div>Support &amp; Desk: <a href={`tel:${SITE_CONFIG.secondaryPhone}`} className="text-white font-bold hover:underline">+91 {SITE_CONFIG.secondaryPhone}</a></div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-white transition">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="text-slate-400">
            Professional Cab &amp; Outstation Travel Solutions | Uttarakhand, Delhi NCR &amp; Nepal
          </div>
        </div>

      </div>
    </footer>
  );
}
