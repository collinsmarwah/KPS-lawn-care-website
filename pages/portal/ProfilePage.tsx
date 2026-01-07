import React from 'react';

export default function ProfilePage() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
       <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Edit Profile</h1>
          <p className="text-slate-500 dark:text-gray-400">Update your personal information and communication preferences.</p>
       </div>

       {/* Avatar Banner */}
       <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group cursor-pointer">
             <div className="size-24 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark shadow-md" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk8c4RK32MhzKv379Kx-NdZlHYBHzFjFC7SBg5o9_fwqLF_ePlLQG3VoOckWHp_qwgMxE16iY2HJMZ-3Hi9QYUZ2H0H2ZaPKUBTiF_DqTsAvBYLnAET_IYYgidHx_A068ztczAmuvA0wxT-x48qMiWUppHX3PfnLQ7smBKZSZaUtv0SeskzvwRkI1kaFyeDrQU77IVSL-Lvw49v3_8yBN6uMzMSAn7WNnvUJ7YR-04XlDei7Ob2MNITpS4LFiycyM8cUw2uaTkUHI")'}}></div>
             <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white">camera_alt</span>
             </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
             <h2 className="text-xl font-bold text-slate-900 dark:text-white">John Doe</h2>
             <p className="text-slate-500 dark:text-gray-400 text-sm mb-3">Client since 2021</p>
             <button className="text-primary text-sm font-bold flex items-center gap-1 mx-auto sm:mx-0 hover:underline">
                <span className="material-symbols-outlined !text-[18px]">upload</span> Change Photo
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
             {/* Personal Info */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#e7f3e7] dark:border-[#2a3f2a] bg-slate-50 dark:bg-white/5 flex items-center gap-2">
                   <span className="material-symbols-outlined text-slate-400">person</span>
                   <h3 className="font-bold text-slate-900 dark:text-white">Personal Information</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="md:col-span-2 space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Full Name</label>
                      <input type="text" defaultValue="John Doe" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Email Address</label>
                      <div className="relative">
                         <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 !text-[20px]">mail</span>
                         <input type="email" defaultValue="john.doe@example.com" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent pl-10 pr-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                      </div>
                   </div>
                   <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Phone Number</label>
                      <div className="relative">
                         <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 !text-[20px]">call</span>
                         <input type="tel" defaultValue="(555) 123-4567" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent pl-10 pr-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                      </div>
                   </div>
                </div>
             </div>

             {/* Address */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#e7f3e7] dark:border-[#2a3f2a] bg-slate-50 dark:bg-white/5 flex items-center gap-2">
                   <span className="material-symbols-outlined text-slate-400">home</span>
                   <h3 className="font-bold text-slate-900 dark:text-white">Service Address</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="md:col-span-2 space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Street Address</label>
                      <input type="text" defaultValue="123 Maple Avenue" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-gray-300">City</label>
                      <input type="text" defaultValue="Springfield" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                         <label className="text-sm font-medium text-slate-700 dark:text-gray-300">State</label>
                         <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none">
                            <option>IL</option>
                         </select>
                      </div>
                      <div className="space-y-1">
                         <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Zip Code</label>
                         <input type="text" defaultValue="62704" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-slate-900 dark:text-white focus:border-primary outline-none" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
             {/* Preferences */}
             <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden sticky top-24">
                <div className="px-6 py-4 border-b border-[#e7f3e7] dark:border-[#2a3f2a] bg-slate-50 dark:bg-white/5 flex items-center gap-2">
                   <span className="material-symbols-outlined text-slate-400">notifications</span>
                   <h3 className="font-bold text-slate-900 dark:text-white">Preferences</h3>
                </div>
                <div className="p-6 space-y-6">
                   <div className="flex items-start justify-between gap-3">
                      <div>
                         <h4 className="text-sm font-medium text-slate-900 dark:text-white">Service Reminders</h4>
                         <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Get notified via email before we arrive.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" className="sr-only peer" defaultChecked />
                         <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                   </div>
                   <div className="flex items-start justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div>
                         <h4 className="text-sm font-medium text-slate-900 dark:text-white">Marketing Emails</h4>
                         <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Receive seasonal offers and tips.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" className="sr-only peer" />
                         <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="mt-8 flex justify-end gap-3">
          <button className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-gray-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Cancel</button>
          <button className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-hover text-[#0d1b0d] font-bold text-sm shadow-md">Save Changes</button>
       </div>
    </div>
  );
}