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
        primary: "#ff6000",
        'tprimary': "#fff",
        'label-primary': "var(--color-label-primary)",
        'tlabel-primary': "var(--color-text-label-primary)",
        secondary: "var(--color-secondary)",
        'tsecondary': "var(--color-text-secondary)",
        'label-secondary': "var(--color-label-secondary)",
        'tlabel-secondary': "var(--color-text-label-secondary)",
      },
      maxWidth: {
        custom: '1235px',  // Custom max-width
        'lg-custom': '1670px', // Custom max-width for larger screens
      },

    },
  },
  plugins: [],
};
export default config;
