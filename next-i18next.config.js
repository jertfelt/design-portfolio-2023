const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "sv"],
    defaultLocale: "default",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};