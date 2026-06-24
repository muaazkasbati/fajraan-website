import useLenis from "@/hooks/useLenis";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  useLenis();
  return <Component {...pageProps} />;
}
