const { bitsUiPreset } = require("bits-ui");

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/bits-ui/**/*.{js,svelte,ts}"
  ],
   safelist: [
    'bg-blueCustom', 
    'text-white',
    'font-semibold',
    'bg-gray-100',
    'hover:bg-green-100',
    'text-gray-700',
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: '#6e85e8',
      },
    },
  },
  presets: [bitsUiPreset()],
  plugins: [],
};