import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      setTimeout(() => setSuccess(false), 2000);
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
          <h1 className="text-3xl font-semibold text-sky-300">
            Alumni Tutor Profile
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Share your skills and availability so learners can find and book you.
          </p>
        </div>
      </header>

      {/* Alerts */}
      {error && (
        <div className="text-sm text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-4 py-3">
          {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-700 rounded-lg px-4 py-3">
          Profile saved successfully!
        </div>
      )}

      {/* Card */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="h-8 w-8 border-b-2 border-sky-500 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Bio & cohort */}
            <section className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  About Me
                </label>
                <textarea
                  value={form.bio}
                  onChange={(e) => handleFieldChange("bio", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm text-slate-100"
                  placeholder="Describe your background and how you like to help learners..."
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Cohort / Program
                </label>
                <input
                  type="text"
                  value={form.cohort}
                  onChange={(e) => handleFieldChange("cohort", e.target.value)}
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm text-slate-100"
                  placeholder="e.g., 2021-SE-Atlanta"
                />
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-3">
              <label className="block text-sm text-slate-300 mb-1">
                Skills you can tutor in
              </label>
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
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm text-slate-100"
                placeholder="e.g., React, Python, Networking"
              />
              <p className="text-xs text-slate-400">
                Separate skills with commas. These are used for matching you with learners.
              </p>
            </section>

            {/* Availability */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-emerald-300">
                  Availability
                </h2>
                <button
                  type="button"
                  onClick={addAvailability}
                  className="px-3 py-1.5 rounded bg-sky-500 hover:bg-sky-600 text-xs font-medium text-white"
                >
                  Add time slot
                </button>
              </div>

              {form.availability.length === 0 && (
                <p className="text-xs text-slate-400">
                  Add a few time slots when you are available to tutor each week.
                </p>
              )}

              {form.availability.map((slot, index) => (
                <div
                  key={index}
                  className="flex flex-wrap gap-2 items-center"
                >
                  <input
                    type="date"
                    value={slot.date}
                    onChange={(e) =>
                      handleAvailabilityChange(index, "date", e.target.value)
                    }
                    className="px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-slate-100"
                  />
                  <input
                    type="time"
                    value={slot.startTime}
                    onChange={(e) =>
                      handleAvailabilityChange(index, "startTime", e.target.value)
                    }
                    className="px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-slate-100"
                  />
                  <input
                    type="time"
                    value={slot.endTime}
                    onChange={(e) =>
                      handleAvailabilityChange(index, "endTime", e.target.value)
                    }
                    className="px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-slate-100"
                  />
                  <button
                    type="button"
                    onClick={() => removeAvailability(index)}
                    className="px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-xs text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </section>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Profile"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AlumniProfilePage;