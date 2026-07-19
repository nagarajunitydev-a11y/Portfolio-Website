import './globals.css'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: '{FULL_NAME} — {TITLE} | Premium Portfolio',
  description: '{ABOUT_SHORT} — A premium portfolio showcasing XR, AI, Web, Mobile, Cloud & 3D projects by {FULL_NAME}.',
  keywords: ['{FULL_NAME}', 'XR Developer', 'AI Engineer', 'Full Stack', 'WebGL', 'Portfolio', '3D'],
  authors: [{ name: '{FULL_NAME}' }],
  openGraph: {
    title: '{FULL_NAME} — {TITLE}',
    description: '{ABOUT_SHORT}',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{FULL_NAME} — {TITLE}',
    description: '{ABOUT_SHORT}',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
