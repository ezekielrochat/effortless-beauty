import { siteConfig } from '@/config/site';

export const studioContent = {
  hero: {
    eyebrow: 'In-studio',
    title: 'Come to us in',
    titleAccent: 'Old North Knoxville.',
    description:
      'Trials, portraits, elopements, and smaller parties happen here — in a quiet studio instead of a crowded getting-ready suite.',
    primaryCta: { label: 'Book in-studio', href: siteConfig.booking.mangomint.url },
    secondaryCta: { label: 'Prefer on-site?', href: '/on-site' },
  },
  quote: {
    text: 'Thank you for your talent and professionalism. The process was so easy and communication was perfect. Maya and Alexis made our wedding day extra special.',
    name: 'Keli Renta',
    role: 'Google review',
  },
  overview: {
    title: 'What to expect',
    description:
      'Our studio at 1304 Atlantic Ave is a dedicated beauty room. You come in, we do the work, and you leave ready — no venue setup required.',
    items: [
      {
        title: 'Bridal trials',
        description:
          'Try hair, makeup, or both before the wedding so the real morning feels familiar — not experimental.',
      },
      {
        title: 'Intimate days',
        description:
          'Ideal for elopements, portraits, and smaller parties who prefer a calm studio over a hotel suite.',
      },
      {
        title: 'Easy booking',
        description:
          'Studio appointments book online. Choose a time, and the scheduling form slides out so you never have to leave the page.',
      },
    ],
  },
  bestFor: {
    title: 'In-studio is the right fit when…',
    items: [
      {
        title: 'You are coming to us',
        description:
          'You want the look done at the studio, then you head to photos, the courthouse, or the venue.',
      },
      {
        title: 'The party is small',
        description:
          'A bride plus one or two others is often simpler here than booking a full on-site team.',
      },
      {
        title: 'You need a trial first',
        description:
          'Most trials happen in-studio so we can take our time and refine the look before wedding day.',
      },
    ],
  },
  visit: {
    title: 'Studio address',
    description: '1304 Atlantic Ave, Knoxville, TN 37917',
    items: [
      {
        title: 'Parking',
        description:
          'Street parking is available around the studio. We will send arrival notes with your confirmation.',
      },
      {
        title: 'What to bring',
        description:
          'Your dress or a similar neckline if this is a trial, hair extensions if you have them, and any must-have product.',
      },
      {
        title: 'Need the venue instead?',
        description:
          'Full wedding mornings with a bridal party belong on-site. We can help you choose if you are unsure.',
      },
    ],
  },
} as const;

export const studioSeo = {
  title: 'In-studio Services',
  description:
    'In-studio wedding hair and makeup at our Knoxville studio — trials, bridal looks, and smaller parties.',
} as const;
