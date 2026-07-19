'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { PROFILE, STATS, TECH_STACK } from '@/lib/portfolio/data'
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
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(123,97,255,0.15),transparent_50%)]" />
      <ParticleField />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB3] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFB3]" />
          </span>
          <span className="text-xs text-[#A8A8A8] tracking-wider uppercase">
            Available for select projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="h-display text-[13vw] md:text-[8.5vw] lg:text-[7rem] xl:text-[8.5rem] font-black tracking-tighter text-white leading-[0.9]"
        >
          <span className="block">Designing the</span>
          <span className="block text-gradient">future of digital.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-[#A8A8A8] leading-relaxed"
        >
          Hi, I&apos;m <span className="text-white font-semibold">{PROFILE.fullName}</span> — a{' '}
          <span className="text-white">{PROFILE.title}</span>. {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#portfolio"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-black font-semibold overflow-hidden"
            style={{ boxShadow: '0 10px 40px rgba(0, 229, 255, 0.3)' }}
          >
            <span className="relative z-10">Explore My Work</span>
            <Sparkles size={18} className="relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#00FFB3] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href={PROFILE.resume}
            data-cursor="hover"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full glass border border-white/10 text-white font-medium hover:border-[#00E5FF]/50 transition-colors"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {STATS.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-[#A8A8A8] uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#A8A8A8] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#00E5FF] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Marquee tech stack */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-md py-4 overflow-hidden">
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
            <span key={i} className="text-sm text-[#A8A8A8] hover:text-white transition-colors flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#00E5FF]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
