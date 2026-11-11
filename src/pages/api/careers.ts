import type { APIRoute } from 'astro';
import { applicationOptions } from '@/config/pages/careers';
import { siteConfig } from '@/config/site';

export const prerender = false;

const SUCCESS_PATH = '/confirmation/job-application';

function applyPath(error?: '1' | 'config') {
  return error ? `/careers?error=${error}#apply` : '/careers#apply';
}

function redirect(location: string) {
  return new Response(null, { status: 303, headers: { Location: location } });
}

function serverEnv(name: string) {
  const fromProcess = process.env[name];
  if (fromProcess) return fromProcess;
  return (import.meta.env as Record<string, string | undefined>)[name];
}

function field(form: FormData, name: string, max: number) {
  return String(form.get(name) ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function textBlock(form: FormData, name: string, max: number) {
  return String(form.get(name) ?? '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function oneOf(value: string, options: readonly string[]) {
  return options.includes(value);
}

function recipients() {
  const override = serverEnv('CAREERS_TO_EMAILS');
  const source = override
    ? override.split(',')
    : [...siteConfig.careers.inboxes];
  return [...new Set(source.map((address) => address.trim()).filter(isEmail))];
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  if (field(form, 'companyWebsite', 200) !== '') {
    return redirect(SUCCESS_PATH);
  }

  const origin = request.headers.get('origin');
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return redirect(applyPath('1'));
      }
    } catch {
      return redirect(applyPath('1'));
    }
  }

  const firstName = field(form, 'firstName', 80);
  const lastName = field(form, 'lastName', 80);
  const phone = field(form, 'phone', 40);
  const email = field(form, 'email', 200);
  const license = field(form, 'license', 40);
  const capabilities = field(form, 'capabilities', 80);
  const availability = field(form, 'availability', 40);
  const events = field(form, 'events', 20);
  const experience = textBlock(form, 'experience', 5000);
  const message = textBlock(form, 'message', 5000);

  const invalid =
    firstName.length < 1 ||
    lastName.length < 1 ||
    phone.length < 7 ||
    !isEmail(email) ||
    !oneOf(license, applicationOptions.license) ||
    !oneOf(capabilities, applicationOptions.capabilities) ||
    (availability !== '' && !oneOf(availability, applicationOptions.availability)) ||
    !oneOf(events, applicationOptions.events) ||
    experience.length < 10 ||
    message.length < 2;

  if (invalid) return redirect(applyPath('1'));

  const apiKey = serverEnv('RESEND_API_KEY');
  const from = serverEnv('CAREERS_FROM_EMAIL');
  const to = recipients();

  if (!apiKey || !from || to.length === 0) {
    if (import.meta.env.DEV) {
      console.info('Careers application (email not configured):', {
        firstName,
        lastName,
        phone,
        email,
        license,
        capabilities,
        availability,
        events,
        to,
      });
      return redirect(SUCCESS_PATH);
    }
    return redirect(applyPath('config'));
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Careers application: ${firstName} ${lastName}`,
      text: [
        'New careers application from theeffortlessbeautyco.com',
        '',
        `Name: ${firstName} ${lastName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Cosmetology license: ${license}`,
        `Capabilities: ${capabilities}`,
        `Full-time or part-time: ${availability || 'Not specified'}`,
        `Preferred events per month: ${events}`,
        '',
        'Overview of experience:',
        experience,
        '',
        'Message:',
        message,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    console.error('Careers application email failed:', response.status);
    return redirect(applyPath('1'));
  }

  return redirect(SUCCESS_PATH);
};
