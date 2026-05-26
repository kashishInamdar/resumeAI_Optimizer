import ATSMeter from "./ATSMeter";

export default function AnalysisCard({ result }) {
  if (!result) return null;

  const missingKeywords = Array.isArray(
    result.missingKeywords
  )
    ? result.missingKeywords
    : [];

  const improvements = Array.isArray(
    result.improvements
  )
    ? result.improvements
    : [];

  return (
    <div className="mt-10 grid md:grid-cols-2 gap-6">

      {/* ATS Score */}
      <div className="bg-white/5 p-6 rounded-2xl">
        <ATSMeter score={result.atsScore || 0} />
        
      </div>

      {/* Missing Keywords */}
      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">
          Missing Keywords
        </h3>

        <div className="flex flex-wrap gap-2">
          {missingKeywords.map((k, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-red-500/20 rounded-full"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Improvements */}
      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">
          Improvements
        </h3>

        <ul className="space-y-2">
          {improvements.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-white/5 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">
          Rewritten Summary
        </h3>

        <p>
          {result.rewrittenSummary ||
            "No summary generated"} 
        </p>
      </div>
      <div className="bg-white/5 p-6 rounded-2xl">
            
      </div>

    </div>
  );
}