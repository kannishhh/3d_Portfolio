import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#020202] text-zinc-100 px-8 md:px-32 py-20 relative overflow-hidden">
      {/* Background Effects */}
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
          <span className="font-sans text-xs uppercase tracking-widest">Back to Portfolio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 font-sans text-xs uppercase tracking-[0.3em] mb-16">
            Last updated: April 2026
          </p>

          <div className="space-y-12 font-sans text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">Introduction</h2>
              <p>This portfolio website is operated by Kanish Kainth.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">1. Information I Collect</h2>
              <p className="mb-4">When you use the contact form, I may collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message</li>
              </ul>
              <p className="mt-4 text-sm italic">This information is only used to respond to your inquiry.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">2. How Your Information is Used</h2>
              <p className="mb-4">Your information is used strictly for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to messages</li>
                <li>Communication regarding projects or opportunities</li>
              </ul>
              <p className="mt-4">I do not sell, share, or distribute your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">3. Data Storage</h2>
              <p>Messages submitted through the contact form may be stored securely for communication purposes. Reasonable steps are taken to protect your data.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">4. Third-Party Services</h2>
              <p>This website may use third-party services such as hosting platforms or analytics tools. These services may collect non-personal usage data.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">5. Your Rights</h2>
              <p>You can request deletion of your submitted data by contacting me directly via email.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-serif italic mb-4">6. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, you can contact me at:{" "}
                <a href="mailto:knshkainth2002@gmail.com" className="text-jewel-emerald hover:underline">
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
