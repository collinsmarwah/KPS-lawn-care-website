import React from 'react';
import { Page } from '../../types';

export default function HomePage({ navigate }: { navigate: (page: Page) => void }) {
  const heroImageUrl = "https://res.cloudinary.com/dldtmvsow/image/upload/v1767776990/177006863_4574001629281983_3447693000024873615_n_k8rzvh.jpg";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${heroImageUrl}")` }}></div>
        <div className="relative z-20 mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 flex min-h-[600px] flex-col justify-center items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 w-fit mb-6">
            <span className="material-symbols-outlined text-primary !text-sm">verified</span>
            <span className="text-white text-xs font-bold uppercase tracking-wider">Top Rated in Cape Coral</span>
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.05] tracking-[-0.033em] drop-shadow-sm mb-6">
            Your Lawn,<br /> Our Passion.
          </h1>
          <h2 className="text-gray-200 text-lg lg:text-xl font-medium leading-relaxed max-w-xl drop-shadow-sm mb-8">
            Professional lawn care services rated 5.0 stars by your neighbors. Let us handle the hard work so you can enjoy your yard.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate(Page.CONTACT)} className="flex h-14 min-w-[180px] items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-8 text-slate-900 text-base font-bold transition-all transform hover:scale-105 shadow-xl shadow-green-900/30">
              Get a Free Quote
            </button>
            <button onClick={() => navigate(Page.SERVICES)} className="flex h-14 min-w-[180px] items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm px-8 text-base font-bold text-white transition-colors">
              View Services
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/90 font-medium">
             <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Licensed & Insured</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Satisfaction Guaranteed</span>
             </div>
          </div>
        </div>
      </section>

      {/* Ratings Strip */}
      <section className="bg-surface-light dark:bg-white/5 border-b border-[#e7f3e7] dark:border-white/10 py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-baseline gap-2">
                        <p className="text-slate-900 dark:text-white text-5xl font-black">5.0</p>
                        <span className="text-slate-500 dark:text-gray-400 text-sm">out of 5</span>
                    </div>
                    <div className="flex text-primary gap-1">
                        {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined filled-icon">star</span>)}
                    </div>
                    <p className="text-slate-900 dark:text-gray-300 font-medium mt-1">Based on 24 happy customers</p>
                </div>
                <div className="flex-1 min-w-[300px] max-w-lg space-y-2">
                    {[5,4,3,2,1].map((rating) => (
                        <div key={rating} className="flex items-center gap-4 text-sm">
                            <span className="text-slate-900 dark:text-gray-300 w-3">{rating}</span>
                            <div className="flex-1 h-2.5 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: rating === 5 ? '100%' : '0%' }}></div>
                            </div>
                            <span className="text-slate-500 dark:text-gray-400 w-8 text-right">{rating === 5 ? '100%' : '0%'}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-16">
            <div className="text-center flex flex-col items-center gap-4">
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight max-w-[800px]">Professional Lawn Care for Every Season</h2>
                <p className="text-slate-600 dark:text-gray-300 text-lg max-w-[720px]">We offer a full range of services to keep your property looking its best year-round.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'local_florist', title: 'Weekly Mowing', desc: 'Regular, reliable mowing patterns that keep your grass healthy and looking sharp all season long.' },
                    { icon: 'park', title: 'Spring & Fall Cleanup', desc: 'Thorough removal of leaves and debris to prepare your lawn for the changing seasons.' },
                    { icon: 'water_drop', title: 'Fertilization & Weed', desc: 'Expert application of nutrients to promote growth and prevent invasive weeds.' }
                ].map((service, idx) => (
                    <div key={idx} className="group flex flex-col gap-6 rounded-2xl border border-[#cfe7cf] dark:border-white/10 bg-white dark:bg-white/5 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
                        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined !text-4xl">{service.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                        </div>
                        <button onClick={() => navigate(Page.SERVICES)} className="mt-auto flex items-center text-sm font-bold text-green-700 dark:text-green-400 group-hover:text-primary transition-colors pt-4">
                            Learn more <span className="material-symbols-outlined !text-sm ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark border-t border-[#e7f3e7] dark:border-white/5">
         <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-slate-900 dark:bg-[#1a2e1a] shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Get Started</span>
                    <h2 className="text-white text-3xl lg:text-5xl font-black mb-4 mt-2">Ready for the best lawn on the block?</h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">Get a free, no-obligation quote today. We'll visit your property and provide a custom plan tailored to your needs.</p>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-5 text-white">
                            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">call</span></div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Call Us</p>
                                <p className="font-bold text-xl">(555) 123-4567</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-5 text-white">
                            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">mail</span></div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email Us</p>
                                <p className="font-bold text-xl">quotes@kpslawncare.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 bg-white dark:bg-surface-dark p-10 lg:p-20 flex flex-col justify-center">
               <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                     <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-gray-300">First Name</label>
                        <input type="text" placeholder="John" className="w-full rounded-lg border border-slate-300 dark:border-gray-600 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary placeholder-gray-400 outline-none" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-gray-300">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full rounded-lg border border-slate-300 dark:border-gray-600 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary placeholder-gray-400 outline-none" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-gray-300">Property Address</label>
                        <input type="text" placeholder="123 Green St, Cityville" className="w-full rounded-lg border border-slate-300 dark:border-gray-600 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary placeholder-gray-400 outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-gray-300">Service Needed</label>
                        <select className="w-full rounded-lg border border-slate-300 dark:border-gray-600 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary outline-none">
                            <option>Weekly Mowing</option>
                            <option>Spring/Fall Cleanup</option>
                            <option>Fertilization & Weed Control</option>
                            <option>Landscaping</option>
                        </select>
                  </div>
                  <button type="button" className="mt-6 w-full rounded-lg bg-primary hover:bg-green-500 py-4 text-base font-bold text-slate-900 transition-all shadow-xl shadow-green-500/30 transform hover:scale-[1.02]">Get My Free Quote</button>
               </form>
            </div>
         </div>
      </section>
    </>
  );
}