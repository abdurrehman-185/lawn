import { ButtonLink } from "@/components/site-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You",
  description:
    "Thank-you page for quote form submissions with clear next steps and an easy call option.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-32">
      <div className="rounded-[2.4rem] border border-[rgba(23,49,34,0.08)] bg-white p-10 text-center shadow-[0_24px_80px_rgba(15,23,15,0.08)] md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--forest)]">
          Thank You
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
          Your quote request has been sent.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
          This page is designed to reassure the visitor, confirm the next step,
          and give them one more easy way to make contact if they need a faster
          response.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact" variant="secondary">
            Submit Another Request
          </ButtonLink>
          <ButtonLink href="tel:[Phone Number]">Call Now</ButtonLink>
        </div>
      </div>
    </section>
  );
}
