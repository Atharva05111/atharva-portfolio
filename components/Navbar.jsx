export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-8">
      <a href="#top" className="flex items-center gap-2">
        <span aria-hidden="true" className="text-xl">
          ✦
        </span>
        <span className="font-hand text-2xl font-700">atharva dhamal</span>
      </a>
      <nav className="flex items-center gap-6 text-sm font-medium">
        <a href="#projects" className="hover:opacity-60 transition-opacity focus-ring">
          Projects
        </a>
        <a
          href="#contact"
          className="underline decoration-2 underline-offset-4 decoration-note-pink hover:opacity-60 transition-opacity focus-ring"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
