import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#080D1B",
          50: "#e8edf5",
          100: "#c5d0e3",
          200: "#9fb0ce",
          300: "#7890b9",
          400: "#5a77aa",
          500: "#3d5d9a",
          600: "#2d4a85",
          700: "#1c3470",
          800: "#112257",
          900: "#080D1B",
        },
        /* Legacy gold — kept for rare accents; prefer teal/sky for UI */
        orange: {
          DEFAULT: "#F5B800",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#FFC700",
          500: "#F5B800",
          600: "#D9A300",
          700: "#B38600",
          800: "#8C6800",
          900: "#664D00",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        syne: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-roboto)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
