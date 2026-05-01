import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Sections for navigation anchors */}
      <section id="ahad" className="min-h-screen bg-black/20" />
      <About />
      <section id="experience" className="min-h-screen" />
      <TechStack />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen bg-black/20" />
      <section id="blog" className="min-h-screen" />
    </main>
  );
}
