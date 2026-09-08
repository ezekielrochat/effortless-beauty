import { siteConfig } from '@/config/site';

export const smsPrivacyContent = {
  title: 'SMS Terms & Privacy Policy',
  seoTitle: 'SMS Terms & Privacy Policy',
  seoDescription:
    'SMS terms and privacy policy for Effortless Beauty text communications in Knoxville, TN.',
  intro:
    'By providing your mobile number, you agree that Effortless Beauty LLC may send you periodic SMS or MMS messages including important information, updates, booking details, deals, and specials.',
  sections: [
    {
      title: 'Agreement to receive text messages',
      paragraphs: [
        'Opt-in to SMS communications occurs when you submit your mobile number through our website contact or booking form and check the consent box agreeing to receive text messages from Effortless Beauty. Consent is not a condition of purchase.',
      ],
    },
    {
      title: 'Message terms',
      paragraphs: [],
      bullets: [
        'You will receive up to 4 marketing messages per month, and unlimited messages as needed pertaining to your inquiry or booking.',
        'You may unsubscribe at any time by replying STOP to any message from us. You will receive a single confirmation message and no further SMS communications will be sent unless you re-opt-in.',
        `For help, reply HELP to any message or contact us at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
        'Message and data rates may apply depending on your mobile carrier plan.',
        'You must be 18 years of age or older to opt in to SMS communications from Effortless Beauty.',
        'United States participating carriers include AT&T, T-Mobile, Verizon Wireless, Sprint, Boost, U.S. Cellular, MetroPCS, InterOp, Cellcom, C Spire Wireless, Cricket, Virgin Mobile, and others.',
        'Mobile carriers (including AT&T, T-Mobile, Verizon, and others) are not liable for delayed or undelivered messages.',
        'You agree to notify us of any changes to your mobile number so we can update your information accordingly.',
        'Data obtained from you in connection with this SMS service may include your mobile phone number, your carrier’s name, and the date, time, and content of your messages. We may use this information to contact you and to provide the services you have requested.',
        'By subscribing or otherwise using this service, you acknowledge that we reserve the right to change or terminate the service at any time, with or without cause or advance notice.',
      ],
    },
    {
      title: 'Will I be charged for text messages?',
      paragraphs: [
        'Effortless Beauty will never charge you for the text messages you receive. However, depending on your phone plan, your mobile provider may apply standard message and data rates. Please contact your wireless provider if you have questions about your text or data plan.',
      ],
    },
    {
      title: 'Privacy policy',
      paragraphs: [
        'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. SMS opt-in data and consent information will not be shared with any third parties.',
        'We collect your mobile number, carrier name, and message interaction data solely to provide the SMS communications you have requested. This information is protected using commercially reasonable technical and organizational security measures.',
        'You have the right to access, correct, or request deletion of your personal information at any time by contacting us using the details below.',
      ],
    },
    {
      title: 'Contact us',
      paragraphs: [
        `Grace Rochat, Effortless Beauty LLC. Email: ${siteConfig.contact.email}. Phone: ${siteConfig.contact.phone}. Address: ${siteConfig.contact.address.full}.`,
      ],
    },
    {
      title: 'Updates to this policy',
      paragraphs: [
        'This SMS Terms & Privacy Policy may be updated at any time to reflect changes to our business practices or applicable regulations. Continued use of our SMS communications following any changes constitutes your acceptance of those changes.',
      ],
    },
  ],
} as const;

export const termsContent = {
  title: 'Terms of Service',
  seoTitle: 'Terms of Service',
  seoDescription: 'Terms of service and SMS messaging terms for Effortless Beauty LLC.',
  updated: 'February 20, 2026',
  sections: [
    {
      title: 'SMS messaging terms',
      paragraphs: [
        'Effortless Beauty LLC may send SMS (text) messages to customers and prospective customers who have opted in to receive text communications from us.',
      ],
    },
    {
      title: 'Use cases',
      paragraphs: [
        'Messages may include follow-ups on service inquiries, booking confirmations, appointment reminders, availability updates, and promotional offers related to our hair, makeup, head spa, and spray tan services.',
      ],
    },
    {
      title: 'Opt-in',
      paragraphs: [
        'By submitting your phone number through our website or booking form and checking the consent box, you agree to receive SMS messages from Effortless Beauty LLC. Consent is not a condition of purchase or service.',
      ],
    },
    {
      title: 'Opt-out',
      paragraphs: [
        'Reply STOP to any message at any time to unsubscribe. You will receive a single confirmation message and no further SMS communications will be sent unless you choose to re-opt-in.',
      ],
    },
    {
      title: 'Help',
      paragraphs: [
        `Reply HELP to any message for assistance, or contact us directly at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
      ],
    },
    {
      title: 'Message & data rates',
      paragraphs: [
        'Standard message and data rates may apply. Message frequency varies. Effortless Beauty LLC is not responsible for any charges incurred through your mobile carrier.',
      ],
    },
    {
      title: 'Carrier disclaimer',
      paragraphs: [
        'Mobile carriers are not liable for delayed or undelivered messages.',
      ],
    },
    {
      title: 'Age requirement',
      paragraphs: [
        'By opting in to SMS communications, you confirm that you are 18 years of age or older.',
      ],
    },
    {
      title: 'Privacy policy',
      paragraphs: [
        'Our SMS practices are governed by our SMS Terms & Privacy Policy.',
      ],
    },
    {
      title: 'Contact us',
      paragraphs: [
        `Grace Rochat, Effortless Beauty LLC. Email: ${siteConfig.contact.email}. Phone: ${siteConfig.contact.phone}. Address: ${siteConfig.contact.address.full}.`,
      ],
    },
  ],
} as const;

export const siteCreditsContent = {
  title: 'Site Credits',
  seoTitle: 'Site Credits',
  seoDescription: 'Credits for the Effortless Beauty website.',
  intro: 'This site was designed and built for Effortless Beauty Co.',
  sections: [
    {
      title: 'Photography',
      paragraphs: [
        'Wedding, studio, hair, and makeup photography is used with permission from Effortless Beauty and partner photographers.',
      ],
    },
    {
      title: 'Booking',
      paragraphs: [
        'On-site inquiries are handled through HoneyBook. In-studio appointments can also be booked through Vagaro.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        `Questions about this site: ${siteConfig.contact.email}.`,
      ],
    },
  ],
} as const;
