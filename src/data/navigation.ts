import type { UIKey } from '@/i18n/ui';

/**
 * Navigation. Items point to home-page anchors today;
 * switch `href` to '/services', '/doctors'… once those pages exist.
 * Paths are locale-agnostic — components localize them.
 */
export interface NavItem {
  key: UIKey;
  href: string;
}

export const primaryNav: NavItem[] = [
  { key: 'nav.services', href: '/#services' },
  { key: 'nav.about', href: '/#about' },
  { key: 'nav.doctors', href: '/#doctors' },
  { key: 'nav.results', href: '/#results' },
  { key: 'nav.reviews', href: '/#reviews' },
  { key: 'nav.contact', href: '/#contact' },
];

export const footerNav: NavItem[] = [
  { key: 'nav.services', href: '/#services' },
  { key: 'nav.about', href: '/#about' },
  { key: 'nav.doctors', href: '/#doctors' },
  { key: 'nav.faq', href: '/#faq' },
  { key: 'nav.contact', href: '/#contact' },
];

export const bookingHref = '/#contact';
