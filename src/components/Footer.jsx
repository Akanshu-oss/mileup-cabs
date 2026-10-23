import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Footer() {
  return (
    <footer className="bg-[#17191D] text-[#FAF9F6]/75 text-xs border-t border-[#17191D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-[#17191D] flex items-center justify-center font-extrabold text-sm tracking-wider">
                MU
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MileUp <span className="text-[#D99A20]">Cabs</span>
              </span>
            </div>
            <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-normal">
              Chauffeur-driven private cab services specializing in punctual Delhi IGI Airport transfers, regional outstation journeys, and mountain travel across Uttarakhand and North India.
            </p>
            <div className="text-[11px] text-[#D99A20] font-semibold flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D99A20]"></span>
              <span>24x7 Verified Chauffeur Fleet</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-[11px]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F6]/70">
              <li><a href="#services" className="hover:text-white transition">Core Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#coverage" className="hover:text-white transition">Fleet &amp; Coverage</a></li>
              <li><a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a></li>
              <li><a href="#book" className="hover:text-[#D99A20] transition font-bold text-white">Book a Cab Online</a></li>
            </ul>
          </div>

          {/* Col 3: Key Corridors */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-[11px]">
              Frequent Corridors
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F6]/70">
              <li>Delhi IGI Airport (T1, T2, T3) Transfers</li>
              <li>Jim Corbett National Park &amp; Resorts</li>
              <li>Nainital &amp; Kumaon Lake Tours</li>
              <li>Haridwar, Rishikesh &amp; Char Dham</li>
              <li>Pantnagar Airport &amp; SIIDCUL Hubs</li>
              <li>Banbasa (Nepal Cross-Border)</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-[11px]">
              Dispatch Desk
            </h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D99A20] shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D99A20] shrink-0" />
                <div>
                  <span className="text-[#FAF9F6]/60">Booking Desk: </span>
                  <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="text-white font-bold hover:text-[#D99A20] transition">
                    +91 {SITE_CONFIG.primaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D99A20] shrink-0" />
                <div>
                  <span className="text-[#FAF9F6]/60">Support Desk: </span>
                  <a href={`tel:${SITE_CONFIG.secondaryPhone}`} className="text-white font-bold hover:text-[#D99A20] transition">
                    +91 {SITE_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D99A20] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FAF9F6]/80 hover:text-white transition">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF9F6]/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Base: Kashipur (Uttarakhand) • Doorstep service across Delhi NCR &amp; North India
          </div>
        </div>

      </div>
    </footer>
  );
}
