import { useState } from "react";
import BookSessionModal from "./BookSessionModal";

interface Tutor {
  _id: string;
  username: string;
  firstname?: string;
  lastname?: string;
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

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  const [open, setOpen] = useState(false);

  // Debug log to see what we're getting
  console.log("TutorCard received tutor:", tutor);

  // Safety check
  if (!tutor || !tutor._id) {
    console.error("TutorCard: Invalid tutor data", tutor);
    return (
      <div className="border border-red-700 rounded-lg p-4 bg-red-950/20">
        <p className="text-red-400 text-sm">Error: Invalid tutor data</p>
      </div>
    );
  }

  const displayName = tutor.firstname || tutor.lastname
    ? `${tutor.firstname || ""} ${tutor.lastname || ""}`.trim()
    : tutor.username;

  const availabilityCount = tutor.availability?.length || 0;

  return (
    <>
      <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/70 hover:bg-slate-800/70 transition-colors">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-emerald-300 text-lg">
              {displayName}
            </h3>
            {tutor.cohort && (
              <p className="text-xs text-slate-400 mt-1">
                Cohort: {tutor.cohort}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/40">
              Available
            </span>
          </div>
        </div>

        {tutor.bio && (
          <p className="text-sm text-slate-300 mb-3 line-clamp-2">
            {tutor.bio}
          </p>
        )}

        {/* Skills */}
        <div className="mb-3">
          <p className="text-xs text-slate-400 mb-1">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {tutor.skills && tutor.skills.length > 0 ? (
              tutor.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs rounded bg-sky-500/20 text-sky-300 border border-sky-500/30"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500">No skills listed</span>
            )}
            {tutor.skills && tutor.skills.length > 4 && (
              <span className="text-xs text-slate-400">
                +{tutor.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Availability preview */}
        {availabilityCount > 0 && (
          <div className="mb-3">
            <p className="text-xs text-slate-400 mb-1">
              {availabilityCount} time slot{availabilityCount !== 1 ? "s" : ""} available
            </p>
          </div>
        )}

        <button
          onClick={() => {
            console.log("Opening modal with tutor:", tutor);
            setOpen(true);
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-2 rounded transition-colors font-medium"
        >
          Request Session
        </button>
      </div>

      {open && tutor && (
        <BookSessionModal 
          tutor={tutor}
          onClose={() => setOpen(false)} 
        />
      )}
    </>
  );
}