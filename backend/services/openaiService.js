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

Return:
{
 "atsScore": number,
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

    return JSON.parse(content);

  } catch (error) {
    console.error(
      "GROQ ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};