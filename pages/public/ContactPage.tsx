import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center md:text-left">
           <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Contact & Booking</h1>
           <p className="text-green-700 dark:text-green-400 text-lg md:text-xl font-normal leading-normal max-w-2xl">Ready for a Greener Lawn? Contact KP's Lawn Care & Services today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
           {/* Info */}
           <div className="flex flex-col gap-8">
              <div className="bg-white dark:bg-white/5 rounded-xl p-8 border border-[#e7f3e7] dark:border-white/10 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0"><span className="material-symbols-outlined">call</span></div>
                       <div>
                          <p className="text-sm text-slate-500 dark:text-gray-400 font-medium mb-1">Phone Number</p>
                          <p className="text-lg font-semibold text-slate-900 dark:text-white">+1 (239) 898-7190</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0"><span className="material-symbols-outlined">location_on</span></div>
                       <div>
                          <p className="text-sm text-slate-500 dark:text-gray-400 font-medium mb-1">Our Location</p>
                          <p className="text-base text-slate-900 dark:text-gray-200">410 NE 23rd St,<br/>Cape Coral, FL 33909</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm border border-[#e7f3e7] dark:border-white/10 group">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmNxxLUWhQZGDCVA4C7yG_DpLv0WUzsX-mCk7wzoJIodmWpgUhVjOd4wOU-eW7lyVf4MQ2aaMVaNhNy4ysD8n2vqnDs-CTUMH0dFgoWhkoQFIwqwc5nZD3jS1sE7GGnEqMZxSVUQChsCaRzZuW1GRks2Do8qAN9s9twThUUkPIL5hZu7YN6QcotKZG5IgLJae042H2413GMoKyB8eBGaPmDvRhXKYHfEtfY8cc4FnL5kitjmKh1mCISsaz4DlEZYN2MAXQAcQWQfY" alt="Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
                 <div className="absolute inset-0 bg-black/10 dark:bg-black/30 flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow-lg flex items-center gap-2 hover:bg-gray-50">
                       <span className="material-symbols-outlined text-primary">map</span> Open in Maps
                    </button>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-[#e7f3e7] dark:border-white/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request a Quote</h2>
              <p className="text-slate-500 dark:text-gray-400 mb-8">Fill out the form below and we will get back to you shortly.</p>
              <form className="flex flex-col gap-5">
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-gray-200">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-[#cfe7cf] dark:border-white/20 bg-background-light dark:bg-black/20 h-12 px-4 text-slate-900 dark:text-white outline-none focus:border-primary" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-medium text-slate-900 dark:text-gray-200">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-[#cfe7cf] dark:border-white/20 bg-background-light dark:bg-black/20 h-12 px-4 text-slate-900 dark:text-white outline-none focus:border-primary" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-medium text-slate-900 dark:text-gray-200">Phone Number</label>
                       <input type="tel" placeholder="(239) 555-0123" className="w-full rounded-lg border border-[#cfe7cf] dark:border-white/20 bg-background-light dark:bg-black/20 h-12 px-4 text-slate-900 dark:text-white outline-none focus:border-primary" />
                    </div>
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-gray-200">How can we help?</label>
                    <textarea placeholder="Tell us about your lawn..." className="w-full rounded-lg border border-[#cfe7cf] dark:border-white/20 bg-background-light dark:bg-black/20 min-h-[140px] p-4 text-slate-900 dark:text-white outline-none focus:border-primary resize-none"></textarea>
                 </div>
                 <button className="w-full h-14 bg-primary hover:bg-[#0fd60f] text-[#0d1b0d] text-base font-bold rounded-lg shadow-md transition-all mt-2">Get Free Quote</button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}