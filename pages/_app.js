import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/layout.css";
import "../styles/globals.css";
// Import all global CSS here for instance importing bootstrap CSS into the project

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
