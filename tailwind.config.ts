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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        muted: "#737373",
        surface: "#f2f2f2",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "wa-attention": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow:
              "0 10px 20px -6px rgb(0 0 0 / 0.35), 0 0 0 0 rgb(37 211 102 / 0.45)",
          },
          "50%": {
            transform: "scale(1.08)",
            boxShadow:
              "0 14px 28px -8px rgb(0 0 0 / 0.35), 0 0 0 16px rgb(37 211 102 / 0)",
          },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "wa-attention": "wa-attention 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
