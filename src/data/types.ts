import type { ImageMetadata } from 'astro';
import type { L10n } from '@/i18n/config';

/**
 * Image slot. Leave `src` undefined to render an art-directed placeholder
 * with the correct aspect ratio. To use a real photo:
 *   import photo from '@/assets/images/…/photo.jpg';
 *   image: { src: photo, alt: { uk: '…', en: '…' } }
 * Astro then generates responsive AVIF/WebP automatically.
 */
export interface ImageSlot {
  src?: ImageMetadata;
  alt: L10n;
}

export interface Service {
  slug: string;
  title: L10n;
  summary: L10n;
  image: ImageSlot;
}

export interface Doctor {
  slug: string;
  name: L10n;
  role: L10n;
  specialization: L10n;
  image: ImageSlot;
}

export interface Testimonial {
  quote: L10n;
  author: L10n;
  /** 1–5, or null while unknown. */
  rating: number | null;
  source: L10n;
  sourceUrl?: string;
}

export interface FaqItem {
  question: L10n;
  answer: L10n;
}

export interface TechItem {
  title: L10n;
  text: L10n;
}

export interface ResultCase {
  title: L10n;
  before: ImageSlot;
  after: ImageSlot;
}
