import { Page } from '@/userDetails/Page'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Page />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
