import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Inter, Manrope, Figtree} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {
          `
            html {
              font-family: ${figtree.style.fontFamily}, sans-serif;
            }
          `
        }
      </style>
      <Component {...pageProps} />

    </>
    
  )
}
