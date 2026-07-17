export interface NavLink {
  label: string;
  href: string;
  current?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Sister-brand switcher in the top utility bar */
export const brandNav: NavLink[] = [
  { label: 'Effortless', href: '#' },
  { label: 'Beauty', href: '/', current: true },
  { label: 'Head Spa', href: '#' },
  { label: 'Glow', href: '#' },
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
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

export const moreNav: NavLink[] = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Check your date', href: '/check-your-date' },
];

export const ctaNav = {
  label: 'Check your date',
  href: '/check-your-date',
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'An Effortless Experience', href: '/experience' },
      { label: 'On-site', href: '/on-site' },
      { label: 'In-studio', href: '/in-studio' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Wedding Planners', href: '/wedding-planners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Check your date', href: '/check-your-date' },
    ],
  },
];

export const footerNav: NavLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
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
