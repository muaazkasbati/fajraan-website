import { Html, Head, Main, NextScript } from "next/document";


// Marks JS as available (enables reveal animations) and, as a failsafe,
// shows all content if the app hasn't hydrated within 2.5s.
const bootScript = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady){document.querySelectorAll('[data-reveal]').forEach(function(e){e.classList.add('is-in')})}},2500);`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Fajraan Tech" />
        <link rel="author" href="/humans.txt" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#092a54" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fajraan Tech" />
        <meta property="og:locale" content="en_US" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://cms-backend.fajraan.com" crossOrigin="" />

        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body className="font-instrument-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
