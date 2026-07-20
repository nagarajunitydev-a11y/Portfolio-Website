'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { TESTIMONIALS } from '@/lib/portfolio/data'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const item = TESTIMONIALS[idx]

  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeader eyebrow="Testimonials" title="Kind words from clients." align="center" />

        <div className="mt-16 relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-10">
            <Quote size={180} className="text-[#D4AF37]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-strong border-glow rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F4D97C] text-[#F4D97C]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-[#D4AF37]/40"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">{item.name}</div>
                  <div className="text-sm text-[#A8A8A8]">
                    {item.role} · <span className="text-[#7C3AED]">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}

              className="h-11 w-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/40 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? 'w-8 bg-[#D4AF37]' : 'w-1.5 bg-white/20'
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}

              className="h-11 w-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/40 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
