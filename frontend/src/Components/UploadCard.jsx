import { useState } from "react";
import { UploadCloud, FileText, AlertCircle } from "lucide-react";

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const validateFile = (selectedFile) => {
    if (!selectedFile) return;

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowed.includes(selectedFile.type)) {
      setError("Only PDF or DOCX files allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Max file size is 5MB.");
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    validateFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    validateFile(e.target.files[0]);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center hover:border-cyan-400 transition"
    >
      {!file ? (
        <>
          <UploadCloud
            size={60}
            className="mx-auto text-cyan-400 mb-5"
          />

          <h2 className="text-2xl font-semibold mb-3">
            Upload Resume
          </h2>

          <p className="text-slate-400 mb-6">
            Drag & Drop PDF / DOCX
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="hidden"
            id="resumeUpload"
          />

          <label
            htmlFor="resumeUpload"
            className="cursor-pointer px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500"
          >
            Select File
          </label>
        </>
      ) : (
        <div>
          <FileText
            size={50}
            className="mx-auto text-green-400 mb-4"
          />

          <h3 className="text-xl font-semibold">
            {file.name}
          </h3>

          <p className="text-slate-400 mt-2">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <button
            onClick={() => setFile(null)}
            className="mt-6 px-5 py-2 bg-red-500 rounded-xl"
          >
            Remove
          </button>
        </div>
      )}

      {error && (
        <div className="mt-5 flex justify-center items-center gap-2 text-red-400">
          <AlertCircle size={18} />
          {error}
        </div>
      )}
    </div>
  );
}