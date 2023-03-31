const path = require("path");

module.exports = {
  i18n: {
    locales: ["sv", "en"],
    defaultLocale: "sv",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};