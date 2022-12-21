/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#4E69FE",
        whiteColor: "#FFFFFF",
        grayColor: "#F8F8F8",
      },
      borderRadius: {
        md: "0.75rem",
        "2xl": "1.675rem",
      },
      fontSize: {
        lg: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
