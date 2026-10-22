import React, { useState, useEffect } from 'react';
import { CloudSun, Loader2, RefreshCw } from 'lucide-react';

export default function NavbarWeather() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'denied' | 'error'
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    try {
      const cached = sessionStorage.getItem('mileup_user_weather');
      if (cached) {
        setWeather(JSON.parse(cached));
        setStatus('success');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const getWeatherDescription = (code) => {
    if (code === 0) return 'Clear';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Misty';
    if (code <= 67) return 'Rain';
    if (code <= 77) return 'Snow';
    if (code <= 82) return 'Showers';
    return 'Cloudy';
  };

  const getNearestCityFallback = (lat, lon) => {
    const hubs = [
      { name: 'Delhi', lat: 28.6139, lon: 77.2090 },
      { name: 'Noida', lat: 28.5355, lon: 77.3910 },
      { name: 'Gurugram', lat: 28.4595, lon: 77.0266 },
      { name: 'Haridwar', lat: 29.9457, lon: 78.1642 },
      { name: 'Rishikesh', lat: 30.0869, lon: 78.2676 },
      { name: 'Dehradun', lat: 30.3165, lon: 78.0322 },
      { name: 'Nainital', lat: 29.3919, lon: 79.4542 },
      { name: 'Kashipur', lat: 29.2104, lon: 78.9619 },
      { name: 'Corbett', lat: 29.3949, lon: 79.1264 },
      { name: 'Haldwani', lat: 29.2183, lon: 79.5130 },
      { name: 'Pantnagar', lat: 29.0305, lon: 79.4795 },
      { name: 'Kedarnath', lat: 30.7352, lon: 79.0669 },
      { name: 'Badrinath', lat: 30.7433, lon: 79.4938 },
      { name: 'Bareilly', lat: 28.3670, lon: 79.4304 },
      { name: 'Moradabad', lat: 28.8386, lon: 78.7733 }
    ];

    let closest = hubs[0];
    let minDistance = Number.MAX_VALUE;

    for (const hub of hubs) {
      const d = Math.hypot(hub.lat - lat, hub.lon - lon);
      if (d < minDistance) {
        minDistance = d;
        closest = hub;
      }
    }

    return closest.name;
  };

  const requestUserLocation = () => {
    if (!navigator.geolocation) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          const weatherPromise = fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
          ).then((r) => r.json());

          const geoPromise = fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          )
            .then((r) => r.json())
            .catch(() => null);

          const [weatherRes, geoRes] = await Promise.all([weatherPromise, geoPromise]);

          const city =
            geoRes?.city ||
            geoRes?.locality ||
            geoRes?.principalSubdivision ||
            getNearestCityFallback(lat, lon);

          const temp = Math.round(weatherRes?.current_weather?.temperature ?? 26);
          const condition = getWeatherDescription(weatherRes?.current_weather?.weathercode ?? 0);

          const data = {
            city: city.replace(/ (Nagar|District|Division)/g, ''),
            temp,
            condition
          };

          setWeather(data);
          setStatus('success');
          try {
            sessionStorage.setItem('mileup_user_weather', JSON.stringify(data));
          } catch (e) {
            // ignore
          }
        } catch (err) {
          console.error('Weather fetch error:', err);
          setStatus('error');
        }
      },
      (err) => {
        console.warn('Geolocation denied or error:', err.message);
        setStatus('denied');
      },
      { timeout: 8000, maximumAge: 60000 }
    );
  };

  return (
    <div className="flex items-center">
      {/* 1. IDLE: Small 1:1 Square Box */}
      {status === 'idle' && (
        <button
          type="button"
          onClick={requestUserLocation}
          className="w-10 h-10 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-blue-50/80 hover:border-blue-300 text-slate-700 transition flex flex-col items-center justify-center p-1 shadow-2xs group cursor-pointer"
          title="Check local weather (Click to allow location)"
        >
          <CloudSun className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          <span className="text-[8.5px] font-bold text-slate-500 leading-none mt-0.5">Weather</span>
        </button>
      )}

      {/* 2. LOADING: Square Box with spinner */}
      {status === 'loading' && (
        <div
          className="w-10 h-10 rounded-xl border border-blue-200 bg-blue-50 text-blue-900 flex flex-col items-center justify-center p-1 shadow-2xs"
          title="Detecting your location..."
        >
          <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
          <span className="text-[7.5px] font-bold text-blue-600 leading-none mt-0.5">Locating</span>
        </div>
      )}

      {/* 3. SUCCESS: Small 1:1 Square Box with Temp & City (Zero Location Icons) */}
      {status === 'success' && weather && (
        <button
          type="button"
          onClick={requestUserLocation}
          className="w-10 h-10 rounded-xl border border-blue-200/80 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 text-slate-800 flex flex-col items-center justify-center p-0.5 shadow-2xs hover:border-blue-300 transition cursor-pointer group"
          title={`${weather.city}: ${weather.temp}°C (${weather.condition}) • Click to refresh`}
        >
          <span className="text-xs font-black text-blue-700 leading-none tracking-tight">
            {weather.temp}°C
          </span>
          <span className="text-[8px] font-bold text-slate-500 leading-none truncate max-w-[34px] mt-0.5 text-center">
            {weather.city}
          </span>
        </button>
      )}

      {/* 4. DENIED: Square box with retry */}
      {status === 'denied' && (
        <button
          type="button"
          onClick={requestUserLocation}
          className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-500 flex flex-col items-center justify-center p-1 cursor-pointer transition"
          title="Location blocked. Click to allow"
        >
          <CloudSun className="w-4 h-4 text-slate-400" />
          <span className="text-[8px] font-extrabold text-blue-600 leading-none mt-0.5">Allow</span>
        </button>
      )}

      {/* 5. ERROR: Square box with retry */}
      {status === 'error' && (
        <button
          type="button"
          onClick={requestUserLocation}
          className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-500 flex flex-col items-center justify-center p-1 cursor-pointer"
          title="Weather error. Click to retry"
        >
          <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[8px] font-bold text-slate-500 leading-none mt-0.5">Retry</span>
        </button>
      )}
    </div>
  );
}
