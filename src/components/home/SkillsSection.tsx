import { sections, skills } from "@/data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function SkillsSection() {
  return (
    <section
      id="competences"
      aria-labelledby="competences-title"
      className="scroll-mt-20 bg-wash"
    >
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading {...sections.skills} id="competences-title" />
        </Reveal>

        <div className="border-t border-line">
          {skills.map((group, index) => (
            <Reveal key={group.label} delay={index * 50}>
              <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-8 lg:grid-cols-[240px_1fr]">
                <p className="label text-forest">{group.label}</p>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg sm:text-xl">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
