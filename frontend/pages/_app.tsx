import Layout from "@/components/layouts/Layout";
import "../styles/globals.css";
import "../styles/ruler.css";
import "../styles/ruler2.css";

import "../styles/SquareTop.css";
import "../styles/SquareBottom.css";

import type { AppProps } from "next/app";

import { motion } from "framer-motion";

import React from "react";

import { init } from "@airstack/airstack-react";

import { SessionProvider } from "next-auth/react";

import type { Session } from "next-auth";

import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.NEXT_PUBLIC_AIRSTACK_API_KEY) {
  init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY)
} else {
  console.error('AIRSTACK_API_KEY is not set');
}

const variants = {
  hidden: { opacity: 0.2, x: 0, y: -80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0.2, x: -0, y: -80 },
};

export default function App({ Component, pageProps:{ session, ...pageProps} }: AppProps<{ session: Session }>) {
  return (
    <React.StrictMode>
      <SessionProvider session={session}>
          <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 1, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Layout title="MoMe">
            <Component {...pageProps} />
          </Layout>
      </motion.div>
          </SessionProvider>
    </React.StrictMode>
  );
}

          
          