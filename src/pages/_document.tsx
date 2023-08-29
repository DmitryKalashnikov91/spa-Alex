import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
      <Script src='/pixel.js' onReady={() => console.log('pixel loaded')} strategy="beforeInteractive"
 />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
