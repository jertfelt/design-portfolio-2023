const path = require("path");

/** @type import("next").I18NConfig */
const i18n = {
  defaultLocale: "sv",
  locales: ["sv", "en"],
  localeDetection: false,
  fs: false,
}

/** @type import("next-i18next").UserConfig */
const next18nextConfig={
  i18n,
  localePath: path.resolve("./public/locales"),
  fs: false,
}

module.exports = next18nextConfig;

