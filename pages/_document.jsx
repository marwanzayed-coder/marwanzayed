import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="I'm Marwan Zayed and I work in the field of MERN Stack, I'm
            looking forward to improving myself every day."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
