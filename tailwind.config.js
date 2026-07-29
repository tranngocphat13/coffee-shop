/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Đăng ký font-heading (Montserrat) và font-script (Alex Brush) vào Tailwind
        heading: ["var(--font-heading-main)", "Montserrat", "sans-serif"],
        script: ["var(--font-heading-script)", "Alex Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
