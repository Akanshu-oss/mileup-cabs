import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Coverage from './components/Coverage';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#17191D] pb-16 sm:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <Coverage />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
