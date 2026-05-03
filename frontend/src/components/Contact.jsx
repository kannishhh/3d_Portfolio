import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { info } from "../data/info";

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const result = await fetch(
        "https://portfolio-tfs3.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: "Portfolio Contact",

            message: formData.message,
          }),
        },
      );

      const data = await Response.json();

      if (data.success) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Backend error:", error);
      setFormState("error");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-32 relative overflow-hidden py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-jewel-emerald/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center w-full relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-white/40 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-8 block font-medium">
            Contact Me
          </h2>
          <h3 className="text-5xl md:text-[8rem] font-light mb-8 md:mb-12 leading-[0.85] tracking-tighter">
            Get in <br />
            <span className="italic text-gradient-emerald">Touch</span>
          </h3>

          <div className="space-y-6 md:space-y-8">
            <a
              href={`mailto:${info.email}`}
              className="flex items-center gap-4 text-white group w-fit"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-jewel-emerald group-hover:text-black transition-all duration-500">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="font-serif italic text-xl md:text-2xl group-hover:text-jewel-emerald transition-colors">
                {info.email}
              </span>
            </a>

            <div className="flex gap-6 md:gap-8">
              <a
                href={info.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex items-center gap-2"
              >
                <span className="text-lg md:text-xl font-serif italic text-zinc-400 group-hover:text-jewel-emerald transition-colors">
                  LinkedIn
                </span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-zinc-600 group-hover:text-jewel-emerald group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href={info.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex items-center gap-2"
              >
                <span className="text-lg md:text-xl font-serif italic text-zinc-400 group-hover:text-jewel-emerald transition-colors">
                  Instagram
                </span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-zinc-600 group-hover:text-jewel-emerald group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass p-6 md:p-10 rounded-3xl relative overflow-hidden"
        >
          {formState === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 md:py-12 text-center"
            >
              <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-jewel-emerald mb-4 md:mb-6" />
              <h4 className="text-2xl md:text-3xl font-serif italic mb-2 md:mb-4">
                Message Sent
              </h4>
              <p className="text-zinc-400 font-sans font-light text-sm">
                Thank you! I'll get back to you shortly.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 md:mt-8 text-jewel-emerald font-sans text-[10px] md:text-xs uppercase tracking-widest hover:underline"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-sans">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-jewel-emerald/50 transition-colors font-sans text-xs md:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-sans">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-jewel-emerald/50 transition-colors font-sans text-xs md:text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-sans">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-jewel-emerald/50 transition-colors font-sans text-xs md:text-sm"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-sans">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-jewel-emerald/50 transition-colors font-sans text-xs md:text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                disabled={formState === "submitting"}
                className="w-full py-3 md:py-4 bg-jewel-emerald text-black rounded-xl font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formState === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-3 h-3" />
                  </>
                )}
              </button>
              {formState === "error" && (
                <p className="text-red-400 text-[8px] md:text-[10px] text-center font-sans">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] md:text-[10px] font-sans uppercase tracking-[0.3em] text-zinc-600 mt-auto">
        <span>© 2026 Kanish Kainth</span>
        <div className="flex gap-8 md:gap-12">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </footer>
    </section>
  );
}
