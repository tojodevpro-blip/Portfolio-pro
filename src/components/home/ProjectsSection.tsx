import { projects, sections } from "@/data/content";
import { publicFileExists } from "@/lib/assets";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading
            {...sections.projects}
            id="projets-title"
          />
        </Reveal>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const hasPdf = publicFileExists(project.pdf);
            const image = project.images.find((item) =>
              publicFileExists(item.src),
            );

            return (
              <Reveal key={project.slug} delay={index === 0 ? 0 : 60}>
                <ProjectCard
                  project={project}
                  featured={index === 0}
                  reverse={index === 1}
                  hasPdf={hasPdf}
                  image={image}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
