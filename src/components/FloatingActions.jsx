import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to inquire about a cab booking with MileUp Cabs.")}`;

  return (
    <>
      {/* Desktop Floating Action (Bottom Right) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#17191D] hover:bg-[#D99A20] text-[#FAF9F6] px-4 py-3 rounded-full shadow-lg border border-[#E5E4DF]/20 transition-all group"
          title="Inquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white transition" />
          <span className="text-xs font-bold tracking-wide">
            WhatsApp Desk
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#E5E4DF] px-4 py-2.5 shadow-md">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-[#E5E4DF] text-[#17191D] font-bold text-xs transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#D99A20]" />
            <span>Call Desk</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#17191D] text-white font-bold text-xs transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}
