import Link from "next/link";
import type { ReactNode } from "react";

import { brand, footerLinks, navItems } from "@/lib/site-data";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-[var(--forest)] text-white shadow-[0_18px_45px_rgba(18,54,34,0.22)] hover:bg-[var(--forest-strong)]",
    secondary:
      "border border-[rgba(23,49,34,0.14)] bg-white/90 text-[var(--ink)] hover:border-[rgba(23,49,34,0.28)] hover:bg-white",
    ghost:
      "border border-white/14 bg-white/6 text-white hover:bg-white/10",
  };
  const sharedClassName = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 ${styles[variant]} ${className}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={sharedClassName}>
      {children}
    </a>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#264c35,#173122)] shadow-[0_12px_30px_rgba(18,54,34,0.24)]">
        <span className="grid h-5 w-5 grid-cols-2 gap-1">
          <span className="rounded-full bg-[var(--sand)]" />
          <span className="rounded-full bg-white/80" />
          <span className="rounded-full bg-white/80" />
          <span className="rounded-full bg-[var(--sand)]" />
        </span>
      </span>
      <span className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--muted-ink)]">
          Premium Lawn Care
        </span>
        <span className="font-display text-lg font-semibold text-[var(--ink)]">
          {brand.businessName}
        </span>
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(23,49,34,0.08)] bg-[rgba(247,244,237,0.9)] backdrop-blur-xl">
      <div className="hidden border-b border-[rgba(23,49,34,0.08)] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-[var(--muted-ink)] md:px-8">
          <p>
            Local lawn care and landscaping in {brand.city} and {brand.serviceArea}
          </p>
          <div className="flex items-center gap-6">
            <a href={brand.phoneHref} className="transition hover:text-[var(--ink)]">
              {brand.phone}
            </a>
            <a href={brand.emailHref} className="transition hover:text-[var(--ink)]">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted-ink)] transition hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/contact" variant="secondary">
            Get a Free Quote
          </ButtonLink>
          <ButtonLink href={brand.phoneHref}>Call Now</ButtonLink>
        </div>
        <details className="relative lg:hidden">
          <summary className="nav-summary flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[rgba(23,49,34,0.1)] bg-white text-sm font-semibold text-[var(--ink)] shadow-[0_8px_24px_rgba(15,23,15,0.08)]">
            Menu
          </summary>
          <div className="absolute right-0 mt-4 w-[min(20rem,calc(100vw-2rem))] rounded-[1.75rem] border border-[rgba(23,49,34,0.08)] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,15,0.16)]">
            <div className="mb-4 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted-ink)]">
                Contact
              </span>
              <a href={brand.phoneHref} className="text-sm text-[var(--ink)]">
                {brand.phone}
              </a>
              <a href={brand.emailHref} className="text-sm text-[var(--ink)]">
                {brand.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--paper)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              <ButtonLink href="/contact">Get a Free Quote</ButtonLink>
              <ButtonLink href={brand.phoneHref} variant="secondary">
                Call Now
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--muted-ink)]">
        {title}
      </h3>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-[var(--ink)] transition hover:text-[var(--forest)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(23,49,34,0.08)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_repeat(3,1fr)] md:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted-ink)]">
            Premium lawn care, landscaping, seasonal cleanup, and property
            maintenance website content built around editable placeholders for{" "}
            {brand.city} and {brand.serviceArea}.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-[var(--ink)]">
            <a href={brand.phoneHref}>{brand.phone}</a>
            <a href={brand.emailHref}>{brand.email}</a>
            <span>{brand.address}</span>
          </div>
        </div>
        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Services" links={footerLinks.services} />
        <FooterColumn title="Resources" links={footerLinks.resources} />
      </div>
      <div className="border-t border-[rgba(23,49,34,0.08)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-[var(--muted-ink)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            Built for easy rebranding: swap the name, contact details, city,
            service area, services, images, and reviews as needed.
          </p>
          <p>
            {brand.businessName} • Serving {brand.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCall() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-center">
        <a
          href={brand.phoneHref}
          className="pointer-events-auto inline-flex w-full items-center justify-center rounded-full bg-[var(--forest)] px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(18,54,34,0.28)]"
        >
          Call {brand.phone}
        </a>
      </div>
    </div>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileStickyCall />
    </div>
  );
}
