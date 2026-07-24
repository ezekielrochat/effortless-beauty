import { siteConfig } from '@/config/site';

export const faqsContent = {
  hero: {
    eyebrow: 'FAQs',
    title: 'Questions we hear',
    titleAccent: 'most often.',
    description:
      'A few quick answers to help you plan. Still unsure? Reach out — we are happy to help.',
    primaryCta: { label: 'Check your date', href: '/contact' },
    secondaryCta: { label: 'Call us', href: siteConfig.contact.phoneHref },
  },
  items: [
    {
      question: 'How far in advance should I book?',
      answer:
        'As soon as your date is set. Popular weekends fill quickly, and locking in early gives you the most flexibility for trials and timing.',
    },
    {
      question: 'Do you travel on-site?',
      answer:
        'Yes. We offer on-site wedding morning services across Knoxville, East Tennessee, and the Smoky Mountains, plus in-studio appointments at our Knoxville location.',
    },
    {
      question: 'Do I need a trial?',
      answer:
        'We recommend it for most brides. A trial lets us refine your look ahead of time so wedding morning feels calm and familiar.',
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
    'Frequently asked questions about wedding hair and makeup with Effortless Beauty in Knoxville, TN.',
} as const;
