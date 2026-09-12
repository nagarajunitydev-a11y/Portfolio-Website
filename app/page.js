'use client'
import dynamic from 'next/dynamic'
import Navbar from '@/components/portfolio/Navbar'
import ScrollProgress from '@/components/portfolio/ScrollProgress'
import Hero from '@/components/portfolio/Hero'
import Clients from '@/components/portfolio/Clients'
import Services from '@/components/portfolio/Services'
import Impact from '@/components/portfolio/Impact'
import Work from '@/components/portfolio/Work'
import About from '@/components/portfolio/About'
import CTA from '@/components/portfolio/CTA'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'
import BackToTop from '@/components/portfolio/BackToTop'

const SmoothScroll = dynamic(() => import('@/components/portfolio/SmoothScroll'), { ssr: false })

/**
 * Single-page enterprise narrative:
 * value proposition → credibility → what we build → measurable impact →
 * proof → who we are → convert.
 */
export default function Page() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Clients />
        <Services />
        <Impact />
        <Work />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
