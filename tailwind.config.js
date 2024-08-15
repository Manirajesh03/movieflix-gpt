/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-banner": "url('./src/assets/login-banner.jpg')",
      },
    },
  },
  plugins: [],
};
