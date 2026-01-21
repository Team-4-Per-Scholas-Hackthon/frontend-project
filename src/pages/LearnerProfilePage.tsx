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

  /* ---------------- redirects ---------------- */
  useEffect(() => {
    if (!user) navigate("/auth");
    else if (user.role !== "learner") navigate("/");
  }, [user, navigate]);

  /* ---------------- load profile ---------------- */
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
        setProfile(null);
        setSelectedSkills([]);
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
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  /* ---------------- save ---------------- */
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
      setError(
        err.response?.data?.message || err.message || "Failed to save profile"
      );
    } finally {
      setSaving(false);
    }
  };

  if (!user || user.role !== "learner") return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          {profile ? "Edit Learning Profile" : "Create Your Learning Profile"}
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Select your goals and skill gaps so PeerTrack+ can match you with the
          right tutors.
        </p>
      </div>

      {/* Alerts */}
      {error && (
        <div className="text-sm text-red-300 bg-red-950/40 border border-red-700 rounded-xl px-4 py-3">
          {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-pink-300 bg-pink-950/30 border border-green-700 rounded-xl px-4 py-3 shadow-[0_0_30px_rgba(236,72,153,0.35)]">
          Profile saved successfully ✨
        </div>
      )}

      {/* Main Card */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-cyan-500/30">
        <div className="rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-800 p-6 space-y-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
            </div>
          ) : (
            <>
              {/* Skills */}
              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-cyan-300">
                  Skills & Topics You Need Help With
                </h2>
                <p className="text-xs text-slate-400">
                  Choose from the predefined course topics. This powers tutor matching and AI study plans.
                </p>
                {/* <SkillSelector ... /> */}
              </section>

              {/* Profile Details */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-cyan-300">
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
                    />
                  </div>

                  {/* Cohort */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">
                      Cohort
                    </label>
                    <input
                      value={form.cohort}
                      onChange={(e) => handleChange("cohort", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition"
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                    >
                      <option value="">Select your track...</option>
                      <option>Software Engineering</option>
                      <option>Cybersecurity</option>
                      <option>Data Engineering</option>
                      <option>Cloud DevOps</option>
                      <option>IT Support</option>
                    </select>
                  </div>

                  {/* Session Length */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">
                      Preferred Session Length
                    </label>
                    <div className="flex gap-2">
                      {[30, 45, 60].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() =>
                            handleChange("preferredSessionLength", d)
                          }
                          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                            form.preferredSessionLength === d
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                              : "bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800"
                          }`}
                        >
                          {d} min
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Session Type */}
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">
                      Preferred Session Type
                    </label>
                    <div className="flex gap-2">
                      {(["video", "chat", "both"] as SessionType[]).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() =>
                            handleChange("preferredSessionType", t)
                          }
                          className={`flex-1 py-2 rounded-lg capitalize text-sm font-medium transition-all ${
                            form.preferredSessionType === t
                              ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-[0_0_25px_rgba(168,139,250,0.45)]"
                              : "bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800"
                          }`}
                        >
                          {t === "both" ? "Either" : t}
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
                      onChange={(e) =>
                        handleChange("timezone", e.target.value)
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                      <option value="America/Phoenix">Arizona</option>
                      <option value="Pacific/Honolulu">Hawaii</option>
                    </select>
                  </div>
                </div>

                {/* Save */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all disabled:opacity-50"
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
    </div>
  );
}

export default LearnerProfilePage;