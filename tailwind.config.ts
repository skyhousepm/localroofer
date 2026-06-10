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
          DEFAULT: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        brand: {
          orange: "#F97316",
          "orange-hover": "#EA6C0A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
