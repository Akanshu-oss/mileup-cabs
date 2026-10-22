import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UttarakhandCircuits from './components/UttarakhandCircuits';
import CharDhamShowcase from './components/CharDhamShowcase';
import Fleet from './components/Fleet';
import BlogSection from './components/BlogSection';
import RoutesSection from './components/RoutesSection';
import NepalSpecial from './components/NepalSpecial';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PartnerSection from './components/PartnerSection';
import FAQ from './components/FAQ';
import DirectorySection from './components/DirectorySection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 pb-16 sm:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UttarakhandCircuits />
        <CharDhamShowcase />
        <Fleet />
        <BlogSection />
        <RoutesSection />
        <NepalSpecial />
        <WhyChooseUs />
        <Testimonials />
        <PartnerSection />
        <FAQ />
        <DirectorySection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
