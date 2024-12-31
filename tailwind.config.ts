import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        graybackground: "var(--gray-background)",
        graylightbackground: "var(--gray-light-background)",
        bluebackground: "var(--third-background)",
        grayText: "var(--sec-text-color)",
        blackText: "var(--pri-text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
