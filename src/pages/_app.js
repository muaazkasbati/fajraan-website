// pages/_app.js
import "@/styles/globals.css";
import useLenis from "@/hooks/useLenis";

export default function App({ Component, pageProps }) {
  useLenis();
  return (
    <Component {...pageProps} />
  );
}