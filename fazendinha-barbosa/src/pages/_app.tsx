import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Acme } from '@next/font/google';

const acme = Acme({
  weight: '400',
  display: 'auto',
  variable: "--font-acme"
})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={acme.variable}>
    <Component {...pageProps} />
  </main> 
}
