import { useState } from "react";
import { apiClient } from "../clients/apiClient";

interface Tutor {
  _id: string;
  username: string;
  firstname?: string;
  lastname?: string;
  availability?: Array<{
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
  }>;
}

interface Props {
  tutor: Tutor;
  onClose: () => void;
}

export default function BookSessionModal({ tutor, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState<30 | 45 | 60>(30);
  const [sessionType, setSessionType] = useState<"video" | "chat">("video");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Get today's date for min date attribute
  const today = new Date().toISOString().split("T")[0];

  // Safety check for tutor data
  if (!tutor || !tutor._id) {
    console.error("Invalid tutor data:", tutor);
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
          <p className="text-red-400 mb-4">Error: Invalid tutor data</p>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const tutorName = tutor.firstname || tutor.lastname
    ? `${tutor.firstname || ""} ${tutor.lastname || ""}`.trim()
    : tutor.username || "Unknown Tutor";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !topic.trim()) {
      setError("Title and topic are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Submitting session request:", {
        tutorId: tutor._id,
        title,
        topic,
        description,
        preferredDate: date || undefined,
        preferredTime: time || undefined,
        duration,
        sessionType,
      });

      await apiClient.post("/requests", {
        tutorId: tutor._id,
        title,
        topic,
        description,
        preferredDate: date || undefined,
        preferredTime: time || undefined,
        duration,
        sessionType,
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      console.error("Booking error:", err);
      setError(err.response?.data?.message || err.message || "Failed to create request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        // Close modal if clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-slate-900 border border-slate-700 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-sky-300">
                Request Session
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                with {tutorName}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200 text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {success && (
            <div className="text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-700 rounded-lg px-4 py-3">
              ✓ Request sent successfully! The tutor will be notified.
            </div>
          )}

          {error && (
            <div className="text-sm text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Session Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Help with React Hooks"
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
                disabled={loading || success}
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Topic <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., React, JavaScript, APIs"
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
                disabled={loading || success}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Description (optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what you need help with..."
                rows={3}
                className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                disabled={loading || success}
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={today}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  disabled={loading || success}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  disabled={loading || success}
                />
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Session Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 45, 60].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d as 30 | 45 | 60)}
                    disabled={loading || success}
                    className={`py-2 rounded text-sm font-medium transition-colors disabled:opacity-50 ${
                      duration === d
                        ? "bg-sky-500 text-white"
                        : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    {d} min
                  </button>
                ))}
              </div>
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Session Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["video", "chat"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSessionType(type)}
                    disabled={loading || success}
                    className={`py-2 rounded text-sm font-medium capitalize transition-colors disabled:opacity-50 ${
                      sessionType === type
                        ? "bg-sky-500 text-white"
                        : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Available slots preview */}
            {tutor.availability && Array.isArray(tutor.availability) && tutor.availability.length > 0 && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs text-slate-400 mb-2">
                  Tutor's availability:
                </p>
                <div className="space-y-1">
                  {tutor.availability.slice(0, 3).map((slot) => {
                    if (!slot || !slot.date) return null;
                    
                    try {
                      const slotDate = new Date(slot.date);
                      const formattedDate = slotDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      });
                      
                      return (
                        <div key={slot._id || Math.random()} className="text-xs text-slate-300">
                          📅 {formattedDate} • {slot.startTime || "?"} - {slot.endTime || "?"}
                        </div>
                      );
                    } catch (err) {
                      console.error("Error formatting date:", err, slot);
                      return null;
                    }
                  })}
                  {tutor.availability.length > 3 && (
                    <div className="text-xs text-slate-400 italic">
                      +{tutor.availability.length - 3} more slot{tutor.availability.length - 3 !== 1 ? "s" : ""}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-slate-600 rounded py-2 text-sm text-slate-300 hover:bg-slate-800 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || success}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded py-2 text-sm text-white font-medium disabled:opacity-50 transition-colors"
              >
                {loading ? "Sending..." : success ? "✓ Sent!" : "Send Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}