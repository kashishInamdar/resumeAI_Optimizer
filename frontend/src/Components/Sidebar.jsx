import {
  Upload,
  BarChart3,
  Target,
  Wand2,
  Download
} from "lucide-react";

const items = [
  { icon: <Upload size={20} />, label: "Upload Resume" },
  { icon: <BarChart3 size={20} />, label: "Analysis" },
  { icon: <Target size={20} />, label: "ATS Score" },
  { icon: <Wand2 size={20} />, label: "Rewrite" },
  { icon: <Download size={20} />, label: "Export" }
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        ResumeAI
      </h1>

      <nav className="space-y-4">
        {items.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-purple-600/20 transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}