import Link from "next/link";
import { hero, site } from "@/data/content";
import { assetPath } from "@/lib/site";
import { ArrowDown, Download } from "../icons";

type HeroProps = {
  hasCv: boolean;
};

export function Hero({ hasCv }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-shell px-6 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <p
            className="label animate-rise-in text-forest"
            style={{ animationDelay: "80ms" }}
          >
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-[clamp(2.9rem,10vw,8.4rem)] leading-[0.86] tracking-[-0.045em]"
          >
            <span
              className="block animate-rise-in"
              style={{ animationDelay: "160ms" }}
            >
              Tojo Nambinina
            </span>
            <span
              className="block animate-rise-in italic"
              style={{ animationDelay: "260ms" }}
            >
              Randriamifaly
            </span>
          </h1>

          <div
            className="mt-8 h-px w-full max-w-md origin-left animate-line-in bg-line"
            style={{ animationDelay: "420ms" }}
            aria-hidden="true"
          />

          <div className="mt-8 grid max-w-xl gap-6 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="label text-muted">Titre</p>
              <p className="mt-2 text-base">{site.role}</p>
            </div>
            <div>
              <p className="label text-muted">Lieu</p>
              <p className="mt-2 text-base">{site.location}</p>
            </div>
          </div>

          <p className="mt-10 max-w-2xl font-serif text-[clamp(1.35rem,3vw,2rem)] leading-[1.28] tracking-[-0.015em]">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accentInk transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
            >
              {hero.primaryCta.label}
              <ArrowDown className="h-4 w-4" />
            </Link>
            {hasCv ? (
              <a
                href={assetPath(hero.secondaryCta.href)}
                download
                className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
              >
                {hero.secondaryCta.label}
                <Download className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
          <div className="flex items-start justify-between gap-8 lg:block">
            <div className="relative flex aspect-square w-28 shrink-0 items-center justify-center border border-ink lg:w-full lg:max-w-[240px]">
              <span
                className="absolute right-3 top-3 h-2 w-2 bg-accent"
                aria-hidden="true"
              />
              <span className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none tracking-[-0.04em]">
                {site.monogram}
              </span>
            </div>
            <div className="lg:mt-10">
              <p className="label text-muted">Disponibilité</p>
              <p className="mt-1 text-sm">{site.availability}</p>
              <p className="label mt-6 text-muted">Stack principale</p>
              <ul className="mt-2 space-y-1">
                {hero.stack.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="label mt-8 text-muted">{hero.note}</p>
        </aside>
      </div>
    </section>
  );
}
