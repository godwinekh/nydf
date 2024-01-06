import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-yellow": "#fdb61c",
        "orange-yellow-light": "#FCF3F3",
        "azure-light": "#90C5E269",
        azure: "#11a2f0",
        navy: "#041840",
      },
    },
  },
  plugins: [],
};
export default config;
