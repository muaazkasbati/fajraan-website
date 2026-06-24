// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import useLenis from "@/hooks/useLenis";

export default function App({ Component, pageProps }) {
  useLenis();
  return (
    <Component {...pageProps} />
  );
}