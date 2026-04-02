export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
  bg: "#F4F6FA",
  accent: "#4CAF7D",
  dark: "#0B1B34",
  text: "#0F172A",
  muted: "#94A3B8",
},
  boxShadow: {
  card: "0 8px 30px rgba(0,0,0,0.04)",
  soft: "0 2px 10px rgba(0,0,0,0.03)",
},
      borderRadius: {
  xl: "16px",
  "2xl": "20px",
  "3xl": "28px",
},
       fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
};