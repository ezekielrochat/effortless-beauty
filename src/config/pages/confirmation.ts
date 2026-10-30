export interface ConfirmationPage {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  primaryCta: { label: string; href: string };
}

/** Old Webflow thank-you URLs. HoneyBook and the previous forms still redirect here. */
export const confirmationPages: Record<string, ConfirmationPage> = {
  brochure: {
    seoTitle: 'Thank you',
    seoDescription: "Your brochure request has been received. We'll be in touch soon.",
    eyebrow: 'Brochure',
    title: 'Thank you.',
    description: "Your submission has been received. We'll be in touch soon.",
    primaryCta: { label: 'Back to home', href: '/' },
  },
  contact: {
    seoTitle: 'Thank you',
    seoDescription: "Your message has been received. We'll be in touch soon.",
    eyebrow: 'Contact',
    title: 'Thank you.',
    description: "Your submission has been received. We'll be in touch soon.",
    primaryCta: { label: 'Back to home', href: '/' },
  },
  'job-application': {
    seoTitle: 'Application received',
    seoDescription: "Your application has been received. We'll be in touch soon.",
    eyebrow: 'Careers',
    title: 'Thank you.',
    description: "Your submission has been received. We'll be in touch soon.",
    primaryCta: { label: 'Back to careers', href: '/careers' },
  },
  'payment-confirmation': {
    seoTitle: 'Payment received',
    seoDescription: "We received your signed contract and payment. We'll be in touch soon.",
    eyebrow: 'Booking',
    title: 'Contract signed',
    titleAccent: 'and payment received.',
    description: "Thank you. We received your signed contract and payment, and we'll be in touch soon.",
    primaryCta: { label: 'Back to home', href: '/' },
  },
  subscribe: {
    seoTitle: 'Confirm your email',
    seoDescription: 'Check your email to confirm your subscription.',
    eyebrow: 'Newsletter',
    title: 'Check your email',
    titleAccent: 'to confirm.',
    description: 'Open the message we just sent and confirm to finish subscribing.',
    primaryCta: { label: 'Back to home', href: '/' },
  },
  'thank-you': {
    seoTitle: 'Thank you',
    seoDescription: "Your submission has been received. We'll be in touch soon.",
    eyebrow: 'Thank you',
    title: 'Thank you.',
    description: "Your submission has been received. We'll be in touch soon.",
    primaryCta: { label: 'Back to home', href: '/' },
  },
};
