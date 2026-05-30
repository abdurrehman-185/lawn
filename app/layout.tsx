import type { Metadata } from "next";

import { SiteChrome } from "@/components/site-shell";
import { brand } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.metaSiteUrl),
  title: {
    default: `${brand.businessName} | Lawn Care & Landscaping in ${brand.city}`,
    template: `%s | ${brand.businessName}`,
  },
  description:
    `Premium lawn care, landscaping, yard cleanup, and snow removal in ${brand.city} and ${brand.serviceArea}.`,
  applicationName: brand.businessName,
  keywords: [
    `lawn care in ${brand.city}`,
    `landscaping services in ${brand.city}`,
    "local lawn maintenance company",
    `yard cleanup and mowing near ${brand.city}`,
    `residential and commercial lawn care in ${brand.serviceArea}`,
  ],
  openGraph: {
    title: `${brand.businessName} | Lawn Care & Landscaping in ${brand.city}`,
    description:
      `Premium lawn care, landscaping, yard cleanup, and snow removal in ${brand.city} and ${brand.serviceArea}.`,
    siteName: brand.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.businessName} | Lawn Care & Landscaping in ${brand.city}`,
    description:
      `Premium lawn care, landscaping, yard cleanup, and snow removal in ${brand.city} and ${brand.serviceArea}.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
