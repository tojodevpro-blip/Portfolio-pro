import Image from "next/image";
import type { Project, ProjectImage } from "@/data/content";
import { assetPath } from "@/lib/site";

type ProjectCoverProps = {
  project: Project;
  image?: ProjectImage;
  className?: string;
  priority?: boolean;
};

/**
 * Couverture typographique utilisée quand aucune capture n'est fournie.
 * Aucun cadre vide : le nom, la stack et un chiffre clé composent l'image.
 */
export function ProjectCover({
  project,
  image,
  className = "",
  priority = false,
}: ProjectCoverProps) {
  const firstMetric = project.metrics[0];
  const metricLine = firstMetric
    ? `${firstMetric.prefix ?? ""}${firstMetric.display}${firstMetric.suffix ?? ""} ${firstMetric.label}`
    : "";

  if (image) {
    return (
      <figure className={`cover flex flex-col bg-wash ${className}`}>
        <div className="relative min-h-0 flex-1">
          <Image
            src={assetPath(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={priority}
            className="h-full w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <figcaption className="flex shrink-0 items-end justify-between gap-4 bg-ink px-5 py-4 text-paper">
          <div>
            <p className="label opacity-80">{project.coverKicker}</p>
            <p className="mt-1 font-serif text-2xl leading-none">
              {project.name}
            </p>
          </div>
          <p className="label hidden text-right sm:block">{metricLine}</p>
        </figcaption>
      </figure>
    );
  }

  const toneClass =
    project.coverTone === "accent"
      ? "cover--accent"
      : project.coverTone === "forest"
        ? "cover--forest"
        : "cover--ink";

  return (
    <div className={`cover ${toneClass} ${className}`} aria-hidden="true">
      <div className="cover-lines" />
      <span className="cover-watermark">{project.index}</span>
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 lg:p-9">
        <div className="flex items-start justify-between gap-4">
          <p className="label">{project.index} / 03</p>
          <p className="label text-right">{project.coverKicker}</p>
        </div>
        <div>
          <p className="font-serif text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.88] tracking-[-0.04em]">
            {project.name}
          </p>
          <div className="cover-rule mt-4 flex flex-wrap items-end justify-between gap-2 border-t pt-3">
            <p className="label">{project.stack.slice(0, 2).join(" · ")}</p>
            <p className="label">{metricLine}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
