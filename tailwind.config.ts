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
        background: "var(--background)", // Main background color
        foreground: "var(--foreground)",
        secbackground: "var(--sec-background)", // Foreground color (text)
        graybackground: "var(--gray-background)", // Gray background
        graylightbackground: "var(--gray-light-background)", // Light gray background
        bluebackground: "var(--third-background)", // Blue background
        grayText: "var(--sec-text-color)", // Secondary text color
        blackText: "var(--pri-text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
