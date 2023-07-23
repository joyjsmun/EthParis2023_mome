/** @type {import('next').NextConfig} */

require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_PUBLIC_AIRSTACK_API_KEY: process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ,
NEXT_PUBLIC_WLD_CLIENT_ID: process.env.NEXT_PUBLIC_WLD_CLIENT_ID,
NEXT_PUBLIC_WLD_CLIENT_SECRET:process.env.NEXT_PUBLIC_WLD_CLIENT_SECRET,
NEXTAUTH_URL:process.env.NEXTAUTH_URL,
NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
  }
}

module.exports = nextConfig;
