import { siteConfig } from '@/config/site';

export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'We would love to',
    titleAccent: 'hear from you.',
    description:
      'Questions about services, timing, or your wedding morning? Reach out anytime — we aim to respond within 24 hours.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'Email us', href: siteConfig.contact.emailHref },
  },
  details: {
    title: 'Visit & reach out',
    items: [
      {
        label: 'Email',
        value: siteConfig.contact.email,
        href: siteConfig.contact.emailHref,
      },
      {
        label: 'Phone',
        value: siteConfig.contact.phone,
        href: siteConfig.contact.phoneHref,
      },
      {
        label: 'Studio',
        value: siteConfig.contact.address.full,
        href: undefined,
      },
      {
        label: 'Instagram',
        value: siteConfig.social.handle,
        href: siteConfig.social.instagram,
      },
    ],
  },
  note: {
    title: 'Checking a wedding date?',
    description:
      'For availability and booking next steps, use Check your date — it is the fastest way to get a clear answer.',
    cta: { label: 'Check your date', href: '/check-your-date' },
  },
} as const;

export const contactSeo = {
  title: 'Contact',
  description:
    'Contact Effortless Beauty for wedding hair and makeup questions in Knoxville, TN.',
} as const;
