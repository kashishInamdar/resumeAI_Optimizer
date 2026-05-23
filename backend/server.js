import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/analyze", analyzeRoutes);

const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
  console.log(`Server running on the Port ${PORT}`);
  
});