/**
 * Image paths and alt text.
 * Photography sourced from effortless-collective shared assets.
 */

export const media = {
  logo: {
    color: '/brand/logo-color.svg',
    white: '/brand/logo-white.svg',
    fancyColor: '/brand/logo-fancy-color.svg',
    fancyWhite: '/brand/logo-fancy-white.svg',
    alt: 'Effortless Beauty',
  },
  og: {
    src: '/images/hero-bride.jpg',
    alt: 'Effortless Beauty wedding hair and makeup',
  },
  hero: {
    src: '/images/hero-bride.jpg',
    alt: 'Bride in white lace gown standing before an ornate gold mirror',
  },
  reviews: {
    marks: '/images/reviews/reviews-marks.png',
    alt: 'The Knot, WeddingWire, and Google review badges',
  },
  featuredIn: [
    { src: '/images/featured-in/intouch.png', alt: 'InTouch' },
    { src: '/images/featured-in/people.png', alt: 'People' },
    { src: '/images/featured-in/cosmopolitan.png', alt: 'Cosmopolitan' },
    { src: '/images/featured-in/bride.png', alt: 'Rock n Roll Bride' },
    { src: '/images/featured-in/us-weekly.png', alt: 'Us Weekly' },
  ],
  calmMorning: {
    src: '/images/calm-morning.jpg',
    alt: 'Bride in a garden setting holding a bouquet',
  },
  process: {
    src: '/images/process-couple.jpg',
    alt: 'Bride and groom under a veil',
  },
  howItWorks: [
    {
      src: '/images/step-book.jpg',
      alt: 'Bride in a lace gown and veil holding a white and blue bouquet',
    },
    {
      src: '/images/step-plan.jpg',
      alt: 'Bride smiling while a makeup artist applies her look',
    },
    {
      src: '/images/step-enjoy.jpg',
      alt: 'Bride and groom smiling under a veil',
    },
  ],
  gallery: {
    hero: {
      src: '/images/gallery-hero.jpg',
      alt: 'Bride and bridesmaids in blush dresses laughing outdoors',
    },
    grid: [
      {
        src: '/images/gallery-1.jpg',
        alt: 'Bride looking over her shoulder in a lace open-back gown',
      },
      {
        src: '/images/gallery-2.jpg',
        alt: 'Bride and groom under a flowing veil',
      },
      {
        src: '/images/gallery-3.jpg',
        alt: 'Bride and groom sharing a kiss outdoors',
      },
      {
        src: '/images/gallery-4.jpg',
        alt: 'Bride smiling on a wooded overlook in a lace gown',
      },
      {
        src: '/images/gallery-5.jpg',
        alt: 'Bride from behind in a strapless gown overlooking autumn trees',
      },
    ],
  },
  explore: [
    {
      src: '/images/explore-about.jpg',
      alt: 'Bride surrounded by bridesmaids in a bright suite',
    },
    {
      src: '/images/explore-faq.jpg',
      alt: 'Bride getting makeup applied on her wedding morning',
    },
    {
      src: '/images/explore-gallery.jpg',
      alt: 'Bride and bridesmaids posing outdoors with bouquets',
    },
  ],
  finalCta: {
    src: '/images/textures/gold-leaf-dark.jpg',
    alt: '',
  },
  pages: {
    experience: {
      src: '/images/calm-morning.jpg',
      alt: 'Bride in a garden setting holding a bouquet',
    },
    about: {
      src: '/images/explore-about.jpg',
      alt: 'Bride surrounded by bridesmaids in a bright suite',
    },
    onsite: {
      src: '/images/step-plan.jpg',
      alt: 'Bride smiling while a makeup artist applies her look',
    },
    studio: {
      src: '/images/step-book.jpg',
      alt: 'Bride in a lace gown and veil holding a white and blue bouquet',
    },
    pricing: {
      src: '/images/process-couple.jpg',
      alt: 'Bride and groom under a veil',
    },
    gallery: {
      src: '/images/gallery-hero.jpg',
      alt: 'Bride and bridesmaids in blush dresses laughing outdoors',
    },
    faqs: {
      src: '/images/explore-faq.jpg',
      alt: 'Bride getting makeup applied on her wedding morning',
    },
    contact: {
      src: '/images/step-enjoy.jpg',
      alt: 'Bride and groom smiling under a veil',
    },
    checkYourDate: {
      src: '/images/hero-bride.jpg',
      alt: 'Bride in white lace gown standing before an ornate gold mirror',
    },
    weddingPlanners: {
      src: '/images/gallery-2.jpg',
      alt: 'Bride and groom under a flowing veil',
    },
    careers: {
      src: '/images/explore-gallery.jpg',
      alt: 'Bride and bridesmaids posing outdoors with bouquets',
    },
  },
} as const;
