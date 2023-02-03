const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
 
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },

  
  plugins: [require("@tailwindcss/forms")],
};
