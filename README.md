# Havryliuk Clinic — сайт

Преміальний двомовний (UA / EN) сайт стоматологічної клініки. Це дизайн-система і frontend-основа: увесь невідомий контент — це `[PLACEHOLDER]`.

**Стек:** [Astro](https://astro.build) (статична генерація, за замовчуванням нуль JS) + власний CSS на design tokens.
**Залежності:** лише `astro` та два self-hosted шрифти (`@fontsource-variable/cormorant-garamond`, `@fontsource-variable/manrope`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/ (статичні файли, можна хостити будь-де)
npm run preview
```

## Структура

```
src/
├── config/site.ts         ← назва, телефон, адреса, соцмережі, trust-цифри, endpoint форми
├── i18n/
│   ├── config.ts          ← список мов
│   ├── ui.ts              ← усі UI-тексти (uk — джерело, en — типізований переклад)
│   └── utils.ts           ← t(), t.l(), localizePath()
├── data/                  ← контент-сутності (локалізовані поля { uk, en })
│   ├── services.ts        ← послуги → список, сторінки /services/[slug], форма, sitemap
│   ├── doctors.ts         ← лікарі → картки, сторінки /doctors/[slug]
│   ├── testimonials.ts, faq.ts, technology.ts, results.ts, navigation.ts
├── styles/
│   ├── tokens.css         ← ЄДИНЕ місце з кольорами, шрифтами, відступами, анімаціями
│   └── global.css
├── components/            ← Header, MobileMenu, Button, Hero, TrustBar, SectionHeading,
│                            ServiceList, ServiceItem, About, DoctorCard, DoctorGrid,
│                            ResultsSlider, Technology, Testimonial(s), FAQAccordion, CTA,
│                            ContactBlock, Footer, LanguageSwitcher, MobileActionBar,
│                            Media, PageHero, Seo, SchemaOrg, Logo
├── layouts/BaseLayout.astro
└── pages/
    ├── [...locale]/index.astro              → /  та  /en/
    ├── [...locale]/services/[slug].astro    → /services/…  та  /en/services/…
    ├── [...locale]/doctors/[slug].astro     → /doctors/…   та  /en/doctors/…
    ├── 404.astro, sitemap.xml.ts, robots.txt.ts
```

Одна сторінка = один файл для всіх мов. Щоб додати нову сторінку (About, Results, Reviews, FAQ, Contact), створіть `src/pages/[...locale]/about.astro` з `getStaticPaths = staticLocalePaths` і змініть `href` у `data/navigation.ts`.

## Як наповнювати реальним контентом

| Що | Де |
|---|---|
| Телефон, email, адреса, години, карта, соцмережі | `src/config/site.ts` |
| Цифри hero (роки, рейтинг, пацієнти) | `site.trust` |
| Домен (canonical, sitemap, OG) | `astro.config.mjs → site` |
| Форма запису | `site.booking.formEndpoint` (Formspree / CRM webhook / API, приймає JSON) |
| Тексти інтерфейсу | `src/i18n/ui.ts` |
| Послуги, лікарі, відгуки, FAQ, технології, кейси | `src/data/*.ts` |
| OG-зображення 1200×630 | покласти в `public/`, вказати шлях у `site.seo.ogImage` |
| Логотип | `src/components/Logo.astro` |

**Фотографії.** Покладіть оригінал у `src/assets/images/…`, імпортуйте та передайте в слот:

```ts
import veneers from '@/assets/images/services/veneers.jpg';
service('veneers', 'Вініри', 'Veneers') // → додайте image: { src: veneers, alt: {...} }
```

Astro сам згенерує AVIF + WebP у кількох розмірах з `srcset`, `width/height` і lazy-loading. Для hero — `<Hero t={t} image={heroPhoto} />` (завантажується з `fetchpriority="high"`). Відео: `<Hero video={{ src: '/video/hero.mp4' }} />` (muted, loop, `preload="none"`, вимикається при reduced-motion).

## Захист від вигаданих даних

- `lib/placeholder.ts` визначає будь-яке значення з `[дужками]` як placeholder.
- Schema.org (`Dentist`, `FAQPage`, `Person`) виводить **лише заповнені** поля. FAQ-schema з'явиться автоматично, коли всі відповіді будуть реальними.
- Сторінки лікарів з placeholder-іменами мають `noindex` і не потрапляють у sitemap.
- Телефон стає `tel:`-посиланням, тільки коли заповнено `phoneE164`. До того кнопки ведуть до форми.

Детальніше про дизайн: [DESIGN.md](DESIGN.md).
