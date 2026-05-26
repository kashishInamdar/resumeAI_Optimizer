import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export const analyzeWithAI = async (
  resumeText,
  jobDescription
) => {
  try {
    const response =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "Return ONLY valid JSON. No markdown."
          },
          {
            role: "user",
            content: `
Analyze this resume vs job description.

IMPORTANT:
atsScore must be an integer between 0 and 100.

Return ONLY JSON:

{
 "atsScore": 0-100,
 "missingKeywords": [],
 "improvements": [],
 "rewrittenSummary": ""
}

Resume:
${resumeText}

Job:
${jobDescription}
`
          }
        ],
        temperature: 0.3
      });

    let content =
      response.choices[0].message.content;

    console.log("RAW AI:", content);

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(content);

    if (parsed.atsScore <= 1) {
      parsed.atsScore =
        Math.round(parsed.atsScore * 100);
    }

    return parsed;

  } catch (error) {
    console.error(
      "GROQ ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};