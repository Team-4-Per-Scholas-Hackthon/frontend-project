// src/components/VirtualTutorChat.tsx
import { useState } from "react";
import { sendQueryToGemini } from "../utilities/gemini";

function VirtualTutorChat() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(
    "Hello! I’m your virtual tutor. Ask me anything about your learning path."
  );
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      const result = await sendQueryToGemini(text);
      setResponse(result || "No response received.");
      setText("");
    } catch (error) {
      console.error(error);
      setResponse("Error: Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-pink-500/25 to-cyan-500/30">
      <div className="rounded-2xl bg-slate-900/85 backdrop-blur border border-slate-800 shadow-lg p-4 w-full">
        {/* Header */}
        <h2 className="text-center text-sm font-semibold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Virtual Tutor Chat
        </h2>

        {/* Response */}
        <div className="relative mb-3 rounded-lg bg-slate-950/70 border border-slate-800 p-3 text-xs text-slate-200 min-h-[90px]">
          {loading ? (
            <span className="animate-pulse text-cyan-300">
              Thinking…
            </span>
          ) : (
            response
          )}
        </div>

        {/* Input */}
        <div className="flex flex-col space-y-2">
          <textarea
            className="bg-slate-950/70 border border-slate-800 rounded-lg p-2 text-slate-200 text-xs placeholder-slate-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-400/30
                       transition disabled:opacity-60"
            placeholder="Type your question here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          />

          {/* Submit */}
          <button
            onClick={handleButtonClick}
            disabled={loading}
            className="rounded-lg py-1.5 px-3 text-xs font-semibold text-white
                       bg-gradient-to-r from-purple-500 to-fuchsia-500
                       hover:scale-105
                       hover:shadow-[0_0_25px_rgba(168,139,250,0.6)]
                       transition-all disabled:opacity-50"
          >
            {loading ? "Submitting…" : "Ask Tutor"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VirtualTutorChat;
