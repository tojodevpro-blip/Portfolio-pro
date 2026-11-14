import { path, sections } from "@/data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function PathSection() {
  return (
    <section
      id="parcours"
      aria-labelledby="parcours-title"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading {...sections.path} id="parcours-title" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          {path.map((item, index) => (
            <Reveal key={`${item.kind}-${item.title}`} delay={index * 80}>
              <article className="border-t border-line pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="label text-forest">{item.kind}</p>
                  <p className="font-mono text-[10px] tracking-label text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-5 font-serif text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base">{item.org}</p>
                {item.period ? (
                  <p className="mt-2 font-mono text-xs text-muted">
                    {item.period}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
