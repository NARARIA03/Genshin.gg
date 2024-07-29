/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f2f2f2",
        "custom-black": "#444",
        "custom-skyblue": "#CCE4FB",
        "custom-blue": "#40A3FF",
        "custom-deepblue": "#2C73FF",
        "custom-grey": "#D9D9D9",
        "custom-pink": "#FFD6D6",
        "custom-deepyellow": "#FFF500",
        "custom-yellow": "#FFF8D6",
      },
      dropShadow: {
        "custom-black": "2px 4px 6px black",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
