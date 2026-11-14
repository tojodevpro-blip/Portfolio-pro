import { site } from "@/data/content";

const origin = (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/+$/, "");
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

/** URL publique complète du site, basePath inclus. */
export const siteUrl = `${origin}${basePath}`;

/** Prépare un fichier de public/ pour un hébergement avec basePath (GitHub Pages). */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

/** URL absolue utilisée dans les métadonnées, le sitemap et les flux sociaux. */
export function absoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}
