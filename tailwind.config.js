/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FDFDFB",
        note: {
          yellow: "#F6C544",
          blue: "#9FD8E8",
          pink: "#F5B8DE",
        },
        chip: {
          pink: "#F7A8D6",
          blue: "#8ED2E6",
          green: "#8FE0A8",
          yellow: "#F6D34C",
        },
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        hard: "6px 6px 0px 0px rgba(17,17,17,1)",
        "hard-sm": "4px 4px 0px 0px rgba(17,17,17,1)",
        card: "0 10px 30px -12px rgba(17,17,17,0.25)",
      },
      backgroundImage: {
        dots: "radial-gradient(rgba(17,17,17,0.14) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "18px 18px",
      },
    },
  },
  plugins: [],
};
