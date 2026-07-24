export const pricingContent = {
  hero: {
    eyebrow: 'Pricing',
    title: 'Clear packages for your',
    titleAccent: 'wedding morning.',
    description:
      'Every wedding is a little different. Share your date, party size, and location — we will send a custom quote that fits.',
    primaryCta: { label: 'Request a quote', href: '/contact' },
    secondaryCta: { label: 'Read FAQs', href: '/faqs' },
  },
  packages: {
    title: 'Where to start',
    description: 'These are the most common ways couples book with us.',
    items: [
      {
        title: 'Bride',
        description:
          'Hair, makeup, or both — including trial options so your look is locked in before the big day.',
      },
      {
        title: 'Bridal party',
        description:
          'Bridesmaids, moms, flower girls, and extras styled on a coordinated timeline.',
      },
      {
        title: 'On-site or in-studio',
        description:
          'Choose venue service for the full morning experience, or book at our Knoxville studio.',
      },
    ],
  },
  note: {
    title: 'How quoting works',
    description:
      'Pricing depends on services, party size, timing, and travel. Tell us what you need and we aim to respond within 24 hours.',
  },
} as const;

export const pricingSeo = {
  title: 'Pricing',
  description:
    'Wedding hair and makeup packages in Knoxville, TN. Request a custom quote for on-site or in-studio bridal beauty.',
} as const;
