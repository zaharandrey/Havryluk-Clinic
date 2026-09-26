import { defaultLocale, locales, type L10n, type Locale } from './config';
import { ui, type UIKey } from './ui';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/** Resolve the locale from the `[...locale]` route param (undefined → default). */
export function localeFromParam(param: string | undefined): Locale {
  return isLocale(param) ? param : defaultLocale;
}

/** Route param for getStaticPaths: the default locale has no URL prefix. */
export function localeParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

export function staticLocalePaths() {
  return locales.map((locale) => ({ params: { locale: localeParam(locale) } }));
}

/** Build a locale-aware path: localizePath('/services/x', 'en') → '/en/services/x'. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

/** Strip the locale prefix from a pathname: '/en/services/x' → '/services/x'. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (isLocale(first) && first !== defaultLocale) return `/${rest.join('/')}`;
  return pathname;
}

/** Translator for UI strings (`t('nav.services')`) and localized content (`t.l(obj)`). */
export function useTranslations(locale: Locale) {
  const t = (key: UIKey): string => ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  t.l = (value: L10n): string => value[locale] ?? value[defaultLocale];
  t.locale = locale;
  t.path = (path: string) => localizePath(path, locale);
  return t;
}

export type Translator = ReturnType<typeof useTranslations>;
