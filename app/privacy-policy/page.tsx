import { CtaBand, PageHero } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";
import { privacySections, siteImages } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Generic privacy policy copy for a lawn care and landscaping website, ready to be replaced with the final business-specific legal language.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Simple privacy policy structure ready for final legal review"
        copy="This page gives the site a complete, professional footprint while making it easy to replace the wording later with business-specific legal text."
        image={siteImages.path}
        imageAlt="Landscaped garden path"
      />
      <section className="mx-auto max-w-5xl px-6 py-18 md:px-8 md:py-24">
        <div className="grid gap-6">
          {privacySections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,15,0.05)]"
            >
              <h2 className="font-display text-3xl text-[var(--ink)]">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted-ink)]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand
        title="Need a quote instead of policy details?"
        copy="Keep the final call to action consistent across the whole site so visitors never hit a dead end."
      />
    </>
  );
}
