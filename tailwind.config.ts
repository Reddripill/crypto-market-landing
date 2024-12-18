import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         screens: {
            container: "1070px",
         },
         backgroundColor: {
            main: "#141619",
            gray: "#242526",
         },
         colors: {
            regular: "#E5E5E5",
         },
         padding: {
            container: "15px",
         },
         transitionDuration: {
            DEFAULT: "300ms",
         },
      },
   },
   plugins: [],
};
export default config;
