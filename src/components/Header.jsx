import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E4DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#17191D] flex items-center justify-center text-[#FAF9F6] font-extrabold text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105">
              MU
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#17191D]">
                MileUp <span className="text-[#D99A20] font-extrabold">Cabs</span>
              </span>
              <span className="text-[11px] font-medium text-[#686B73] tracking-wide -mt-0.5">
                Chauffeur Travel
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#17191D]/80">
            <a href="#services" className="hover:text-[#D99A20] transition">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-[#D99A20] transition">
              How It Works
            </a>
            <a href="#coverage" className="hover:text-[#D99A20] transition">
              Fleet &amp; Coverage
            </a>
            <a href="#faq" className="hover:text-[#D99A20] transition">
              FAQs
            </a>
          </nav>

          {/* Right Actions: Direct Phone & One Primary "Book a Cab" button */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#17191D] hover:text-[#D99A20] transition py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99A20]" />
              <span>+91 {SITE_CONFIG.primaryPhone}</span>
            </a>

            <a
              href="#book"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#17191D] hover:bg-[#D99A20] text-[#FAF9F6] text-xs font-bold tracking-wide transition shadow-sm"
            >
              Book a Cab
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17191D] hover:bg-[#F0F0ED] transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E4DF] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#17191D]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F0F0ED] transition"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F0F0ED] transition"
            >
              How It Works
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F0F0ED] transition"
            >
              Fleet &amp; Coverage
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F0F0ED] transition"
            >
              FAQs
            </a>
          </nav>

          <div className="pt-3 border-t border-[#E5E4DF] space-y-2">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#E5E4DF] text-xs font-bold text-[#17191D]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99A20]" />
              <span>Call Helpline: +91 {SITE_CONFIG.primaryPhone}</span>
            </a>
            <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#17191D] text-[#FAF9F6] text-xs font-bold"
            >
              <span>Book a Cab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
