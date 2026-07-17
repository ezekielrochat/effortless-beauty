import { siteConfig } from '@/config/site';

export const weddingPlannersContent = {
  hero: {
    eyebrow: 'Wedding planners',
    title: 'A beauty partner your couples can',
    titleAccent: 'count on.',
    description:
      'We work alongside planners across Knoxville, East Tennessee, and the Smoky Mountains to keep wedding mornings calm, on time, and beautifully finished.',
    primaryCta: { label: 'Partner with us', href: siteConfig.contact.emailHref },
    secondaryCta: { label: 'See the experience', href: '/experience' },
  },
  why: {
    title: 'Why planners work with us',
    items: [
      {
        title: 'Reliable timelines',
        description:
          'We build realistic beauty schedules and show up ready — so the rest of the morning can stay on track.',
      },
      {
        title: 'Clear communication',
        description:
          'Dedicated coordination from inquiry through wedding day. We aim to respond within 24 hours.',
      },
      {
        title: 'On-site or in-studio',
        description:
          'Flexible setups for venue mornings, destination get-readys, and smaller studio appointments.',
      },
      {
        title: 'Whole-party care',
        description:
          'Bride, bridal party, moms, and extras — styled with the same attention and calm energy.',
      },
    ],
  },
  how: {
    title: 'How to collaborate',
    description:
      'Introduce us to your couple, share the date and getting-ready plan, or reach out for preferred-vendor conversations. We are easy to work with and happy to support your timeline.',
  },
  contact: {
    title: 'Planner contact',
    description: `Email ${siteConfig.contact.email} or call ${siteConfig.contact.phone}. Mention that you are a planner and we will prioritize next steps.`,
  },
} as const;

export const weddingPlannersSeo = {
  title: 'Wedding Planners',
  description:
    'Partner with Effortless Beauty for reliable on-site and in-studio wedding hair and makeup in Knoxville, TN.',
} as const;
