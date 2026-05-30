import { JsonLd } from "@/components/site-shell";
import { ServiceDetailPage } from "@/components/marketing";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { getServicePage } from "@/lib/site-data";

const service = getServicePage("lawn-maintenance");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/lawn-maintenance",
});

export default function LawnMaintenancePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <ServiceDetailPage service={service} />
    </>
  );
}
