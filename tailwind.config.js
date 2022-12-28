/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slightyBlack: "#303030",
        blueColor: "#4E69FE",
        whiteColor: "#FFFFFF",
        grayColor: "#F8F8F8",
      },
      borderRadius: {
        md: "0.75rem",
        "2xl": "1.675rem",
      },
      fontFamily: {
        Impact: "Impact",
        HelveticaNeue: "Helvetica Neue",
      },
      fontSize: {
        lg: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
          },
        ],
        "4xl": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "5xl": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
