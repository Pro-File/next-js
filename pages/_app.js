import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/layout.css";
import "../styles/globals.css";
import Head from "next/head";
// Import all global CSS here for instance importing bootstrap CSS into the project

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>My First Next App</title>
        <meta name="first app" description="learning fundamentals of Next.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
