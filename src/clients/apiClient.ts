import axios from "axios";

<<<<<<< HEAD
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
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzcyMDhkNWJjZGY0MjE2YzVkMGViMCIsInVzZXJuYW1lIjoiTW9hbmEiLCJlbWFpbCI6InRlc3QxMUB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NTU4ODkzMiwiZXhwIjoxNzY1Njc1MzMyfQ.YTGEXCeZNWU3oEI31H9GuFxz6UcvPlLleyOmkVDRNKU"
//     }
// });
=======
// export const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
// });

// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("peertrack_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5M2NmZmUzYzFjOTRmOTgxZDc4NjdiZCIsInVzZXJuYW1lIjoiU2hha2UgU2hhY2siLCJlbWFpbCI6InRlc3Q0QHRlc3QuY29tIiwicm9sZSI6ImxlYXJuZXIifSwiaWF0IjoxNzY1NjA1MzU1LCJleHAiOjE3NjU2OTE3NTV9.xkvuigbGBPW8HyfbkOMPY_50HZn9AGAQ15q3z79JfdY"
    }
});
>>>>>>> 774493a1c988c45b9c6bf8c18349538efe051e06
