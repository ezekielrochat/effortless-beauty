import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { put } from '@vercel/blob';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dump = resolve(
  root,
  '../Assets/Effortless Beauty Photos',
);
const publicImages = resolve(root, 'public/images');
const tmpDir = resolve(root, '.tmp/media');

function loadEnvLocal() {
  const envPath = join(root, '.env.local');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    let value = trimmed.slice(eq + 1);
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN is missing. Run vercel env pull first.');
}

const w = (folder, name) => join(dump, folder, name);

const sources = {
  hero: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-6.jpg'),
  calmMorning: w('Wedding Photos/Weddings', 'Walker_Bride&Groom_135.jpg'),
  process: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-9.jpg'),
  grace: w('Photos/Studio-Team', 'Effortless-Beauty-Team-Studio-Knoxville-TN-65.jpg'),
  howItWorks1: w('B4 - Makeup', 'ED2_1176.jpg'),
  howItWorks2: w('B5 - Hair', 'ED2_1320.jpg'),
  howItWorks3: w('Wedding Photos/Hannah Gallery', 'marblegatewedding-371.jpg'),
  homeGalleryHero: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-18.jpg'),
  homeGallery1: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-21.jpg'),
  homeGallery2: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-24.jpg'),
  homeGallery3: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-27.jpg'),
  homeGallery4: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-30.jpg'),
  homeGallery5: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-33.jpg'),
  pathOnsite: w('Wedding Photos/Weddings', 'Rester-GettingReady006_websize.jpg'),
  pathStudio: w('Photos/Studio-Team', 'Effortless-Beauty-Team-Studio-Knoxville-TN-40.jpg'),
  exploreAbout: w(
    'Wedding Photos/Weddings',
    'oliviaandgavinsweddingbrideandbridesmaidsformals-4.jpg',
  ),
  exploreFaq: w('B4 - Makeup', 'ED2_1190.jpg'),
  exploreGallery: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-36.jpg'),
  pageExperience: w('Wedding Photos/LaurenBrandon', 'LaurenBrandonWedding-56042_websize.jpg'),
  pageAbout: w('Photos/Studio-Team', 'Effortless-Beauty-Team-Studio-Knoxville-TN-10.jpg'),
  pageOnsite: w('Wedding Photos/Weddings', 'Rester-GettingReady121_websize.jpg'),
  pageStudio: w('Photos/Studio-Team', 'Effortless-Beauty-Team-Studio-Knoxville-TN-80.jpg'),
  pagePricing: w('Wedding Photos/Weddings', 'Rachael & Jarod - The Trillium Venue-0026.jpg'),
  pageFaqs: w('B4 - Makeup', 'ED2_1135.jpg'),
  pageContact: w('B5 - Hair', 'ED2_1295.jpg'),
  pageWeddingPlanners: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-8.jpg'),
  pageCareers: w('B5 - Hair', 'ED2_1350.jpg'),
  pageHair: w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-1.jpg'),
  pageMakeup: w('B4 - Makeup', 'ED2_1183.jpg'),
  hair1: w('B5 - Hair', 'ED2_1305.jpg'),
  hair2: w('B5 - Hair', 'ED2_1314.jpg'),
  hair3: w('B5 - Hair', 'ED2_1345.jpg'),
  makeup1: w('B4 - Makeup', 'ED2_1154.jpg'),
  makeup2: w('B4 - Makeup', 'ED2_1203.jpg'),
  makeup3: w('B4 - Makeup', 'ED2_1260.jpg'),
  og: join(publicImages, 'hero-bride.jpg'),
};

const gallerySources = [
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-3.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-5.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-15.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-39.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-42.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-45.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-48.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-51.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-54.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-57.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-60.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-63.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-66.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-69.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-72.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-75.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-78.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-81.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-84.jpg'),
  w('Photos/Weddings', 'Effortless-Beauty-Knoxville-TN-87.jpg'),
  w('Wedding Photos/Weddings', 'A and G-3.jpg'),
  w('Wedding Photos/Weddings', 'A and G-27.jpg'),
  w('Wedding Photos/Weddings', 'Alexa and Garrett-6.jpg'),
  w('Wedding Photos/Weddings', 'BTC_AddrianneBrianPreviews-14.jpg'),
  w('Wedding Photos/Weddings', 'FAV-1030.jpg'),
  w('Wedding Photos/Weddings', 'FAV-1124.jpg'),
  w('Wedding Photos/Weddings', 'G-25-06-14Younker0892-1040.jpg'),
  w('Wedding Photos/Weddings', 'G-25-06-14Younker1385-1155.jpg'),
  w('Wedding Photos/Weddings', 'Hysmith-Swicegood-184_websize.jpg'),
  w('Wedding Photos/Weddings', 'KMP_2637.jpg'),
  w('Wedding Photos/Weddings', 'Photo352.jpg'),
  w('Wedding Photos/Weddings', 'Rachael & Jarod - The Trillium Venue-0149.jpg'),
  w('Wedding Photos/Weddings', 'Walker_Pre-Ceremony_090.jpg'),
  w('Wedding Photos/Weddings', 'Wedding.K+C-205.jpg'),
  w('Wedding Photos/Weddings', 'oliviaandgavinsweddingfavorites-15.jpg'),
  w('Wedding Photos/Hannah Gallery', 'marblegatewedding-128.jpg'),
  w('Wedding Photos/Hannah Gallery', 'marblegatewedding-174.jpg'),
  w('Wedding Photos/Hannah Gallery', 'marblegatewedding-241.jpg'),
  w('Wedding Photos/Hannah Gallery', 'marblegatewedding-401.jpg'),
  w('Wedding Photos/LaurenBrandon', 'LaurenBrandonWedding-55986_websize.jpg'),
  w('Wedding Photos/LaurenBrandon', 'LaurenBrandonWedding-58378_websize.jpg'),
  w('Wedding Photos/LaurenBrandon', 'LaurenBrandonWedding-59802_websize.jpg'),
  w('B5 - Hair', 'ED2_1308.jpg'),
  w('B5 - Hair', 'ED2_1329.jpg'),
  w('B5 - Hair', 'ED2_1365.jpg'),
  w('B5 - Hair', 'ED2_1381.jpg'),
  w('B5 - Hair', 'ED2_1400.jpg'),
  w('B4 - Makeup', 'ED2_1146.jpg'),
  w('B4 - Makeup', 'ED2_1166.jpg'),
  w('B4 - Makeup', 'ED2_1211.jpg'),
  w('B4 - Makeup', 'ED2_1230.jpg'),
  w('B4 - Makeup', 'ED2_1273.jpg'),
];

gallerySources.forEach((file, index) => {
  sources[`gallery${index + 1}`] = file;
});

mkdirSync(tmpDir, { recursive: true });

async function optimize(src, key) {
  const dest = join(tmpDir, `${key}.jpg`);
  await sharp(src)
    .rotate()
    .resize({ width: 1800, height: 2200, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(dest);
  return dest;
}

const manifest = {};
const missing = [];

for (const [key, src] of Object.entries(sources)) {
  if (!existsSync(src)) {
    missing.push(`${key}: ${src}`);
    continue;
  }

  process.stdout.write(`Optimizing ${key} (${basename(src)})… `);
  const optimized = await optimize(src, key);
  const body = readFileSync(optimized);
  const blob = await put(`effortless-beauty/${key}.jpg`, body, {
    access: 'public',
    contentType: 'image/jpeg',
    addRandomSuffix: false,
    allowOverwrite: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  manifest[key] = blob.url;
  console.log(blob.url);
}

if (missing.length) {
  console.warn('\nMissing source files:');
  for (const item of missing) console.warn(`  - ${item}`);
}

const manifestPath = join(root, 'src/config/blob-manifest.ts');
const entries = Object.entries(manifest)
  .map(([key, url]) => `  ${key}: '${url}',`)
  .join('\n');

writeFileSync(
  manifestPath,
  `/** Public Vercel Blob URLs. Generated by scripts/upload-media.mjs */\nexport const blobs = {\n${entries}\n} as const;\n`,
);

console.log(`\nWrote ${Object.keys(manifest).length} URLs to src/config/blob-manifest.ts`);
if (missing.length) process.exitCode = 1;
