import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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

        {/* <script
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
        /> */}

        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
      </body>
    </Html>
  );
}
