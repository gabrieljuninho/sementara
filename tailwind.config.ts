import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 1s linear infinite"
      },
      boxShadow: {
        dialog:
          "0 0 0 1px rgba(15, 15, 15, 0.05), 0 3px 6px rgba(15, 15, 15, 0.1), 0 9px 24px rgba(15, 15, 15, 0.2)",
        divider: "0 1px 0 rgba(55, 53, 47, 0.09)",
        modifier:
          "0 0 0 1px rgba(15, 15, 15, 0.05), 0 3px 6px rgba(15, 15, 15, 0.1), 0 3px 6px rgba(15, 15, 15, 0.2)",
        modal:
          "0 0 0 1px rgba(15, 15, 15, 0.05), 0 5px 10px rgba(15, 15, 15, 0.1), 0 15px 40px rgba(15, 15, 15, 0.2)",
        sidebar: "-1px 0 0 0 inset rgba(0, 0, 0, 0.024)",
        "footer-divider": "0 -1px 0 rgba(55, 53, 47, 0.09)",
        "search-dropdown":
          "0 0 0 1px inset rgba(35, 131, 226, 0.57), 0 0 0 2px rgba(35, 131, 226, 0.35)",
        "sidebar-hover": "-2px 0 0 0 inset rgba(0, 0, 0, 0.1)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans]
      },
      gridTemplateColumns: {
        main: "[ full-start ] minmax(96px, 1fr) [ content-start ] minmax(auto, 708px) [ content-end ] minmax(96px, 1fr) [ full-end ]"
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg) translateZ(0)"
          },
          "100%": {
            transform: "rotate(1turn) translateZ(0)"
          }
        }
      },
      spacing: {
        modal: "max(50vh, 0)"
      }
    }
  },
  plugins: []
};

export default config;
