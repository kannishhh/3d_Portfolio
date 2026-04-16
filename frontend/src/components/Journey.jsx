import { motion } from "motion/react";
import { journey } from "../data/journey";

export default function Journey() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-32 relative overflow-hidden py-20">
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-jewel-sapphire/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full"
      >
        <h2 className="text-white/40 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-12 md:mb-16 block font-medium">
          My Journey
        </h2>

        <div className="space-y-0">
          {journey.map((jrn, index) => (
            <motion.div
              key={jrn.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative grid grid-cols-1 md:grid-cols-4 py-8 md:py-12 border-t border-white/10 hover:bg-white/[0.01] transition-colors px-2 md:px-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-jewel-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="text-zinc-500 font-sans text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-0 relative z-10">
                {jrn.year}
              </div>
              <div className="md:col-span-2 relative z-10">
                <h4 className="text-2xl md:text-5xl font-serif italic mb-1 md:mb-2 group-hover:text-jewel-emerald transition-colors">
                  {jrn.role}
                </h4>
                <p className="text-zinc-400 font-sans text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-0 group-hover:text-jewel-emerald-deep/60 transition-colors">
                  {jrn.company}
                </p>
              </div>
              <div className="text-zinc-500 font-sans font-light leading-relaxed text-xs md:text-sm max-w-xs relative z-10">
                {jrn.desc}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </motion.div>
    </section>
  );
}
