import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#22d3ee",
            secondary: "#34d399",
            background: "#ffffff",
            content1: "#ffffff",
            content2: "#1d1d1d",
            content3: "#1d1d1d",
          },
        },
        dark: {
          colors: {
            primary: "#22d3ee",
            secondary: "#34d399",
            background: "#0d0d0d",
            content1: "#1d1d1d",
            content2: "#ffffff",
            content3: "#dddddd",
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
  ],
};
export default config;
