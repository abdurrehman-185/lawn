import { BeforeAfterPlaceholder, CtaBand, GalleryPreview, PageHero } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { featuredProjects, siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Gallery / Projects",
  description:
    "Browse lawn care, landscaping, cleanup, and snow removal project placeholders designed to be replaced with real company work later.",
  path: "/gallery",
});

const filters = ["All", "Maintenance", "Landscaping", "Cleanup", "Commercial", "Snow Removal"];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery / Projects"
        title="Strong project visuals built to sell the work"
        copy="This page is structured to feel premium now while leaving clear room for real lawn care and landscaping photography later."
        image={siteImages.hero}
        imageAlt="Well-maintained lawn and front yard"
      />
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-[rgba(23,49,34,0.1)] bg-white px-4 py-2 text-sm font-medium text-[var(--ink)] transition hover:border-[rgba(23,49,34,0.24)]"
            >
              {filter}
            </span>
          ))}
        </div>
      </section>
      <div id="projects">
        <GalleryPreview projects={featuredProjects} />
      </div>
      <BeforeAfterPlaceholder />
      <CtaBand
        title="Ready to swap these placeholders for real project photos?"
        copy="This layout is already set up for mowing, edging, cleanup, landscaping, and snow removal imagery that helps the site feel immediately credible."
      />
    </>
  );
}
