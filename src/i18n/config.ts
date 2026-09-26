export const locales = ['uk', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uk';

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  uk: { label: 'UA', htmlLang: 'uk', ogLocale: 'uk_UA' },
  en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
};

/** Localized string: one value per locale. */
export type L10n = Record<Locale, string>;
