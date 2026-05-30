import { JsonLd } from "@/components/site-shell";
import { ServiceDetailPage } from "@/components/marketing";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { getServicePage } from "@/lib/site-data";

const service = getServicePage("landscaping");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/landscaping",
});

export default function LandscapingPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <ServiceDetailPage service={service} />
    </>
  );
}
