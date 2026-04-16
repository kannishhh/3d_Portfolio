import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isMenuOpen || window.innerWidth >= 768) {
        if (hidden) setHidden(false);
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, hidden]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".w-screen")?.parentElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-32 py-6 md:py-10 transition-all duration-500 border-b md:border-transparent ${hidden ? "-translate-y-full" : "translate-y-0"} ${isMenuOpen ? "bg-[#020202] border-white/5" : "bg-[#020202]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"}`}
      >
        <RouterLink
          className="text-xl md:text-2xl font-serif italic font-bold tracking-tighter cursor-pointer relative z-[60]"
          onClick={scrollToTop}
        >
          Kanish<span className="text-jewel-emerald">.</span>
        </RouterLink>

        <button
          className="md:hidden relative z-[60] text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-[10px] uppercase tracking-widest">Close</span>
          ) : (
            <span className="text-[10px] uppercase tracking-widest">Menu</span>
          )}
        </button>

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
          className="hidden md:block px-8 py-2 border border-jewel-emerald/30 rounded-full text-[10px] font-sans uppercase tracking-widest hover:bg-jewel-emerald hover:text-black transition-all relative z-[60]"
        >
          Resume
        </a>
      </nav>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-[#020202] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <button
          onClick={() => scrollTo("about")}
          className="text-2xl font-serif italic text-zinc-400 hover:text-jewel-emerald transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => scrollTo("skills")}
          className="text-2xl font-serif italic text-zinc-400 hover:text-jewel-emerald transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollTo("journey")}
          className="text-2xl font-serif italic text-zinc-400 hover:text-jewel-emerald transition-colors"
        >
          Journey
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="text-2xl font-serif italic text-zinc-400 hover:text-jewel-emerald transition-colors"
        >
          My Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="text-2xl font-serif italic text-zinc-400 hover:text-jewel-emerald transition-colors"
        >
          Contact
        </button>
        <a
          href="/Kanish Kainth_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-3 border border-jewel-emerald/30 rounded-full text-xs font-sans uppercase tracking-widest hover:bg-jewel-emerald hover:text-black hover:bg-jewel-emerald/10 text-jewel-emerald transition-all"
        >
          Resume
        </a>
      </motion.div>
    </>
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
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('/noise.svg')]" />
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
