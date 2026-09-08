import { blobs } from '@/config/blob-manifest';

/**
 * Image paths and alt text.
 * Photography lives on Vercel Blob. Brand marks stay in /public.
 */

const photo = (src: string, alt: string) => ({ src, alt });

const galleryItems = Object.entries(blobs)
  .filter(([key]) => key.startsWith('gallery'))
  .sort((a, b) => Number(a[0].replace('gallery', '')) - Number(b[0].replace('gallery', '')))
  .map(([, src], index) =>
    photo(src, `Wedding hair and makeup look ${index + 1} by Effortless Beauty`),
  );

export const media = {
  logo: {
    color: '/brand/logo-color.svg',
    white: '/brand/logo-white.svg',
    fancyColor: '/brand/logo-fancy-color.svg',
    fancyWhite: '/brand/logo-fancy-white.svg',
    alt: 'Effortless Beauty',
  },
  og: photo(blobs.og, 'Effortless Beauty wedding hair and makeup'),
  hero: photo(blobs.hero, 'Bride in a finished wedding look with soft waves, veil, and bouquet'),
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
  calmMorning: photo(blobs.calmMorning, 'Bride and groom smiling together after getting ready'),
  process: photo(blobs.process, 'Makeup artist applying eyeshadow for a bride getting ready'),
  grace: photo(blobs.grace, 'Grace Rochat, owner of Effortless Beauty'),
  howItWorks: [
    photo(blobs.howItWorks1, 'Makeup artist applying blush on a wedding morning'),
    photo(blobs.howItWorks2, 'Stylist blow-drying a bride’s hair'),
    photo(blobs.howItWorks3, 'Bride smiling after hair and makeup are finished'),
  ],
  gallery: {
    hero: photo(blobs.homeGalleryHero, 'Bridal party getting ready together'),
    preview: [
      photo(blobs.homeGallery1, 'Wedding hair and makeup detail'),
      photo(blobs.homeGallery2, 'Bride and party in the getting-ready suite'),
      photo(blobs.homeGallery3, 'Finished bridal look before the ceremony'),
      photo(blobs.homeGallery4, 'Soft wedding-day hair and makeup'),
      photo(blobs.homeGallery5, 'Bride and bridesmaids after styling'),
    ],
    grid: galleryItems,
  },
  explore: [
    photo(blobs.exploreAbout, 'Bride surrounded by bridesmaids'),
    photo(blobs.exploreFaq, 'Bride having makeup applied'),
    photo(blobs.exploreGallery, 'Bridal party after hair and makeup'),
  ],
  hairGallery: [
    photo(blobs.hair1, 'Bridal hair being styled'),
    photo(blobs.hair2, 'Finished wedding hairstyle'),
    photo(blobs.hair3, 'Soft bridal updo detail'),
  ],
  makeupGallery: [
    photo(blobs.makeup1, 'Bridal makeup in progress'),
    photo(blobs.makeup2, 'Lasting wedding-day makeup'),
    photo(blobs.makeup3, 'Makeup artist finishing a bridal look'),
  ],
  pages: {
    experience: photo(blobs.pageExperience, 'Bride getting ready on her wedding morning'),
    about: photo(blobs.pageAbout, 'Effortless Beauty studio in Knoxville'),
    onsite: photo(blobs.pageOnsite, 'On-site wedding morning hair and makeup'),
    studio: photo(blobs.pageStudio, 'The Effortless Beauty studio in Old North Knoxville'),
    pricing: photo(blobs.pagePricing, 'Bride and groom after hair and makeup'),
    gallery: photo(blobs.homeGalleryHero, 'Wedding hair and makeup gallery'),
    faqs: photo(blobs.pageFaqs, 'Professional bridal makeup kit'),
    contact: photo(blobs.pageContact, 'Stylist working in the Knoxville studio'),
    weddingPlanners: photo(blobs.pageWeddingPlanners, 'Bridal party ready for the ceremony'),
    careers: photo(blobs.pageCareers, 'Makeup brushes and tools of the trade'),
    hair: photo(blobs.pageHair, 'Low bridal updo with veil and pearl pins'),
    makeup: photo(blobs.pageMakeup, 'Bridal makeup being applied'),
  },
  paths: {
    onsite: photo(blobs.pathOnsite, 'Bride getting ready on-site'),
    studio: photo(blobs.pathStudio, 'Getting ready in the Knoxville studio'),
  },
} as const;
