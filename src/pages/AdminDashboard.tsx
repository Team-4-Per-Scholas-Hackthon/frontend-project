function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-amber-300">
        Admin Control Panel
      </h1>

      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-sky-300 mb-2">
          Users & Roles
        </h2>
        <p className="text-sm text-slate-200 mb-3">
          View alumni and learners, remove accounts, and reassign roles.
        </p>
        <div className="text-xs text-slate-500 italic">
          A table of users with actions (promote to tutor, deactivate, etc.)
          will be rendered here after API wiring.
        </div>
      </section>

      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-violet-300 mb-2">
          AI Insights Dashboard
        </h2>
        <p className="text-sm text-slate-200">
          This panel will show AI‑generated trends like “most requested skills”,
          “sessions per cohort”, and “at‑risk learners”.
        </p>
      </section>
    </div>
  );
}

export default AdminDashboard;