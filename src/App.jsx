import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-bg-custom text-gray-800 text-shadow-md">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
