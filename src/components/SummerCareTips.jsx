import React from 'react';
import { Sun, Droplets, ShieldCheck } from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const tips = [
  {
    id: 1,
    title: "UV Protection",
    description: "Always wear sunscreen with SPF 50+ and reapply every 2 hours. Protect your skin from harmful UV rays.",
    icon: <Sun className="w-8 h-8 text-orange-500" />,
    bgColor: "bg-orange-50",
  },
  {
    id: 2,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily. Keep your skin moisturized with hydrating face mists.",
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Skin Protection",
    description: "Wear protective clothing and accessories like hats and sunglasses when outdoors for extended periods.",
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    bgColor: "bg-green-50",
  }
];

const SummerCareTips = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Summer Care Tips
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 ${tip.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {tip.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {tip.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;