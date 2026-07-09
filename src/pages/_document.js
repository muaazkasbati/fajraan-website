import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Fajraan Tech" />
        <link rel="author" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}humans.txt`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#092a54" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fajraan Tech" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}favicon.ico`} sizes="any" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}apple-touch-icon.png`} />
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}site.webmanifest`} />

        <link
          rel="preload"
          href="/fonts/InstrumentSansFont.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <link rel="preload" href="/images/hero/hero-video-poster.webp" as="image" fetchPriority="high" />
      </Head>
      <body className="text-[20px] font-normal leading-[160%] bg-white text-black font-instrument-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}