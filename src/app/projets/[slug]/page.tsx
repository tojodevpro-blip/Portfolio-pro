import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/content";
import { absoluteUrl, assetPath } from "@/lib/site";
import { publicFileExists } from "@/lib/assets";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { ProjectCover } from "@/components/ProjectCover";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
} from "@/components/icons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const cover = project.coverImage
    ? project.images.find((image) => image.src === project.coverImage)
    : undefined;

  const ogImage = cover
    ? {
        url: absoluteUrl(cover.src),
        width: cover.width,
        height: cover.height,
        alt: cover.alt,
      }
    : {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: `${project.name}, ${project.subtitle}`,
      };

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: absoluteUrl(`/projets/${project.slug}/`),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/projets/${project.slug}/`),
      title: `${project.name} — ${project.subtitle}`,
      description: project.summary,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.subtitle}`,
      description: project.summary,
      images: [ogImage.url],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const hasPdf = publicFileExists(project.pdf);
  const availableImages = project.images.filter((image) =>
    publicFileExists(image.src),
  );
  const coverImage = project.coverImage
    ? availableImages.find((image) => image.src === project.coverImage)
    : undefined;
  const galleryImages = availableImages.filter(
    (image) => image.src !== project.coverImage,
  );
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <div className="mx-auto max-w-shell px-6 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28">
      <Link
        href="/#projets"
        className="label link-quiet inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Tous les projets
      </Link>

      <header className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label text-forest">
            {project.index} / 03 — {project.coverKicker}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.85] tracking-[-0.045em]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-[clamp(1.3rem,2.8vw,2rem)] leading-[1.25] tracking-[-0.015em]">
            {project.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div>
              <dt className="label text-muted">Projet</dt>
              <dd className="mt-1 font-mono text-sm">
                {project.index} sur 03
              </dd>
            </div>
            <div>
              <dt className="label text-muted">Fiche technique</dt>
              <dd className="mt-1 font-mono text-sm">
                {hasPdf ? "PDF" : "Non fournie"}
              </dd>
            </div>
            {project.version ? (
              <div>
                <dt className="label text-muted">Version</dt>
                <dd className="mt-1 font-mono text-sm">{project.version}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <ProjectCover
        project={project}
        image={coverImage}
        priority
        className={`mt-10 ${coverImage ? "aspect-[16/9]" : "aspect-[4/3] lg:aspect-[16/9]"}`}
      />

      <section
        aria-label="Problème et solution"
        className="mt-16 grid gap-10 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <p className="label text-forest">Le problème</p>
          <p className="mt-4 font-serif text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.35] tracking-[-0.015em]">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="label text-forest">La solution</p>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            {project.solution}
          </p>
          {project.note ? (
            <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
              {project.note}
            </p>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="chiffres-title" className="mt-20">
        <h2 id="chiffres-title" className="label text-muted">
          Chiffres clés
        </h2>
        <dl className="mt-4 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-line py-8 pr-4 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <AnimatedMetric metric={metric} size="lg" />
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="stack-title"
        className="mt-20 grid gap-12 lg:grid-cols-12"
      >
        <div className="lg:col-span-4">
          <h2 id="stack-title" className="label text-forest">
            Stack
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-label text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="label text-forest">Fonctionnalités principales</h2>
          <ul className="mt-5 border-t border-line">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="flex gap-4 border-b border-line py-4"
              >
                <span className="pt-1 font-mono text-[10px] tracking-label text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {galleryImages.length > 0 ? (
        <section
          aria-labelledby="captures-title"
          className="mt-20 border-t border-line pt-10"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="captures-title"
              className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.03em]"
            >
              Captures
            </h2>
            <p className="label text-muted">{galleryImages.length} images</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <figure key={image.src}>
                <Image
                  src={assetPath(image.src)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full border border-line"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <figcaption className="label mt-2 flex justify-between gap-4 text-muted">
                  <span>{project.name}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section
        aria-labelledby="documents-title"
        className="mt-20 border-t border-line pt-10"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              id="documents-title"
              className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.03em]"
            >
              Code et documents
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div>
              <p className="label text-forest">Accès au code</p>
              <p className="mt-2 text-base">{project.code.access}</p>
              {project.code.cta &&
              (project.code.url || project.code.ctaHref) ? (
                <a
                  href={project.code.url ?? project.code.ctaHref}
                  target={project.code.url ? "_blank" : undefined}
                  rel={project.code.url ? "noopener noreferrer" : undefined}
                  className="label link-quiet mt-3 inline-flex items-center gap-1.5"
                >
                  {project.code.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>

            {hasPdf || project.demoUrl || project.videoUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {hasPdf && project.pdf ? (
                  <a
                    href={assetPath(project.pdf)}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accentInk transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Télécharger la fiche technique (PDF)
                  </a>
                ) : null}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
                  >
                    Démonstration
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}

                {project.videoUrl ? (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper motion-safe:transition-colors"
                  >
                    Vidéo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <nav
        aria-label="Navigation entre les projets"
        className="mt-20 grid gap-8 border-t border-line pt-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link href={`/projets/${previous.slug}/`} className="group">
            <span className="label text-muted">Projet précédent</span>
            <span className="mt-2 flex items-center gap-2 font-serif text-2xl leading-none">
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 motion-safe:transition-transform" />
              {previous.name}
            </span>
          </Link>
        ) : null}
        {next ? (
          <Link
            href={`/projets/${next.slug}/`}
            className="group sm:text-right"
          >
            <span className="label text-muted">Projet suivant</span>
            <span className="mt-2 flex items-center gap-2 font-serif text-2xl leading-none sm:justify-end">
              {next.name}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-safe:transition-transform" />
            </span>
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
