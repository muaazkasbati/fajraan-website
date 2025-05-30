import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="assets/fonts/webfonts/inter/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/webfonts/syne/stylesheet.css"
        />

        {/* <!-- Vendor CSS --> */}
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="assets/css/vendors/jos.css" />
        <link rel="stylesheet" href="assets/css/vendors/menu.css" />

        {/* <!-- Custom CSS --> */}
        <link rel="stylesheet" href="assets/css/custom.css" />
        {/* <!-- Development css --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
