/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly NOINDEX?: string;
  readonly PUBLIC_FATHOM_SITE_ID?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly RESEND_API_KEY?: string;
  readonly CAREERS_FROM_EMAIL?: string;
  readonly CAREERS_TO_EMAILS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
