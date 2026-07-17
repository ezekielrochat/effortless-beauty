export const onsiteContent = {
  hero: {
    eyebrow: 'On-site',
    title: 'We come to you on',
    titleAccent: 'wedding morning.',
    description:
      'Luxury bridal hair and makeup at your venue, Airbnb, or getting-ready suite — so your morning stays calm and on schedule.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'See pricing', href: '/pricing' },
  },
  overview: {
    title: 'What on-site includes',
    description:
      'Our team arrives ready to set up, style your party, and keep the morning moving without the rush.',
    items: [
      {
        title: 'Venue setup',
        description: 'We bring everything we need and create a clean, organized beauty station on site.',
      },
      {
        title: 'Bridal party care',
        description:
          'Bride, bridesmaids, moms, and extras — coordinated timing so everyone is ready when you need them.',
      },
      {
        title: 'Dedicated coordination',
        description:
          'From trial to wedding day, you work with a coordinator who keeps the details locked in.',
      },
    ],
  },
  note: {
    title: 'Best for',
    description:
      'Full wedding mornings, destination venues, and bridal parties who want to get ready together without traveling to the studio.',
  },
} as const;

export const onsiteSeo = {
  title: 'On-site Services',
  description:
    'On-site wedding hair and makeup in Knoxville and East TN. We come to your venue so your morning stays calm.',
} as const;
