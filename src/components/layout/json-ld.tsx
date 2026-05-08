import { buildLocalBusinessJsonLd, buildOrganizationJsonLd } from '@/lib/jsonld';

export function JsonLd() {
  const organization = buildOrganizationJsonLd();
  const localBusiness = buildLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
