/** @type {import('next').NextConfig} */
// const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  reactStrictMode: true,
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // disable: process.env.NODE_ENV === "development",
  reactStrinctMode: true,
});
module.exports = nextConfig