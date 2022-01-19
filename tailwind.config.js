const stylesoraTheme = require("./lib/theme");
const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "tw-",
  important: true,
  content: ["./sandbox/**/*.html"],
  theme: {
    extend: {
      fontFamily: stylesoraTheme.fontFamily,
      fontSize: stylesoraTheme.fontSize,
      colors: {
        drumeo: stylesoraTheme.colors.drumeo,
        pianote: stylesoraTheme.colors.pianote,
        guitareo: stylesoraTheme.colors.guitareo,
        singeo: stylesoraTheme.colors.singeo,
        recordeo: stylesoraTheme.colors.recordeo,
        "true-gray": colors.neutral,
      },
      spacing: stylesoraTheme.spacing,
      zIndex: stylesoraTheme.zIndex,
      inset: stylesoraTheme.inset,
    },
  },
  plugins: [
    require("./lib/base")(),
    require("./lib/attributes")(),
    require("./lib/utilities")(),
    require("./lib/components")(),
  ],
};
