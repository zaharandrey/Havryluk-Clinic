import type { FaqItem } from './types';

/**
 * Questions are drafts; answers are PLACEHOLDERS.
 * FAQPage schema is emitted automatically only once no answer contains a [placeholder].
 */
const answer = {
  uk: '[PLACEHOLDER: відповідь буде надана клінікою.]',
  en: '[PLACEHOLDER: answer to be provided by the clinic.]',
};

const q = (uk: string, en: string): FaqItem => ({ question: { uk, en }, answer });

export const faq: FaqItem[] = [
  q('Як записатися на консультацію?', 'How do I book a consultation?'),
  q('Скільки триває консультація?', 'How long does a consultation take?'),
  q('Як підготуватися до першого візиту?', 'How should I prepare for my first visit?'),
  q('Чи можна отримати попередню оцінку вартості лікування?', 'Can I get a preliminary cost estimate?'),
  q('Чи приймає клініка дітей?', 'Do you treat children?'),
  q('Які способи оплати доступні?', 'Which payment methods are available?'),
];
