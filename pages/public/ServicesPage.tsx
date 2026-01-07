import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Mowing & Edging',
      desc: "Our standard maintenance keeps your lawn pristine. We don't just cut grass; we maintain the health of your turf with sharp blades and precision edging along driveways and flower beds.",
      features: ['Weekly / Bi-Weekly', 'Precision Edging', 'Debris Removal'],
      icon: 'yard'
    },
    {
      title: 'Fertilization & Weed Control',
      desc: 'A lush lawn requires more than just water. Our scientifically balanced fertilization programs feed your soil, while our weed control strategies keep invasive plants at bay.',
      features: ['Custom nutrient blends', 'Pre-emergent weed prevention', 'Pet & family safe options'],
      icon: 'temp_preferences_custom'
    },
    {
      title: 'Aeration & Overseeding',
      desc: 'Breathe life back into compacted soil. Core aeration allows water and nutrients to reach the roots, while overseeding fills in bare spots for a dense carpet of grass.',
      features: ['Core Aeration', 'Premium Seed', 'Deep Root Growth'],
      icon: 'grain'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="w-full bg-surface-light dark:bg-surface-dark border-b border-[#e7f3e7] dark:border-white/10">
         <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Our Premium Lawn Services</h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">Professional care for a greener, healthier lawn. Explore our comprehensive range of services designed to keep your yard looking its best year-round.</p>
         </div>
      </div>

      <div className="max-w-[960px] mx-auto px-6 py-20 flex flex-col gap-20">
         {services.map((service, idx) => (
            <section key={idx} className="flex flex-col gap-8 py-8 border-b border-dashed border-slate-200 dark:border-white/10 last:border-0">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                     <span className="material-symbols-outlined text-primary !text-4xl">{service.icon}</span>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-gray-300 max-w-[720px]">{service.desc}</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-surface-dark p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-primary bg-primary/10 w-fit p-3 rounded-full flex items-center justify-center">
                           <span className="material-symbols-outlined !text-3xl">check_circle</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature}</h3>
                     </div>
                  ))}
               </div>
            </section>
         ))}
      </div>
    </div>
  );
}