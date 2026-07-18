const pillars = [
  {
    bg: "bg-note-yellow",
    rotate: "-rotate-2",
    icon: "🧠",
    tag: "Python / TensorFlow",
    tagRotate: "rotate-2",
    title: "AI & Machine Learning",
  },
  {
    bg: "bg-note-blue",
    rotate: "rotate-1",
    icon: "👁️",
    tag: "React / Next.js",
    tagRotate: "-rotate-2",
    title: "Full-Stack Development",
  },
  {
    bg: "bg-note-pink",
    rotate: "-rotate-1",
    icon: "✦",
    tag: "ESP32 / Arduino",
    tagRotate: "rotate-2",
    title: "IoT & Automation",
  },
];

export default function WhatIDo() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 rail">
      <div className="pl-8">
        <span className="tag bg-note-pink inline-block">What i do?</span>
        <div className="text-2xl mt-1 mb-8 -rotate-6 inline-block">↷</div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} ${p.rotate} border-2 border-ink shadow-hard p-6 min-h-[220px] flex flex-col justify-between transition-transform hover:rotate-0`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{p.icon}</span>
                <span className={`tag bg-paper border border-ink/20 ${p.tagRotate}`}>
                  {p.tag}
                </span>
              </div>
              <h3 className="text-2xl font-700 leading-tight mt-8">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
