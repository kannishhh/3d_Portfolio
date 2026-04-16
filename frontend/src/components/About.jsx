import { motion } from "motion/react";
import { info } from "../data/info";

export default function About() {
  return (
    <section className="md:min-h-screen flex items-center px-6 md:px-32 relative pt-4 pb-20 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[30vh] md:h-[60vh] flex items-center justify-center mt-0 md:mt-0"
        >
          <div className="w-full h-full relative flex items-center justify-center">
            <div className="absolute w-48 h-48 md:w-80 md:h-80 border border-jewel-emerald/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-40 h-40 md:w-64 md:h-64 border border-jewel-emerald/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-jewel-emerald/30 rounded-full animate-[spin_10s_linear_infinite]" />

            <div className="absolute w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-center z-20">
              <span className="text-white/60 font-serif italic text-[10px] md:text-sm leading-tight px-4">
                "Focused on performance, clarity, and real impact."
              </span>
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 bg-jewel-emerald/10 blur-3xl rounded-full animate-pulse" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-2 h-2 md:w-4 md:h-4 bg-jewel-emerald/40 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-3 h-3 md:w-6 md:h-6 bg-jewel-sapphire/40 rounded-full blur-sm"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 glass rounded-full flex items-center justify-center p-4 md:p-8 text-center z-10">
            <span className="text-white/60 font-serif italic text-[10px] md:text-sm leading-tight">
              "Building products that people actually use."
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-white/40 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-8 block font-medium">
            About Me
          </h2>
          <h3 className="text-3xl md:text-6xl font-light mb-8 md:mb-10 leading-tight overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              I create
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="italic text-gradient-emerald animate-shimmer bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-[length:200%_auto]"
            >
              AI-Powered Web Apps
            </motion.div>
          </h3>

          {info.summary.map((line, index) => (
            <p
              key={index}
              className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 font-sans font-light leading-relaxed"
            >
              {line}
            </p>
          ))}

          <div className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex justify-between items-end">
              <span className="text-zinc-500 font-sans text-xs uppercase tracking-widest">
                Projects Done
              </span>
              <span className="text-2xl font-serif italic text-jewel-emerald">
                5+
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
