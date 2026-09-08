export interface NavLink {
  label: string;
  href: string;
  current?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Shared house picker for the sister-brand switcher */
export const collectivePath = '/collective';

/** Sister-brand switcher in the top utility bar */
export const brandNav: NavLink[] = [
  { label: 'Effortless', href: collectivePath },
  { label: 'Beauty', href: '/' },
  { label: 'Head Spa', href: collectivePath },
  { label: 'Glow', href: collectivePath },
];

export const utilityNav: NavLink[] = [
  { label: 'Wedding Planners', href: '/wedding-planners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const primaryNav: NavLink[] = [
  { label: 'An Effortless Experience', href: '/experience' },
  { label: 'On-site', href: '/on-site' },
  { label: 'In-studio', href: '/in-studio' },
  { label: 'Pricing', href: '/pricing' },
];

export const moreNav: NavLink[] = [
  { label: 'Hair', href: '/wedding-hair' },
  { label: 'Makeup', href: '/wedding-makeup' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const ctaNav = {
  label: 'Select your experience',
  href: '/check-your-date',
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'An Effortless Experience', href: '/experience' },
      { label: 'On-site', href: '/on-site' },
      { label: 'In-studio', href: '/in-studio' },
      { label: 'Hair', href: '/wedding-hair' },
      { label: 'Makeup', href: '/wedding-makeup' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Wedding Planners', href: '/wedding-planners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const footerNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/sms-terms-privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Site Credits', href: '/site-credits' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerLegal = {
  copyrightName: 'Effortless Beauty Co.',
} as const;

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

/** Resolve which nav item matches the current path for aria-current styling. */
export function isNavCurrent(href: string, pathname: string): boolean {
  if (href === '/' || href.startsWith('/#')) {
    return normalizePath(pathname) === '/';
  }

  const path = normalizePath(href.split('#')[0] ?? href);
  const current = normalizePath(pathname);
  return path === current;
}

/** Which sister brand is active in the top bar. */
export function isBrandCurrent(item: NavLink, pathname: string): boolean {
  const onCollective = isNavCurrent(collectivePath, pathname);
  if (item.label === 'Effortless') return onCollective;
  if (item.label === 'Beauty') return !onCollective;
  return false;
}
