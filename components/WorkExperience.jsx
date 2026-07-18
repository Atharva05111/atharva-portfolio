const roles = [
  {
    num: "1",
    color: "bg-note-yellow",
    role: "AI & Full Stack Engineering Intern",
    org: "Pravideon Pvt Ltd",
    desc: "Built Nirvagni F.L.A.M.E, an AI-powered fire suppression & industrial safety platform integrating PLCs, IoT and cloud AI models.",
    date: "Aug 2025 – Feb 2026",
  },
  {
    num: "2",
    color: "bg-note-blue",
    role: "Lead Organizer",
    org: "Hack2Crack 1.0 & 2.0",
    desc: "Led planning and execution of two campus-wide hackathons end to end.",
    date: "2024 – 2025",
  },
  {
    num: "3",
    color: "bg-note-pink",
    role: "Vice President",
    org: "SAAM Committee",
    desc: "Helped steer committee initiatives and represented the student body.",
    date: "2024 – 2025",
  },
];

export default function WorkExperience() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 rail">
      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        <div className="pl-8">
          <span className="tag bg-note-pink inline-block">Work Experience</span>
          <div className="text-2xl my-2 -rotate-6 inline-block">↷</div>
          <p className="text-ink/70 mt-2">
            Building, leading and shipping since my second year of college.
          </p>
        </div>

        <div className="border-t-2 border-b-2 border-ink divide-y-2 divide-ink">
          {roles.map((r) => (
            <div key={r.role} className="flex gap-5 py-6 items-start">
              <span
                className={`${r.color} border-2 border-ink w-11 h-11 flex items-center justify-center font-hand text-2xl font-700 shrink-0`}
              >
                {r.num}
              </span>
              <div>
                <p className="font-700 text-lg">
                  {r.role} at <span className="underline decoration-2">{r.org}</span>
                </p>
                <p className="text-ink/70 mt-1">{r.desc}</p>
                <p className="text-sm text-ink/50 mt-2">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
