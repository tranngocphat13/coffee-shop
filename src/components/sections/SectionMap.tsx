"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, Clock, Phone, CheckCircle } from "lucide-react";

interface Store {
  id: number;
  name: string;
  district: string;
  address: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
}

const STORES: Store[] = [
  {
    id: 1,
    name: "Local. Downtown",
    district: "Central District",
    address: "11 Independence Avenue",
    hours: "Daily: 08:00 – 21:00",
    phone: "+1 (555) 123-4567",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.8427926830577!2d27.54923187714856!3d53.89906693448408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc3b313d463%3A0xb35a092892994c65!2zcHItdCBOZXphdmlzaW1vc3RpIDExLCBNaW5zaywgQmVsYXJ1cw!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s",
  },
  {
    id: 2,
    name: "Local. Historic Center",
    district: "Old Town District",
    address: "36 Karl Marx Street",
    hours: "Daily: 08:00 – 21:00",
    phone: "+1 (555) 234-5678",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.9161726588295!2d27.558321877148466!3d53.89776263458237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc92f155555%3A0x6b1076b1f22d512a!2sul.%20Karla%20Marksa%2036%2C%20Minsk%2C%20Belarus!5e0!3m2!1sen!2s!4v1680000000001!5m2!1sen!2s",
  },
  {
    id: 3,
    name: "Local. Park View",
    district: "Station District",
    address: "13 Kirov Street",
    hours: "Daily: 08:00 – 21:00",
    phone: "+1 (555) 345-6789",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.152864696011!2d27.551121877148206!3d53.893554634897465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc5b313d463%3A0xb3ff76c6bb167e42!2sul.%20Kirova%2013%2C%20Minsk%2C%20Belarus!5e0!3m2!1sen!2s!4v1680000000002!5m2!1sen!2s",
  },
];

export function SectionMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStoreId, setActiveStoreId] = useState(1);
  const activeStore = STORES.find((s) => s.id === activeStoreId) || STORES[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sec-6"
      className={`flex flex-col justify-center bg-[#FDFAF5] px-6 py-20 lg:py-28 lg:px-12 relative overflow-hidden select-none transition-[opacity,transform] duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full my-auto">
        {/* Header with FadeInDown */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-16 w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full">
              <h2 className="font-heading text-[24px] xs:text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                DROP BY FOR REFRESHMENT
                <span className="font-script script normal-case text-[24px] xs:text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  With Local.
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-base text-[#7A7268] font-medium mt-5 sm:mt-6 px-2">
            We welcome you every day. Choose the nearest location on the map and enjoy your favorite iced coffee
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Store list with FadeInLeft */}
          <div
            className={`lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#1F1B16]/70 mb-1">
              Our Coffee Shops
            </h3>

            {STORES.map((store) => {
              const isActive = store.id === activeStoreId;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveStoreId(store.id)}
                  className={`cursor-pointer rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 border active:scale-[0.98] ${
                    isActive
                      ? "bg-[#F0E4D4] shadow-xl border-[#C97B3D] ring-4 ring-[#C97B3D]/25 scale-[1.01] sm:scale-[1.03] -translate-y-0.5"
                      : "bg-white/70 hover:bg-[#F0E4D4]/50 hover:-translate-y-0.5 border-black/5 shadow-xs"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase bg-[#4A3626] text-white px-2 sm:px-2.5 py-0.5 rounded-full">
                        {store.district}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase text-[#1F1B16] mt-2">
                        {store.name}
                      </h4>
                    </div>
                    {isActive && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold text-[#C97B3D]">
                        <CheckCircle className="w-3.5 h-3.5" /> Selected
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#1F1B16] font-bold mt-2 flex items-start gap-1.5 sm:gap-2">
                    <MapPin className="w-4 h-4 text-[#C97B3D] shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </p>

                  <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#4A3626]/10 flex items-center justify-between text-[10px] sm:text-[11px] text-[#7A7268]">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1F1B16]" /> {store.hours}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-[#1F1B16]">
                      <Phone className="w-3.5 h-3.5 text-[#C97B3D]" /> {store.phone}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Map Frame with Scale-Up Entrance */}
          <div
            className={`lg:col-span-7 bg-[#F0E4D4] rounded-3xl p-2.5 sm:p-3 shadow-xl border-4 border-white overflow-hidden relative flex flex-col min-h-[300px] sm:min-h-[440px] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Map Header Overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-[#1F1B16]/95 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/20 max-w-[200px] sm:max-w-xs">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold text-[#C97B3D]">
                Location on map
              </p>
              <h4 className="text-xs sm:text-sm font-black uppercase mt-0.5">{activeStore.name}</h4>
              <p className="text-[10px] sm:text-[11px] text-white/80 line-clamp-1 mt-0.5">
                {activeStore.address}
              </p>
            </div>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                activeStore.name + " " + activeStore.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 bg-[#C97B3D] hover:bg-[#b56b30] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-xl flex items-center gap-1.5 sm:gap-2 transition-all active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Get Directions</span>
            </a>

            {/* Embed Map Frame */}
            <div className="w-full h-full min-h-[300px] sm:min-h-[420px] rounded-2xl overflow-hidden relative bg-[#E5E3DF]">
              {STORES.map((store) => {
                const isActive = store.id === activeStoreId;
                return (
                  <iframe
                    key={store.id}
                    title={store.name}
                    src={store.mapEmbedUrl}
                    className={`w-full h-full border-0 absolute inset-0 filter saturate-[0.85] contrast-[1.05] transition-opacity duration-300 ${
                      isActive ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
                    }`}
                    loading="lazy"
                    allowFullScreen
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
