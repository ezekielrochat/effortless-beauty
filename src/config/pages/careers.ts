import { siteConfig } from '@/config/site';

const careersEmailHref = `${siteConfig.contact.emailHref}?subject=Careers%20inquiry`;

export const careersContent = {
  hero: {
    eyebrow: 'Careers',
    title: 'Join a team that shows up for',
    titleAccent: 'wedding mornings.',
    description:
      'We are always glad to meet talented hair and makeup artists who care about calm energy, lasting looks, and kind client care.',
    primaryCta: { label: 'Email your interest', href: careersEmailHref },
    secondaryCta: { label: 'About us', href: '/about' },
  },
  culture: {
    title: 'What it is like here',
    items: [
      {
        title: 'Wedding-day focus',
        description:
          'Most of our work lives on real wedding mornings — on-site and in-studio — with clear timelines and a team that supports each other.',
      },
      {
        title: 'Craft that lasts',
        description:
          'We care about looks that photograph beautifully and hold up through tears, hugs, and dancing.',
      },
      {
        title: 'Kind, professional energy',
        description:
          'Brides remember how the room felt. We hire people who bring calm, confidence, and care.',
      },
    ],
  },
  openRoles: {
    title: 'Open roles',
    description:
      'We do not always have a public listing, but we review interest year-round for bridal hair and makeup artists in the Knoxville area.',
    items: [
      {
        title: 'Bridal hair stylist',
        description: 'Wedding-day and trial experience preferred. Comfortable with on-site setups and bridal parties.',
      },
      {
        title: 'Bridal makeup artist',
        description: 'Strong lasting-makeup skills, natural-to-glam range, and a calm client presence.',
      },
    ],
  },
  apply: {
    title: 'How to reach out',
    description: `Email ${siteConfig.contact.email} with a short intro, your experience, and a few portfolio links or photos. Tell us if you prefer hair, makeup, or both.`,
    ctaHref: careersEmailHref,
  },
} as const;

export const careersSeo = {
  title: 'Careers',
  description:
    'Careers at Effortless Beauty — join our Knoxville wedding hair and makeup team.',
} as const;
