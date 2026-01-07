export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  GALLERY = 'gallery',
  CONTACT = 'contact',
  LOGIN = 'login',
  DASHBOARD = 'dashboard',
  PROFILE = 'profile',
  PAYMENTS = 'payments',
  INVOICES = 'invoices'
}

export interface NavItem {
  label: string;
  page: Page;
  icon?: string;
}