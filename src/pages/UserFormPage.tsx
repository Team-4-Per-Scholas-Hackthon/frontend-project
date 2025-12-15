import { useState } from "react";

interface AvailabilitySlot {
  date: string;
  startTime: string;
  endTime: string;
}

type UserRole = "learner" | "alumni" | "admin";

interface UserFormState {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: UserRole;
  skills: string[];
  cohort: string;
  availability: AvailabilitySlot[];
}

function UserFormPage() {
  const [formData, setFormData] = useState<UserFormState>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "learner",
    skills: [],
    cohort: "",
    availability: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (
    index: number,
    field: keyof AvailabilitySlot,
    value: string
  ) => {
    const updated = [...formData.availability];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, availability: updated }));
  };

  const addAvailability = () => {
    setFormData((prev) => ({
      ...prev,
      availability: [
        ...prev.availability,
        { date: "", startTime: "", endTime: "" },
      ],
    }));
  };

  const removeAvailability = (index: number) => {
    const updated = formData.availability.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, availability: updated }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting user:", formData);
    // TODO: POST to your backend API, e.g.:
    // await apiClient.post("/users", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-slate-800/60 border border-slate-700 rounded-lg p-6 text-slate-200"
    >
      <h2 className="text-xl font-semibold text-sky-300 mb-4">
        Create User
      </h2>

      <div>
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700"
          />
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-1">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700"
        >
          <option value="learner">Learner</option>
          <option value="alumni">Alumni</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Availability section only for alumni/admin */}
      {(formData.role === "alumni" || formData.role === "admin") && (
        <div>
          <label className="block mb-2 font-semibold text-emerald-300">
            Availability
          </label>
          {formData.availability.map((slot, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="date"
                value={slot.date}
                onChange={(e) =>
                  handleAvailabilityChange(index, "date", e.target.value)
                }
                className="px-2 py-1 rounded bg-slate-900 border border-slate-700"
              />
              <input
                type="time"
                value={slot.startTime}
                onChange={(e) =>
                  handleAvailabilityChange(index, "startTime", e.target.value)
                }
                className="px-2 py-1 rounded bg-slate-900 border border-slate-700"
              />
              <input
                type="time"
                value={slot.endTime}
                onChange={(e) =>
                  handleAvailabilityChange(index, "endTime", e.target.value)
                }
                className="px-2 py-1 rounded bg-slate-900 border border-slate-700"
              />
              <button
                type="button"
                onClick={() => removeAvailability(index)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAvailability}
            className="px-3 py-1 bg-sky-500 text-white rounded"
          >
            Add Availability
          </button>
        </div>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default UserFormPage;