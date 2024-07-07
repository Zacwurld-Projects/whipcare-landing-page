import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          50: "#FFECE5",
          100: "#FCD2C2",
          200: "#FA9874",
          300: "#F77A4A",
          400: "#F56630",
          500: "#FF915B",
          600: "#D35D24",
          700: "#983504",
          800: "#8F2802",
          900: "#711E00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
