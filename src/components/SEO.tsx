import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  schema?: object; // For passing different JSON-LD blocks
}

export default function SEO({ title, description, schema }: SEOProps) {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title} | Cloud Oat</title>
      <meta name="description" content={description} />

      {/* Social Media (OpenGraph) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* JSON-LD Script */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}