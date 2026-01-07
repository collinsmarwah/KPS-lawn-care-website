import React from 'react';
import { Page } from '../types';

interface PortalLayoutProps {
  children?: React.ReactNode;
  currentPage: Page;
  navigate: (page: Page) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function PortalLayout({ children, currentPage, navigate, toggleTheme, isDarkMode }: PortalLayoutProps) {
  const menuItems = [
    { label: 'Dashboard', page: Page.DASHBOARD, icon: 'dashboard' },
    { label: 'Service History', page: Page.DASHBOARD, icon: 'history' },
    { label: 'Invoices', page: Page.INVOICES, icon: 'receipt_long', badge: '1' },
    { label: 'Payments', page: Page.PAYMENTS, icon: 'credit_card' },
    { label: 'Profile', page: Page.PROFILE, icon: 'person' },
  ];

  const logoUrl = "https://res.cloudinary.com/dldtmvsow/image/upload/v1767776172/302343916_538908164703459_153971651973040374_n_h1gkif.jpg";

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-gray-100 transition-colors duration-200">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-surface-light dark:bg-surface-dark border-r border-[#e7f3e7] dark:border-[#2a3f2a] transition-colors duration-200">
        <div className="p-6 flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt="KP's Lawn Care" 
            className="size-10 rounded-xl object-cover shrink-0"
          />
          <div>
            <h1 className="text-lg font-bold leading-tight">KP's Lawn Care</h1>
            <p className="text-xs text-text-muted">Client Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.page)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-left group ${
                currentPage === item.page
                  ? 'bg-primary/20 dark:bg-primary/10 text-green-700 dark:text-primary'
                  : 'text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-[#253825]'
              }`}
            >
              <span className={`material-symbols-outlined ${currentPage === item.page ? 'filled-icon' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm font-semibold">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#e7f3e7] dark:border-[#2a3f2a]">
          <div className="p-4 rounded-2xl bg-green-50 dark:bg-[#152e15] border border-primary/20 mb-4">
             <div className="flex gap-3 items-center mb-3">
                <div className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk8c4RK32MhzKv379Kx-NdZlHYBHzFjFC7SBg5o9_fwqLF_ePlLQG3VoOckWHp_qwgMxE16iY2HJMZ-3Hi9QYUZ2H0H2ZaPKUBTiF_DqTsAvBYLnAET_IYYgidHx_A068ztczAmuvA0wxT-x48qMiWUppHX3PfnLQ7smBKZSZaUtv0SeskzvwRkI1kaFyeDrQU77IVSL-Lvw49v3_8yBN6uMzMSAn7WNnvUJ7YR-04XlDei7Ob2MNITpS4LFiycyM8cUw2uaTkUHI")'}}></div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Kevin P.</h3>
                  <span className="text-xs text-green-700 dark:text-primary font-medium bg-green-100 dark:bg-[#0f350f] px-1.5 py-0.5 rounded-md w-fit">Premium Client</span>
                </div>
             </div>
             <button onClick={() => navigate(Page.LOGIN)} className="w-full flex items-center justify-center gap-2 h-9 rounded-lg bg-white dark:bg-[#2a3f2a] border border-[#e7f3e7] dark:border-[#3e563e] text-xs font-bold hover:bg-slate-50 dark:hover:bg-[#354a35] transition-colors">
                <span className="material-symbols-outlined !text-[16px]">logout</span>
                Sign Out
             </button>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 w-full p-2 text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            <span className="text-sm font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="md:hidden flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border-b border-[#e7f3e7] dark:border-[#2a3f2a]">
            <div className="flex items-center gap-2">
                <img 
                  src={logoUrl} 
                  alt="KP's Lawn Care" 
                  className="size-8 rounded-lg object-cover"
                />
                <span className="font-bold text-lg dark:text-white">KP's Portal</span>
            </div>
            <button className="p-2" onClick={() => {}}>
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
        <div className="flex-1 overflow-y-auto">
            {children}
        </div>
      </main>
    </div>
  );
}