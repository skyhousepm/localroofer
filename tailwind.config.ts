import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        brand: {
          orange: "#F97316",
          "orange-hover": "#EA6C0A",
        },
        // Redesign tokens: trust blue for structure, a deeper orange for calls to action
        // (white text on #C2410C passes 4.5:1; on the old #F97316 it didn't)
        trust: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          600: "#2563EB",
          700: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        cta: {
          DEFAULT: "#C2410C",
          hover: "#9A3412",
          soft: "#FFF7ED",
        },
      },
    },
  },
  plugins: [],
};
export default config;
