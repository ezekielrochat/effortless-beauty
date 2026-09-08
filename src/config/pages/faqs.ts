import { siteConfig } from '@/config/site';

export const faqsContent = {
  hero: {
    eyebrow: 'FAQs',
    title: 'Questions we hear',
    titleAccent: 'most often.',
    description:
      'A few quick answers to help you plan. Still unsure? Reach out — we are happy to help.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'Call us', href: siteConfig.contact.phoneHref },
  },
  items: [
    {
      question: 'How far in advance should I book?',
      answer:
        'As soon as your date is set. Popular weekends fill quickly, and locking in early gives you the most flexibility for trials and timing.',
    },
    {
      question: 'What is the billing policy?',
      answer:
        '50% is due at booking and the final payment is due 2 weeks prior to the wedding.',
    },
    {
      question: 'What is your travel policy?',
      answer:
        'We travel on-site across Knoxville, East Tennessee, and the Smoky Mountains — and farther for the right wedding. Share your location and we will include travel in your quote.',
    },
    {
      question: 'What is the expected tip / gratuity?',
      answer:
        'We want your day to feel care-free. A 20% gratuity is added to the final invoice.',
    },
    {
      question: 'Is there an extra fee for false lashes?',
      answer:
        'No. We are not fans of extra fees — false lashes are included in makeup applications.',
    },
    {
      question: 'Is the trial included in the bridal package?',
      answer:
        'The trial is always billed separately. We recommend it for most brides so wedding morning feels calm and familiar.',
    },
    {
      question: 'Do you travel on-site?',
      answer:
        'Yes. We offer on-site wedding morning services plus in-studio appointments at our Knoxville location.',
    },
    {
      question: 'How quickly will I hear back?',
      answer:
        'We aim to respond within 24 hours. Share your date, location, and party size so we can get you a clear next step.',
    },
    {
      question: 'Can you style my whole bridal party?',
      answer:
        'Absolutely. Bridesmaids, moms, flower girls, and extras are all welcome — we build a timeline so everyone is ready when you need them.',
    },
    {
      question: 'What if my date is already booked?',
      answer:
        'Reach out anyway. Depending on the date and party size, we may still have options or be able to point you in the right direction.',
    },
  ],
} as const;

export const faqsSeo = {
  title: 'FAQs',
  description:
    'Frequently asked questions about wedding hair and makeup with Effortless Beauty in Knoxville, TN — billing, travel, trials, and more.',
} as const;
