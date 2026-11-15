import { site } from "@/data/content";
import { publicFileExists } from "@/lib/assets";
import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { PathSection } from "@/components/home/PathSection";
import { MethodSection } from "@/components/home/MethodSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  const hasCv = publicFileExists(site.cv);
  const hasPhoto = publicFileExists(site.photo);

  return (
    <>
      <Hero hasCv={hasCv} hasPhoto={hasPhoto} />
      <ProjectsSection />
      <SkillsSection />
      <PathSection />
      <MethodSection />
      <ContactSection />
    </>
  );
}
