import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fajraan Tech" />
        <meta property="og:locale" content="en_GB" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" sizes="192x192" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fajraan Tech",
              alternateName: "Fajraan",
              url: process.env.NEXT_PUBLIC_APPFRONTURL || "https://www.fajraan.com",
              logo: `${process.env.NEXT_PUBLIC_APPFRONTURL || "https://www.fajraan.com"}/favicon.ico`,
              sameAs: [
                "https://www.linkedin.com/company/fajraantech",
                "https://www.instagram.com/fajraan_tech",
                "https://www.facebook.com/fajraantech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-54-225-9592",
                contactType: "WhatsApp",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />

        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/assets/css/menu.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
