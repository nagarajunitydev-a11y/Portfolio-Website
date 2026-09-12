import './globals.css'
import { Providers } from './providers'
import { Poppins } from 'next/font/google'
import { STUDIO, PROMISE, SITE_URL } from '@/lib/portfolio/data'

const sans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const TITLE = 'Qvrix — Intelligent Technology, Immersive Experiences, Digital Growth'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Qvrix',
  },
  description: PROMISE,
  keywords: [
    'AI agents', 'RAG applications', 'LLM development', 'SaaS development',
    'enterprise software', 'WebXR', 'AR VR MR', 'spatial computing',
    'Unity development', 'Unreal Engine', 'game development',
    'digital marketing', 'local SEO', 'CRM automation', 'Qvrix',
  ],
  authors: [{ name: 'Qvrix' }],
  creator: 'Qvrix',
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: PROMISE,
    url: SITE_URL,
    siteName: 'Qvrix',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/NewLogo.png', width: 1254, height: 1254, alt: 'Qvrix Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: PROMISE,
    images: ['/NewLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: STUDIO.name,
  description: PROMISE,
  url: SITE_URL,
  email: STUDIO.email,
  telephone: STUDIO.phone,
  areaServed: 'Worldwide',
  knowsAbout: [
    'Artificial Intelligence', 'AI Agents', 'Retrieval-Augmented Generation',
    'Software Development', 'SaaS', 'Extended Reality', 'Spatial Computing',
    'Game Development', 'Digital Marketing', 'CRM Automation',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        {/* Static, author-controlled JSON-LD. `<` is escaped so a future string
            containing "</script>" can never break out of the tag. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={sans.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
