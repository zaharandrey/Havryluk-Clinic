/**
 * Central clinic configuration.
 * Every value in [square brackets] is a PLACEHOLDER — replace with real data.
 * Helpers in `lib/placeholder.ts` detect placeholders so they are never
 * emitted into structured data (schema.org) or used as real links.
 */
export const site = {
  name: 'Havryluk Clinic',
  shortName: 'Havryluk',

  contact: {
    phoneDisplay: '[Телефон]',
    /** E.164 format, e.g. +380XXXXXXXXX. Leave empty until known. */
    phoneE164: '',
    email: '[Email]',
    address: {
      uk: '[Адреса клініки]',
      en: '[Clinic address]',
    },
    city: { uk: '[Місто]', en: '[City]' },
    hours: {
      uk: '[Години роботи]',
      en: '[Opening hours]',
    },
    /** Link to Google Maps / Apple Maps. Leave empty until known. */
    mapUrl: '',
  },

  social: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
  ],

  /** Hero trust signals — placeholders until real numbers are provided. */
  trust: {
    years: '[XX]',
    rating: '[X.X]',
    ratingSource: '[Google Reviews]',
    patients: '[XXXX]+',
  },

  booking: {
    /**
     * Form endpoint (Formspree, CRM webhook, own API…).
     * While empty, the form validates locally and shows a notice instead of sending.
     */
    formEndpoint: '',
    /** Optional external booking system URL. */
    externalUrl: '',
  },

  seo: {
    /** Absolute or root-relative path to a 1200×630 JPG. Leave empty until a real image exists. */
    ogImage: '',
    twitterHandle: '',
  },
} as const;

export type Site = typeof site;
