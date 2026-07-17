/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly NOINDEX?: string;
  readonly PUBLIC_FATHOM_SITE_ID?: string;
  readonly PUBLIC_GTM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
