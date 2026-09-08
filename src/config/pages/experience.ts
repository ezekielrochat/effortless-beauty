export const experienceContent = {
  hero: {
    eyebrow: 'An Effortless Experience',
    title: 'Your wedding morning should feel calm,',
    titleAccent: 'not rushed.',
    description:
      'We handle every beauty detail — so you can stay present, feel like yourself, and walk into the day ready.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'See how it works', href: '/#how-it-works' },
  },
  promise: {
    title: 'What “effortless” actually means',
    description:
      'It is not a vibe word. It is how we run the morning — clear communication, lasting looks, and care for everyone in the room.',
    items: [
      {
        title: 'We listen first',
        description:
          'Show us a photo, describe a vibe, or tell us you have no idea. We help you land on a look that feels like you.',
      },
      {
        title: "You're never left guessing",
        description:
          'From your trial to wedding morning, you always know what is next — and we are easy to reach when questions come up.',
      },
      {
        title: 'Your natural beauty, enhanced',
        description:
          'We are not here to change how you look. We are here to make sure you feel like the best version of yourself.',
      },
      {
        title: 'Everyone feels taken care of',
        description:
          'Bridesmaids, moms, flower girls — your whole party gets the same attention and care you do.',
      },
    ],
  },
  paths: {
    title: 'Two ways to get ready',
    description: 'Choose the setting that fits your morning.',
    items: [
      {
        title: 'On-site',
        description:
          'We come to your venue, Airbnb, or suite and build a calm beauty station where you are getting ready.',
        href: '/on-site',
        cta: 'Explore on-site',
        imageKey: 'onsite' as const,
      },
      {
        title: 'In-studio',
        description:
          'Come to our Knoxville studio for trials, intimate parties, and a quieter getting-ready space.',
        href: '/in-studio',
        cta: 'Explore in-studio',
        imageKey: 'studio' as const,
      },
    ],
  },
} as const;

export const experienceSeo = {
  title: 'An Effortless Experience',
  description:
    'A calm, stress-ready wedding morning with Effortless Beauty — lasting hair and makeup for Knoxville and East TN brides.',
} as const;
