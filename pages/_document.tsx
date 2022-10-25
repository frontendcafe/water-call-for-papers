import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
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
