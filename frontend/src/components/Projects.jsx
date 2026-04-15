import { useState, useRef } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ExternalLink, Play, Pause } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectMedia({ videoUrl, imageUrl, title }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoUrl) return;
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className={`w-full h-full relative group/video overflow-hidden ${videoUrl ? "cursor-pointer" : "cursor-default"}`}
      onClick={togglePlay}
    >
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/video:scale-110"
        />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/video:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-jewel-emerald/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 opacity-0 group-hover/video:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover/video:translate-x-0 group-hover/video:translate-y-0" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 opacity-0 group-hover/video:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover/video:translate-x-0 group-hover/video:translate-y-0" />

      {videoUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover/video:opacity-100" : "opacity-100"}`}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-75 group-hover/video:scale-100 transition-transform duration-500">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen py-32 px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full"
      >
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 font-sans text-xs uppercase tracking-[0.4em] mb-2 block font-medium"
          >
            My Projects
          </motion.h2>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              <div
                className={`absolute -inset-24 bg-jewel-emerald/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none ${index % 2 === 0 ? "left-0" : "right-0"}`}
              />
              <div
                className={`md:col-span-7 ${index % 2 === 0 ? "md:order-1" : "md:order-2"} relative z-10`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm luxury-shadow border border-white/5 group-hover:border-jewel-emerald/20 transition-colors duration-700">
                  <ProjectMedia
                    videoUrl={project.video}
                    imageUrl={project.image}
                    title={project.title}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${index % 2 === 0 ? "md:order-2" : "md:order-1"} flex flex-col justify-center relative z-10`}
              >
                <span className="text-zinc-500 font-sans text-[10px] uppercase tracking-[0.3em] mb-4">
                  {project.category} — {project.year}
                </span>
                <h4 className="text-4xl md:text-6xl font-serif italic mb-8 group-hover:text-jewel-emerald transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-8 max-w-md">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[10px] font-sans uppercase tracking-widest text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-jewel-emerald transition-colors group/link"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-widest font-sans">
                      Github
                    </span>
                  </a>
                  {project.live?.length > 0 ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-jewel-emerald transition-colors group/link"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-[10px] uppercase tracking-widest font-sans">
                        Live Demo
                      </span>
                    </a>
                  ) : (
                    <span className="text-[10px] uppercase tracking-widest font-sans text-zinc-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
