// import { useState } from "react";
// import { apiClient } from "../clients/apiClient";

// export function useVirtualTutor() {
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const askTutor = async (prompt: string, context?: Record<string, unknown>) => {
//     try {
//       setError("");
//       setLoading(true);
//       setAnswer("");

//       const res = await apiClient.post("/ai/virtual-tutor", {
//         prompt,
//         context,
//       });

//       setAnswer(res.data.answer || "");
//     } catch (err: any) {
//       console.error(err);
//       setError(err.response?.data?.message || err.message || "AI error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { answer, loading, error, askTutor };
// }