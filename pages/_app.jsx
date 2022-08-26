import Slider from "../components/Slider";
import "../styles/globals.css";
import "../public/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Slider />
    </>
  );
}

export default MyApp;
