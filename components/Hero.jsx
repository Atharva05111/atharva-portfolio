export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-6 pb-16">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-16 h-16 rounded-full bg-note-yellow border-2 border-ink flex items-center justify-center text-2xl">
          🧑‍💻
        </div>
        <span aria-hidden="true" className="text-2xl -rotate-12">
          ↩
        </span>
        <span className="bg-note-pink px-3 py-1 font-hand text-2xl font-700 -rotate-2 inline-block">
          atharva
        </span>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <h1 className="text-5xl md:text-6xl font-700 leading-[1.05] tracking-tight">
          I build{" "}
          <span className="bg-note-yellow px-2 whitespace-nowrap">intelligent</span>{" "}
          full-stack products
        </h1>

        <div className="pt-2">
          <p className="text-lg text-ink/70 mb-6">
            AI &amp; Full-Stack Engineer turning ideas into real products —
            machine learning, web apps and automation, shipped end to end.
          </p>
          <a
            href="/Atharva_Dhamal_Resume.pdf"
            download="Atharva_Dhamal_Resume.pdf"
            className="inline-block bg-ink text-paper font-medium px-6 py-3 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all focus-ring"
          >
            Hire me
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <span className="bg-note-yellow px-3 py-1 border border-ink/10">
          🎓 B.E. CSE (AI &amp; ML), Class of 2026
        </span>
        <span className="bg-note-blue px-3 py-1 border border-ink/10">
          🥋 National Kung Fu Gold Medalist
        </span>
        <span className="bg-note-pink px-3 py-1 border border-ink/10">
          📍 Navi Mumbai, India
        </span>
      </div>
    </section>
  );
}
