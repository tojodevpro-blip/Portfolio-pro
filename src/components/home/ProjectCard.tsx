import Link from "next/link";
import type { Project, ProjectImage } from "@/data/content";
import { assetPath } from "@/lib/site";
import { AnimatedMetric } from "../AnimatedMetric";
import { ProjectCover } from "../ProjectCover";
import { ArrowUpRight, Download } from "../icons";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  reverse?: boolean;
  hasPdf: boolean;
  image?: ProjectImage;
};

export function ProjectCard({
  project,
  featured = false,
  reverse = false,
  hasPdf,
  image,
}: ProjectCardProps) {
  const projectHref = `/projets/${project.slug}/`;

  const coverClasses = featured
    ? "lg:col-span-7"
    : reverse
      ? "lg:order-2 lg:col-span-5 lg:col-start-8"
      : "lg:col-span-5";

  const contentClasses = featured
    ? "lg:col-span-5"
    : reverse
      ? "lg:order-1 lg:col-span-6"
      : "lg:col-span-6";

  return (
    <article className="group border-t border-line pt-8 sm:pt-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className={coverClasses}>
          <Link
            href={projectHref}
            className="block"
            aria-label={`Voir le projet ${project.name}`}
          >
            <ProjectCover
              project={project}
              image={image}
              className={`${
                featured
                  ? "aspect-[4/3] lg:aspect-[16/10]"
                  : "aspect-[4/3]"
              } transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5`}
            />
          </Link>
        </div>

        <div className={`${contentClasses} flex flex-col`}>
          <div className="flex items-baseline justify-between gap-4">
            <p className="label text-forest">
              {project.index} / 03 — {project.coverKicker}
            </p>
            {project.version ? (
              <p className="label text-muted">v{project.version}</p>
            ) : null}
          </div>

          <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.03em]">
            <Link href={projectHref} className="link-quiet">
              {project.name}
            </Link>
          </h3>

          <p className="mt-2 text-sm font-medium text-muted">
            {project.subtitle}
          </p>

          <p className="mt-5 max-w-prose text-[15px] leading-relaxed">
            {project.summary}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-5">
            {project.metrics.map((metric) => (
              <AnimatedMetric key={metric.label} metric={metric} />
            ))}
          </dl>

          <ul
            className="mt-6 flex flex-wrap gap-x-2 gap-y-2"
            aria-label="Stack technique"
          >
            {project.stack.map((item) => (
              <li
                key={item}
                className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-label text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
            <Link
              href={projectHref}
              className="link-quiet inline-flex items-center gap-2 text-sm font-medium"
            >
              Voir le projet
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {hasPdf && project.pdf ? (
              <a
                href={assetPath(project.pdf)}
                download
                className="link-quiet inline-flex items-center gap-2 text-sm text-muted"
              >
                <Download className="h-4 w-4" />
                Fiche technique (PDF)
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
