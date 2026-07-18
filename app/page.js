import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
