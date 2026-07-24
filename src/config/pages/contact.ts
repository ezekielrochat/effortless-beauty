import { siteConfig } from '@/config/site';

export const contactContent = {
  hero: {
    eyebrow: 'Check your date',
    title: 'See if your wedding date is',
    titleAccent: 'still open.',
    description:
      'Our teams book up fast. Share a few details and we will confirm availability and next steps — usually within 24 hours.',
    primaryCta: { label: 'Start the form', href: '#check-date-form' },
    secondaryCta: { label: 'Call us', href: siteConfig.contact.phoneHref },
  },
  steps: {
    title: 'What happens next',
    items: [
      {
        title: 'Send your details',
        description:
          'Date, location, bridal services, and party counts — enough for us to check availability.',
      },
      {
        title: 'Confirm your date',
        description:
          'We check the calendar and follow up with clear options so you are not left guessing.',
      },
      {
        title: 'Lock it in',
        description:
          'Once your date is reserved, you can rest easy — we have never missed or canceled a wedding.',
      },
    ],
  },
  form: {
    eyebrow: 'Request availability',
    title: 'Tell us about your day',
    description: 'A few quick steps — we will follow up within 24 hours.',
    steps: [
      {
        title: 'About you',
        description: 'Who you are and how we should reach you.',
      },
      {
        title: 'Event details',
        description: 'Date, timing, and where you are getting ready.',
      },
      {
        title: 'Services',
        description: 'What you need for the bridal party.',
      },
    ],
    fields: {
      role: {
        label: "I'm the…",
        placeholder: 'Select an option',
        options: [
          { value: 'bride', label: 'Bride' },
          { value: 'mother-of-bride', label: 'Mother of the bride' },
          { value: 'wedding-planner', label: 'Wedding planner' },
          { value: 'bridesmaid', label: 'Bridesmaid / party member' },
          { value: 'other', label: 'Other' },
        ],
      },
      name: { label: 'Full name', placeholder: 'e.g. Dolly Parton' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      phone: { label: 'Phone', placeholder: '(865) 555-0123' },
      contactMethod: {
        label: 'Preferred contact method',
        options: [
          { value: 'text', label: 'Text is best for me' },
          { value: 'call', label: 'I prefer a phone call' },
          { value: 'either', label: 'Either is great' },
        ],
      },
      weddingDate: { label: 'Event date' },
      accessTime: {
        label: 'Access time',
        placeholder: "Venue access time, or 'anytime'",
      },
      completionTime: {
        label: 'Services done by',
        placeholder: 'What time do we need to be finished?',
      },
      location: {
        label: 'Services location',
        placeholder: 'Venue address — or Effortless Beauty Studio',
      },
      bridalService: {
        label: 'Bridal services',
        options: [
          { value: 'hair-and-makeup', label: 'Bridal hair and makeup' },
          { value: 'hair-only', label: 'Just bridal hair' },
          { value: 'makeup-only', label: 'Just bridal makeup' },
        ],
      },
      bridalTrial: {
        label: 'Would you like a bridal preview (trial)?',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'not-sure', label: 'Not sure yet' },
        ],
      },
      generalHair: {
        label: 'How many general hair services?',
        hint: 'Bridesmaids, mothers, etc. — not the bride.',
        placeholder: '0',
      },
      generalMakeup: {
        label: 'How many general makeup services?',
        hint: 'Bridesmaids, mothers, etc. — not the bride.',
        placeholder: '0',
      },
      sprayTans: {
        label: 'How many spray tans (Effortless Glow)?',
        placeholder: 'Select an option',
        options: [
          { value: '0', label: 'None' },
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5+', label: '5 or more' },
        ],
      },
      otherServices: {
        label: 'Interested in any other services?',
        options: [
          { value: 'flowergirl-6-under', label: 'Flower girl (age 6 and under)' },
          { value: 'flowergirl-7-10', label: 'Flower girl (age 7–10)' },
          { value: 'mens-grooming', label: "Men's grooming" },
          { value: 'mob-preview', label: 'Preview for mother of the bride' },
        ],
      },
      bookingStage: {
        label: "Right now I'm…",
        placeholder: 'Select an option',
        options: [
          { value: 'checking-date', label: 'Checking if my date is open' },
          { value: 'ready-to-book', label: 'Ready to book' },
          { value: 'comparing', label: 'Comparing a few artists' },
          { value: 'planning-ahead', label: 'Planning ahead / just exploring' },
        ],
      },
      referralSource: {
        label: 'How did you hear about us?',
        placeholder: 'Select an option',
        options: [
          { value: 'instagram', label: 'Instagram' },
          { value: 'google', label: 'Google' },
          { value: 'the-knot', label: 'The Knot / WeddingWire' },
          { value: 'friend', label: 'Friend or past bride' },
          { value: 'planner', label: 'Wedding planner / vendor' },
          { value: 'other', label: 'Other' },
        ],
      },
      referredBy: {
        label: 'If referred, who should we thank?',
        placeholder: 'Planner, vendor, or friend name',
      },
      notes: {
        label: 'Anything else you want us to know?',
        placeholder: 'Questions, timing notes, inspiration…',
      },
    },
    actions: {
      back: 'Back',
      next: 'Continue',
      submit: 'Send inquiry',
    },
    success: {
      title: 'Thank you!',
      description:
        'Your email app should open with your details ready to send. We will confirm availability within 24 hours.',
      retry: 'Send another request',
    },
  },
  details: {
    title: 'Visit & reach out',
    items: [
      {
        label: 'Email',
        value: siteConfig.contact.email,
        href: siteConfig.contact.emailHref,
      },
      {
        label: 'Phone',
        value: siteConfig.contact.phone,
        href: siteConfig.contact.phoneHref,
      },
      {
        label: 'Studio',
        value: siteConfig.contact.address.full,
        href: undefined,
      },
      {
        label: 'Instagram',
        value: siteConfig.social.handle,
        href: siteConfig.social.instagram,
      },
    ],
  },
  finalCta: {
    title: 'Prefer to talk it through?',
    primaryLabel: 'Email us',
    primaryHref: siteConfig.contact.emailHref,
    secondaryLabel: 'Call us',
    secondaryHref: siteConfig.contact.phoneHref,
  },
} as const;

export const contactSeo = {
  title: 'Check Your Date',
  description:
    'Check wedding date availability for hair and makeup with Effortless Beauty in Knoxville, TN.',
} as const;
