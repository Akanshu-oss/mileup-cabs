import React, { useState } from 'react';
import { 
  Phone, MessageCircle, Calendar, Clock, MapPin, Car, Shield, ArrowRight, 
  Plane, Fuel, Compass, Sparkles, Luggage, CheckCircle2 
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('airport');

  // Airport Form State
  const [airportTripType, setAirportTripType] = useState('Drop to Airport');
  const [selectedAirport, setSelectedAirport] = useState('Delhi IGI Airport (T1/T2/T3)');
  const [airportCity, setAirportCity] = useState('');
  const [airportDate, setAirportDate] = useState('');
  const [airportTime, setAirportTime] = useState('06:00');
  const [airportCar, setAirportCar] = useState('Executive Sedan (4+1 Seater - 100% Boot Space)');
  const [airportCarrier, setAirportCarrier] = useState(false);

  // Outstation Form State
  const [outstationType, setOutstationType] = useState('One-Way Drop');
  const [outstationFrom, setOutstationFrom] = useState('');
  const [outstationTo, setOutstationTo] = useState('');
  const [outstationDate, setOutstationDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [outstationCar, setOutstationCar] = useState('Executive Sedan (4+1 Seater - 100% Boot Space)');
  const [outstationCarrier, setOutstationCarrier] = useState(false);

  // Char Dham / Tour Form State
  const [tourCircuit, setTourCircuit] = useState('Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath • 9-12 Days)');
  const [tourPickup, setTourPickup] = useState('');
  const [tourDate, setTourDate] = useState('');
  const [tourCar, setTourCar] = useState('Executive Sedan (4+1 - Recommended for 1-4 Pax)');
  const [tourCarrier, setTourCarrier] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    let text = '';

    if (activeTab === 'airport') {
      const city = airportCity.trim() || 'Not specified (doorstep)';
      const travelDate = airportDate || 'Upcoming date';
      const carrierText = airportCarrier ? '\n🧳 *Roof Luggage Carrier:* Requested (Yes)' : '';
      text = `*New Airport Transfer Inquiry (Booking Desk)*\n\n` +
        `✈️ *Service:* Airport Transfer (${airportTripType})\n` +
        `📍 *Airport:* ${selectedAirport}\n` +
        `🏡 *Pickup / Drop Location:* ${city}\n` +
        `🗓 *Date & Time:* ${travelDate} at ${airportTime}\n` +
        `🚗 *Selected Vehicle:* ${airportCar}${carrierText}\n\n` +
        `Please share the all-inclusive flat rate quote. Thank you!`;
    } else if (activeTab === 'outstation') {
      const fromLoc = outstationFrom.trim() || 'My City';
      const toLoc = outstationTo.trim() || 'Destination';
      const departDate = outstationDate || 'Upcoming date';
      const returnInfo = outstationType === 'Round Trip' ? `\n🔄 *Return Date:* ${returnDate || 'Flexible'}` : '';
      const carrierText = outstationCarrier ? '\n🧳 *Roof Luggage Carrier:* Requested (Yes)' : '';
      text = `*New Outstation Cab Inquiry (Booking Desk)*\n\n` +
        `🚗 *Service:* Intercity Outstation (${outstationType})\n` +
        `📍 *From:* ${fromLoc}\n` +
        `📍 *Destination:* ${toLoc}\n` +
        `🗓 *Departure Date:* ${departDate}${returnInfo}\n` +
        `🚘 *Vehicle Choice:* ${outstationCar}${carrierText}\n\n` +
        `Please provide the best flat quote. Thank you!`;
    } else {
      const fromLoc = tourPickup.trim() || 'My City / Airport';
      const startDate = tourDate || 'Upcoming season';
      const carrierText = tourCarrier ? '\n🧳 *Roof Luggage Carrier:* Requested (Yes)' : '';
      text = `*New Tour / Pilgrimage Inquiry (Booking Desk)*\n\n` +
        `⛰️ *Circuit:* ${tourCircuit}\n` +
        `📍 *Starting Pickup Point:* ${fromLoc}\n` +
        `🗓 *Tour Start Date:* ${startDate}\n` +
        `🚗 *Preferred Vehicle:* ${tourCar}${carrierText}\n\n` +
        `Please share the complete itinerary and best package fare. Thank you!`;
    }

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="relative bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-blue-400 text-xs font-semibold tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>24x7 Cabs • Airport Drops • Outstation &amp; Char Dham</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Comfortable Cabs for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">Airports &amp; Outstation</span>
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Doorstep pickup from anywhere. Executive Sedans (100% trunk luggage boot) and 6+1 MPVs with optional roof carriers.
          </p>
        </div>

        {/* Modern Tabbed Booking Engine */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 text-slate-900 overflow-hidden">
          
          {/* Tab Headers */}
          <div className="grid grid-cols-3 bg-slate-100/90 border-b border-slate-200/80 p-1.5 sm:p-2 gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('airport')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'airport'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span>Airport Transfer</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('outstation')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'outstation'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>Outstation Cab</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('chardham')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'chardham'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span>Char Dham &amp; Tours</span>
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleBookingSubmit} className="p-5 sm:p-7 space-y-5">
            
            {/* TAB 1: AIRPORT */}
            {activeTab === 'airport' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px]">Direction:</span>
                  {['Drop to Airport', 'Pickup from Airport'].map((type) => (
                    <label key={type} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="airportSubtype"
                        value={type}
                        checked={airportTripType === type}
                        onChange={() => setAirportTripType(type)}
                        className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-blue-600" /> Airport
                    </label>
                    <select
                      value={selectedAirport}
                      onChange={(e) => setSelectedAirport(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    >
                      <option value="Delhi IGI Airport (T1/T2/T3)">Delhi IGI Airport (DEL)</option>
                      <option value="Pantnagar Airport (PGH)">Pantnagar Airport (PGH)</option>
                      <option value="Dehradun Jolly Grant (DED)">Dehradun Airport (DED)</option>
                    </select>
                  </div>

                  {/* Free-form Location Input - user can fill anywhere */}
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {airportTripType === 'Drop to Airport' ? 'Pickup Location' : 'Drop Address'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kashipur, Corbett, Delhi..."
                      value={airportCity}
                      onChange={(e) => setAirportCity(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-normal"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" /> Travel Date
                    </label>
                    <input
                      type="date"
                      value={airportDate}
                      onChange={(e) => setAirportDate(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" /> Time
                    </label>
                    <input
                      type="time"
                      value={airportTime}
                      onChange={(e) => setAirportTime(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="md:col-span-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-indigo-600" /> Vehicle Choice
                    </label>
                    <select
                      value={airportCar}
                      onChange={(e) => setAirportCar(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    >
                      <option value="Executive Sedan (4+1 Seater - 100% Boot Space)">
                        ⭐ Executive Sedan (4+1 Seater • 100% Usable Boot • Recommended)
                      </option>
                      <option value="6+1 Seater MPV (Spacious Family & Hill Vehicle)">
                        6+1 Seater MPV (Spacious 6-7 Seater • Optional Roof Carrier)
                      </option>
                      <option value="Tempo Traveller (12-20 Seater Partner Fleet)">
                        Tempo Traveller (12-20 Seater for Large Groups)
                      </option>
                    </select>
                  </div>

                  <label className="flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={airportCarrier}
                      onChange={(e) => setAirportCarrier(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <Luggage className="w-3.5 h-3.5 text-emerald-600" /> Roof Carrier
                      </span>
                      <span className="text-[11px] text-slate-500">For extra bags on MPV</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* TAB 2: OUTSTATION */}
            {activeTab === 'outstation' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px]">Trip Type:</span>
                  {['One-Way Drop', 'Round Trip'].map((type) => (
                    <label key={type} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="outstationSubtype"
                        value={type}
                        checked={outstationType === type}
                        onChange={() => setOutstationType(type)}
                        className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* From User Input */}
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" /> From (Your Pickup)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kashipur, Delhi Airport, Noida..."
                      value={outstationFrom}
                      onChange={(e) => setOutstationFrom(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-normal"
                      required
                    />
                  </div>

                  {/* Destination User Input */}
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Nainital, Corbett..."
                      value={outstationTo}
                      onChange={(e) => setOutstationTo(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-normal"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" /> Departure Date
                    </label>
                    <input
                      type="date"
                      value={outstationDate}
                      onChange={(e) => setOutstationDate(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    />
                  </div>

                  {outstationType === 'Round Trip' ? (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-600" /> Return Date
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-indigo-600" /> Vehicle
                      </label>
                      <select
                        value={outstationCar}
                        onChange={(e) => setOutstationCar(e.target.value)}
                        className="w-full text-xs font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                      >
                        <option value="Executive Sedan (4+1 Seater - 100% Boot Space)">Executive Sedan (4+1)</option>
                        <option value="6+1 Seater MPV (Spacious Family & Hill Vehicle)">6+1 Seater MPV</option>
                        <option value="Tempo Traveller (12-20 Seater Partner Fleet)">Tempo Traveller (12-20 Seater)</option>
                      </select>
                    </div>
                  )}
                </div>

                {outstationType === 'Round Trip' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div className="md:col-span-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-indigo-600" /> Vehicle Category
                      </label>
                      <select
                        value={outstationCar}
                        onChange={(e) => setOutstationCar(e.target.value)}
                        className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                      >
                        <option value="Executive Sedan (4+1 Seater - 100% Boot Space)">
                          ⭐ Executive Sedan (4+1 Seater • Best Value &amp; Comfort)
                        </option>
                        <option value="6+1 Seater MPV (Spacious Family & Hill Vehicle)">
                          6+1 Seater MPV (Spacious Family &amp; Hill Vehicle)
                        </option>
                        <option value="Tempo Traveller (12-20 Seater Partner Fleet)">
                          Tempo Traveller (12-20 Seater Partner Fleet)
                        </option>
                      </select>
                    </div>

                    <label className="flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={outstationCarrier}
                        onChange={(e) => setOutstationCarrier(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-slate-800 flex items-center gap-1">
                          <Luggage className="w-3.5 h-3.5 text-emerald-600" /> Roof Carrier
                        </span>
                        <span className="text-[11px] text-slate-500">Luggage rack on MPV</span>
                      </div>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: CHAR DHAM */}
            {activeTab === 'chardham' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-blue-600" /> Select Tour Circuit
                    </label>
                    <select
                      value={tourCircuit}
                      onChange={(e) => setTourCircuit(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    >
                      <option value="Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath • 9-12 Days)">
                        🕉️ Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath • 9-12 Days)
                      </option>
                      <option value="Do Dham Yatra (Kedarnath & Badrinath • 5-7 Days)">
                        🙏 Do Dham Yatra (Kedarnath &amp; Badrinath Ji • 5-7 Days)
                      </option>
                      <option value="Haridwar • Rishikesh • Dehradun • Mussoorie (3-5 Days)">
                        🌊 Haridwar • Rishikesh • Dehradun • Mussoorie (3-5 Days)
                      </option>
                      <option value="Jim Corbett Safari • Nainital • Kainchi Dham (2-4 Days)">
                        🐯 Jim Corbett Safari • Nainital Lake • Kainchi Dham (2-4 Days)
                      </option>
                    </select>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" /> Start Date
                    </label>
                    <input
                      type="date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Airport, Haridwar, Home city..."
                      value={tourPickup}
                      onChange={(e) => setTourPickup(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-normal"
                      required
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-indigo-600" /> Vehicle (Sedan Recommended)
                    </label>
                    <select
                      value={tourCar}
                      onChange={(e) => setTourCar(e.target.value)}
                      className="w-full text-xs sm:text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                    >
                      <option value="Executive Sedan (4+1 - Recommended for 1-4 Pax)">
                        ⭐ Executive Sedan (4+1 • #1 Choice for 1-4 Pax)
                      </option>
                      <option value="6+1 Seater MPV (Spacious Family & Hill Vehicle)">
                        6+1 Seater MPV (For 5-7 Pax)
                      </option>
                      <option value="Tempo Traveller (12-20 Seater Partner Fleet)">
                        Tempo Traveller (12-20 Seater Groups)
                      </option>
                    </select>
                  </div>

                  <label className="flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={tourCarrier}
                      onChange={(e) => setTourCarrier(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <Luggage className="w-3.5 h-3.5 text-emerald-600" /> Roof Carrier
                      </span>
                      <span className="text-[11px] text-slate-500">For warm clothes &amp; luggage on MPV</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Bottom Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent flat rates • Doorstep pickup from your exact location</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition active:scale-95 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Check Instant Fare on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

        {/* Sedan Feature Pill & Quick Call */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600 text-white font-bold shrink-0">
              <Car className="w-4 h-4" />
            </div>
            <span className="text-slate-300">
              <strong className="text-white">Sedan Advantage:</strong> 100% full trunk boot space, superior mountain agility, and the best travel rates for couples &amp; families up to 4.
            </span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="shrink-0 text-blue-400 font-bold hover:underline flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>Call 24x7: +91 {SITE_CONFIG.primaryPhone}</span>
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-center">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
              <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
