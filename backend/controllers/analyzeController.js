import { analyzeWithAI } from "../services/openaiService.js";

export const analyzeResume = async (req, res) => {
  try {
    console.log("Incoming Request:", req.body);

    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        error: "Missing resumeText or jobDescription"
      });
    }

    const result = await analyzeWithAI(
      resumeText,
      jobDescription
    );

    console.log("AI Result:", result);

    res.json(result);

  } catch (error) {
    console.error("Backend Error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
};