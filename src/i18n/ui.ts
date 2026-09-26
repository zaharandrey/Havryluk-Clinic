/**
 * UI dictionary. Ukrainian is the source of truth; English must provide every key
 * (enforced by the type). Content that belongs to entities (services, doctors, FAQ…)
 * lives in `src/data/*` as localized objects instead.
 *
 * Anything in [square brackets] is placeholder copy awaiting real content.
 */
const uk = {
  'meta.home.title': 'Havryluk Clinic — сучасна стоматологія в [Місто]',
  'meta.home.description':
    'Havryluk Clinic — сучасна стоматологія з точністю, комфортом і персональним підходом. Запис на консультацію онлайн або за телефоном.',

  'a11y.skip': 'Перейти до основного вмісту',
  'a11y.menuOpen': 'Відкрити меню',
  'a11y.menuClose': 'Закрити меню',
  'a11y.primaryNav': 'Основна навігація',
  'a11y.language': 'Мова сайту',
  'a11y.home': 'Havryluk Clinic — на головну',
  'a11y.prev': 'Попередній',
  'a11y.next': 'Наступний',
  'a11y.compare': 'Порівняння до та після: перетягніть розділювач',

  'nav.services': 'Послуги',
  'nav.about': 'Про клініку',
  'nav.doctors': 'Лікарі',
  'nav.results': 'Результати',
  'nav.reviews': 'Відгуки',
  'nav.contact': 'Контакти',
  'nav.faq': 'Питання',

  'cta.book': 'Записатися',
  'cta.bookConsultation': 'Записатися на консультацію',
  'cta.call': 'Подзвонити',
  'cta.services': 'Наші послуги',
  'cta.more': 'Детальніше',
  'cta.allServices': 'Усі послуги',
  'cta.backHome': 'На головну',

  'hero.eyebrow': 'Havryluk Clinic · [Місто]',
  'hero.title.line1': 'Сучасна стоматологія.',
  'hero.title.line2': 'Уважно й персонально.',
  'hero.lead':
    'Точність, комфорт і персональний підхід на кожному етапі лікування. [PLACEHOLDER: одне речення про клініку та її філософію.]',

  'trust.years': 'років досвіду',
  'trust.rating': 'рейтинг',
  'trust.patients': 'пацієнтів',
  'trust.location': 'Де ми',

  'services.eyebrow': 'Послуги',
  'services.title': 'Наші напрямки',
  'services.intro':
    '[PLACEHOLDER: короткий вступ до напрямків клініки — 1–2 речення про комплексний підхід.]',
  'services.previewLabel': 'Фото напрямку',

  'about.eyebrow': 'Про клініку',
  'about.title.line1': 'Стоматологія',
  'about.title.line2': 'з іншим підходом.',
  'about.lead':
    '[PLACEHOLDER: історія Havryluk Clinic — коли і чому клініку засновано, що для неї важливо. 2–3 речення.]',

  'doctors.eyebrow': 'Команда',
  'doctors.title': 'Наші лікарі',
  'doctors.intro': '[PLACEHOLDER: одне речення про команду та її підхід.]',

  'results.eyebrow': 'Результати',
  'results.title': 'Реальні результати',
  'results.intro':
    '[PLACEHOLDER: пояснення, що фото публікуються за згодою пацієнтів.] Результат лікування індивідуальний.',
  'results.before': 'До',
  'results.after': 'Після',

  'tech.eyebrow': 'Технології',
  'tech.title.line1': 'Технології,',
  'tech.title.line2': 'що служать точності.',
  'tech.intro':
    '[PLACEHOLDER: опис підходу клініки до технологій. Конкретне обладнання буде додано після підтвердження.]',

  'reviews.eyebrow': 'Відгуки',
  'reviews.title': 'Що кажуть пацієнти',
  'reviews.allReviews': 'Усі відгуки',

  'faq.eyebrow': 'Питання',
  'faq.title': 'Часті запитання',
  'faq.intro': 'Не знайшли відповідь? Зателефонуйте нам — ми підкажемо.',

  'cta.final.title.line1': 'Ваша усмішка заслуговує',
  'cta.final.title.line2': 'уважної турботи.',
  'cta.final.lead':
    'Запишіться на консультацію — ми обговоримо ваші побажання та запропонуємо план лікування.',

  'contact.eyebrow': 'Контакти',
  'contact.title': 'Запис на консультацію',
  'contact.address': 'Адреса',
  'contact.phone': 'Телефон',
  'contact.email': 'Email',
  'contact.hours': 'Години роботи',
  'contact.map': 'Карта',
  'contact.mapPlaceholder': 'Карта / маршрут',
  'form.name': "Ім'я",
  'form.phone': 'Телефон',
  'form.service': 'Напрямок',
  'form.serviceAny': 'Ще не знаю — потрібна консультація',
  'form.message': 'Коментар',
  'form.messageHint': "Необов'язково",
  'form.consent': 'Погоджуюся на обробку персональних даних',
  'form.submit': 'Надіслати запит',
  'form.sending': 'Надсилаємо…',
  'form.success': 'Дякуємо! Ми зв’яжемося з вами найближчим часом.',
  'form.error': 'Не вдалося надіслати. Будь ласка, зателефонуйте нам.',
  'form.notConnected':
    '[DEV] Форму ще не підключено до CRM / email. Вкажіть booking.formEndpoint у src/config/site.ts.',

  'footer.nav': 'Навігація',
  'footer.contacts': 'Контакти',
  'footer.social': 'Соцмережі',
  'footer.rights': 'Усі права захищено.',
  'footer.tagline': 'Сучасна стоматологія. Уважно й персонально.',

  'service.overview': 'Про напрямок',
  'service.overviewText':
    '[PLACEHOLDER: опис напрямку — для кого, як проходить лікування, скільки триває, чого очікувати.]',
  'service.steps': 'Як проходить лікування',
  'service.step': '[Етап лікування]',
  'service.stepText': '[PLACEHOLDER: короткий опис етапу.]',
  'service.price': 'Вартість',
  'service.priceText': '[Вартість визначається після консультації / PLACEHOLDER]',

  'doctor.about': 'Про лікаря',
  'doctor.aboutText':
    '[PLACEHOLDER: біографія лікаря — освіта, досвід, напрямки, професійна філософія.]',
  'doctor.education': 'Освіта та сертифікати',
  'doctor.educationText': '[PLACEHOLDER: освіта, курси, сертифікати.]',

  'notFound.title': 'Сторінку не знайдено',
  'notFound.text': 'Можливо, її перемістили або адреса введена неправильно.',
};

export type UIKey = keyof typeof uk;

const en: Record<UIKey, string> = {
  'meta.home.title': 'Havryluk Clinic — modern dentistry in [City]',
  'meta.home.description':
    'Havryluk Clinic — modern dentistry with precision, comfort and a personal approach. Book a consultation online or by phone.',

  'a11y.skip': 'Skip to main content',
  'a11y.menuOpen': 'Open menu',
  'a11y.menuClose': 'Close menu',
  'a11y.primaryNav': 'Primary navigation',
  'a11y.language': 'Site language',
  'a11y.home': 'Havryluk Clinic — home',
  'a11y.prev': 'Previous',
  'a11y.next': 'Next',
  'a11y.compare': 'Before and after comparison: drag the divider',

  'nav.services': 'Services',
  'nav.about': 'About',
  'nav.doctors': 'Doctors',
  'nav.results': 'Results',
  'nav.reviews': 'Reviews',
  'nav.contact': 'Contact',
  'nav.faq': 'FAQ',

  'cta.book': 'Book',
  'cta.bookConsultation': 'Book a consultation',
  'cta.call': 'Call',
  'cta.services': 'Our services',
  'cta.more': 'Learn more',
  'cta.allServices': 'All services',
  'cta.backHome': 'Back to home',

  'hero.eyebrow': 'Havryluk Clinic · [City]',
  'hero.title.line1': 'Modern dentistry.',
  'hero.title.line2': 'Thoughtfully personal.',
  'hero.lead':
    'Precision, comfort and a personal approach at every stage of treatment. [PLACEHOLDER: one sentence about the clinic and its philosophy.]',

  'trust.years': 'years of experience',
  'trust.rating': 'rating',
  'trust.patients': 'patients',
  'trust.location': 'Find us',

  'services.eyebrow': 'Services',
  'services.title': 'What we do',
  'services.intro':
    '[PLACEHOLDER: short introduction to the clinic’s areas of care — 1–2 sentences.]',
  'services.previewLabel': 'Treatment photo',

  'about.eyebrow': 'About',
  'about.title.line1': 'Dentistry,',
  'about.title.line2': 'with a different approach.',
  'about.lead':
    '[PLACEHOLDER: the story of Havryluk Clinic — when and why it was founded, what matters most. 2–3 sentences.]',

  'doctors.eyebrow': 'Team',
  'doctors.title': 'Our doctors',
  'doctors.intro': '[PLACEHOLDER: one sentence about the team and its approach.]',

  'results.eyebrow': 'Results',
  'results.title': 'Real results',
  'results.intro':
    '[PLACEHOLDER: note that photos are published with patient consent.] Individual results may vary.',
  'results.before': 'Before',
  'results.after': 'After',

  'tech.eyebrow': 'Technology',
  'tech.title.line1': 'Technology',
  'tech.title.line2': 'meets precision.',
  'tech.intro':
    '[PLACEHOLDER: the clinic’s approach to technology. Specific equipment will be added once confirmed.]',

  'reviews.eyebrow': 'Reviews',
  'reviews.title': 'What patients say',
  'reviews.allReviews': 'All reviews',

  'faq.eyebrow': 'FAQ',
  'faq.title': 'Frequently asked questions',
  'faq.intro': 'Didn’t find an answer? Give us a call — we’re happy to help.',

  'cta.final.title.line1': 'Your smile deserves',
  'cta.final.title.line2': 'thoughtful care.',
  'cta.final.lead':
    'Book a consultation — we’ll discuss your goals and propose a treatment plan.',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Book a consultation',
  'contact.address': 'Address',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.hours': 'Opening hours',
  'contact.map': 'Map',
  'contact.mapPlaceholder': 'Map / directions',
  'form.name': 'Name',
  'form.phone': 'Phone',
  'form.service': 'Area of care',
  'form.serviceAny': 'Not sure yet — I need a consultation',
  'form.message': 'Comment',
  'form.messageHint': 'Optional',
  'form.consent': 'I agree to the processing of my personal data',
  'form.submit': 'Send request',
  'form.sending': 'Sending…',
  'form.success': 'Thank you! We will contact you shortly.',
  'form.error': 'Something went wrong. Please give us a call.',
  'form.notConnected':
    '[DEV] The form is not connected to a CRM / email yet. Set booking.formEndpoint in src/config/site.ts.',

  'footer.nav': 'Navigation',
  'footer.contacts': 'Contact',
  'footer.social': 'Social',
  'footer.rights': 'All rights reserved.',
  'footer.tagline': 'Modern dentistry. Thoughtfully personal.',

  'service.overview': 'Overview',
  'service.overviewText':
    '[PLACEHOLDER: description — who it is for, how treatment works, duration, what to expect.]',
  'service.steps': 'How treatment works',
  'service.step': '[Treatment step]',
  'service.stepText': '[PLACEHOLDER: short description of this step.]',
  'service.price': 'Pricing',
  'service.priceText': '[Pricing is confirmed after consultation / PLACEHOLDER]',

  'doctor.about': 'About',
  'doctor.aboutText':
    '[PLACEHOLDER: doctor biography — education, experience, focus areas, professional philosophy.]',
  'doctor.education': 'Education & certificates',
  'doctor.educationText': '[PLACEHOLDER: education, courses, certificates.]',

  'notFound.title': 'Page not found',
  'notFound.text': 'It may have moved, or the address may be incorrect.',
};

export const ui = { uk, en } as const;
