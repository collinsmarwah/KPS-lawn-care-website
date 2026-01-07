import React, { useState, useEffect } from 'react';
import { Page } from './types';
import PublicLayout from './components/PublicLayout';
import PortalLayout from './components/PortalLayout';
import HomePage from './pages/public/HomePage';
import ServicesPage from './pages/public/ServicesPage';
import AboutPage from './pages/public/AboutPage';
import GalleryPage from './pages/public/GalleryPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/portal/LoginPage';
import DashboardPage from './pages/portal/DashboardPage';
import ProfilePage from './pages/portal/ProfilePage';
import PaymentsPage from './pages/portal/PaymentsPage';
import InvoicesPage from './pages/portal/InvoicesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigate = (page: Page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const isPortal = [
    Page.DASHBOARD,
    Page.PROFILE,
    Page.PAYMENTS,
    Page.INVOICES
  ].includes(currentPage);

  if (currentPage === Page.LOGIN) {
    return <LoginPage navigate={navigate} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />;
  }

  if (isPortal) {
    return (
      <PortalLayout
        currentPage={currentPage}
        navigate={navigate}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      >
        {currentPage === Page.DASHBOARD && <DashboardPage navigate={navigate} />}
        {currentPage === Page.PROFILE && <ProfilePage />}
        {currentPage === Page.PAYMENTS && <PaymentsPage />}
        {currentPage === Page.INVOICES && <InvoicesPage />}
      </PortalLayout>
    );
  }

  return (
    <PublicLayout
      currentPage={currentPage}
      navigate={navigate}
      toggleTheme={toggleTheme}
      isDarkMode={isDarkMode}
    >
      {currentPage === Page.HOME && <HomePage navigate={navigate} />}
      {currentPage === Page.SERVICES && <ServicesPage />}
      {currentPage === Page.ABOUT && <AboutPage />}
      {currentPage === Page.GALLERY && <GalleryPage />}
      {currentPage === Page.CONTACT && <ContactPage />}
    </PublicLayout>
  );
}