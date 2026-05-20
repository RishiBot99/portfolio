import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ResearchSection } from "./components/ResearchSection";
import { InterestsSection } from "./components/InterestsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LegoAnimation } from "./components/LegoAnimation";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegoAnimation />
      <Navigation />
      <Header
        name="Your Name"
        title="Electrical Engineering @ University Name"
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