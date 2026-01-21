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

  // Safety check
  if (!tutor || !tutor._id) {
    return (
      <div className="border border-red-700 rounded-lg p-4 bg-red-950/20">
        <p className="text-red-400 text-sm">Error: Invalid tutor data</p>
      </div>
    );
  }

  const displayName =
    tutor.firstname || tutor.lastname
      ? `${tutor.firstname || ""} ${tutor.lastname || ""}`.trim()
      : tutor.username;

  const availabilityCount = tutor.availability?.length || 0;

  return (
    <>
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/30 via-pink-500/20 to-orange-500/30 hover:from-cyan-400/50 hover:to-orange-400/50 transition-all">
        <div className="rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-800 p-4 hover:scale-[1.015] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                {displayName}
              </h3>
              {tutor.cohort && (
                <p className="text-xs text-slate-400 mt-1">
                  Cohort: {tutor.cohort}
                </p>
              )}
            </div>

            {/* Availability badge */}
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,139,250,0.35)]">
              Available
            </span>
          </div>

          {/* Bio */}
          {tutor.bio && (
            <p className="text-sm text-slate-300 mb-3 line-clamp-2">
              {tutor.bio}
            </p>
          )}

          {/* Skills */}
          <div className="mb-3">
            <p className="text-xs text-slate-400 mb-1">Skills</p>
            <div className="flex flex-wrap gap-1">
              {tutor.skills && tutor.skills.length > 0 ? (
                tutor.skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-500">
                  No skills listed
                </span>
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
              <p className="text-xs text-slate-400">
                {availabilityCount} time slot
                {availabilityCount !== 1 ? "s" : ""} available
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="w-full mt-2 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all"
          >
            Request Session
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <BookSessionModal tutor={tutor} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
