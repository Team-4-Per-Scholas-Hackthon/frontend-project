import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";

interface AvailabilitySlot {
  date: string;
  startTime: string;
  endTime: string;
}

interface AlumniProfile {
  bio: string;
  cohort: string;
  skills: string[];
  availability: AvailabilitySlot[];
}

function AlumniProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<AlumniProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState<AlumniProfile>({
    bio: "",
    cohort: "",
    skills: [],
    availability: [],
  });

  // Redirect if not alumni
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else if (user.role !== "alumni") {
      navigate("/");
    }
  }, [user, navigate]);

  // Load profile
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await apiClient.get("/users/me/profile");
        const data = res.data as any;

        if (data.role !== "alumni") {
          setError("Not an alumni profile");
          return;
        }

        const normalized: AlumniProfile = {
          bio: data.bio || "",
          cohort: data.cohort || "",
          skills: data.skills || [],
          availability: data.availability || [],
        };

        setProfile(normalized);
        setForm(normalized);
      } catch (err: any) {
        console.error(err);
        setError(
          err.response?.data?.message || err.message || "Failed to load profile"
        );
      } finally {
        setLoading(false);
      }
    };

    if (user) loadProfile();
  }, [user]);

  const handleFieldChange = (field: keyof AlumniProfile, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityChange = (
    index: number,
    field: keyof AvailabilitySlot,
    value: string
  ) => {
    const updated = [...form.availability];
    updated[index] = { ...updated[index], [field]: value };
    handleFieldChange("availability", updated);
  };

  const addAvailability = () => {
    handleFieldChange("availability", [
      ...form.availability,
      { date: "", startTime: "", endTime: "" },
    ]);
  };

  const removeAvailability = (index: number) => {
    const updated = form.availability.filter((_, i) => i !== index);
    handleFieldChange("availability", updated);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setSuccess(false);

      const res = await apiClient.put("/users/me/profile", {
        bio: form.bio,
        cohort: form.cohort,
        skills: form.skills,
        availability: form.availability,
      });

      const data = res.data as any;
      const normalized: AlumniProfile = {
        bio: data.bio || "",
        cohort: data.cohort || "",
        skills: data.skills || [],
        availability: data.availability || [],
      };

      setProfile(normalized);
      setForm(normalized);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "Failed to save profile"
      );
    } finally {
      setSaving(false);
    }
  };

  if (!user || user.role !== "alumni") return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Alumni Tutor Profile
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Share your skills and availability so learners can find and book you.
          </p>
        </div>
        <Link
          to="/dashboard/alumni"
          className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all border border-slate-600 hover:border-slate-500"
        >
          ← Back to Dashboard
        </Link>
      </header>

      {/* Alerts */}
      {error && (
        <div className="flex items-center gap-3 text-sm text-red-300 bg-red-950/40 border border-red-500/40 rounded-xl px-4 py-3">
          <span className="text-lg">⚠️</span>
          {error}
        </div>
      )}
      {success && (
        <div className="flex items-center gap-3 text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 rounded-xl px-4 py-3">
          <span className="text-lg">✓</span>
          Profile saved successfully!
        </div>
      )}

      {/* Main Card */}
      <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 space-y-6 hover:border-orange-500/30 transition-all">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Bio Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-lg flex items-center justify-center border border-orange-400/30 shadow-lg shadow-orange-500/20">
                  <span className="text-xl">📝</span>
                </div>
                <h2 className="text-lg font-bold text-orange-300">About You</h2>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  About Me
                </label>
                <textarea
                  value={form.bio}
                  onChange={(e) => handleFieldChange("bio", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  placeholder="Describe your background and how you like to help learners..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Cohort / Program
                </label>
                <input
                  type="text"
                  value={form.cohort}
                  onChange={(e) => handleFieldChange("cohort", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="e.g., 2021-SE-Atlanta"
                />
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-3 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-lg font-bold text-cyan-300">Skills You Teach</h2>
              </div>

              <div>
                <input
                  type="text"
                  value={form.skills.join(", ")}
                  onChange={(e) =>
                    handleFieldChange(
                      "skills",
                      e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean)
                    )
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="e.g., React, Python, Networking"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Separate skills with commas. These are used for matching you with learners.
                </p>
              </div>

              {/* Skills Preview */}
              {form.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm font-medium border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* Availability Section */}
            <section className="space-y-4 pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center border border-emerald-400/30 shadow-lg shadow-emerald-500/20">
                    <span className="text-xl">📅</span>
                  </div>
                  <h2 className="text-lg font-bold text-emerald-300">Availability</h2>
                </div>
                <button
                  type="button"
                  onClick={addAvailability}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
                >
                  + Add Time Slot
                </button>
              </div>

              {form.availability.length === 0 && (
                <p className="text-sm text-slate-400 bg-slate-900/30 rounded-xl p-4 border border-slate-700 border-dashed text-center">
                  No availability set yet. Add time slots when you're free to tutor.
                </p>
              )}

              <div className="space-y-3">
                {form.availability.map((slot, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap gap-3 items-center bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex-1 min-w-[140px]">
                      <label className="block text-xs text-slate-500 mb-1">Date</label>
                      <input
                        type="date"
                        value={slot.date}
                        onChange={(e) =>
                          handleAvailabilityChange(index, "date", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <label className="block text-xs text-slate-500 mb-1">Start Time</label>
                      <input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) =>
                          handleAvailabilityChange(index, "startTime", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <label className="block text-xs text-slate-500 mb-1">End Time</label>
                      <input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) =>
                          handleAvailabilityChange(index, "endTime", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={() => removeAvailability(index)}
                        className="px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-medium border border-red-500/30 hover:border-red-500/50 transition-all mt-5"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end pt-4 border-t border-slate-700">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {saving ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </span>
                ) : (
                  "Save Profile"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AlumniProfilePage;