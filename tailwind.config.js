/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["JetBrains Mono"],
      },
    },
    colors: {
      dawn: "#151515",
      dawner: "#202022",
      white: "#fff",
      gray: "#878788",
    },
  },
  plugins: [],
};

