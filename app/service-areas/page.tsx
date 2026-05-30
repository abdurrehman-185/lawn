import { CtaBand, PageHero, ServiceAreasPreview } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { brand, siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Editable service area content for [City], nearby areas, and [Service Area] with local SEO-friendly structure.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title={`Lawn care in ${brand.city} and throughout ${brand.serviceArea}`}
        copy="This page is intentionally easy to customize later so city names, nearby towns, and service-radius messaging can be swapped without changing the design."
        image={siteImages.frontYard}
        imageAlt="Neighborhood lawn care service area visual"
      />
      <ServiceAreasPreview />
      <CtaBand
        title="Not sure if your property falls inside the service area?"
        copy="Use this section to push visitors toward a quick call or quote request instead of making them guess whether service is available."
      />
    </>
  );
}
