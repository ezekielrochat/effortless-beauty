export const checkYourDateContent = {
  paths: {
    eyebrow: 'Select your experience',
    title: 'How do you want to',
    titleAccent: 'get ready?',
    description:
      'On-site is the full wedding-morning setup at your venue. In-studio is for coming to us in Old North Knoxville. Choose the path that fits your day.',
    items: [
      {
        title: 'On-site',
        description:
          'We come to your venue, Airbnb, or suite and handle the complete wedding-morning beauty experience.',
        href: '/on-site#check-date-form',
        cta: 'Request on-site',
        imageKey: 'onsite' as const,
      },
      {
        title: 'In-studio',
        description:
          'Come to our Knoxville studio for trials, elopements, and smaller parties — then book a time that works.',
        href: '/in-studio',
        cta: 'See in-studio',
        imageKey: 'studio' as const,
      },
    ],
  },
  note: {
    title: 'Not sure which one?',
    description:
      'Full bridal parties and venue mornings almost always belong on-site. Trials, portraits, and intimate days are often easier in the studio. You can still switch after you reach out.',
  },
} as const;

export const checkYourDateSeo = {
  title: 'Check Your Date',
  description:
    'Choose on-site wedding hair and makeup or an in-studio appointment with Effortless Beauty in Knoxville, TN.',
} as const;
