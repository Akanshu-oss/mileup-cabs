import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Regular Travelers
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Real experiences from families, business executives, and tourists who book our cabs regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-100 mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-extrabold text-slate-900 text-base">{test.name}</div>
                <div className="text-xs text-blue-600 font-medium mt-0.5">{test.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
