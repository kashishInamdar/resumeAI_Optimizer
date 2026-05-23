import { useState } from "react";

import Sidebar from "../components/Sidebar";
import UploadCard from "../components/UploadCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import AnalysisCard from "../components/AnalysisCard";

import { analyzeResume } from "../api/analyze";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async ()=>{
    setLoading(true);

    const data = await analyzeResume(
      "sample resume content",
      "Looking for react Node.js AWS Docker"
    );

    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume Dashboard
        </h1>

        <UploadCard />

        <JobDescriptionCard />

        <button 
          onClick={runAnalysis}
          className="mt-8 px-8 py-4 bg-purple-600 rounded-xl"
        >
          {loading? "Analyxzing..." : "Analyze Resume"}
        </button>

        <AnalysisCard result={result} />

      </main>
    </div>
  );
}