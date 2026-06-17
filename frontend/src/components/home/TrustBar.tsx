// src/components/home/TrustBar.tsx

import { Users, Rocket, Shield, Globe } from "lucide-react";

const stats = [
  { icon: Users,  title: "1+",               sub: "Products Launched" },
  { icon: Rocket, title: "Innovative Solutions", sub: "Built for the Future" },
  { icon: Shield, title: "Secure & Reliable",    sub: "Privacy First Approach" },
  { icon: Globe,  title: "Global Vision",        sub: "Building for the World" },
];

export default function TrustBar() {
  return (
    <section className="w-full py-10 bg-white border-y border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by ambitious teams and forward-thinking businesses.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[#1B2A6B]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-[#1B2A6B] text-sm">{title}</p>
                <p className="text-gray-400 text-xs leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
