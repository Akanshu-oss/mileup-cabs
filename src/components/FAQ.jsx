import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const faqList = [
    {
      q: "How are airport and outstation fares calculated?",
      a: "Our fares are all-inclusive and confirmed prior to your journey. The quoted price covers vehicle hire, fuel, driver allowance, and standard state entry charges. We maintain absolute transparency with zero hidden surcharges or post-trip surprises."
    },
    {
      q: "How early does the chauffeur report for scheduled departures?",
      a: "For all scheduled outstation and airport pickups, your chauffeur arrives at least 15 minutes prior to the booked time. For inbound airport arrivals, we monitor your flight status in real time to accommodate early landings or flight delays."
    },
    {
      q: "How much luggage can your Executive Sedan carry?",
      a: "Our Executive Sedans (Swift Dzire) offer 100% dedicated, uncompromised trunk boot space. The trunk easily accommodates 2 to 3 large international trolley suitcases plus personal cabin bags without cluttering passenger seating."
    },
    {
      q: "Do you have experienced chauffeurs for Uttarakhand hill stations and Char Dham?",
      a: "Yes. All our mountain-route chauffeurs have over 10 years of professional driving experience on the ghats of Nainital, Mussoorie, Jim Corbett, and the high-altitude Char Dham Yatra circuits (Yamunotri, Gangotri, Kedarnath, Badrinath)."
    },
    {
      q: "Can I book or get a quick quotation via WhatsApp or direct phone call?",
      a: "Yes. Our central desk in Kashipur operates 24 hours a day, 7 days a week. You can call +91 98370 84883 directly or message us on WhatsApp for an immediate flat-rate quote and vehicle confirmation."
    },
    {
      q: "Do you provide cross-border cab services to Nepal?",
      a: "Yes. We offer private transfers to Nepal via the Banbasa border (Mahendranagar). Our team assists with Bhansar customs documentation and road permits for destinations including Kathmandu, Pokhara, and Lumbini without changing vehicles."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0ED] border border-[#E5E4DF] text-xs font-semibold text-[#D99A20] uppercase tracking-wider mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#686B73]">
            Essential information regarding booking, vehicle allocation, luggage space, and fare transparency.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E4DF] rounded-2xl overflow-hidden transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition hover:bg-[#FAF9F6]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#17191D] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#F0F0ED] flex items-center justify-center text-[#17191D] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#17191D] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#686B73] leading-relaxed border-t border-[#F0F0ED] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Desk Box */}
        <div className="mt-12 text-center bg-[#F0F0ED] border border-[#E5E4DF] rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#17191D]">
            Have a specific itinerary or timing question?
          </h3>
          <p className="text-xs text-[#686B73] mt-1 mb-4">
            Our 24x7 booking desk in Kashipur is available directly over phone or WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17191D] hover:bg-[#D99A20] text-white text-xs font-bold transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99A20]" />
              <span>Call Helpline: +91 {SITE_CONFIG.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I have a question regarding cab booking with MileUp Cabs.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF9F6] border border-[#E5E4DF] text-[#17191D] text-xs font-bold transition"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
