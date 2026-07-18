const projects = [
  {
    title: "Expansion.ai",
    desc: "AI-powered global business expansion platform",
    tag: "AI / ML",
    chip: "bg-chip-pink",
    art: "bg-note-blue",
    icon: "🌐",
  },
  {
    title: "Smart Surveillance System",
    desc: "Real-time threat detection from live CCTV feeds",
    tag: "Computer Vision",
    chip: "bg-chip-blue",
    art: "bg-ink text-paper",
    icon: "🎥",
  },
  {
    title: "Multipurpose Notice Board",
    desc: "Centralized notice management for institutions",
    tag: "Full-Stack",
    chip: "bg-chip-yellow",
    art: "bg-note-pink",
    icon: "📌",
  },
  {
    title: "Library Management System",
    desc: "Desktop app to automate issuance & inventory",
    tag: "Python",
    chip: "bg-chip-green",
    art: "bg-note-yellow",
    icon: "📚",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-16 rail">
      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        <div className="pl-8">
          <span className="tag bg-note-pink inline-block">Featured Projects</span>
          <div className="text-2xl my-2 -rotate-6 inline-block">↷</div>
          <p className="text-ink/70 mt-2">
            A few of the things I&apos;ve shipped across AI, web and automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="border-2 border-ink bg-paper shadow-hard flex flex-col overflow-hidden group"
            >
              <div className={`${p.art} h-40 flex items-center justify-center text-5xl border-b-2 border-ink`}>
                {p.icon}
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-700 text-lg leading-snug">{p.title}</h3>
                  <p className="text-sm text-ink/60 mt-1">{p.desc}</p>
                </div>
                <span className={`tag ${p.chip} border border-ink whitespace-nowrap self-start`}>
                  {p.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
