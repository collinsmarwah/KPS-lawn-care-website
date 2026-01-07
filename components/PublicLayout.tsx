import React, { useState } from 'react';
import { Page } from '../types';

interface PublicLayoutProps {
  children?: React.ReactNode;
  currentPage: Page;
  navigate: (page: Page) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function PublicLayout({ children, currentPage, navigate, toggleTheme, isDarkMode }: PublicLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: Page.HOME },
    { label: 'Services', page: Page.SERVICES },
    { label: 'About Us', page: Page.ABOUT },
    { label: 'Gallery', page: Page.GALLERY },
    { label: 'Contact', page: Page.CONTACT },
  ];

  const logoUrl = "https://res.cloudinary.com/dldtmvsow/image/upload/v1767776172/302343916_538908164703459_153971651973040374_n_h1gkif.jpg";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e7f3e7] dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate(Page.HOME)}>
            <img 
              src={logoUrl} 
              alt="KP's Lawn Care" 
              className="size-10 rounded-xl object-cover"
            />
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">KP's Lawn Care</h2>
          </div>

          <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-primary'
                      : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>
              <button
                onClick={() => navigate(Page.CONTACT)}
                className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-slate-900 hover:bg-primary-hover transition-colors shadow-sm"
              >
                Get a Quote
              </button>
              <button
                onClick={() => navigate(Page.LOGIN)}
                className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                Client Login
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
             <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-gray-300"
              >
                <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-gray-300"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e7f3e7] dark:border-white/10 bg-background-light dark:bg-background-dark p-4 space-y-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    navigate(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-medium ${
                    currentPage === item.page
                      ? 'text-primary'
                      : 'text-slate-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate(Page.LOGIN);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium text-slate-600 dark:text-gray-300"
              >
                Client Login
              </button>
              <button
                onClick={() => {
                  navigate(Page.CONTACT);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full h-10 rounded-lg bg-primary text-slate-900 font-bold"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-[#e7f3e7] dark:border-white/10 pt-16 pb-8 transition-colors duration-200">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <img 
                  src={logoUrl} 
                  alt="KP's Lawn Care" 
                  className="size-8 rounded-lg object-cover"
                />
                <h2 className="text-xl font-bold">KP's Lawn Care</h2>
              </div>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                Professional lawn care services dedicated to keeping your neighborhood beautiful, one yard at a time. Licensed and insured.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Services</h3>
              <ul className="flex flex-col gap-2 text-slate-500 dark:text-gray-400 text-sm">
                <li><button onClick={() => navigate(Page.SERVICES)} className="hover:text-primary transition-colors">Lawn Mowing</button></li>
                <li><button onClick={() => navigate(Page.SERVICES)} className="hover:text-primary transition-colors">Edging & Trimming</button></li>
                <li><button onClick={() => navigate(Page.SERVICES)} className="hover:text-primary transition-colors">Cleanups</button></li>
                <li><button onClick={() => navigate(Page.SERVICES)} className="hover:text-primary transition-colors">Storm Recovery</button></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Company</h3>
              <ul className="flex flex-col gap-2 text-slate-500 dark:text-gray-400 text-sm">
                <li><button onClick={() => navigate(Page.ABOUT)} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => navigate(Page.GALLERY)} className="hover:text-primary transition-colors">Gallery</button></li>
                <li><button onClick={() => navigate(Page.ABOUT)} className="hover:text-primary transition-colors">Reviews</button></li>
                <li><button onClick={() => navigate(Page.CONTACT)} className="hover:text-primary transition-colors">Careers</button></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Contact</h3>
              <ul className="flex flex-col gap-3 text-slate-500 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-sm">location_on</span>
                  Cape Coral, FL
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-sm">phone</span>
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-sm">mail</span>
                  hello@kpslawncare.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#e7f3e7] dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">© 2026 KP's Lawn Care & Services LLC. All rights reserved.</p>
            <div className="flex gap-4">
               {/* Social Icons would go here */}
               <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">public</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}