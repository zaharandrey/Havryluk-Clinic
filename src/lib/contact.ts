import { site } from '@/config/site';
import { bookingHref } from '@/data/navigation';
import { localizePath } from '@/i18n/utils';
import type { Locale } from '@/i18n/config';
import { isFilled } from './placeholder';

/** Click-to-call link, or the booking anchor while the phone number is unknown. */
export function phoneHref(locale: Locale): string {
  return isFilled(site.contact.phoneE164)
    ? `tel:${site.contact.phoneE164}`
    : localizePath(bookingHref, locale);
}

export function bookingPath(locale: Locale): string {
  return isFilled(site.booking.externalUrl)
    ? site.booking.externalUrl
    : localizePath(bookingHref, locale);
}

export function emailHref(): string | undefined {
  return isFilled(site.contact.email) ? `mailto:${site.contact.email}` : undefined;
}

export const socialLinks = () => site.social;
