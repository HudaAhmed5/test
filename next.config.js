/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA= require('next-pwa') ({
  dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
})

const nextConfig = withPWA({
  // reactStrictMode: true,
  // pwa: {
  //   dest:"public",
  //   register: true,
  //   skipWaiting: true,
  //   disable: process.env.NODE_ENV === 'development'

  // }
})

module.exports = nextConfig
