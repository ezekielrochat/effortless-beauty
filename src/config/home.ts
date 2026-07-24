/**
 * Homepage copy — matches homepage-design-v2-desktop.png in context/
 */

export const homeContent = {
  hero: {
    titleBefore: 'Wedding hair & makeup',
    titleAccent: 'that lasts.',
    description:
      'A complete bridal beauty experience for brides across Knoxville, East TN, and the Smoky Mountains.',
    primaryCta: { label: 'Check your date', href: '/contact' },
    secondaryCta: { label: 'In-studio services', href: '/in-studio' },
    rating: {
      label: '435+ reviews',
    },
  },

  asSeenIn: {
    label: 'Featured In',
  },

  proof: {
    eyebrow: 'Proven on the big day',
    stat: '1,000+',
    label: 'successful weddings',
    description:
      'From intimate elopements to full bridal parties — Knoxville brides trust us to get it right.',
  },

  calmMorning: {
    titleBefore: 'Your wedding morning should feel calm,',
    titleAccent: 'not rushed.',
    description: 'We handle every beauty detail.',
  },

  process: {
    title: "Here's what working with us actually looks like.",
    items: [
      {
        title: 'We listen first.',
        description:
          "Show us a photo, describe a vibe, or tell us you have no idea — we'll help you land on a look that feels like you.",
      },
      {
        title: "You're never left guessing.",
        description:
          "From your trial to your wedding morning, you'll always know what's next — and we're easy to reach when you have questions.",
      },
      {
        title: 'Your natural beauty, enhanced.',
        description:
          "We're not here to change how you look. We're here to make sure you feel like the best version of yourself walking down the aisle.",
      },
      {
        title: 'Everyone feels taken care of.',
        description:
          'Bridesmaids, moms, flower girls — your whole party gets the same attention and care you do.',
      },
    ],
    primaryCta: { label: 'Check your date', href: '/contact' },
    secondaryCta: { label: 'In-studio services', href: '/in-studio' },
  },

  testimonials: {
    title: "Don't just take our word for it.",
    items: [
      {
        name: 'Jane Doe',
        quote:
          'We had a great experience with Effortless Beauty! I used them for my wedding hair and makeup and got so many compliments. They did a great job nailing my vintage hair updo.',
      },
      {
        name: 'Jane Doe',
        quote:
          'Effortless Beauty made my wedding morning so calm and special. I felt like the best version of myself.',
      },
      {
        name: 'Jane Doe',
        quote:
          'The team was professional, kind, and so talented. My hair and makeup lasted all day and night.',
      },
      {
        name: 'Jane Doe',
        quote:
          'From the trial to the wedding day, everything was seamless. I cannot recommend them enough.',
      },
      {
        name: 'Jane Doe',
        quote:
          'All of my girls loved their hair and makeup! I cannot thank you all enough for making us feel so beautiful.',
      },
      {
        name: 'Jane Doe',
        quote:
          'The ladies at Effortless Beauty were an absolute dream to work with from booking to the big day.',
      },
    ],
  },

  howItWorks: {
    title: 'How it works',
    steps: [
      {
        title: 'Check your date',
        description:
          "Our teams book up fast. Once your date is locked in, rest easy — we've never missed or canceled a wedding.",
      },
      {
        title: 'Plan your look',
        description:
          "You'll work with a dedicated coordinator to lock in the details. We aim to respond within 24 hours.",
      },
      {
        title: 'Enjoy your morning',
        description:
          'We show up on time, bring the good energy, and handle everything so you can just be present.',
      },
    ],
    primaryCta: { label: 'Check your date', href: '/contact' },
    secondaryCta: { label: 'In-studio services', href: '/in-studio' },
  },

  paths: {
    eyebrow: 'How you get ready',
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

  gallery: {
    cta: { label: 'View full gallery', href: '/gallery' },
  },

  explore: {
    title: 'Take a look around',
    cards: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },

  finalCta: {
    title: 'Book your date now',
    primaryCta: { label: 'Book your date', href: '/contact' },
    secondaryCta: { label: 'View pricing', href: '/pricing' },
  },
} as const;

export const pageSeo = {
  description:
    'Wedding hair and makeup that lasts. A completely stress-ready experience for a serene, elegant wedding morning in Knoxville, TN.',
} as const;
