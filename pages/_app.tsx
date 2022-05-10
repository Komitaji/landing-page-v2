import type { AppProps } from 'next/app'
import '../src/styles/normalize.scss';
import '../public/fonts/inter.css';
import '../src/styles/theme.scss';
import '../src/styles/index.scss';
import Head from 'next/head';

export default function Zesty({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zesty</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}