import React from 'react';

const brands = [
  { id: 1, name: "SunShade", color: "text-orange-500", bg: "bg-orange-50" },
  { id: 2, name: "BeachLife", color: "text-pink-500", bg: "bg-pink-50" },
  { id: 3, name: "SunGuard", color: "text-blue-500", bg: "bg-blue-50" },
  { id: 4, name: "CoolFit", color: "text-green-500", bg: "bg-green-50" },
  { id: 5, name: "StepComfort", color: "text-yellow-600", bg: "bg-yellow-50" },
  { id: 6, name: "HydroCool", color: "text-cyan-500", bg: "bg-cyan-50" },
];

const BrandSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Top Brands
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className={`flex items-center justify-center p-6 rounded-2xl border border-slate-100 ${brand.bg} hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <span className={`font-semibold ${brand.color} text-sm md:text-base`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;