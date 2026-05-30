import {
  CtaBand,
  FaqList,
  FeatureGrid,
  GalleryPreview,
  HomeHero,
  ProcessGrid,
  ReviewsPreview,
  ServiceAreasPreview,
  ServicesGrid,
  TrustStrip,
} from "@/components/marketing";
import { JsonLd } from "@/components/site-shell";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildMetadata,
} from "@/lib/seo";
import {
  homeFaqs,
  homepageServiceCards,
  processSteps,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Lawn Care & Landscaping in [City]",
  description:
    "Premium lawn care, landscaping, yard cleanup, and snow removal for homeowners and small commercial properties in [City] and [Service Area].",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <HomeHero />
      <TrustStrip />
      <ServicesGrid items={homepageServiceCards} />
      <FeatureGrid
        eyebrow="Why Choose Us"
        title="The kind of local service that makes the property feel cared for"
        copy="The strongest contractor websites do not overpromise. They show clear standards, dependable communication, and the kind of finish customers actually notice."
        items={whyChooseUs}
      />
      <ProcessGrid
        title="A simple process built around clear service and clean results"
        copy="This homepage flow is designed to convert well on mobile and desktop without feeling pushy or overhyped."
        steps={processSteps}
      />
      <GalleryPreview />
      <ReviewsPreview />
      <ServiceAreasPreview />
      <FaqList
        title="Common questions before booking lawn care"
        copy="Use FAQs to lower friction, answer local service questions, and add helpful schema-supported content for search visibility."
        items={homeFaqs}
      />
      <CtaBand
        title="Ready for a cleaner, more dependable property exterior?"
        copy="Use this final call to action to drive quote requests from homeowners and small commercial properties looking for reliable local lawn and landscape service."
      />
    </>
  );
}
