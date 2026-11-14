import { contact, sections } from "@/data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ArrowUpRight, Github, Mail, Phone } from "../icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-wash"
    >
      <div className="mx-auto max-w-shell px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading {...sections.contact} id="contact-title" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="max-w-md font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.25] tracking-[-0.02em]">
                {contact.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={60}>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start justify-between gap-6 border-t border-line py-6"
              >
                <div className="min-w-0">
                  <p className="label text-forest">Email</p>
                  <p className="mt-2 break-all font-serif text-[clamp(1.35rem,3.2vw,2.5rem)] leading-none tracking-[-0.02em]">
                    {contact.email}
                  </p>
                </div>
                <Mail className="mt-1 h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 motion-safe:transition-transform" />
              </a>

              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 border-t border-line py-6"
              >
                <div>
                  <p className="label text-forest">WhatsApp</p>
                  <p className="mt-2 font-serif text-[clamp(1.35rem,3.2vw,2.5rem)] leading-none tracking-[-0.02em]">
                    {contact.whatsapp.label}
                  </p>
                </div>
                <span className="mt-1 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-safe:transition-transform" />
                </span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 border-y border-line py-6"
              >
                <div>
                  <p className="label text-forest">GitHub</p>
                  <p className="mt-2 break-all font-serif text-[clamp(1.35rem,3.2vw,2.5rem)] leading-none tracking-[-0.02em]">
                    {contact.githubLabel}
                  </p>
                </div>
                <span className="mt-1 flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-safe:transition-transform" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
