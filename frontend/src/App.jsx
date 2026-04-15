import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  Routes,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import Scene from "./components/Scene";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".w-screen")?.parentElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-32 py-10">
      <RouterLink
        className="text-2xl font-serif italic font-bold tracking-tighter cursor-pointer"
        onClick={scrollToTop}
      >
        Kanish<span className="text-jewel-emerald">.</span>
      </RouterLink>
      <div className="hidden md:flex gap-12 text-[10px] font-sans uppercase tracking-[0.3em] text-zinc-500">
        <button
          onClick={() => scrollTo("about")}
          className="hover:text-jewel-emerald transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => scrollTo("skills")}
          className="hover:text-jewel-emerald transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollTo("journey")}
          className="hover:text-jewel-emerald transition-colors"
        >
          Journey
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-jewel-emerald transition-colors"
        >
          My Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="hover:text-jewel-emerald transition-colors"
        >
          Contact
        </button>
      </div>
      <a
        href="/Kanish Kainth_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-2 border border-jewel-emerald/30 rounded-full text-[10px] font-sans uppercase tracking-widest hover:bg-jewel-emerald hover:text-black transition-all"
      >
        Resume
      </a>
    </nav>
  );
}

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-jewel-emerald/20 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 150, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-jewel-emerald rounded-full pointer-events-none z-[100]"
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.1 }}
      />
    </>
  );
}

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-jewel-emerald/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-jewel-sapphire/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-jewel-emerald/5 blur-[100px] rounded-full animate-pulse [animation-delay:4s]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-jewel-emerald/40 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Scene>
        <Hero />
        <div id="about" className="scroll-mt-32">
          <About />
        </div>
        <div id="skills" className="scroll-mt-32">
          <Skills />
        </div>
        <div id="journey" className="scroll-mt-32">
          <Journey />
        </div>
        <div id="projects" className="scroll-mt-32">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-32">
          <Contact />
        </div>
      </Scene>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <main className="relative bg-[#020202] text-zinc-100 overflow-x-hidden">
      <ScrollToTop />
      <BackgroundEffects />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </main>
  );
}
