import fs from "node:fs";
import path from "node:path";

/**
 * Vérifie qu'un fichier de public/ existe au moment du build.
 * Cela permet de masquer un bouton PDF ou une capture sans laisser de lien cassé.
 */
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  const filePath = path.join(
    process.cwd(),
    "public",
    publicPath.replace(/^\/+/, ""),
  );
  return fs.existsSync(filePath);
}
