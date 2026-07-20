'use client'
import dynamic from 'next/dynamic'
import Navbar from '@/components/portfolio/Navbar'
import ScrollProgress from '@/components/portfolio/ScrollProgress'
import Hero from '@/components/portfolio/Hero'
import About from '@/components/portfolio/About'
import Services from '@/components/portfolio/Services'
import Technology from '@/components/portfolio/Technology'
import Industries from '@/components/portfolio/Industries'
import Portfolio from '@/components/portfolio/Portfolio'
import Highlights from '@/components/portfolio/Highlights'
import Process from '@/components/portfolio/Process'
import CTA from '@/components/portfolio/CTA'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'
import BackToTop from '@/components/portfolio/BackToTop'
import LoadingScreen from '@/components/portfolio/LoadingScreen'

const SmoothScroll = dynamic(() => import('@/components/portfolio/SmoothScroll'), { ssr: false })

function App() {
  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen overflow-hidden">
      <LoadingScreen />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Industries />
      <Portfolio />
      <Highlights />
      <Process />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
