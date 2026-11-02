import type { MetadataRoute } from "next";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { contractors } from "@/lib/contractors";
import { guides } from "@/lib/guides";
import { SITE_URL as BASE_URL } from "@/lib/site";


export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/find`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationsIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const contractorPages: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `${BASE_URL}/roofers/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...guides.map((g) => ({
      url: `${BASE_URL}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const partnerPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...core, ...servicePages, ...locationsIndex, ...locationPages, ...contractorPages, ...guidePages, ...partnerPage];
}
