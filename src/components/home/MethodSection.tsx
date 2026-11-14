import { method, sections } from "@/data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function MethodSection() {
  return (
    <section
      id="methode"
      aria-labelledby="methode-title"
      className="scroll-mt-20 border-t border-line"
    >
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading {...sections.method} id="methode-title" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label text-forest">Approche</p>
              <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-muted">
                Du besoin au test, avec une fiche technique à chaque étape.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={80}>
              <blockquote className="border-l-2 border-accent pl-6 sm:pl-8">
                <p className="font-serif text-[clamp(1.5rem,3.4vw,2.7rem)] leading-[1.24] tracking-[-0.02em]">
                  {method}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
