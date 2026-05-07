import Link from 'next/link';
import React from 'react';

const SummerSaleBanner = () => {
  return (
    <div className="relative w-full h-[300px] flex flex-col items-center justify-center text-white overflow-hidden bg-gradient-to-r from-[#f97316] via-[#fbbf24] to-[#ec4899] px-6 text-center">
      {/* Optional: Glow/Blur effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/20 blur-2xl" />

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 flex items-center justify-center gap-3">
          Summer Sale 50% OFF! 
          <span role="img" aria-label="fire" className="text-5xl">🔥</span>
        </h1>
        
        <p className="text-lg md:text-xl font-medium max-w-2xl mb-8 opacity-90">
          Beat the heat with our exclusive collection of summer essentials. Limited time offer!
        </p>

        <Link href="/products">
          <button className="bg-white text-[#f97316] font-bold py-3 px-10 rounded-full text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SummerSaleBanner;