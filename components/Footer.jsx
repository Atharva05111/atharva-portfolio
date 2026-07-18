const socials = [
  { label: "GitHub", href: "https://github.com/Atharva05111" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atharva-dhamal-50412328a/" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2">
          <span aria-hidden="true">✦</span>
          <span className="font-hand text-2xl font-700">atharva</span>
        </a>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="bg-ink text-paper px-4 py-2 hover:opacity-80 transition-opacity focus-ring"
            >
              {s.label}
            </a>
          ))}
          <a
            href="mailto:atharva.rd2915@gmail.com"
            className="bg-ink text-paper px-4 py-2 hover:opacity-80 transition-opacity focus-ring"
          >
            Email
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-ink/50 pb-8">
        Copyright. Atharva Dhamal {new Date().getFullYear()}
      </p>
    </footer>
  );
}
