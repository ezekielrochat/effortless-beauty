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

export const privacyPolicyContent = {
  title: 'Privacy Policy',
  seoTitle: 'Privacy Policy',
  seoDescription:
    'How Effortless Beauty collects, uses, and protects personal information for wedding hair and makeup inquiries in Knoxville, TN.',
  updated: 'October 27, 2026',
  intro:
    'This Privacy Policy explains how Effortless Beauty Co. (“Effortless Beauty,” “we,” “us”) collects, uses, and shares information when you visit theeffortlessbeautyco.com, inquire about wedding hair and makeup, book a service, or otherwise contact us.',
  sections: [
    {
      title: 'Information we collect',
      paragraphs: [
        'We collect information you share with us and information that is generated when you use this website.',
      ],
      bullets: [
        'Contact details such as your name, email address, phone number, wedding date, and event location.',
        'Booking details such as the services you request, party size, preferred artists, and notes you include on an inquiry or appointment form.',
        'Payment information processed by our booking and payment providers. We do not store full card numbers on this website.',
        'Messages you send by email, form, or text.',
        'Technical data such as browser type, device, referring site, and general usage analytics.',
      ],
    },
    {
      title: 'How we use information',
      paragraphs: [
        'We use personal information to respond to inquiries, confirm and manage bookings, provide services, send appointment updates, improve the website, and share relevant studio news when you have asked us to.',
        'Text messages are sent only if you opt in. Consent is not required to book. Our SMS practices are described on our SMS Terms & Privacy Policy page.',
      ],
    },
    {
      title: 'How we share information',
      paragraphs: [
        'We share information with service providers who help us operate the business, including HoneyBook for on-site wedding inquiries, Mangomint or Vagaro for in-studio booking, email and hosting providers, and payment processors. Those providers may only use your information to perform services for us.',
        'We do not sell your personal information. Mobile numbers and SMS opt-in data are not shared with third parties for their own marketing.',
        'We may disclose information if required by law, to protect our rights or guests, or as part of a business transfer.',
      ],
    },
    {
      title: 'Cookies and analytics',
      paragraphs: [
        'This website may use cookies or similar tools to understand how pages are used and to keep the site working. You can control cookies through your browser settings. Blocking cookies may affect some features.',
      ],
    },
    {
      title: 'Photos and reviews',
      paragraphs: [
        'We may photograph services with your permission and use those images on our website, social channels, or print. You may ask us not to use a photo of you by emailing us. Public reviews you leave on Google or other platforms are governed by those services.',
      ],
    },
    {
      title: 'How we keep information',
      paragraphs: [
        'We keep inquiry and booking records for as long as needed to provide services, meet legal and tax requirements, and resolve questions. We use commercially reasonable security measures, but no website transmission is completely secure.',
      ],
    },
    {
      title: 'Your choices',
      paragraphs: [
        `You may request access to, correction of, or deletion of your personal information by emailing ${siteConfig.contact.email}. You can unsubscribe from marketing emails using the link in those emails, and from SMS by replying STOP.`,
        'If you are a Tennessee or other U.S. resident with additional privacy rights, contact us and we will honor applicable requests.',
      ],
    },
    {
      title: 'Children',
      paragraphs: [
        'This website is intended for adults planning or booking beauty services. We do not knowingly collect personal information from children under 13.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        `Questions about this policy: ${siteConfig.legalName}, ${siteConfig.contact.address.full}. Email ${siteConfig.contact.email} or call ${siteConfig.contact.phone}.`,
      ],
    },
    {
      title: 'Updates',
      paragraphs: [
        'We may update this Privacy Policy to reflect changes to our practices or the law. The “Last updated” date at the top of this page will change when we do. Continued use of the website after an update means you accept the revised policy.',
      ],
    },
  ],
} as const;

export const termsContent = {
  title: 'Terms of Service',
  seoTitle: 'Terms of Service',
  seoDescription:
    'Website and booking terms for Effortless Beauty wedding hair and makeup in Knoxville, TN.',
  updated: 'October 27, 2026',
  sections: [
    {
      title: 'Agreement',
      paragraphs: [
        `These Terms of Service govern your use of ${siteConfig.url.replace('https://', '')} and the wedding hair, makeup, and related services offered by ${siteConfig.legalName} By using this website or booking a service, you agree to these terms.`,
      ],
    },
    {
      title: 'Our services',
      paragraphs: [
        'Effortless Beauty provides on-site and in-studio hair and makeup for weddings and related events in Knoxville, Tennessee and surrounding areas. Service details, travel, timing, and pricing are confirmed in your booking or inquiry correspondence. Sister brands Effortless Spa and Effortless Glow have their own websites and terms.',
      ],
    },
    {
      title: 'Bookings, deposits, and cancellations',
      paragraphs: [
        'Submitting an inquiry does not guarantee a date. A booking is confirmed only when we accept it and any required deposit or contract is completed. Deposit, travel, overtime, and cancellation terms are provided at booking and control if they differ from this page.',
        'Please arrive on time for in-studio appointments and share accurate party counts and start times for on-site work. Changes made close to the event may not be possible.',
      ],
    },
    {
      title: 'Website use',
      paragraphs: [
        'You may use this website for lawful personal purposes: learning about our services and sending inquiries. Do not misuse the site, attempt to disrupt it, scrape it in a way that burdens our systems, or copy our content for commercial use without permission.',
      ],
    },
    {
      title: 'Intellectual property',
      paragraphs: [
        'The name, logo, photographs, copy, and design of this website belong to Effortless Beauty or our licensors. You may not reuse them without written permission, except for reasonable personal sharing of a page link.',
      ],
    },
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
      title: 'Privacy',
      paragraphs: [
        'How we collect and use personal information is described in our Privacy Policy. SMS opt-in and text messaging are also covered by our SMS Terms & Privacy Policy.',
      ],
    },
    {
      title: 'Limitation of liability',
      paragraphs: [
        'Services are provided with professional care. To the fullest extent allowed by Tennessee law, Effortless Beauty is not liable for indirect or consequential damages, or for issues caused by late arrivals, inaccurate information you provide, product sensitivities you did not disclose, or circumstances outside our control.',
      ],
    },
    {
      title: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the State of Tennessee. Venue for any dispute is Knox County, Tennessee, unless applicable law requires otherwise.',
      ],
    },
    {
      title: 'Contact us',
      paragraphs: [
        `Grace Rochat, ${siteConfig.legalName} Email: ${siteConfig.contact.email}. Phone: ${siteConfig.contact.phone}. Address: ${siteConfig.contact.address.full}.`,
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
