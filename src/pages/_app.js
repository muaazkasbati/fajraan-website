import "@/styles/globals.css";
import Script from "next/script";
import { Instrument_Sans } from "next/font/google";
import useReveal from "@/hooks/useReveal";

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }) {
  useReveal();

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
        }
      `}</style>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0E7Q7L7JFP"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0E7Q7L7JFP');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
