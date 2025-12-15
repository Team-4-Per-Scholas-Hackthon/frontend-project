// src/components/VirtualTutorChat.tsx
import { useState } from "react";
import { sendQueryToGemini } from "../utilities/gemini";

function VirtualTutorChat() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("Hello, I am your virtual tutor.");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const result = await sendQueryToGemini(text);
      setResponse(result || "No response received");
      setText("");
    } catch (error) {
      console.error(error);
      setResponse("Error: Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl shadow-lg p-4 w-full">
      <h2 className="text-emerald-300 font-semibold text-sm mb-3 text-center">
        Virtual Tutor Chat
      </h2>

      <div className="bg-slate-900/40 border border-slate-700 rounded-lg p-3 mb-3 text-xs min-h-[80px]">
        {loading ? "Loading the response..." : response}
      </div>

      <div className="flex flex-col space-y-2">
        <textarea
          className="bg-slate-900/40 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Type your question here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={handleButtonClick}
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default VirtualTutorChat;