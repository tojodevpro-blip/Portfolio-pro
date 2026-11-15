import type { MetadataRoute } from "next";
import { projects } from "@/data/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...projects.map((project) => `/projets/${project.slug}/`)];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
