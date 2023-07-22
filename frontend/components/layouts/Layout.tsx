import React from "react";
import Head from "next/head";

import Footer from "./Footer";
import { Header } from "./Header";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const router = usePathname();
  const showFooter =
    router === "/detail" ||
    router === "/moments" ||
    router === "/memories" ||
    router === "/profile";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
