import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY3;

if (!geminiApiKey) {
  throw new Error("Gemini API key is not defined");
}

const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const sendQueryToGemini = async (userText: string) => {
  const prompt = `You are a helpful tutor. Give concise, brief answers (3-6 sentences maximum).
Response to the following text that starts after "GEMINI_QUERY =>" and only that.
GEMINI_QUERY => ${userText}`;
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 400,
      },
    });

    const text = await result.response.text();
    return text;
  } catch (err) {
    console.error("Some error occurred", err);
    return "";
  }
};