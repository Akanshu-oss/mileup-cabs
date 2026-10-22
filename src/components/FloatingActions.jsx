import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to enquire about a cab booking. Please share fare and details.")}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Bubble (Bottom Right) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-full shadow-2xl transition duration-300 transform hover:scale-105 group border-2 border-white"
          title="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <div className="text-left">
            <div className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider leading-none">Instant Booking</div>
            <div className="text-sm font-black leading-tight">Chat on WhatsApp</div>
          </div>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar (Dual Action: Call + WhatsApp) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-extrabold text-xs shadow-md active:scale-95 transition"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call 24x7 Desk</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Quote</span>
          </a>
        </div>
      </nav>
    </>
  );
}
