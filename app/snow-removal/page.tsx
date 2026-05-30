import { JsonLd } from "@/components/site-shell";
import { ServiceDetailPage } from "@/components/marketing";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { getServicePage } from "@/lib/site-data";

const service = getServicePage("snow-removal");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/snow-removal",
});

export default function SnowRemovalPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <ServiceDetailPage service={service} />
    </>
  );
}
