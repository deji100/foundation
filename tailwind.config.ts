import type { Config } from "tailwindcss";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
import tailwindcssLineClamp from "@tailwindcss/line-clamp";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindcssForms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#154A62",
        accent: "#1D9A6C",
        muted: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      width: {
        smm: "365px",
      }
    },
  },
  plugins: [
    tailwindScrollbarHide,
    tailwindcssLineClamp,
    tailwindcssForms,
    tailwindcssTypography,
    tailwindcssAspectRatio,
  ],
};

export default config;
