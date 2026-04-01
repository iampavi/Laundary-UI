export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",     // dark navy
        secondary: "#1E293B",
        accent: "#2563EB",
        success: "#16A34A",
        warning: "#F59E0B",
        bg: "#F5F7FB",
        card: "#FFFFFF",
        border: "#E5E7EB",
      },
      boxShadow: {
        card: "0px 4px 20px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        xl2: "16px",
      },
    },
  },
  plugins: [],
};