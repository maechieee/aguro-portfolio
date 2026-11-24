import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { DocumentationSection } from "@/components/DocumentationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { documents } from "@/data/documents";
import { profile } from "@/data/profile";
import { publicFileExists } from "@/lib/documents";

export default function Home() {
  // Resolved at build/request time so cards show a placeholder until the real PDF is dropped in /public.
  const available = Object.fromEntries(documents.map((d) => [d.id, publicFileExists(d.file)]));
  const photoAvailable = publicFileExists(profile.photo);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection resumeAvailable={publicFileExists(profile.resumeUrl)} photoAvailable={photoAvailable} />
      <ExperienceSection />
      <SkillsStrip />
      <ProjectsSection />
      <CertificationsSection />
      <DocumentationSection available={available} />
      <ContactSection />
      <Footer />
    </main>
  );
}
