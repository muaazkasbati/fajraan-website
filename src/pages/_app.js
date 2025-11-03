import useLenis from "@/hooks/useLenis";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  useLenis();
  return <Component {...pageProps} />;
}
