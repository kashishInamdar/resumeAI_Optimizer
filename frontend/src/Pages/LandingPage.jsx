import { motion } from "framer-motion";
import { Sparkles, FileText, BarChart3, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "Smart Resume Analysis",
      desc: "Upload your resume and get AI-powered ATS compatibility insights instantly."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "ATS Score Optimization",
      desc: "Analyze weaknesses and improve recruiter visibility."
    },
    {
      icon: <Wand2 size={28} />,
      title: "AI Resume Rewrite",
      desc: "Generate stronger professional bullet points and summaries."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Keyword Matching",
      desc: "Compare against job descriptions for perfect alignment."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 blur-[180px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 blur-[180px] opacity-20 rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 relative z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ResumeAI
        </h1>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
        >
          Launch App
        </Link>
      </nav>

      {/* Hero */}
      <section className="text-center pt-24 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Optimize Your Resume <br />
          with <span className="text-cyan-400">AI Precision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto"
        >
          Analyze ATS compatibility, rewrite weak bullet points,
          match job descriptions, and create recruiter-ready resumes instantly.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10"
        >
          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold shadow-xl"
          >
            Analyze Resume
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 mt-28 pb-24 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <div className="text-cyan-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}