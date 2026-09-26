import type { ImageSlot, TechItem } from './types';

/**
 * PLACEHOLDER CONTENT — do not list specific equipment until the clinic confirms it.
 * Titles in [brackets] are suggested topics only.
 */
const text = {
  uk: '[PLACEHOLDER: що це дає пацієнту — 1–2 речення.]',
  en: '[PLACEHOLDER: what it means for the patient — 1–2 sentences.]',
};

export const technology: TechItem[] = [
  { title: { uk: '[Цифрова діагностика]', en: '[Digital diagnostics]' }, text },
  { title: { uk: '[3D-візуалізація]', en: '[3D imaging]' }, text },
  { title: { uk: '[Цифровий дизайн усмішки]', en: '[Digital smile design]' }, text },
  { title: { uk: '[Сучасні протоколи лікування]', en: '[Modern treatment protocols]' }, text },
];

export const technologyImages: ImageSlot[] = [
  { alt: { uk: 'Обладнання клініки — фото', en: 'Clinic equipment — photo' } },
  { alt: { uk: 'Деталь обладнання — фото', en: 'Equipment detail — photo' } },
];
