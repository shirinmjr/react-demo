/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        atlasBlue: "#1E40AF",
        atlasDarkGray: "#1F2937",
      },
      spacing: {
        // Custom spacing
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [
    // Add any plugins here
  ],
};
