import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function RewriteEditor({ text }) {
  const [content, setContent] = useState(text || "");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">
          AI Resume Rewriter
        </h2>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-xl"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <textarea
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        className="w-full h-72 bg-slate-900 rounded-xl p-5 outline-none border border-white/10 focus:border-cyan-400"
      />
    </div>
  );
}