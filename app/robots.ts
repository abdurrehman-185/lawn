import type { MetadataRoute } from "next";

import { brand } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brand.metaSiteUrl}/sitemap.xml`,
    host: brand.metaSiteUrl,
  };
}
