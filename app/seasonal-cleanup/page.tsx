import { JsonLd } from "@/components/site-shell";
import { ServiceDetailPage } from "@/components/marketing";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { getServicePage } from "@/lib/site-data";

const service = getServicePage("seasonal-cleanup");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/seasonal-cleanup",
});

export default function SeasonalCleanupPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <ServiceDetailPage service={service} />
    </>
  );
}
