export const pricingContent = {
  hero: {
    eyebrow: 'Pricing',
    title: 'Clear starting points for your',
    titleAccent: 'wedding morning.',
    description:
      'Wedding packages start at $700 on weekends and $350 on weekdays. Share your date, party size, and location — we will send a custom quote that fits.',
    primaryCta: { label: 'Request a quote', href: '/check-your-date' },
    secondaryCta: { label: 'Read FAQs', href: '/faqs' },
  },
  starting: {
    title: 'Starting prices',
    description: 'These are the published starting points from our current packages.',
    items: [
      {
        title: 'Weekend & holiday weddings',
        description:
          'Day-of wedding packages start at $700 for Friday through Sunday and holidays.',
      },
      {
        title: 'Weekday elopements',
        description:
          'Weekday packages start at $350 for Monday through Thursday — a calmer option for intimate days.',
      },
      {
        title: 'Just you? Come to the studio',
        description:
          'Trials, portraits, and smaller bookings can happen at our Knoxville studio. Unsure what is best? We will help you choose.',
      },
    ],
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
  services: {
    title: 'About our services',
    items: [
      {
        title: 'Day-of minimums',
        description:
          '$700 minimum for weekends (Friday–Sunday) and holidays. $350 minimum for weekdays (Monday–Thursday).',
      },
      {
        title: 'Hair extensions',
        description: 'Installation of client-provided hair extensions is $30.',
      },
      {
        title: 'False eyelashes',
        description:
          'Included in all makeup applications, plus a container of your chosen lipstick for touch-ups.',
      },
      {
        title: 'VIP bridal package',
        description:
          'Includes payment-plan options, a week-of-wedding spray tan, and a gift bag with favorite beauty products.',
      },
      {
        title: 'Flower girl',
        description:
          'Available for girls 12 and younger. Includes hair and light makeup (lip gloss, blush, light eyeshadow, and mascara). Foundation, eyeliner, and false lashes are not included.',
      },
      {
        title: 'Trial run',
        description:
          'Includes a thorough consultation plus hair and makeup. Trials are always billed separately from the bridal package.',
      },
      {
        title: 'Engagement session / portraits',
        description:
          'Includes hair and makeup application with false eyelashes.',
      },
    ],
  },
  hair: {
    title: 'Hair styling',
    items: [
      { title: 'Bridal hair styling', description: '$140' },
      { title: 'Standard hair styling', description: '$100' },
    ],
  },
  note: {
    title: 'How quoting works',
    description:
      'Final pricing depends on services, party size, timing, and travel. Tell us what you need — we aim to respond within 24 hours.',
  },
} as const;

export const pricingSeo = {
  title: 'Pricing',
  description:
    'Wedding hair and makeup packages in Knoxville, TN. Weekend packages start at $700 and weekday elopements at $350.',
} as const;
