import { CtaBand, FaqList, PageHero } from "@/components/marketing";
import { QuoteForm } from "@/components/quote-form";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";
import { brand, homeFaqs, siteImages } from "@/lib/site-data";
import { JsonLd } from "@/components/site-shell";

import { submitQuote } from "./actions";

export const metadata = buildMetadata({
  title: "Contact / Free Quote",
  description:
    "Request a free lawn care or landscaping quote in [City] with a mobile-friendly form, visible contact details, and strong trust copy.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = params.service;

  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <PageHero
        eyebrow="Contact / Free Quote"
        title="Request a free quote for lawn care, landscaping, or cleanup"
        copy={`Use the short form below or call ${brand.phone} to ask about mowing, edging, trimming, landscaping, seasonal cleanup, property maintenance, or snow removal in ${brand.serviceArea}.`}
        image={siteImages.mowing}
        imageAlt="Lawn service contact page visual"
        ctaHref="#quote-form"
        primaryLabel="Jump to Quote Form"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-18 md:px-8 md:py-24 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-6 self-start">
          <div className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,15,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--forest)]">
              Contact Info
            </p>
            <div className="mt-6 grid gap-5 text-base text-[var(--ink)]">
              <a href={brand.phoneHref} className="rounded-[1.3rem] bg-[var(--paper)] px-4 py-4">
                {brand.phone}
              </a>
              <a href={brand.emailHref} className="rounded-[1.3rem] bg-[var(--paper)] px-4 py-4">
                {brand.email}
              </a>
              <div className="rounded-[1.3rem] bg-[var(--paper)] px-4 py-4">
                {brand.address}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,15,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--forest)]">
              Why This Form Converts
            </p>
            <div className="mt-5 grid gap-4 text-base leading-7 text-[var(--muted-ink)]">
              <p>Short enough to complete quickly on mobile.</p>
              <p>Strong local trust copy without overcomplicating the page.</p>
              <p>Visible phone and email options for visitors who prefer direct contact.</p>
            </div>
          </div>
        </div>
        <div
          id="quote-form"
          className="rounded-[2.2rem] border border-[rgba(23,49,34,0.08)] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,15,0.08)] md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--forest)]">
            Free Quote Form
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--ink)]">
            Tell us what you need
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted-ink)]">
            Share the service, property type, and details that matter most. This
            form is structured for fast completion and easy follow-up.
          </p>
          <div className="mt-8">
            <QuoteForm action={submitQuote} defaultService={defaultService} />
          </div>
        </div>
      </section>
      <FaqList
        title="Quote and scheduling questions"
        copy="A short FAQ section helps answer common contact questions before the form is submitted."
        items={homeFaqs.slice(0, 4)}
      />
      <CtaBand
        title="Prefer to talk before filling out the form?"
        copy="Keep one more direct call option visible so mobile visitors can choose the fastest path."
      />
    </>
  );
}
