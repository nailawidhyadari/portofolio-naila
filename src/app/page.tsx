import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile, projects } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  knowsAbout: profile.skills,
  makesOffer: projects.map((p) => ({
    "@type": "CreativeWork",
    name: p.name,
    url: p.url,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
