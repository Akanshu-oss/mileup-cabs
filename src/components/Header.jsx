import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Car, Shield, Handshake, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import NavbarWeather from './NavbarWeather';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      {/* ================= 1. TOP ANNOUNCEMENT BAR ================= */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-850 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-5">
          
          {/* Left: Operating Scope */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong className="text-white">24x7 Verified Cabs:</strong> Delhi NCR • Delhi IGI • Pantnagar • Dehradun • Char Dham &amp; Outstation
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-400 font-normal">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Doorstep Pickup Anywhere
            </span>
          </div>

          {/* Right: Direct Hotline Desks */}
          <div className="flex items-center gap-4 font-semibold text-[11px] sm:text-xs">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="text-white hover:text-blue-400 transition flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Direct Booking: +91 {SITE_CONFIG.primaryPhone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${SITE_CONFIG.secondaryPhone}`}
              className="text-slate-400 hover:text-white transition"
            >
              Support: +91 {SITE_CONFIG.secondaryPhone}
            </a>
          </div>

        </div>
      </div>

      {/* ================= 2. MAIN NAVBAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* LEFT ZONE: Brand Logo + Square Weather Tile */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Logo Link */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition leading-none">
                  Mile<span className="text-blue-600">Up</span> <span className="font-extrabold text-slate-800">Cabs</span>
                </div>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase hidden 2xl:block mt-1">
                  Delhi NCR • Uttarakhand • Char Dham
                </p>
              </div>
            </a>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-slate-200 hidden md:block mx-0.5" />

            {/* 1:1 Square Weather Box (Left Aligned) */}
            <div className="hidden md:block shrink-0">
              <NavbarWeather />
            </div>
          </div>

          {/* CENTER ZONE: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[13px] 2xl:text-sm font-semibold text-slate-600">
            <a href="#booking" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition">
              Book Cab
            </a>
            <a href="#circuits" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition">
              Airports &amp; Char Dham
            </a>
            <a href="#fleet" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition">
              Our Fleet
            </a>
            <a href="#routes" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition">
              Popular Routes
            </a>
            <a href="#guides" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition flex items-center gap-1">
              <span>Itinerary Guides</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.2 rounded-full">New</span>
            </a>
            <a href="#nepal" className="px-2.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-slate-100/80 transition">
              India-Nepal
            </a>
            <a href="#faq" className="px-2.5 py-2 rounded-xl hover:text-blue-600 hover:bg-slate-100/80 transition">
              FAQ
            </a>
          </nav>

          {/* RIGHT ZONE: Attach Taxi + Call Desk + WhatsApp */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Attach Taxi Partner Button */}
            <a
              href="#partner"
              className="h-10 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 shadow-sm transition hover:shadow"
            >
              <Handshake className="w-3.5 h-3.5" />
              <span>Attach Taxi</span>
            </a>

            {/* Call Desk Button */}
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="h-10 px-3.5 rounded-xl border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 font-bold text-xs inline-flex items-center gap-1.5 transition shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Desk</span>
            </a>

            {/* WhatsApp Booking CTA */}
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to enquire about cab booking. Please share options and fare quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition hover:shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* MOBILE ZONE: Weather Tile & Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <div className="md:hidden">
              <NavbarWeather />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200 flex items-center justify-center shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= 3. MOBILE MENU DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center justify-between"
            >
              <span>Book Cab Online</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#circuits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition text-blue-700 bg-blue-50/60 flex items-center justify-between"
            >
              <span>Airports &amp; Char Dham Yatra</span>
              <span className="text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">Featured</span>
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center justify-between"
            >
              <span>Our Fleet (Executive Sedan &amp; 6+1 MPV)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#routes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center justify-between"
            >
              <span>Popular Routes &amp; Fares</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#guides"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition text-blue-600 font-bold flex items-center justify-between"
            >
              <span>Travel Planning &amp; Itinerary Guides</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">Guides</span>
            </a>
            <a
              href="#nepal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition text-slate-700 flex items-center justify-between"
            >
              <span>India-Nepal Outstation</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#partner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-amber-100 text-amber-950 bg-amber-50 border border-amber-200/80 flex items-center justify-between transition font-bold"
            >
              <span className="flex items-center gap-2">
                <Handshake className="w-4 h-4 text-amber-600" />
                Attach Taxi / Become Partner
              </span>
              <span className="text-xs bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full font-extrabold">Earn With Us</span>
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center justify-between"
            >
              <span>Why Choose Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="h-11 flex items-center justify-center gap-2 rounded-xl border border-slate-300 font-bold text-xs text-slate-800 bg-slate-50"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Desk</span>
            </a>
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I want to enquire about cab booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 font-bold text-xs text-white shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
