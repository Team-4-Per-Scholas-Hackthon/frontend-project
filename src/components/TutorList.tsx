import { useEffect, useState } from "react";
import { apiClient } from "../clients/apiClient";
import TutorCard from "./TutorCard";

interface Tutor {
  _id: string;
  username: string;
  firstname?: string;
  lastname?: string;
  email: string;
  skills?: string[];
  cohort?: string;
  bio?: string;
  availability?: Array<{
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
  }>;
}

export default function TutorList() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        setError("");
        
        console.log("Fetching tutors from /users/alumni...");
        
        const res = await apiClient.get("/users/alumni");
        console.log("Raw API response:", res.data);
        console.log("Number of tutors:", res.data.length);
        
        // Log each tutor to see structure
        res.data.forEach((tutor: any, index: number) => {
          console.log(`Tutor ${index}:`, tutor);
        });
        
        setTutors(res.data);
      } catch (err: any) {
        console.error("Failed to fetch tutors:", err);
        console.error("Error response:", err.response?.data);
        setError(err.response?.data?.message || err.message || "Failed to load tutors");
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500 mb-4" />
        <p className="text-sm text-slate-400">Loading tutors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-4 py-3">
        <p className="font-semibold mb-1">Error loading tutors:</p>
        <p>{error}</p>
        <p className="text-xs mt-2">Check the browser console for more details.</p>
      </div>
    );
  }

  if (tutors.length === 0) {
    return (
      <div className="text-center py-8 bg-slate-900/50 border border-slate-700 rounded-lg">
        <p className="text-slate-300 mb-2">No tutors available at the moment.</p>
        <p className="text-sm text-slate-400 mb-3">
          You need at least one alumni account with a profile to see tutors here.
        </p>
        <div className="text-xs text-slate-500">
          <p>To create a test tutor:</p>
          <ol className="text-left inline-block mt-2 space-y-1">
            <li>1. Logout and register as alumni</li>
            <li>2. Set up your profile with skills and availability</li>
            <li>3. Login as learner to see yourself listed</li>
          </ol>
        </div>
      </div>
    );
  }

  console.log("Rendering", tutors.length, "tutor cards");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tutors.map((tutor, index) => {
        console.log(`Rendering TutorCard ${index} for tutor:`, tutor);
        return (
          <TutorCard key={tutor._id} tutor={tutor} />
        );
      })}
    </div>
  );
}