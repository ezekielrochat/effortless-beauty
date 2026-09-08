export const makeupContent = {
  hero: {
    eyebrow: 'Wedding makeup',
    title: 'Makeup that looks like you —',
    titleAccent: 'all day long.',
    description:
      'Soft and subtle or bold and polished. Our artists build lasting bridal makeup that photographs beautifully in East Tennessee light.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'View gallery', href: '/gallery' },
  },
  quote: {
    text: 'Effortless Beauty provided makeup services for my daughter’s wedding. The girls were absolutely stunning and the makeup lasted ALL DAY. We couldn’t be happier with this group.',
    name: 'Melissa Snow',
    role: 'Mother of the Bride',
  },
  process: {
    title: 'Our makeup artistry process',
    items: [
      {
        title: 'Plan',
        description:
          'We talk through the finish you want — natural, glam, or somewhere in between — and map the look to your dress and photos.',
      },
      {
        title: 'Practice',
        description:
          'A trial lets us refine skin, eyes, and lips ahead of time. Or we can lock the plan and see you on the day.',
      },
      {
        title: 'Perfection',
        description:
          'False lashes are included. We build a look that holds through tears, hugs, and dancing.',
      },
    ],
  },
  pricing: {
    title: 'Makeup pricing',
    description:
      'Bridal and standard makeup are quoted with your party size, finish, and whether you are on-site or in-studio. Lashes are included.',
    items: [
      { title: 'Bridal makeup application', description: 'Quoted with your package' },
      { title: 'Regular makeup application', description: 'Quoted with your package' },
    ],
  },
} as const;

export const makeupSeo = {
  title: 'Wedding Makeup',
  description:
    'Wedding makeup artistry in Knoxville, TN. Lasting bridal makeup with lashes included — on-site or in-studio.',
} as const;
