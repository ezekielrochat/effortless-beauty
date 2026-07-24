export const aboutContent = {
  hero: {
    eyebrow: 'About us',
    title: 'Bridal beauty that feels like',
    titleAccent: 'you.',
    description:
      'We are a Knoxville wedding hair and makeup team built around calm mornings, lasting looks, and care for your whole party.',
    primaryCta: { label: 'Check your date', href: '/contact' },
    secondaryCta: { label: 'View gallery', href: '/gallery' },
  },
  story: {
    title: 'Who we are',
    paragraphs: [
      'Effortless Beauty is a bridal beauty studio serving Knoxville, East Tennessee, and the Smoky Mountains. We specialize in wedding hair and makeup that holds up from first look to last dance.',
      'Our approach is simple: listen first, enhance your natural beauty, and take the stress out of the morning so you can actually enjoy it.',
    ],
  },
  values: {
    title: 'What we believe',
    items: [
      {
        title: 'Calm over chaos',
        description:
          'Your wedding morning should feel serene. We handle the details so you can stay present.',
      },
      {
        title: 'Looks that last',
        description:
          'We build hair and makeup that photographs beautifully and stays put through tears, hugs, and dancing.',
      },
      {
        title: 'Everyone feels cared for',
        description:
          'Bridesmaids, moms, and the rest of your party get the same attention and kindness you do.',
      },
    ],
  },
} as const;

export const aboutSeo = {
  title: 'About',
  description:
    'Meet Effortless Beauty — a Knoxville wedding hair and makeup team focused on calm mornings and lasting bridal looks.',
} as const;
