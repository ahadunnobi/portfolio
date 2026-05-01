import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
     
      
      {/* Sections for navigation anchors */}
      <section id="about" className="min-h-screen bg-black/20" />
      <section id="experience" className="min-h-screen" />
      <section id="tech-stack" className="min-h-screen bg-black/20" />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen bg-black/20" />
      <section id="blog" className="min-h-screen" />
    </main>
  );
}
