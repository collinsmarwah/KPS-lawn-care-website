import React from 'react';

export default function AboutPage() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="material-symbols-outlined text-primary !text-sm">history_edu</span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Our History</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Rooted in Cape Coral
            </h1>
            <div className="space-y-4 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              <p>
                KP's Lawn Care & Services LLC isn't just a business; it's a testament to local dedication. We have been a staple in Cape Coral, building trust one lawn at a time.
              </p>
              <p>
                We understand that your home is your sanctuary. That's why we pride ourselves on being a reliable partner for homeowners, especially when it matters most. We don't just cut grass; we care for your property ensuring a professional finish that stands out in the neighborhood.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
               <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6NTQ5Cx9byE7X5f_-dLqNLk1b2qkFYX6FUmavErn0hZryD-7GZDUCrzrbnJN7oG_nU3vtDi9jOhNoOUYcOBGNGkVh3NfsCoNNjgSk8cKrNiAnF2CsT6sUVbdUrCJk5uWq9iKDsE2gEp0G6E2GkfvvzRsubFypxlOnMvijrQK96avb5f1LNJAEBZnYH-F08TMy96symTpKt7hpRxeSHFfWFd2E9PORQxD-6E502LCU_oDFSRA59OoEGBpwZD8gQ_z_ipP2I5TM94k")'}}></div>
             </div>
             <div className="absolute -bottom-6 -left-6 hidden md:flex bg-white dark:bg-[#1a2e1a] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 items-center gap-4 max-w-xs">
                <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary">
                   <span className="material-symbols-outlined">star</span>
                </div>
                <div>
                   <p className="font-bold text-lg text-slate-900 dark:text-white">5-Star Rated</p>
                   <p className="text-xs text-slate-500 dark:text-gray-400">Consistently top-rated by neighbors.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-[#102210] rounded-3xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
           <div className="p-12 lg:p-24 flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="flex-1 order-2 md:order-1">
                 <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-1 transform transition-transform hover:rotate-0">
                    <div className="aspect-video w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALQMsdgAoapL_dDfKvm2A9MwPSyWr7EhQnAisH0pSPIRqxuehe39UYhlhhVNnvyxdCPbIqCXMxkno09TQbgyh417tUA3KnaA-ci-N_wc1Esgh-8pMISO3GG8k3x7qZBSoHAuyfY3G9XlO00BNITDcY3eOPaePPly6rJNVsdvKovozTm1U4iXhKjNVVqtnbUt2bs67yfL-4GepbzZeXZwryiHZH9OSVQRegCMmKh5TigsNwmp55L1t57Ebyq5pkNkPWCWz1ofPjW5w")'}}></div>
                 </div>
                 <p className="text-center text-white/50 text-sm mt-3 italic">Helping our neighbors rebuild, one yard at a time.</p>
              </div>
              <div className="flex-1 order-1 md:order-2 text-white">
                 <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-6">When It Matters Most</h2>
                 <div className="space-y-6 text-lg text-gray-300">
                    <p>Our commitment extends beyond routine maintenance. We believe in showing up when our community needs us most.</p>
                    <blockquote className="border-l-4 border-primary pl-6 py-2 bg-white/5 rounded-r-lg">
                       <p className="text-xl font-medium italic text-white mb-2">"We went the extra distance after Hurricane Ian to help our community recover and rebuild."</p>
                    </blockquote>
                    <p>In the aftermath of the storm, while many were struggling to find help, KP's Lawn Care was out there.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}