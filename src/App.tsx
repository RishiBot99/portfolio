import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { WorkExperienceSection } from "./components/WorkExperienceSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { InterestsSection } from "./components/InterestsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackgroundAnimation } from "./components/BackgroundAnimation";
import { ProjectDetail } from "./pages/ProjectDetail"; // We will create this next
import { InterestDetail } from "./pages/InterestDetail";

// A component that holds your main sections
function HomePage() {
  return (
    <>
      <Header name="Rishabh Anand" title="Electrical Engineer @University of Kansas" 
      bio="Working to make the world a better place through embedded and power system design! 
      Always looking to work on new projects and build new solutions for the benefit of my community" />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <LeadershipSection />
      <InterestsSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <BackgroundAnimation />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/interest/:interestId" element={<InterestDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}