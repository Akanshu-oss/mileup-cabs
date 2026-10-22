import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, MessageCircle, CheckCircle2, MapPin, Car } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fallbackImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

  const handleBookItinerary = (title) => {
    const text = `Hello! I just read your travel guide: *${title}*. I would like to enquire about cab availability and quote for this itinerary.`;
    const url = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="guides" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Travel Planning &amp; Route Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Itinerary Guides
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Expert travel advice from our experienced chauffeurs. Learn route timings, mountain vehicle tips, border protocols, and packing essentials.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {blog.readTime}
                    </span>
                    <span>•</span>
                    <span>{blog.publishedDate}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>
              </div>

              {/* Read Guide CTA */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(blog)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition duration-200"
                >
                  <span>Read Planning Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ================= INTERACTIVE BLOG MODAL ================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            
            {/* Modal Header Image */}
            <div className="h-56 relative overflow-hidden bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition shadow-lg"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {selectedArticle.category}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mb-2">
                  <span>Author: {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {selectedArticle.title}
                </h2>
              </div>

              {/* Summary Box */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-900 font-medium leading-relaxed">
                {selectedArticle.summary}
              </div>

              {/* Full Content Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action: Book This Itinerary */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                >
                  Close Guide
                </button>

                <button
                  type="button"
                  onClick={() => handleBookItinerary(selectedArticle.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Cab for This Route</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
