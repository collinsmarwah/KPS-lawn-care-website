import React from 'react';
import { Page } from '../../types';

export default function DashboardPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
       {/* Welcome */}
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
             <h2 className="text-3xl font-black text-slate-900 dark:text-white">Good Morning, Mr. Peterson</h2>
             <p className="text-slate-500 dark:text-gray-400 mt-1">Here is what is happening with your lawn today.</p>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-slate-900 font-bold py-2.5 px-5 rounded-lg flex items-center gap-2">
             <span className="material-symbols-outlined !text-[20px]">add</span> Request Service
          </button>
       </div>

       {/* Stats */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] shadow-sm">
             <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Services This Year</span>
                <span className="material-symbols-outlined text-primary">park</span>
             </div>
             <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] shadow-sm">
             <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Next Service</span>
                <span className="material-symbols-outlined text-primary">event</span>
             </div>
             <p className="text-3xl font-bold text-slate-900 dark:text-white">Oct 24</p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] shadow-sm relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Outstanding Balance</span>
                   <span className="material-symbols-outlined text-red-500">payments</span>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-3xl font-bold text-slate-900 dark:text-white">$45.00</p>
                   <button className="text-xs font-bold text-primary hover:underline">Pay Now</button>
                </div>
             </div>
             <div className="absolute -right-4 -bottom-4 size-24 bg-red-500/5 rounded-full z-0"></div>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
             {/* Upcoming Service Card */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-[#e7f3e7] dark:border-[#2a3f2a] shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                   <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-slate-900 dark:text-white text-xs font-bold mb-4">
                         <span className="size-2 rounded-full bg-primary animate-pulse"></span> UPCOMING
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Weekly Mowing & Edging</h3>
                      <p className="text-slate-500 dark:text-gray-400 flex items-center gap-2 mb-6">
                         <span className="material-symbols-outlined !text-lg">schedule</span> Thursday, October 24th at 10:00 AM
                      </p>
                      <div className="flex gap-3">
                         <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700">Reschedule</button>
                         <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-gray-300 hover:border-slate-300">Contact Crew</button>
                      </div>
                   </div>
                   <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5w56WB44HI0o5iYQe9O1TSqFn7XnCOCfuaD4fHLm9CtgXpEhSyojXnpqFwW0acwjgkfEJba3LGYU1DeDY2j32J2snhGrR0IHss7j_5_tpgcwnSOC2dGecorc-AaCv-YuBS_lOzvcf_qlOOAgZSHz3wxH-vcoAYP5iwMYiWNleIdzI3C5dSpYPeBB5lxpgwLo--250-d2tFI7RBxLLwzRu4XTnGTGrhQH-FIa4Pc5jtWW4hXkQThAnPSVxSrUOk9uxO9b7SmWwUO8")'}}></div>
                </div>
             </div>

             {/* Recent Activity */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e7f3e7] dark:border-[#2a3f2a] p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Activity</h3>
                   <button className="text-primary text-sm font-bold hover:underline">View Full History</button>
                </div>
                <div className="space-y-6">
                   {[
                      { title: 'Fertilization Service', date: 'Oct 10', desc: 'Fall fertilizer application complete.', icon: 'check' },
                      { title: 'Weekly Mow & Trim', date: 'Oct 03', desc: 'Regular maintenance completed.', icon: 'check' },
                      { title: 'Weeding & Edging', date: 'Sep 26', desc: 'Flower beds weeded and driveway edged.', icon: 'check' }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="flex flex-col items-center">
                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"><span className="material-symbols-outlined !text-sm font-bold">{item.icon}</span></div>
                            {i !== 2 && <div className="w-px h-full bg-slate-200 dark:bg-slate-700 mt-2"></div>}
                         </div>
                         <div>
                            <div className="flex justify-between w-full mb-1">
                               <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                               <span className="text-xs text-slate-500 dark:text-gray-400">{item.date}</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-gray-400">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="space-y-6">
             {/* Profile Preview */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e7f3e7] dark:border-[#2a3f2a] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="font-bold text-lg text-slate-900 dark:text-white">Profile</h3>
                   <button onClick={() => navigate(Page.PROFILE)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined !text-xl">edit_square</span></button>
                </div>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e7f3e7] dark:border-[#2a3f2a]">
                   <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold">JP</div>
                   <div>
                      <p className="font-bold text-slate-900 dark:text-white">Mr. John Peterson</p>
                      <p className="text-xs text-slate-500 dark:text-gray-400">Client #8832</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="flex gap-3">
                      <span className="material-symbols-outlined text-slate-400 !text-[20px]">mail</span>
                      <div>
                         <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase">Email</p>
                         <p className="text-sm text-slate-900 dark:text-white">john.peterson@example.com</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <span className="material-symbols-outlined text-slate-400 !text-[20px]">location_on</span>
                      <div>
                         <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase">Property</p>
                         <p className="text-sm text-slate-900 dark:text-white">123 Maple Drive<br/>Springfield, IL</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Quick Invoice */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e7f3e7] dark:border-[#2a3f2a] p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Invoices</h3>
                <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30">
                      <div>
                         <p className="font-bold text-slate-900 dark:text-white text-sm">#INV-2024</p>
                         <p className="text-red-600 dark:text-red-400 text-xs font-bold">Due Oct 25</p>
                      </div>
                      <div className="text-right">
                         <p className="font-bold text-slate-900 dark:text-white">$45.00</p>
                         <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold px-2 py-1 rounded">PAY</button>
                      </div>
                   </div>
                   <div className="flex justify-between items-center p-3 rounded-lg border border-[#e7f3e7] dark:border-[#2a3f2a] opacity-60">
                      <div>
                         <p className="font-bold text-slate-900 dark:text-white text-sm">#INV-1988</p>
                         <p className="text-slate-500 dark:text-gray-400 text-xs">Paid Oct 04</p>
                      </div>
                      <div className="text-right">
                         <p className="font-bold text-slate-900 dark:text-white text-sm">$45.00</p>
                         <p className="text-[10px] font-bold uppercase">Paid</p>
                      </div>
                   </div>
                </div>
                <button onClick={() => navigate(Page.INVOICES)} className="w-full mt-4 py-2 text-sm text-slate-600 dark:text-gray-400 font-bold border border-dashed border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-400">View All Invoices</button>
             </div>
          </div>
       </div>
    </div>
  );
}