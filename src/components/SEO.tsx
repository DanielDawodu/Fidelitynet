import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../lib/constants';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export default function SEO({ title, description, path, ogImage }: SEOProps) {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  const url = `${COMPANY_INFO.domain}${path}`;
  const defaultOgImage = `${COMPANY_INFO.domain}/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          url: COMPANY_INFO.domain,
          logo: `${COMPANY_INFO.domain}/logo.png`,
          description: description,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: COMPANY_INFO.internationalPhone,
            contactType: 'customer service',
            email: COMPANY_INFO.email,
            areaServed: 'NG',
            availableLanguage: 'English',
          },
        })}
      </script>
    </Helmet>
  );
}
