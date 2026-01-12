import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";
// import { SkillSelector } from "../components/SkillSelector";

type SessionType = "video" | "chat" | "both";

interface LearnerProfile {
  selectedSkills: string[];
  bio: string;
  cohort: string;
  track: string;
  preferredSessionLength: 30 | 45 | 60;
  preferredSessionType: SessionType;
  timezone: string;
}

function LearnerProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [form, setForm] = useState<LearnerProfile>({
    selectedSkills: [],
    bio: "",
    cohort: "",
    track: "",
    preferredSessionLength: 30,
    preferredSessionType: "both",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  // Redirect if not learner
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else if (user.role !== "learner") {
      navigate("/");
    }
  }, [user, navigate]);

  // Load profile from backend
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await apiClient.get("/users/me/profile");
        const data = res.data as LearnerProfile;

        setProfile(data);
        setSelectedSkills(data.selectedSkills || []);
        setForm({
          ...data,
          preferredSessionLength: (data.preferredSessionLength || 30) as 30 | 45 | 60,
          preferredSessionType: (data.preferredSessionType || "both") as SessionType,
          timezone:
            data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
      } catch (err: any) {
        console.error(err);
        // Treat 404 / missing as "no profile yet"
        setProfile(null);
        setSelectedSkills([]);
        setForm((prev) => ({
          ...prev,
          selectedSkills: [],
        }));

        if (err.response && err.response.status !== 404) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Failed to load profile"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    if (user) loadProfile();
  }, [user]);

  const handleChange = (
    field: keyof LearnerProfile,
    value: string | number | string[]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setSuccess(false);

      const payload: LearnerProfile = {
        ...form,
        selectedSkills,
      };

      const res = await apiClient.put("/users/me/profile", payload);
      const updated = res.data as LearnerProfile;

      setProfile(updated);
      setSelectedSkills(updated.selectedSkills || []);
      setForm(updated);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "Failed to save profile"
      );
    } finally {
      setSaving(false);
    }
  };

  if (!user || user.role !== "learner") return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-emerald-300">
            {profile ? "Edit Learning Profile" : "Create Your Learning Profile"}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Select your goals and skill gaps so PeerTrack+ can match you with the
            right tutors.
          </p>
        </div>
      </div>

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

      {/* Main card */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500" />
          </div>
        ) : (
          <>
            {/* Skills/topics selection */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-sky-300">
                    Skills & Topics You Need Help With
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Choose from the predefined course topics. This powers tutor
                    matching and AI study plans.
                  </p>
                </div>
              </div>

            
            </section>

            {/* Profile details */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-sky-300">
                Profile Details & Preferences
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Bio */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">
                    About Me
                  </label>
                  <textarea
                    value={form.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    rows={3}
                    placeholder="Share your background and what you want to learn..."
                    className="w-full px-3 py-2 rounded border border-slate-700 bg-slate-950 text-slate-100 text-sm"
                  />
                </div>

                {/* Cohort */}
                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Cohort
                  </label>
                  <input
                    type="text"
                    value={form.cohort}
                    onChange={(e) => handleChange("cohort", e.target.value)}
                    placeholder="e.g., 2025-RTT-54"
                    className="w-full px-3 py-2 rounded border border-slate-700 bg-slate-950 text-slate-100 text-sm"
                  />
                </div>

                {/* Track */}
                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Track
                  </label>
                  <select
                    value={form.track}
                    onChange={(e) => handleChange("track", e.target.value)}
                    className="w-full px-3 py-2 rounded border border-slate-700 bg-slate-950 text-slate-100 text-sm"
                  >
                    <option value="">Select your track...</option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Data Engineering">Data Engineering</option>
                    <option value="Cloud DevOps">Cloud DevOps</option>
                    <option value="IT Support">IT Support</option>
                  </select>
                </div>

                {/* Preferred session length */}
                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Preferred Session Length
                  </label>
                  <div className="flex gap-2">
                    {[30, 45, 60].map((duration) => (
                      <button
                        key={duration}
                        type="button"
                        onClick={() =>
                          handleChange(
                            "preferredSessionLength",
                            duration as 30 | 45 | 60
                          )
                        }
                        className={`flex-1 py-2 rounded text-sm font-medium transition-colors ${
                          form.preferredSessionLength === duration
                            ? "bg-sky-500 text-white"
                            : "bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800"
                        }`}
                      >
                        {duration} min
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred session type */}
                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Preferred Session Type
                  </label>
                  <div className="flex gap-2">
                    {(["video", "chat", "both"] as SessionType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleChange("preferredSessionType", type)}
                        className={`flex-1 py-2 rounded text-sm font-medium capitalize transition-colors ${
                          form.preferredSessionType === type
                            ? "bg-sky-500 text-white"
                            : "bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800"
                        }`}
                      >
                        {type === "both" ? "Either" : type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timezone */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">
                    Timezone
                  </label>
                  <select
                    value={form.timezone}
                    onChange={(e) => handleChange("timezone", e.target.value)}
                    className="w-full px-3 py-2 rounded border border-slate-700 bg-slate-950 text-slate-100 text-sm"
                  >
                    <option value="America/New_York">
                      Eastern Time (ET)
                    </option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">
                      Pacific Time (PT)
                    </option>
                    <option value="America/Phoenix">Arizona Time</option>
                    <option value="Pacific/Honolulu">Hawaii Time</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium disabled:opacity-50"
                >
                  {saving
                    ? profile
                      ? "Saving..."
                      : "Creating..."
                    : profile
                    ? "Save Profile"
                    : "Create Profile"}
                </button>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default LearnerProfilePage;