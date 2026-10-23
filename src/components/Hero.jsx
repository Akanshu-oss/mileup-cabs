import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Clock, MapPin, Car, Shield, ArrowRight, Plane, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Hero() {
  const [tripType, setTripType] = useState('airport');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('06:00');
  const [vehicle, setVehicle] = useState('Executive Sedan (4+1 Seater)');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const fromLoc = pickup.trim() || 'Doorstep Pickup';
    const toLoc = destination.trim() || (tripType === 'airport' ? 'Delhi IGI Airport (DEL)' : 'Outstation Destination');
    const travelDate = date || 'Upcoming Date';

    const serviceName = 
      tripType === 'airport' ? 'Airport Transfer' :
      tripType === 'outstation' ? 'Outstation Journey' : 'Local Chauffeur Hire';

    const message = 
`MileUp Cabs Reservation Inquiry (Booking Desk)

Service: ${serviceName}
Pickup Location: ${fromLoc}
Drop Destination: ${toLoc}
Travel Date & Time: ${travelDate} at ${time}
Selected Vehicle: ${vehicle}

Please share the best flat rate and confirm chauffeur availability. Thank you!`;

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0ED] border border-[#E5E4DF] text-xs font-semibold text-[#17191D] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#D99A20]"></span>
              <span>Premier Chauffeur Travel</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17191D] tracking-tight leading-[1.1]">
              Your Journey, <br className="hidden sm:inline" />
              <span className="text-[#D99A20]">Made Better.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#17191D]/75 leading-relaxed max-w-xl font-normal">
              Punctual, chauffeur-driven private travel across Delhi NCR, Uttarakhand, and North India. Dedicated to airport transfers, regional outstation routes, and hill journeys with verified professional drivers.
            </p>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${SITE_CONFIG.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#17191D] hover:bg-[#D99A20] text-[#FAF9F6] text-xs font-bold tracking-wide transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#D99A20]" />
                <span>Call Desk: +91 {SITE_CONFIG.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to inquire about a cab booking with MileUp Cabs.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F0F0ED] border border-[#E5E4DF] text-[#17191D] text-xs font-bold tracking-wide transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp Quote</span>
              </a>
            </div>

            {/* Restrained Trust Points */}
            <div className="pt-6 border-t border-[#E5E4DF] grid grid-cols-3 gap-4 text-xs text-[#17191D]/80">
              <div>
                <div className="font-extrabold text-[#17191D] text-sm">24x7 Pickup</div>
                <div className="text-[#686B73] mt-0.5">Always on time</div>
              </div>
              <div>
                <div className="font-extrabold text-[#17191D] text-sm">100% Trunk Space</div>
                <div className="text-[#686B73] mt-0.5">Dedicated luggage boot</div>
              </div>
              <div>
                <div className="font-extrabold text-[#17191D] text-sm">Clear Fares</div>
                <div className="text-[#686B73] mt-0.5">Zero hidden surprises</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Booking Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E4DF] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#E5E4DF] pb-4">
                <h2 className="text-base font-bold text-[#17191D]">
                  Plan Your Ride
                </h2>
                <span className="text-xs font-semibold text-[#D99A20] bg-[#FDF8F0] px-2.5 py-1 rounded-full border border-[#EAD7B0]">
                  Instant Dispatch
                </span>
              </div>

              {/* Service Tabs */}
              <div className="flex p-1 rounded-xl bg-[#F0F0ED] border border-[#E5E4DF]">
                <button
                  type="button"
                  onClick={() => { setTripType('airport'); setDestination('Delhi IGI Airport (DEL)'); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    tripType === 'airport'
                      ? 'bg-white text-[#17191D] shadow-sm'
                      : 'text-[#686B73] hover:text-[#17191D]'
                  }`}
                >
                  Airport
                </button>
                <button
                  type="button"
                  onClick={() => { setTripType('outstation'); setDestination(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    tripType === 'outstation'
                      ? 'bg-white text-[#17191D] shadow-sm'
                      : 'text-[#686B73] hover:text-[#17191D]'
                  }`}
                >
                  Outstation
                </button>
                <button
                  type="button"
                  onClick={() => { setTripType('local'); setDestination('Local City / Rental'); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    tripType === 'local'
                      ? 'bg-white text-[#17191D] shadow-sm'
                      : 'text-[#686B73] hover:text-[#17191D]'
                  }`}
                >
                  Local Rental
                </button>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#17191D] uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#686B73] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Kashipur, Delhi Airport T3, Gurugram..."
                      className="w-full bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#686B73] focus:outline-none focus:border-[#D99A20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#17191D] uppercase tracking-wider mb-1.5">
                    Destination Point
                  </label>
                  <div className="relative">
                    <Plane className="w-4 h-4 text-[#686B73] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={tripType === 'airport' ? 'Delhi IGI Airport (DEL)' : 'e.g. Nainital, Jim Corbett, Dehradun...'}
                      className="w-full bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#686B73] focus:outline-none focus:border-[#D99A20]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#17191D] uppercase tracking-wider mb-1.5">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#686B73] absolute left-3.5 top-3" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl pl-10 pr-3 py-2.5 text-xs text-[#17191D] focus:outline-none focus:border-[#D99A20]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#17191D] uppercase tracking-wider mb-1.5">
                      Departure Time
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#686B73] absolute left-3.5 top-3" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl pl-10 pr-3 py-2.5 text-xs text-[#17191D] focus:outline-none focus:border-[#D99A20]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#17191D] uppercase tracking-wider mb-1.5">
                    Vehicle Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setVehicle('Executive Sedan (4+1 Seater)')}
                      className={`p-3 rounded-xl border text-left transition ${
                        vehicle.includes('Sedan')
                          ? 'border-[#D99A20] bg-[#FDF8F0] text-[#17191D]'
                          : 'border-[#E5E4DF] bg-[#FAF9F6] text-[#686B73] hover:border-[#17191D]'
                      }`}
                    >
                      <div className="font-bold text-xs text-[#17191D]">Executive Sedan</div>
                      <div className="text-[11px] text-[#686B73] mt-0.5">4+1 • Full Boot Space</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicle('Family MPV (6+1 Seater)')}
                      className={`p-3 rounded-xl border text-left transition ${
                        vehicle.includes('MPV')
                          ? 'border-[#D99A20] bg-[#FDF8F0] text-[#17191D]'
                          : 'border-[#E5E4DF] bg-[#FAF9F6] text-[#686B73] hover:border-[#17191D]'
                      }`}
                    >
                      <div className="font-bold text-xs text-[#17191D]">Family MPV</div>
                      <div className="text-[11px] text-[#686B73] mt-0.5">6+1 • Dual AC Comfort</div>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#17191D] hover:bg-[#D99A20] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <span>Request Booking via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-[#686B73] mt-2">
                    Direct confirmation from our 24x7 desk with zero hidden charges.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>

        {/* High-Quality Natural Vehicle Showcase Card */}
        <div className="mt-16 sm:mt-20 rounded-3xl overflow-hidden border border-[#E5E4DF] bg-white p-3 shadow-sm">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden">
            <img
              src="/images/delhi-airport-taxi.jpg"
              alt="MileUp Cabs Executive Sedan Chauffeur Transfer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17191D]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#D99A20]">
                  Commercial Chauffeur Fleet
                </span>
                <p className="text-lg sm:text-xl font-bold">
                  Verified Executive Sedans &amp; 6+1 MPVs for Delhi Airport and Outstation Travel
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
