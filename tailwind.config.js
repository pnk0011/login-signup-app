/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "14px": "14px",
        "18px": "18px",
        "28px": "28px",
      },
      borderColor: {
        "custom-dark-gray": "#35373B",
      },
      borderWidth: {
        "2px": "2px",
      },
      colors: {
        primary: "#4A96FF",
        cardBg: "#27292D",
        textLogin: "#C5C7CA",
        textGray: "#6B6C70",
        placeholder: "#7F8084",
        lightWhite: "#7F8084",
        borderGrey: "#35373B",
        "custom-gray": "#C5C7CA",
        "custom-black": "#35373B",
        "custom-input-black": "#191920",
      },
      spacing: {
        "78px": "78px",
        "223px": "223px",
        "48px": "48px",
      },
      width: {
        "card-width": "463px",
      },
      height: {
        "card-height": "420px",
      },
      borderRadius: {
        custom: "8px",
        customRadius: "1.5px",
      },
    },
  },
  plugins: [],
};
