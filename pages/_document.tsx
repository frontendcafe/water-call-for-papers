import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Ola" />
        <meta name="application-name" content="Ola" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Con Ola puedes administrar tu próximo evento, gestionar la convocatoria de charlas, evaluarlas e informar los resultados. Todo en un mismo lugar."
        />
        {/* TODO: Add title on every page */}
        <title>
          Ola | Con Ola puedes administrar tu próximo evento, gestionar la
          convocatoria de charlas, evaluarlas e informar los resultados. Todo en
          un mismo lugar.
        </title>
      </Head>
      <body className="font-work_sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
