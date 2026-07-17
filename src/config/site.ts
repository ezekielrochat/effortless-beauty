import { media } from '@/config/media';

/**
 * Core site configuration — update client details here, not in components.
 */

export const siteConfig = {
  name: 'Effortless Beauty',
  shortName: 'Effortless Beauty',
  legalName: 'Effortless Beauty Co.',
  tagline: 'Wedding hair & makeup that lasts.',
  description:
    'A completely stress-ready experience for a serene, elegant, and truly you wedding morning. Luxury on-site wedding hair and makeup in Knoxville, TN.',
  url: 'https://www.theeffortlessbeautyco.com',
  locale: 'en-US',

  contact: {
    email: 'hello@theeffortlessbeautyco.com',
    emailHref: 'mailto:hello@theeffortlessbeautyco.com',
    phone: '(865) 505-7713',
    phoneHref: 'tel:+18655057713',
    address: {
      street: '1304 Atlantic Ave',
      city: 'Knoxville',
      state: 'TN',
      zip: '37917',
      full: '1304 Atlantic Ave, Knoxville, TN 37917',
    },
  },

  social: {
    instagram: 'https://www.instagram.com/effortlessbeautyco/',
    handle: '@EFFORTLESSBEAUTYCO',
  },

  seo: {
    defaultTitle: 'Effortless Beauty | Wedding Hair & Makeup | Knoxville, TN',
    titleTemplate: '%s | Effortless Beauty',
    defaultDescription:
      'Wedding hair and makeup that lasts. A luxury on-site beauty experience for brides in Knoxville, TN.',
    ogImage: media.og.src,
    twitterHandle: '',
  },

  features: {
    themeToggle: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const envFlags = {
  noindex: import.meta.env.NOINDEX === 'true',
} as const;

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return siteConfig.seo.titleTemplate.replace('%s', pageTitle);
}

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, '');
  let normalized = path.startsWith('/') ? path : `/${path}`;

  // Match site trailingSlash: 'never' for page paths (keep root and assets).
  if (
    normalized !== '/' &&
    !normalized.includes('.') &&
    !normalized.includes('#') &&
    normalized.endsWith('/')
  ) {
    normalized = normalized.replace(/\/+$/, '');
  }

  return `${base}${normalized}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: 'US',
    },
  };
}
