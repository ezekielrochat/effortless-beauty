export const hairContent = {
  hero: {
    eyebrow: 'Wedding hair',
    title: 'Hair that holds from first look to',
    titleAccent: 'last dance.',
    description:
      'Soft updos, glam waves, and everything in between — styled for your hair, your dress, and a full Knoxville wedding day.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'View gallery', href: '/gallery' },
  },
  quote: {
    text: 'There are not enough positive words to describe Effortless Beauty. My entire experience with them around my wedding made me feel stress free and confident that I would look amazing — and that is exactly what they did.',
    name: 'Jillian Shelly',
    role: 'Bride',
  },
  process: {
    title: 'Our hair styling process',
    items: [
      {
        title: 'Plan',
        description:
          'It starts with a dream. We talk through the look you want and build a hair plan that fits your morning.',
      },
      {
        title: 'Practice',
        description:
          'Schedule a trial or move forward with the plan we have established. Either way, your stylist will be ready.',
      },
      {
        title: 'Perfection',
        description:
          'Wedding day is what we prepare for. We show up on time and make the look last.',
      },
    ],
  },
  pricing: {
    title: 'Hair styling pricing',
    items: [
      { title: 'Bridal hair styling', description: '$140' },
      { title: 'Standard hair styling', description: '$100' },
    ],
  },
} as const;

export const hairSeo = {
  title: 'Wedding Hair',
  description:
    'Wedding hair styling in Knoxville, TN. Bridal hair from $140 and standard styling from $100 — on-site or in-studio.',
} as const;
