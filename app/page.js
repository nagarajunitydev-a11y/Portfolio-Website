'use client'
import dynamic from 'next/dynamic'
import Navbar from '@/components/portfolio/Navbar'
import ScrollProgress from '@/components/portfolio/ScrollProgress'
import Hero from '@/components/portfolio/Hero'
import About from '@/components/portfolio/About'
import Services from '@/components/portfolio/Services'
import Highlights from '@/components/portfolio/Highlights'
import Portfolio from '@/components/portfolio/Portfolio'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Testimonials from '@/components/portfolio/Testimonials'
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
      <Highlights />
      <Portfolio />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
