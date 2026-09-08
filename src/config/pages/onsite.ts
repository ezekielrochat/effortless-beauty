export const onsiteContent = {
  hero: {
    eyebrow: 'On-site',
    title: 'We come to you on',
    titleAccent: 'wedding morning.',
    description:
      'This is the main wedding-day setup. Our team arrives at your venue, Airbnb, or getting-ready suite with everything needed — so the morning stays calm, on time, and beautifully finished.',
    primaryCta: { label: 'Request availability', href: '#check-date-form' },
    secondaryCta: { label: 'See pricing', href: '/pricing' },
  },
  quote: {
    text: 'All of my girls loved their hair and makeup! I cannot thank you all enough for making us feel so beautiful and confident on my wedding day!',
    name: 'Casey Love',
    role: 'Bride',
  },
  overview: {
    title: 'What on-site includes',
    description:
      'On-site is a full service day, not a drop-in appointment. We build the station, keep the timeline, and style everyone who needs to be ready.',
    items: [
      {
        title: 'Venue setup',
        description:
          'We bring stations, tools, and product and set up a clean beauty space wherever you are getting ready.',
      },
      {
        title: 'Bridal party care',
        description:
          'Bride, bridesmaids, moms, and extras — coordinated so first look, photos, and ceremony stay on schedule.',
      },
      {
        title: 'Dedicated coordination',
        description:
          'From inquiry to wedding morning, you have a coordinator who locks details and keeps the day moving.',
      },
    ],
  },
  morning: {
    title: 'How wedding morning runs',
    description:
      'A typical on-site day is built backward from the time you need to be finished — then we staff and time it so nobody is rushing.',
    items: [
      {
        title: 'We confirm the timeline',
        description:
          'Access time, first look, photos, and ceremony all go into a beauty schedule before the week of the wedding.',
      },
      {
        title: 'The team arrives ready',
        description:
          'Artists show up on time, set up quickly, and start with whoever is first on the list — usually moms or the party.',
      },
      {
        title: 'You stay in the room',
        description:
          'No caravan to the studio. Coffee, music, photos, and getting ready all happen in one place.',
      },
      {
        title: 'Everyone leaves camera-ready',
        description:
          'Looks are built to last through hugs, heat, and a long Knoxville or mountain wedding day.',
      },
    ],
  },
  note: {
    eyebrow: 'Best for',
    title: 'Venues, Airbnbs, and full bridal parties.',
    description:
      'On-site is the right fit for destination mornings, larger parties, and anyone who wants to get ready together without traveling to the studio.',
  },
  form: {
    eyebrow: 'On-site inquiry',
    title: 'Tell us about your wedding morning',
    description:
      'Share your date, venue, and party counts. We will confirm whether the date is open and send next steps — usually within 24 hours.',
  },
} as const;

export const onsiteSeo = {
  title: 'On-site Services',
  description:
    'On-site wedding hair and makeup in Knoxville and East TN. We come to your venue so your morning stays calm.',
} as const;
