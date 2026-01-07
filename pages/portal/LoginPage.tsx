import React from 'react';
import { Page } from '../../types';

interface LoginPageProps {
  navigate: (page: Page) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function LoginPage({ navigate, toggleTheme, isDarkMode }: LoginPageProps) {
  const logoUrl = "https://res.cloudinary.com/dldtmvsow/image/upload/v1767776172/302343916_538908164703459_153971651973040374_n_h1gkif.jpg";

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaFU_Bk8gd30bSVcdnzEBtyIzdpijVJnQQKE3KJ_5Z6GH_oYohbYP7tOF_lKHgTBoje8otSTLjvl5H-9xB2BA-qQHFZEyFg-B4Bjz1sJFVF2H3j-0HZryTPINKjNVOtt9zD13rW0d1hGrleq5JEkZCq0UBPt_XTTGpWyBKAw8l-jmgJ-jHrG2gcI0n3cCIfGL1AXukjhFEQ4_4P-atn6lsvKoFZWYwkWaIaUWKbqSx6mjt3tv13YiapbRUDjz3jJ16ZXzWODjKW-8")'}}></div>
            <div className="absolute inset-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 w-full p-6 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(Page.HOME)}>
                <img 
                  src={logoUrl} 
                  alt="KP's Lawn Care" 
                  className="size-8 rounded-lg object-cover"
                />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">KP's Lawn Care</h2>
            </div>
            <button onClick={toggleTheme} className="text-slate-600 dark:text-white p-2">
                <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 relative z-10">
            <div className="w-full max-w-md bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl border border-[#e7f3e7] dark:border-[#2a3f2a] overflow-hidden">
                <div className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined !text-3xl">account_circle</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Client Portal Access</h1>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">Welcome back! Please enter your details.</p>
                    
                    <form className="mt-8 flex flex-col gap-5 text-left" onSubmit={(e) => { e.preventDefault(); navigate(Page.DASHBOARD); }}>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Email Address</label>
                            <input type="email" placeholder="user@example.com" className="w-full rounded-lg border border-[#cfe7cf] dark:border-[#2a3f2a] bg-background-light dark:bg-background-dark h-12 px-4 text-slate-900 dark:text-white outline-none focus:border-primary transition-all" />
                        </div>
                        <div className="space-y-1 relative">
                            <label className="text-sm font-medium text-slate-700 dark:text-gray-300">Password</label>
                            <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-[#cfe7cf] dark:border-[#2a3f2a] bg-background-light dark:bg-background-dark h-12 px-4 text-slate-900 dark:text-white outline-none focus:border-primary transition-all" />
                        </div>
                        <button type="submit" className="w-full h-12 bg-primary hover:bg-[#0fd60f] text-[#0d1b0d] font-bold rounded-lg mt-2 transition-all">Sign In</button>
                    </form>
                </div>
                <div className="bg-background-light/50 dark:bg-background-dark/50 p-4 text-center border-t border-[#e7f3e7] dark:border-[#2a3f2a]">
                    <p className="text-sm text-slate-500 dark:text-gray-400">Don't have an account? <span className="text-primary cursor-pointer hover:underline" onClick={() => navigate(Page.CONTACT)}>Contact us</span></p>
                </div>
            </div>
        </div>
    </div>
  );
}