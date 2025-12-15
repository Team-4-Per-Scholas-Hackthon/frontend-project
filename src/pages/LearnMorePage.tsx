function LearnMorePage() {
  return (
    <div className="space-y-8">
      <section className="bg-slate-800/70 border border-slate-700 rounded-xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-300 mb-3">
          About PeerTrack+
        </h1>
        <p className="text-slate-200 text-sm md:text-base leading-relaxed">
          Established in 2015, Peertracks began as an innovative platform for
          traditional music streaming, offering instant crypto-based reporting
          and real-time payments for artists. From the start, we were dedicated
          to revolutionizing how streaming and talent support were handled.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-emerald-300 mb-2">
            How we evolved
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Today, PeerTrack+ extends that same spirit of innovation to
            education. We connect Per Scholas learners and alumni with mentors,
            live tutoring, and AI support so that no one has to learn in
            isolation.
          </p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-violet-300 mb-2">
            Our mission
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Our mission is to make expert guidance accessible, personalized, and
            sustainable. Whether you are breaking into tech or leveling up your
            career, PeerTrack+ helps you find the right support at the right
            time.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-300">24/7</div>
          <div className="text-xs text-slate-400 mt-1">
            AI study support availability
          </div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-sky-300">Alumni</div>
          <div className="text-xs text-slate-400 mt-1">
            Mentors ready to give back
          </div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amber-300">Learners</div>
          <div className="text-xs text-slate-400 mt-1">
            Focused on skill-based outcomes
          </div>
        </div>
      </section>

      

      
    </div>
  );
}

export default LearnMorePage;