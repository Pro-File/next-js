import Head from "next/head";
import React from "react";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="About Page" description="learning about Next.js" />
      </Head>
      <div className="layout-content">
        <h1>About</h1>
        <h2>This is an H2 Tag which takes global styling</h2>
      </div>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
