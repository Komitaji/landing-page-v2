import type { AppProps } from 'next/app'
import '../src/styles/normalize.scss';
import '../public/fonts/inter.css';
import '../src/styles/theme.scss';
import '../src/styles/index.scss';

export default function Zesty({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}