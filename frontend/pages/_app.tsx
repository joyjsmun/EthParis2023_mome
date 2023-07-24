import Layout from "@/components/layouts/Layout";
import "../styles/globals.css";
import "../styles/ruler.css";
import "../styles/ruler2.css";

import "../styles/SquareTop.css";
import "../styles/SquareBottom.css";

// particle network
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/common";
import { evmWallets } from "@particle-network/connect";

import type { AppProps } from "next/app";

import { motion } from "framer-motion";

import React from "react";

import { init } from "@airstack/airstack-react";

import { SessionProvider } from "next-auth/react";

import type { Session } from "next-auth";

import * as dotenv from "dotenv";
dotenv.config();

if (process.env.NEXT_PUBLIC_AIRSTACK_API_KEY) {
  init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY);
} else {
  console.error("AIRSTACK_API_KEY is not set");
}

const variants = {
  hidden: { opacity: 0.2, x: 0, y: -80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0.2, x: -0, y: -80 },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <React.StrictMode>
      <SessionProvider session={session}>
        <ModalProvider
          options={{
            projectId: "7d894238-20cb-4c5c-b93e-11d18ff503e1",
            clientKey: "cO1aVhUJNJuKa9tFi1XMefnHnNdJqljqWcwN7kco",
            appId: "17c71e46-0326-4bd6-9587-3ad30adc5a07",
            chains: [Ethereum, EthereumGoerli],
            particleWalletEntry: {
              displayWalletEntry: true,
              defaultWalletEntryPosition: WalletEntryPosition.BR,
              supportChains: [Ethereum, EthereumGoerli],
              customStyle: {},
            },
            securityAccount: {
              promptSettingWhenSign: 1,
              promptMasterPasswordSettingWhenLogin: 1,
            },
            wallets: evmWallets({
              projectId: "aa3e2aa1304236a0b72fcc0e43ac11c6",
              showQrModal: false,
            }),
          }}
          theme="light"
          language="en"
          walletSort={["Particle Auth", "Wallet"]}
          particleAuthSort={["email", "phone", "google"]}
        >
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
        </ModalProvider>
      </SessionProvider>
    </React.StrictMode>
  );
}
