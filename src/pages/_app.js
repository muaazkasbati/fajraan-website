// pages/_app.js
import "@/styles/globals.css";
import useLenis from "@/hooks/useLenis";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useLenis();
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0E7Q7L7JFP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
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