/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // The <alpha-value> allows Tailwind to apply opacities like bg-cardDark/80
        bgDark: "rgb(var(--color-bg) / <alpha-value>)", 
        cardDark: "rgb(var(--color-card-dark) / <alpha-value>)",
        cardLight: "rgb(var(--color-card-light) / <alpha-value>)",
        textMain: "rgb(var(--color-text-main) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
        
        primary: "#2563EB", 
        accent: "#38BDF8", 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}