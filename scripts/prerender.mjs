// Post-build step: writes a static HTML file for each public route with the
// correct title, description, canonical and social tags in the raw HTML.
// Search engines and social crawlers that do not run JavaScript then see
// page-specific tags. React Helmet replaces them at runtime (data-rh).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const DOMAIN = 'https://fidellitynetglobalservices.online';
const SITE = 'FidelityNet Global Services';
const dist = join(process.cwd(), 'dist');
const pages = JSON.parse(readFileSync(join(process.cwd(), 'src/lib/seo-pages.json'), 'utf8'));
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (v) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function block({ path, title, description }) {
  const isHome = path === '/';
  const fullTitle = isHome ? `${SITE} | ${title}` : `${title} | ${SITE}`;
  const url = `${DOMAIN}${path}`;
  const image = `${DOMAIN}/og-image.jpg`;
  const t = esc(fullTitle);
  const d = esc(description);
  return [
    `<title data-rh="true">${t}</title>`,
    `<meta data-rh="true" name="description" content="${d}" />`,
    `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link data-rh="true" rel="canonical" href="${url}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<meta data-rh="true" property="og:site_name" content="${SITE}" />`,
    `<meta data-rh="true" property="og:locale" content="en_NG" />`,
    `<meta data-rh="true" property="og:url" content="${url}" />`,
    `<meta data-rh="true" property="og:title" content="${t}" />`,
    `<meta data-rh="true" property="og:description" content="${d}" />`,
    `<meta data-rh="true" property="og:image" content="${image}" />`,
    `<meta data-rh="true" property="og:image:width" content="1200" />`,
    `<meta data-rh="true" property="og:image:height" content="630" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${t}" />`,
    `<meta data-rh="true" name="twitter:description" content="${d}" />`,
    `<meta data-rh="true" name="twitter:image" content="${image}" />`,
  ].join('\n    ');
}

const pattern = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!pattern.test(template)) {
  throw new Error('SEO markers not found in dist/index.html');
}

for (const page of Object.values(pages)) {
  const html = template.replace(pattern, block(page));
  if (page.path === '/') {
    writeFileSync(join(dist, 'index.html'), html);
  } else {
    const dir = join(dist, page.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  console.log(`prerendered ${page.path}`);
}
