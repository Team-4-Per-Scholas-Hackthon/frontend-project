import { useEffect, useState } from "react";
import { apiClient } from "../clients/apiClient";

interface Props {
  tutorId: string;
  onClose: () => void;
}

export default function BookSessionModal({ tutorId, onClose }: Props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState<30 | 45 | 60>(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      setLoading(true);
      await apiClient.post("/sessions", {
        tutorId,
        preferredDate: date,
        preferredTime: time,
        duration,
        sessionType: "video",
      });
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-lg w-full max-w-sm space-y-3">
        <h2 className="text-lg font-semibold text-sky-300">Book Session</h2>

        {error && (
          <div className="text-xs text-red-400 bg-red-950/40 p-2 rounded">
            {error}
          </div>
        )}

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1"
        />

        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1"
        />

        <select
          value={duration}
          onChange={e => setDuration(Number(e.target.value) as any)}
          className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1"
        >
          <option value={30}>30 minutes</option>
          <option value={45}>45 minutes</option>
          <option value={60}>60 minutes</option>
        </select>

        <div className="flex gap-2 pt-2">
          <button
            onClick={onClose}
            className="flex-1 border border-slate-600 rounded py-1"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={loading}
            className="flex-1 bg-emerald-500 rounded py-1"
          >
            {loading ? "Booking..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}