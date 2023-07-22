import React from "react";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
