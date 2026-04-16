import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#020202] text-zinc-100 px-8 md:px-32 py-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-jewel-emerald/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-jewel-sapphire/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-jewel-emerald transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans text-xs uppercase tracking-widest">
            Back to Portfolio
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">
            Terms & Conditions
          </h1>
          <p className="text-zinc-500 font-sans text-xs uppercase tracking-[0.3em] mb-16">
            Last updated: April 2026
          </p>

          <div className="space-y-12 font-sans text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                Agreement
              </h2>
              <p>
                By accessing this website, you agree to the following terms:
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                1. Use of Website
              </h2>
              <p>
                This portfolio is for informational purposes only. You may view,
                share, and explore the content for personal or professional
                reference.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                2. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including projects, design, and
                code (unless otherwise stated), is the property of Kanish
                Kainth.
              </p>
              <p className="italic">
                You may not copy, reproduce, or distribute content without
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                3. External Links
              </h2>
              <p>
                This website may include links to external platforms such as
                GitHub or live project demos. I am not responsible for the
                content or privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                4. No Guarantees
              </h2>
              <p>
                While I strive to keep the information accurate and up-to-date,
                I make no guarantees regarding completeness or accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                I am not liable for any damages resulting from the use of this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                6. Changes to Terms
              </h2>
              <p>
                These terms may be updated at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">
                7. Contact
              </h2>
              <p>
                For any questions regarding these terms, contact:{" "}
                <a
                  href="mailto:knshkainth2002@gmail.com"
                  className="text-jewel-emerald hover:underline"
                >
                  knshkainth2002@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
