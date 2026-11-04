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
        brand: {
          sand: "#d1b7a1",
          sandLight: "#e5d7cb",
          sandDark: "#b89a82",
          terracotta: "#854839",
          blush: "#f0e0dd",
          blushLight: "#fbf6f5",
          charcoal: "#262626",
          dark: "#111111",
          border: "#ebebeb",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif", "Georgia", "serif"],
        script: ["Brittany", "Parisienne", "cursive"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
        nav: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
