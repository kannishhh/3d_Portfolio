import { motion } from "motion/react";
import { info } from "../data/info";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-8 md:px-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl z-10 mx-auto text-center flex flex-col items-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-jewel-emerald/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] border border-jewel-emerald/5 rounded-full pointer-events-none" />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-jewel-emerald/60 font-sans text-md uppercase tracking-[0.4em] mt-12 block font-medium text-center"
        >
          Hello, I'm
        </motion.span>

        <h1 className="text-6xl md:text-[7rem] font-light mb-6 leading-[0.9] tracking-tight overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {info.firstName}
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-emerald italic font-medium animate-shimmer bg-gradient-to-r from-jewel-emerald via-white to-jewel-emerald bg-[length:200%_auto]"
          >
            {info.lastName}
          </motion.div>
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-4 leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            AI-Powered Web Apps
          </motion.div>
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 font-sans font-light leading-relaxed text-center">
          Frontend-focused developer specializing in React.js and AI-powered
          applications. I build fast, scalable, and visually engaging web
          experiences.
        </p>

        <div className="flex items-center justify-center gap-12">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative py-2 overflow-hidden"
          >
            <span className="text-white font-sans text-sm uppercase tracking-widest font-semibold group-hover:text-jewel-emerald transition-colors">
              View Projects &rarr;
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-jewel-emerald transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative py-2 overflow-hidden"
          >
            <span className="text-zinc-500 font-sans text-sm uppercase tracking-widest font-light group-hover:text-jewel-emerald-deep transition-colors">
              Contact Me &rarr;
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-jewel-emerald-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.01] select-none pointer-events-none italic">
        Portfolio
      </div>
    </section>
  );
}
