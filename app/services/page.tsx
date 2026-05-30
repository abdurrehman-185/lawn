import { CtaBand, FeatureGrid, PageHero, ProcessGrid, ServicesGrid } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { allServices, brand, processSteps, siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore lawn mowing, edging, trimming, lawn maintenance, landscaping, seasonal cleanup, property maintenance, and snow removal in [City].",
  path: "/services",
});

const serviceBenefits = [
  {
    title: "One-off projects or recurring care",
    description:
      "The service page supports both one-time cleanup work and repeat maintenance plans.",
  },
  {
    title: "Homeowners and small commercial properties",
    description:
      "The copy fits residential neighborhoods, rentals, storefronts, and other smaller commercial sites.",
  },
  {
    title: "Easy internal linking",
    description:
      "Core service cards link directly to detail pages for lawn maintenance, landscaping, seasonal cleanup, and snow removal.",
  },
  {
    title: "Strong local SEO structure",
    description:
      `The page naturally supports phrases like lawn care in ${brand.city} and residential and commercial lawn care in ${brand.serviceArea}.`,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={`Lawn care and landscaping services in ${brand.city}`}
        copy={`From weekly mowing to cleanup, landscaping, and snow removal, ${brand.businessName} is positioned as a full-service local exterior care company for ${brand.serviceArea}.`}
        image={siteImages.lawn}
        imageAlt="Healthy green lawn with landscaping details"
      />
      <ServicesGrid
        title="A full service mix built for lawn care businesses"
        copy="These service blocks are intentionally editable, but the structure already covers the most common offers a premium local lawn care company needs."
        items={allServices}
        compact
      />
      <FeatureGrid
        eyebrow="Why This Page Sells"
        title="Clear services, clear fit, clear next step"
        copy="The strongest service pages make it obvious what the company does, who it serves, and how to get started."
        items={serviceBenefits}
      />
      <ProcessGrid
        title="From quote request to regular service"
        copy="The same simple process supports lawn maintenance, landscaping projects, seasonal cleanups, and winter work."
        steps={processSteps}
      />
      <CtaBand
        title="Need help choosing the right service mix?"
        copy="Use the quote page to ask about mowing, trimming, landscaping, cleanup, mulch, hedge work, or snow removal for your property."
      />
    </>
  );
}
