import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PopCafè</title>
        <meta name="description" content="Pop Cafè"/>
        <link rel="icon" type="image/vnd.icon" href="favicon.ico" />
      </Head>
      <Header3 />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
