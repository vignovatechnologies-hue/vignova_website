/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ✅ Override the default max-width to be wider on big screens
    screens: {
      sm:  "640px",
      md:  "768px",
      lg:  "1024px",
      xl:  "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans:  ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          navy:  "#1B2A6B",
          blue:  "#2196F3",
          light: "#eef2ff",
          soft:  "#f8faff",
        },
      },
      // ✅ Make max-w-full stretch wider
      maxWidth: {
        "7xl": "1400px",
        "8xl": "1600px",
        full: "100%",
      },
    },
  },
  plugins: [],
};