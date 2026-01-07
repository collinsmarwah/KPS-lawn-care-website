import React from 'react';

export default function GalleryPage() {
  const images = [
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767776296/470218172_9774357502579677_3557951943209303919_n_oivvbm.jpg', title: 'Pristine Lawn Care', category: 'Mowing' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767776990/177006863_4574001629281983_3447693000024873615_n_k8rzvh.jpg', title: 'Residential Maintenance', category: 'Mowing' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777633/176115228_4574001649281981_5312736880842753559_n_kdywme.jpg', title: 'Precision Edging', category: 'Detailing' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777753/495701667_1155167363077533_7973932374014529183_n_kpalhu.jpg', title: 'Landscape Design', category: 'Landscaping' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777774/483099463_24046177984971057_7634257470225287273_n_xdjjow.jpg', title: 'Garden Bed Maintenance', category: 'Landscaping' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777779/484345701_24046177901637732_806743125457210209_n_eiyhl8.jpg', title: 'Seasonal Cleanup', category: 'Cleanups' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777781/483101751_24046177891637733_1572363958299591150_n_wenunu.jpg', title: 'Hedge Trimming', category: 'Trimming' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777784/483103177_24046159344972921_9093984758166473399_n_wrxlek.jpg', title: 'Tree Services', category: 'Tree Care' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777786/484340641_24046159334972922_2334520314564694168_n_kgi7f6.jpg', title: 'Commercial Property', category: 'Commercial' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777790/480863584_23903003722621818_8463373506169155711_n_hv7hpr.jpg', title: 'Lawn Restoration', category: 'Restoration' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777791/470580834_9774357295913031_7083573957779266889_n_yqzkox.jpg', title: 'Backyard Renovation', category: 'Renovation' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777794/470218172_9774357502579677_3557951943209303919_n_1_lhgm0a.jpg', title: 'Quality Finish', category: 'Mowing' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777798/471126978_9774357659246328_1661656891658406221_n_qfqocf.jpg', title: 'Walkway Edging', category: 'Detailing' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777800/470592142_9774357519246342_34364762943281631_n_tgwq8u.jpg', title: 'Mulching Services', category: 'Landscaping' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777802/470735879_9774357509246343_3414154136741977312_n_u6wiof.jpg', title: 'Property Clean Up', category: 'Cleanups' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777805/176217839_4574001665948646_8789752491753432426_n_wt00gr.jpg', title: 'Regular Service', category: 'Maintenance' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777808/176589094_4574001655948647_4893669371077405641_n_xgwbxa.jpg', title: 'Spring Renewal', category: 'Cleanups' },
    { src: 'https://res.cloudinary.com/dldtmvsow/image/upload/v1767777809/176115228_4574001649281981_5312736880842753559_n_a5jjja.jpg', title: 'Lawn Health', category: 'Maintenance' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Project Showcase</h1>
           <p className="text-slate-600 dark:text-gray-400">Explore our latest work across residential and commercial properties.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {images.map((img, idx) => (
              <div key={idx} className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                 <img src={img.src} alt={img.title} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-[#0d1b0d] text-xs font-bold mb-2 w-fit">{img.category}</span>
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{img.title}</h3>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}