import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Klaudia Fiksak — Psychotherapist & Psychologist in Tarnów, Poland. Individual therapy, couples therapy, CBT, and online sessions in Polish & English." />
        <meta name="keywords" content="psychotherapist, psychologist, CBT, therapy, Tarnów, Klaudia Fiksak, couples therapy, online therapy" />
        <meta property="og:title" content="Klaudia Fiksak · Psychotherapist & Psychologist" />
        <meta property="og:description" content="Empathetic, professional mental health care in Tarnów and online. 10+ years of experience." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
