import { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const pages = ["", "/services", "/why", "/contact"];
  const entries: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of pages) {
      const url = `${base}/${l}${p}`;
      entries.push({ url, changefreq: "weekly", priority: p === "" ? 1 : 0.6 });
    }
  }
  return entries;
}

