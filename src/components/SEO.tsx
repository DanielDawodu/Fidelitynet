import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, OFFICES } from '../lib/constants';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

const SITE_NAME = COMPANY_INFO.name;
const ORG_ID = `${COMPANY_INFO.domain}/#organization`;
const WEBSITE_ID = `${COMPANY_INFO.domain}/#website`;
const ALTERNATE_NAMES = ['FidelityNet', 'Fidellity Net Global Services', 'Fidellitynet Global Services'];

const PAGE_NAMES: Record<string, string> = {
  '/services': 'Services',
  '/about': 'About',
  '/contact': 'Contact',
};

function buildOrganization() {
  return {
    '@type': ['ProfessionalService', 'Organization'],
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: ALTERNATE_NAMES,
    url: COMPANY_INFO.domain,
    logo: `${COMPANY_INFO.domain}/logo.png`,
    image: `${COMPANY_INFO.domain}/og-image.jpg`,
    slogan: COMPANY_INFO.tagline,
    description:
      'Real estate management, building construction, property maintenance and compliance advisory services in Nigeria.',
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.internationalPhone,
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    address: OFFICES.map((office) => ({
      '@type': 'PostalAddress',
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.region,
      addressCountry: 'NG',
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.internationalPhone,
      contactType: 'customer service',
      email: COMPANY_INFO.email,
      areaServed: 'NG',
      availableLanguage: 'English',
    },
  };
}

export default function SEO({ title, description, path, ogImage, noindex = false }: SEOProps) {
  const isHome = path === '/';
  const fullTitle = isHome ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;
  const url = `${COMPANY_INFO.domain}${isHome ? '/' : path}`;
  const image = ogImage || `${COMPANY_INFO.domain}/og-image.jpg`;

  const graph: Record<string, unknown>[] = [buildOrganization()];

  if (isHome) {
    graph.push({
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: COMPANY_INFO.domain,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAMES,
      inLanguage: 'en-NG',
      publisher: { '@id': ORG_ID },
    });
  } else if (!noindex) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${COMPANY_INFO.domain}/` },
        { '@type': 'ListItem', position: 2, name: PAGE_NAMES[path] || title, item: url },
      ],
    });
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      {!noindex && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} logo and services`} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
      </script>
    </Helmet>
  );
}
