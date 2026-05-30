import Image from "next/image";

import { CtaBand, FeatureGrid, PageHero, SectionHeading } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { brand, siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how [Business Name] approaches dependable lawn care, landscaping, and property maintenance in [City] and [Service Area].",
  path: "/about",
});

const values = [
  {
    title: "Easy to work with",
    description:
      "Customers want clear communication, practical scheduling, and a crew that respects the property.",
  },
  {
    title: "Focused on quality",
    description:
      "The goal is not just to finish the job. The property should look noticeably cleaner and more complete after service.",
  },
  {
    title: "Local and dependable",
    description:
      `The site positions ${brand.businessName} as a trusted local lawn maintenance company in ${brand.city}, not a faceless chain or generic national brand.`,
  },
  {
    title: "Built for repeat business",
    description:
      "Recurring maintenance, cleanup, landscaping, and winter work all help build long-term customer relationships.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`A dependable local team for lawn care in ${brand.city}`}
        copy={`${brand.businessName} is positioned as a customer-friendly lawn care and landscaping company focused on reliable work, clean finishes, and straightforward service across ${brand.serviceArea}.`}
        image={siteImages.frontYard}
        imageAlt="Clean front yard with fresh landscaping"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 md:px-8 md:py-24 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,49,34,0.08)]">
          <div className="relative aspect-[4/5]">
            <Image
              src={siteImages.pruning}
              alt="Detailed shrub trimming work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Professional, hardworking, and built around practical service"
            copy={`This About page keeps the message grounded. It does not rely on fake awards or inflated claims. Instead, it presents ${brand.businessName} as the kind of local company people trust to show up, communicate clearly, and take care of the property the right way.`}
          />
          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.7rem] border border-[rgba(23,49,34,0.08)] bg-white p-6 text-base leading-8 text-[var(--muted-ink)]">
              The tone is intentionally simple and confident so the business feels
              established, capable, and easy to hire.
            </div>
            <div className="rounded-[1.7rem] border border-[rgba(23,49,34,0.08)] bg-white p-6 text-base leading-8 text-[var(--muted-ink)]">
              The placeholder structure also makes it easy to adapt this site for
              other lawn care and landscaping companies later without touching
              the design system.
            </div>
          </div>
        </div>
      </section>
      <FeatureGrid
        eyebrow="Our Approach"
        title="What this brand is designed to communicate"
        copy="These are the brand signals the layout reinforces across every page."
        items={values}
      />
      <CtaBand
        title="Need a local lawn care company that feels easy to trust?"
        copy={`Use the quote form to make ${brand.businessName} feel approachable, responsive, and ready to help homeowners and small commercial properties in ${brand.serviceArea}.`}
      />
    </>
  );
}
