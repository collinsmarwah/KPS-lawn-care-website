import React from 'react';

export default function PaymentsPage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
        <div className="mb-8">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Payment Methods</h1>
            <p className="text-slate-500 dark:text-gray-400">Manage your payment details securely.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Saved Cards</h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden p-1">
                    <div className="flex flex-col gap-2 p-3">
                        <label className="relative flex items-center gap-4 rounded-lg border border-primary bg-green-50/50 dark:bg-primary/5 p-4 cursor-pointer">
                            <input type="radio" name="default_card" defaultChecked className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" />
                            <div className="bg-white dark:bg-gray-800 rounded p-2 flex items-center justify-center w-12 h-8">
                               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-_zbvxMURRMiweVKkXMJsGqr77vmxM1clTE-ijvj4I3hV3I0pWTjiCd4YFOX21GtXOqm3F6B3H4qWE8SzzOUrYqBs5pXUn4VYC1zSVmNLnc-z5KgWQz27_MrizT8z1BVJQMJjmj_UOX8AwdscFgfUlDlmHz8Tyt_qqXMYKDN2OlhWtlxwtlNLI1dZgT7h5sy6BF0tNKuQus3DKodYkZHLjqbpzZCqeMrAKKwGXjjJd3Chz_rwT91ObiLA2YDtBaj8KeoU046enY" alt="Visa" className="h-full w-auto opacity-80" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Visa ending in 4242</p>
                                    <span className="bg-primary/20 text-green-800 dark:text-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Default</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Expires 05/26</p>
                            </div>
                            <button className="text-slate-400 hover:text-red-500 p-2"><span className="material-symbols-outlined">delete</span></button>
                        </label>
                        
                        <label className="relative flex items-center gap-4 rounded-lg border border-[#e7f3e7] dark:border-[#2a3f2a] p-4 cursor-pointer hover:border-slate-300 dark:hover:border-gray-600">
                            <input type="radio" name="default_card" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" />
                            <div className="bg-white dark:bg-gray-800 rounded p-2 flex items-center justify-center w-12 h-8">
                               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb52JXrASNFf4jNz8kJWMbjef_HqZUpAZjocdd4ZPfIOVrUWk498SxzB0ggkqDxMcUnqS_KL0Z3D5EM4B9ID9bH1FLmKj-ZWDGMEBfrp3wgyrJ-dh3OliKjvapyr-JycN3TUacG_XXZjz-2RSPNCaG60QaUcXEuj-3VtAfr5epVgA_4UstnWDWFIgdQPddkcfOYUkYz2fI5Hl8iWvgBvTHZqy8RfdUZj-EIWbnu1ro1WM1L3pVe4NpxPK4hDyw9EvsLBlLCX_aYLs" alt="Mastercard" className="h-full w-auto opacity-80" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Mastercard ending in 8888</p>
                                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Expires 11/24</p>
                            </div>
                            <button className="text-slate-400 hover:text-red-500 p-2"><span className="material-symbols-outlined">delete</span></button>
                        </label>
                    </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">lock_person</span>
                    <div>
                        <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200">Secure Payments</h4>
                        <p className="text-xs text-blue-800 dark:text-blue-300 mt-1 leading-relaxed">Your payment information is encrypted and processed securely.</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7">
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7f3e7] dark:border-[#2a3f2a] shadow-lg p-6 md:p-8">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Add New Payment Method</h2>
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Card Number</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">credit_card</span>
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:border-primary outline-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Expiration</label>
                                <input type="text" placeholder="MM / YY" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:border-primary outline-none" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-gray-300">CVC</label>
                                <input type="text" placeholder="123" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:border-primary outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Cardholder Name</label>
                            <input type="text" placeholder="Full Name on Card" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:border-primary outline-none" />
                        </div>
                        
                        <div className="mt-4 flex gap-4">
                            <button className="flex-1 bg-primary hover:bg-green-500 text-[#0d1b0d] font-bold py-3 px-6 rounded-lg shadow-sm flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">add_card</span> Add Card
                            </button>
                            <button className="flex-1 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-gray-300 font-bold py-3 px-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}