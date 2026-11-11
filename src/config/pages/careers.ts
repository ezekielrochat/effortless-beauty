const applyHref = '#apply';

export const applicationOptions = {
  license: ['Yes', 'No', 'In Progress'],
  capabilities: ['Hair Styling', 'Makeup', 'Both Hair Styling & Makeup'],
  availability: ['Part-Time', 'Full-Time'],
  events: ['2 to 4', '4 to 8', '10+'],
} as const;

export const careersContent = {
  hero: {
    eyebrow: 'Careers',
    title: 'Join a team that shows up for',
    titleAccent: 'wedding mornings.',
    description:
      'We are always glad to meet talented hair and makeup artists who care about calm energy, lasting looks, and kind client care.',
    primaryCta: { label: 'Apply now', href: applyHref },
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
    title: 'Apply',
    description:
      'Tell us about your work. Applications go straight to the team — no need to start an email.',
    ctaHref: applyHref,
  },
} as const;

export const careersSeo = {
  title: 'Careers',
  description:
    'Careers at Effortless Beauty — join our Knoxville wedding hair and makeup team.',
} as const;
