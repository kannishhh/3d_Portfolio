import { motion } from "motion/react";
import { journey } from "../data/journey";

export default function Journey() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full"
      >
        <h2 className="text-white/40 font-sans text-xs uppercase tracking-[0.4em] mb-12 block font-medium">
          My Journey
        </h2>

        <div className="space-y-0">
          {journey.map((jrn, index) => (
            <motion.div
              key={jrn.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group grid grid-cols-1 md:grid-cols-4 py-12 border-t border-white/10 hover:bg-white/[0.01] transition-colors px-4"
            >
              <div className="text-zinc-500 font-sans text-xs uppercase tracking-widest mb-4 md:mb-0">
                {jrn.year}
              </div>
              <div className="md:col-span-2">
                <h4 className="text-3xl md:text-5xl font-serif italic mb-2 group-hover:text-jewel-emerald transition-colors">
                  {jrn.role}
                </h4>
                <p className="text-zinc-400 font-sans text-sm uppercase tracking-widest mb-6 md:mb-0 group-hover:text-jewel-emerald-deep/60 transition-colors">
                  {jrn.company}
                </p>
              </div>
              <div className="text-zinc-500 font-sans font-light leading-relaxed text-sm max-w-xs">
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
