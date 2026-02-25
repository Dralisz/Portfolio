import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import GamesSection from "@/components/GamesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GamesSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
