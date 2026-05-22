// Remove "/app" from all of these paths
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ResearchSection } from "./components/ResearchSection";
import { InterestsSection } from "./components/InterestsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackgroundAnimation } from "./components/BackgroundAnimation";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <Navigation />
      <Header
        name="Rishabh Anand"
        title="Electrical Engineering @ University of Kansas"
        bio="Passionate about power systems, embedded development, and renewable energy. Building innovative solutions that make a difference in the world through sustainable technology and creative circuit design."
      />
      <AboutSection />
      <ProjectsSection />
      <LeadershipSection />
      <ResearchSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}