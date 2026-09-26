import type { Doctor } from './types';

/** PLACEHOLDER CONTENT — replace with real doctors. Do not invent names. */
const placeholder = (n: number): Doctor => ({
  slug: `doctor-${n}`,
  name: { uk: '[Ім’я лікаря]', en: '[Doctor name]' },
  role: { uk: '[Посада]', en: '[Position]' },
  specialization: { uk: '[Спеціалізація]', en: '[Specialization]' },
  image: { alt: { uk: 'Портрет лікаря [Ім’я лікаря]', en: 'Portrait of [Doctor name]' } },
});

export const doctors: Doctor[] = [placeholder(1), placeholder(2), placeholder(3)];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
