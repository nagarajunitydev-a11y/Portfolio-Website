'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Sparkles, Calendar } from 'lucide-react'
import { STUDIO, STATS, TECH_STACK } from '@/lib/portfolio/data'
import { useEffect, useState } from 'react'

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false })

function Counter({ to, suffix = '', duration = 2 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let start
    let raf
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      setN(Math.floor(p * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return <span>{n}{suffix}</span>
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.15),transparent_50%)]" />
      <ParticleField />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4D97C] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4D97C]" />
          </span>
          <span className="text-xs text-[#A0A0A0] tracking-[0.25em] uppercase">
            AI · WebXR · Engineering · CGI Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="h-display text-[10vw] md:text-[6.5vw] lg:text-[5.6rem] xl:text-[6.4rem] font-black tracking-tighter text-white max-w-6xl"
        >
          <span className="block">Building intelligent software,</span>
          <span className="block">immersive experiences &amp;</span>
          <span className="block text-gradient">photorealistic CGI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-[#A0A0A0] leading-relaxed"
        >
          We help startups, enterprises and global brands build
          <span className="text-white"> AI-powered applications</span>,
          <span className="text-white"> enterprise software</span>,
          <span className="text-white"> immersive WebXR experiences</span> and
          <span className="text-white"> world-class CGI content</span> that drives innovation, engagement and business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#portfolio"
            className="btn-luxury group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold overflow-hidden tracking-tight"
            style={{ boxShadow: '0 12px 50px rgba(212, 175, 55, 0.35)' }}
          >
            <span className="relative z-10">Explore Our Work</span>
            <Sparkles size={18} className="relative z-10" />
          </a>
          <a
            href="#contact"
            className="btn-luxury group inline-flex items-center gap-2 px-7 py-4 rounded-full glass border border-white/10 text-white font-medium hover:border-[#D4AF37]/60 hover:text-[#F4D97C] transition-all"
          >
            <Calendar size={18} />
            <span>Schedule a Consultation</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#A0A0A0] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-md py-4 overflow-hidden">
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
            <span key={i} className="text-sm text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
