import { reviews } from '@/config/reviews';
import { siteConfig } from '@/config/site';

export const reviewsContent = {
  hero: {
    eyebrow: 'Reviews',
    title: 'What brides',
    titleAccent: 'say about us.',
    description:
      'Real words from Knoxville and destination brides — Google, The Knot, and WeddingWire. More load in as you scroll.',
    primaryCta: { label: 'Check your date', href: '/check-your-date' },
    secondaryCta: { label: 'Read on Google', href: siteConfig.reviews.googleUrl },
  },
  wall: {
    showingLabel: 'Showing',
    ofLabel: 'of',
    reviewsLabel: 'reviews',
    empty: 'Reviews will appear here.',
  },
  sources: [
    { label: 'Google', href: siteConfig.reviews.googleUrl },
    { label: 'The Knot', href: siteConfig.reviews.knotUrl },
    { label: 'WeddingWire', href: siteConfig.reviews.weddingWireUrl },
  ],
  count: reviews.length,
} as const;

export const reviewsSeo = {
  title: 'Reviews',
  description:
    'Read wedding hair and makeup reviews from Effortless Beauty brides — Google, The Knot, and WeddingWire.',
} as const;
