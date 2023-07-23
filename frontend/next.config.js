/** @type {import('next').NextConfig} */

require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  env:{
    AIRSTACK_API_KEY: process.env.AIRSTACK_API_KEY
  }
}

module.exports = nextConfig;
