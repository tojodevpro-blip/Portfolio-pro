import Link from "next/link";
import { site } from "@/data/content";
import { assetPath } from "@/lib/site";
import { publicFileExists } from "@/lib/assets";
import { Download } from "./icons";

export function Header() {
  const hasCv = publicFileExists(site.cv);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`Accueil — ${site.name}`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-ink font-serif text-sm transition-colors group-hover:bg-ink group-hover:text-paper motion-safe:transition-colors">
            {site.monogram}
          </span>
          <span className="hidden text-sm font-medium sm:block">
            {site.shortName}
          </span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-4 sm:gap-6">
            <li>
              <Link className="label link-quiet" href="/#projets">
                Projets
              </Link>
            </li>
            <li className="hidden md:block">
              <Link className="label link-quiet" href="/#competences">
                Compétences
              </Link>
            </li>
            <li>
              <Link className="label link-quiet" href="/#parcours">
                Parcours
              </Link>
            </li>
            <li>
              <Link className="label link-quiet" href="/#contact">
                Contact
              </Link>
            </li>
            {hasCv ? (
              <li className="hidden sm:block">
                <a
                  href={assetPath(site.cv)}
                  download
                  className="inline-flex items-center gap-1.5 border border-ink px-2.5 py-1.5 transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
                >
                  <span className="label">CV</span>
                  <Download className="h-3.5 w-3.5" />
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
