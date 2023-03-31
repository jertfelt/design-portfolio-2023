
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n,
// }

module.exports = config;
