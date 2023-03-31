const path = require("path");
const languages = require("./i18n.languages.js");

const i18n = {
  defaultLocale: "sv",
  locales: languages,
  localeDetection: false
}

/** @type import("next-i18next").UserConfig */
const next18nextConfig={
  i18n,
  fallbackLng: "sv",
  localePath: path.resolve("./public/locales"),
}

module.exports = next18nextConfig;

// module.exports = {
//   i18n: {
//     locales: ["sv", "en"],
//     defaultLocale: "sv",
//     localeDetection: false,
//     localePath: path.resolve("./public/locales"),
//   },
// };