import type { APIRoute } from 'astro';
import { locales } from '@/i18n/config';
import { localizePath } from '@/i18n/utils';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { isFilled } from '@/lib/placeholder';

/**
 * sitemap.xml with hreflang alternates. Derived from the data files,
 * so new services / doctors appear automatically. Doctor pages are listed
 * only once they have a real name (placeholder pages are noindex).
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://example.com');
  const paths = [
    '/',
    ...services.map((s) => `/services/${s.slug}`),
    ...doctors.filter((d) => isFilled(d.name.uk)).map((d) => `/doctors/${d.slug}`),
  ];

  const url = (path: string) => {
    const alternates = locales
      .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(localizePath(path, l), base).href}"/>`)
      .join('');
    return locales
      .map((l) => `<url><loc>${new URL(localizePath(path, l), base).href}</loc>${alternates}</url>`)
      .join('');
  };

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    paths.map(url).join('') +
    `</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
