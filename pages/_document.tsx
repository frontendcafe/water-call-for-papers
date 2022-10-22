import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-work_sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
