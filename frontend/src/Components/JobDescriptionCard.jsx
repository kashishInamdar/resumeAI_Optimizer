import { useState } from "react";
import { Search } from "lucide-react";

const skillKeywords = [
  "react",
  "node.js",
  "javascript",
  "typescript",
  "aws",
  "docker",
  "kubernetes",
  "python",
  "sql",
  "mongodb",
  "express",
  "tailwind",
  "api",
  "cloud",
  "git",
  "linux",
  "devops",
  "ci/cd"
];

export default function JobDescriptionCard() {
  const [jd, setJd] = useState("");
  const [keywords, setKeywords] = useState([]);

  const extractKeywords = () => {
    const found = skillKeywords.filter((skill) =>
      jd.toLowerCase().includes(skill.toLowerCase())
    );

    setKeywords(found);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-5">
        Job Description
      </h2>

      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        placeholder="Paste job description here..."
        className="w-full h-52 bg-slate-900 border border-white/10 rounded-xl p-5 outline-none focus:border-cyan-400"
      />

      <button
        onClick={extractKeywords}
        className="mt-5 flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500"
      >
        <Search size={18} />
        Extract Keywords
      </button>

      {keywords.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-lg font-medium">
            Extracted Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {keywords.map((keyword, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}