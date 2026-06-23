import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />

        {/* Icons — preconnect to CDN for faster load */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />

        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Bootstrap JS — lazyOnload so it never blocks rendering */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  );
}