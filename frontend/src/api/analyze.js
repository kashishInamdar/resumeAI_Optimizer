import axios from "axios"

const API = "http://localhost:5000/api/analyze"

export const analyzeResume = async( resumeText , jobDescription)=>{
    const response = await axios.post(API , {
        resumeText,
        jobDescription
    });
    return response.data;
};