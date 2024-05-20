/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'SectionSpace': '100px',
        'ElementSpace': '25px',
        'NormalSpace': '8px',
        '2xElementSpace':"50px",
        "courseVideoWidth":"calc(100% - 260px)"
      },
      colors: {
        "text-color": "#0D0D0D",
        "background": "#0D0D0D",
        "foreground":"white",
        "paragraphColor":"#424242",
        "secondaryColor":"#F262FF",
        "selectedChapter":"#262626",
        "chpCompletion":"#0d2600",
        "borderGreen":"#146e2f"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
