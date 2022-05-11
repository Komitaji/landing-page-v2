import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='utf-8' />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="description"
          content="Rent billboards in the metaverse with crypto. Reach over 500k metaverse travellers per month with non-intrusive web3-native marketing technology"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}