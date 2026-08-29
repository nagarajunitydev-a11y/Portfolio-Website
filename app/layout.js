import './globals.css'
import { Providers } from './providers'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Qvrix | AI, WebXR, Software & CGI Studio',
  description: 'Qvrix builds AI-driven software, immersive WebXR experiences, and cinematic CGI for modern brands.',
  keywords: ['Qvrix', 'AI Studio', 'WebXR', 'Software Development', 'CGI', 'Portfolio'],
  authors: [{ name: 'Qvrix' }],
  icons: {
    icon: '/QvrixLogo.png',
    shortcut: '/QvrixLogo.png',
    apple: '/QvrixLogo.png',
  },
  openGraph: {
    title: 'Qvrix | AI, WebXR, Software & CGI Studio',
    description: 'Qvrix builds AI-driven software, immersive WebXR experiences, and cinematic CGI for modern brands.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qvrix | AI, WebXR, Software & CGI Studio',
    description: 'Qvrix builds AI-driven software, immersive WebXR experiences, and cinematic CGI for modern brands.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        <link rel="icon" href="/QvrixLogo.png" sizes="any" />
        <link rel="shortcut icon" href="/QvrixLogo.png" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
