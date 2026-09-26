import type { Testimonial } from './types';

/** PLACEHOLDER CONTENT — use only real, verifiable reviews (with permission). */
const placeholder: Testimonial = {
  quote: { uk: '[Відгук пацієнта]', en: '[Patient review]' },
  author: { uk: '[Ім’я пацієнта]', en: '[Patient name]' },
  rating: null,
  source: { uk: '[Google Reviews / джерело]', en: '[Google Reviews / source]' },
};

export const testimonials: Testimonial[] = [placeholder, placeholder, placeholder];
