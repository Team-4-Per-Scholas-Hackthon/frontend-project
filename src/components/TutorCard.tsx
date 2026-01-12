import { useState } from "react";
import BookSessionModal from "./BookSessionModal";

interface Tutor {
  _id: string;
  firstname: string;
  lastname: string;
  skills: string[];
  cohort?: string;
}

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/70">
      <h3 className="font-semibold text-emerald-300">
        {tutor.firstname} {tutor.lastname}
      </h3>

      <p className="text-xs text-slate-400 mt-1">
        Cohort: {tutor.cohort ?? "N/A"}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {tutor.skills.map(skill => (
          <span
            key={skill}
            className="px-2 py-1 text-xs rounded bg-sky-500/20 text-sky-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-3 w-full bg-emerald-500 hover:bg-emerald-600 text-sm py-1.5 rounded"
      >
        Book Mentor
      </button>

      {open && (
        <BookSessionModal tutorId={tutor._id} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}