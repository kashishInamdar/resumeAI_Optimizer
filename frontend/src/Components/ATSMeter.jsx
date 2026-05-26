import { motion } from "framer-motion";

export default function ATSMeter({ score = 0 }) {
  const radius = 90;
  const stroke = 12;
  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference -
    (score / 100) * circumference;

  const getLabel = () => {
    if (score <= 40) return "Poor";
    if (score <= 70) return "Moderate";
    if (score <= 90) return "Strong";
    return "Excellent";
  };

  return (
    <div className="bg-white/5 rounded-2xl p-8 flex flex-col items-center">

      <svg width="220" height="220">

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          fill="none"
        />

        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#06B6D4"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: progress
          }}
          transition={{
            duration: 2
          }}
          transform="rotate(-90 110 110)"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-cyan-400 text-4xl font-bold"
        >
          {score}
        </text>
      </svg>

      <h3 className="mt-4 text-2xl font-semibold text-cyan-400">
        {getLabel()}
      </h3>

    </div>
  );
}