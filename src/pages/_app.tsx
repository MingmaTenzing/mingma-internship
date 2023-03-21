import '@/styles/globals.css'
import { DM_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'

const dmsans = DM_Sans( { weight: ['400', '500', '700'] , subsets: ['latin']})
export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={dmsans.className}>
  <Component {...pageProps} />
  </main>)
}
