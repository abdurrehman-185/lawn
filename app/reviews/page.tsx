import { CtaBand, FeatureGrid, PageHero, ReviewsPreview } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Reviews",
  description:
    "A polished testimonial page with room to add real Google and Facebook reviews for a lawn care or landscaping company.",
  path: "/reviews",
});

const reviewSignals = [
  {
    title: "Dependable scheduling",
    description:
      "Customers usually mention whether a service company shows up consistently and does what it said it would do.",
  },
  {
    title: "Clean finished look",
    description:
      "Reviews often highlight neat edging, tidy cleanup, and the overall appearance of the property after service.",
  },
  {
    title: "Easy communication",
    description:
      "Quick callbacks, quote follow-up, and straightforward service updates all support stronger review language.",
  },
  {
    title: "Room for platform proof",
    description:
      "This page intentionally leaves space to paste in real Google or Facebook reviews later without redesigning the layout.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Professional testimonial design without fake badges or fake counts"
        copy="The goal is a reviews page that already looks polished, while staying honest and ready for real customer feedback later."
        image={siteImages.backyard}
        imageAlt="Residential yard ready for customer review highlights"
      />
      <ReviewsPreview />
      <FeatureGrid
        eyebrow="What Reviews Should Reinforce"
        title="The reputation signals that matter most"
        copy="Use this section to frame the kind of feedback customers are likely to care about before they request a quote."
        items={reviewSignals}
      />
      <CtaBand
        title="Need a quote before your own review can be next?"
        copy="Drive visitors from the reviews page straight into the quote form with a clear, low-friction next step."
      />
    </>
  );
}
