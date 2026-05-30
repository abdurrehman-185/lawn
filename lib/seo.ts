import type { Metadata } from "next";

import { brand, type FaqItem } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: brand.businessName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: brand.businessName,
    description:
      `Premium lawn care, landscaping, yard cleanup, and snow removal in ${brand.city} and ${brand.serviceArea}.`,
    areaServed: [brand.city, brand.serviceArea, ...brand.nearbyAreas],
    telephone: brand.phone,
    email: brand.email,
    url: brand.metaSiteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressLocality: brand.city,
      addressRegion: "[State / Region]",
      postalCode: "[ZIP Code]",
      addressCountry: "US",
    },
    makesOffer: [
      "Lawn mowing",
      "Edging",
      "Trimming",
      "Lawn maintenance",
      "Yard cleanup",
      "Seasonal cleanup",
      "Landscaping",
      "Mulch installation",
      "Bush and hedge trimming",
      "Property maintenance",
      "Snow removal",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };
}
