import Layout from "../components/layouts/Layout";

import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Layout title="MoMe">
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}
