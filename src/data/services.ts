import type { Service } from './types';

/**
 * PLACEHOLDER CONTENT — the list of services has not been confirmed by the clinic.
 * Add, remove or reorder freely: numbering (01, 02…), the home page list,
 * detail pages (/services/[slug]), the booking form and the sitemap all derive from this array.
 */
const summary = {
  uk: '[Короткий опис послуги — 1 речення]',
  en: '[Short service description — 1 sentence]',
};

const photo = (uk: string, en: string) => ({
  alt: { uk: `${uk} — фото напрямку`, en: `${en} — treatment photo` },
});

const service = (slug: string, uk: string, en: string): Service => ({
  slug,
  title: { uk, en },
  summary,
  image: photo(uk, en),
});

export const services: Service[] = [
  service('implantology', 'Імплантація', 'Dental implants'),
  service('aesthetic-dentistry', 'Естетична стоматологія', 'Aesthetic dentistry'),
  service('veneers', 'Вініри', 'Veneers'),
  service('orthodontics', 'Ортодонтія', 'Orthodontics'),
  service('general-dentistry', 'Терапевтична стоматологія', 'General dentistry'),
  service('hygiene', 'Професійна гігієна', 'Professional hygiene'),
  service('pediatric-dentistry', 'Дитяча стоматологія', 'Pediatric dentistry'),
  service('oral-surgery', 'Хірургічна стоматологія', 'Oral surgery'),
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
