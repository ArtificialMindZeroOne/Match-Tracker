/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        visibility: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        visibility: "visibility .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
