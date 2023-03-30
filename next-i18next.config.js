const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "sv",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};