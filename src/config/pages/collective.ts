import { media } from '@/config/media';

export const collectiveContent = {
  eyebrow: 'The Effortless Collective',
  title: 'Three houses.',
  titleAccent: 'One home.',
  description:
    'Wedding beauty, head spa rituals, and custom spray tans — all in Old North Knoxville.',
  address: '1304 Atlantic Ave, Knoxville, TN',
  brands: [
    {
      id: 'beauty',
      name: 'Beauty',
      tagline: 'Wedding hair & makeup that lasts.',
      href: '/',
      cta: 'Visit Beauty',
      image: media.collective.beauty,
    },
    {
      id: 'spa',
      name: 'Head Spa',
      tagline: 'Scalp rituals that slow the room down.',
      href: 'https://www.effortlessspa.com',
      cta: 'Visit Head Spa',
      image: media.collective.spa,
    },
    {
      id: 'glow',
      name: 'Glow',
      tagline: 'Custom spray tans that feel like skin.',
      href: 'https://www.effortlessglow.com',
      cta: 'Visit Glow',
      image: media.collective.glow,
    },
  ],
} as const;

export const collectiveSeo = {
  title: 'The Effortless Collective',
  description:
    'Choose Effortless Beauty, Head Spa, or Glow — three Knoxville studios under one roof in Old North Knoxville.',
} as const;
