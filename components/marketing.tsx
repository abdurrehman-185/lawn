import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/site-shell";
import {
  brand,
  featuredProjects,
  heroHighlights,
  reviewPlaceholders,
  serviceAreaSections,
  siteImages,
  trustPoints,
  type FaqItem,
  type ProjectCard,
  type ReviewPlaceholder,
  type ServiceListItem,
  type ServicePageData,
} from "@/lib/site-data";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--forest)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--muted-ink)] sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(199,156,105,0.16),transparent_28%),linear-gradient(180deg,#173122_0%,#12271c_52%,#112218_100%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-18 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--sand)]">
            Premium Local Contractor Website
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Premium lawn care and landscaping in {brand.city} that keeps
            properties looking sharp.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {brand.businessName} helps homeowners and small commercial
            properties across {brand.serviceArea} stay clean, dependable, and
            easy to be proud of. From weekly mowing to landscape refreshes,
            seasonal cleanups, and snow removal, the experience stays simple
            and professional.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Get a Free Quote</ButtonLink>
            <ButtonLink href={brand.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/12 bg-white/6 px-5 py-4 text-sm text-white/80 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:pl-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_30px_90px_rgba(8,16,11,0.32)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,25,18,0)_30%,rgba(11,25,18,0.48)_100%)]" />
            <div className="relative aspect-[5/6]">
              <Image
                src={siteImages.hero}
                alt="Healthy front yard with strong curb appeal"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="inline-flex rounded-full border border-white/15 bg-[rgba(247,244,237,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sand)] backdrop-blur-sm">
                Lawn Care + Landscaping + Property Maintenance
              </div>
            </div>
          </div>
          <div className="absolute -left-2 bottom-6 hidden w-60 rounded-[1.6rem] border border-[rgba(23,49,34,0.08)] bg-[var(--paper)] p-5 text-[var(--ink)] shadow-[0_26px_70px_rgba(12,20,13,0.18)] sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--forest)]">
              Built for conversion
            </p>
            <p className="mt-3 text-lg font-semibold leading-7">
              Clear contact info, easy quote flow, and strong local trust cues.
            </p>
          </div>
          <div className="absolute -right-4 top-8 hidden overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/8 shadow-[0_24px_60px_rgba(8,16,11,0.28)] lg:block">
            <div className="relative h-40 w-32">
              <Image
                src={siteImages.mowing}
                alt="Lawn mowing detail"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  ctaHref = "/contact",
  primaryLabel = "Get a Free Quote",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(199,156,105,0.12),transparent_26%),linear-gradient(180deg,#173122_0%,#13281d_100%)] py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--sand)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{copy}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={ctaHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={brand.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <div className="relative aspect-[16/11]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-[rgba(23,49,34,0.08)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-4 md:px-8">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="rounded-[1.5rem] border border-[rgba(23,49,34,0.08)] bg-[var(--paper)] px-5 py-4 text-sm font-medium text-[var(--ink)]"
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid({
  title = "Services designed for neat, reliable exterior care",
  copy = `Everything on this site is built to be easy to edit later, but the current structure already covers the core services a local lawn maintenance company needs to sell in ${brand.city} and ${brand.serviceArea}.`,
  items,
  compact = false,
}: {
  title?: string;
  copy?: string;
  items: ServiceListItem[];
  compact?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
      <SectionHeading eyebrow="Services" title={title} copy={copy} />
      <div className={`mt-12 grid gap-6 ${compact ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-3"}`}>
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,15,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,15,0.1)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--forest)]">
              Lawn & landscape
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
              {item.summary}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className="mt-6 inline-flex text-sm font-semibold text-[var(--forest)] transition group-hover:translate-x-1"
              >
                Explore service
              </Link>
            ) : (
              <span className="mt-6 inline-flex text-sm font-semibold text-[var(--muted-ink)]">
                Easy to customize
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureGrid({
  eyebrow,
  title,
  copy,
  items,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-[var(--paper)] p-7"
            >
              <div className="h-12 w-12 rounded-2xl bg-[rgba(30,70,48,0.1)]" />
              <h3 className="mt-6 font-display text-2xl leading-tight text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessGrid({
  eyebrow = "How It Works",
  title,
  copy,
  steps,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  steps: Array<{ title: string; description: string }>;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,15,0.06)]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--forest)] text-sm font-semibold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-2xl leading-tight text-[var(--ink)]">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCardView({ project }: { project: ProjectCard }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white shadow-[0_20px_60px_rgba(15,23,15,0.06)]">
      <div className="relative aspect-[5/4]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[rgba(30,70,48,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--forest)]">
            {project.category}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-ink)]">
            {project.location}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-[var(--ink)]">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[rgba(23,49,34,0.08)] px-3 py-1 text-sm text-[var(--ink)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function GalleryPreview({
  projects = featuredProjects.slice(0, 3),
}: {
  projects?: ProjectCard[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Project visuals that sell the quality of the work"
            copy="Strong lawn-focused images give this template immediate credibility. Replace each project later with real work from the business without changing the layout."
          />
          <ButtonLink href="/gallery" variant="secondary">
            View More Projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCardView key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewPlaceholder }) {
  return (
    <article className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,15,0.06)]">
      <p className="text-4xl leading-none text-[var(--forest)]">&ldquo;</p>
      <p className="mt-4 text-base leading-8 text-[var(--ink)]">{review.quote}</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(23,49,34,0.08)] pt-5">
        <div>
          <p className="font-semibold text-[var(--ink)]">{review.name}</p>
          <p className="text-sm text-[var(--muted-ink)]">{review.location}</p>
        </div>
        <span className="rounded-full bg-[rgba(30,70,48,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--forest)]">
          {review.service}
        </span>
      </div>
    </article>
  );
}

export function ReviewsPreview({
  reviews = reviewPlaceholders.slice(0, 3),
}: {
  reviews?: ReviewPlaceholder[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Reviews"
          title="Tasteful social proof with room for real Google and Facebook reviews"
          copy="The page design is polished now, while the content is intentionally placeholder-based so real reviews can be dropped in later without rewriting the layout."
        />
        <ButtonLink href="/reviews" variant="secondary">
          Read Reviews
        </ButtonLink>
      </div>
      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={`${review.service}-${review.location}`} review={review} />
        ))}
      </div>
    </section>
  );
}

export function ServiceAreasPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service Areas"
            title={`Built for lawn care in ${brand.city} and across ${brand.serviceArea}`}
            copy="These location blocks are written to be easy to swap later. Keep the structure, update the city names, and the local SEO direction still works."
          />
          <ButtonLink href="/service-areas" variant="secondary">
            Explore Service Areas
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceAreaSections.map((area) => (
            <div
              key={area.name}
              className="rounded-[2rem] border border-[rgba(23,49,34,0.08)] bg-[var(--paper)] p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--forest)]">
                Location
              </p>
              <h3 className="mt-4 font-display text-2xl leading-tight text-[var(--ink)]">
                {area.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
                {area.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({
  title,
  copy,
  items,
}: {
  title: string;
  copy: string;
  items: FaqItem[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-18 md:px-8 md:py-24">
      <SectionHeading eyebrow="FAQ" title={title} copy={copy} align="center" />
      <div className="mt-12 grid gap-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.7rem] border border-[rgba(23,49,34,0.08)] bg-white px-6 py-5 shadow-[0_18px_50px_rgba(15,23,15,0.05)]"
          >
            <summary className="nav-summary flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-[var(--ink)]">
              <span>{item.question}</span>
              <span className="text-lg text-[var(--forest)] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pt-4 text-base leading-8 text-[var(--muted-ink)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  copy,
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
}: {
  title: string;
  copy: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-24">
      <div className="overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_top_left,rgba(199,156,105,0.16),transparent_28%),linear-gradient(135deg,#173122_0%,#12271c_100%)] px-7 py-10 text-white shadow-[0_28px_85px_rgba(12,22,14,0.18)] md:px-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--sand)]">
              Free Quote
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              {copy}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={brand.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterPlaceholder() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-18 md:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {["Before Photo Placeholder", "After Photo Placeholder"].map((label) => (
          <div
            key={label}
            className="flex min-h-80 flex-col justify-end rounded-[2rem] border border-dashed border-[rgba(23,49,34,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(234,229,220,0.78))] p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--forest)]">
              Replace Later
            </p>
            <h3 className="mt-4 font-display text-3xl text-[var(--ink)]">{label}</h3>
            <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted-ink)]">
              Drop in real transformation photography here to show curb appeal,
              cleanup, trimming, or landscaping improvements without changing
              the layout.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-4 rounded-[1.5rem] border border-[rgba(23,49,34,0.08)] bg-white px-5 py-4"
        >
          <span className="mt-1 h-3 w-3 rounded-full bg-[var(--forest)]" />
          <span className="text-base leading-7 text-[var(--ink)]">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceDetailPage({ service }: { service: ServicePageData }) {
  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={`${service.title} in ${brand.city}`}
        copy={service.heroCopy}
        image={service.image}
        imageAlt={service.imageAlt}
        ctaHref={`/contact?service=${encodeURIComponent(service.title)}`}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 md:px-8 md:py-24 lg:grid-cols-[0.94fr_1.06fr]">
        <div>
          <SectionHeading
            eyebrow="What Is Included"
            title={`What ${service.title.toLowerCase()} can cover`}
            copy={`This section is designed to be easy to edit later, but it already gives a strong sales structure for ${service.title.toLowerCase()} in ${brand.city}.`}
          />
        </div>
        <BulletList items={service.includes} />
      </section>
      <FeatureGrid
        eyebrow="Common Problems"
        title={`Why property owners book ${service.title.toLowerCase()}`}
        copy="Use these problem-focused cards to connect the service to real homeowner and property manager frustrations."
        items={service.problems}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,49,34,0.08)]">
          <div className="relative aspect-[5/4]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Benefits"
            title="The payoff for homeowners and property managers"
            copy="These benefit cards keep the message practical, local, and conversion-focused."
          />
          <div className="mt-8 grid gap-4">
            {service.benefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-[rgba(23,49,34,0.08)] bg-white px-5 py-4 text-base leading-7 text-[var(--ink)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessGrid
        title={`A simple ${service.title.toLowerCase()} process`}
        copy="The process stays clear and easy to understand, which helps the service feel trustworthy before anyone even reaches out."
        steps={service.process}
      />
      <FaqList
        title={`${service.title} questions`}
        copy={`Answer the most common questions about ${service.title.toLowerCase()} in ${brand.city} without overcomplicating the copy.`}
        items={service.faqs}
      />
      <CtaBand
        title={`Need ${service.title.toLowerCase()} in ${brand.city}?`}
        copy={`Use the quote page to request ${service.title.toLowerCase()} service for your home or small commercial property in ${brand.serviceArea}.`}
        primaryHref={`/contact?service=${encodeURIComponent(service.title)}`}
      />
    </>
  );
}
