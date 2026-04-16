import { motion } from "motion/react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-jewel-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <h2 className="text-white/40 font-sans text-xs uppercase tracking-[0.4em] mb-12 block font-medium">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-4 md:-inset-8 bg-jewel-emerald/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <h3 className="text-zinc-500 font-sans text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-8 group-hover:text-jewel-emerald-deep transition-colors relative z-10">
                {category.title}
              </h3>
              <ul className="space-y-3 md:space-y-6 relative z-10">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center group/item">
                    <div className="w-1 h-1 bg-jewel-emerald rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-xl md:text-4xl font-serif italic text-zinc-500 group-hover/item:text-jewel-emerald transition-colors cursor-default">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
