export const studioContent = {
  hero: {
    eyebrow: 'In-studio',
    title: 'Studio services at our',
    titleAccent: 'Knoxville space.',
    description:
      'Come to us for trials, bridal beauty, and smaller parties in a calm, dedicated studio environment.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'Get directions', href: '/contact' },
  },
  overview: {
    title: 'What to expect',
    description:
      'Our studio at 1304 Atlantic Ave is a quiet place to plan your look and get ready without the chaos of a crowded suite.',
    items: [
      {
        title: 'Bridal trials',
        description:
          'Try your hair and makeup ahead of time so wedding morning feels familiar — not experimental.',
      },
      {
        title: 'Intimate parties',
        description:
          'Ideal for elopements, smaller bridal parties, and anyone who prefers a studio setting.',
      },
      {
        title: 'Easy to find',
        description:
          'Located in Knoxville with parking nearby. We will share everything you need before your appointment.',
      },
    ],
  },
  note: {
    title: 'Studio address',
    description: '1304 Atlantic Ave, Knoxville, TN 37917',
  },
} as const;

export const studioSeo = {
  title: 'In-studio Services',
  description:
    'In-studio wedding hair and makeup at our Knoxville studio — trials, bridal looks, and smaller parties.',
} as const;
