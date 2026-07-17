import { siteConfig } from '@/config/site';

export const checkYourDateContent = {
  hero: {
    eyebrow: 'Check your date',
    title: 'See if your wedding date is',
    titleAccent: 'still open.',
    description:
      'Our teams book up fast. Share a few details and we will confirm availability and next steps — usually within 24 hours.',
    primaryCta: { label: 'Email your date', href: siteConfig.contact.emailHref },
    secondaryCta: { label: 'Call us', href: siteConfig.contact.phoneHref },
  },
  steps: {
    title: 'What happens next',
    items: [
      {
        title: '1. Send your details',
        description:
          'Wedding date, getting-ready location, party size, and whether you want on-site or in-studio.',
      },
      {
        title: '2. We confirm availability',
        description:
          'We check the calendar and follow up with clear options so you are not left guessing.',
      },
      {
        title: '3. Lock it in',
        description:
          'Once your date is reserved, you can rest easy — we have never missed or canceled a wedding.',
      },
    ],
  },
  include: {
    title: 'Include this in your message',
    items: [
      'Wedding date',
      'Getting-ready location (venue, Airbnb, or studio)',
      'How many people need hair and/or makeup',
      'Whether you want a bridal trial',
      'Anything else we should know',
    ],
  },
  contact: {
    title: 'Prefer to talk it through?',
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
  },
} as const;

export const checkYourDateSeo = {
  title: 'Check Your Date',
  description:
    'Check wedding date availability for hair and makeup with Effortless Beauty in Knoxville, TN.',
} as const;
