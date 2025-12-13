import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("peertrack_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// export const apiClient = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
//     headers: {
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5M2NmZmUzYzFjOTRmOTgxZDc4NjdiZCIsInVzZXJuYW1lIjoiU2hha2UgU2hhY2siLCJlbWFpbCI6InRlc3Q0QHRlc3QuY29tIiwicm9sZSI6ImxlYXJuZXIifSwiaWF0IjoxNzY1NjA1MzU1LCJleHAiOjE3NjU2OTE3NTV9.xkvuigbGBPW8HyfbkOMPY_50HZn9AGAQ15q3z79JfdY"
//     }
// });
