document.documentElement.classList.add("dark");
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certification";
import CursorGlow from "./components/CursorGlow";
import PremiumBackground from "./components/PremiumBackground";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";



export default function App() {
  return (
    <div className="font-sans min-h-screen">
      <CursorGlow />
      <PremiumBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <About />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Education />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Experience />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Skills />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Certifications />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Projects />

        <div className="mx-auto max-w-6xl px-6">
          <div className="my-10 border-t border-black/10 dark:border-white/10" />
        </div>

        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}