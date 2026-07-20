'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { HIGHLIGHTS } from '@/lib/portfolio/data'

export default function Highlights() {
  return (
    <section id="why" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for enterprise-grade delivery."
          subtitle="What our clients get when they partner with our team — grounded in 15+ years of collective engineering and creative production."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 5) * 0.06, duration: 0.5 }}
                className="group relative rounded-2xl glass border-glow p-5 hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#D4AF37]/25 to-[#7C3AED]/15 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-start gap-3">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
                    <div className="h-full w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-center">
                      <Icon className="text-[#F4D97C]" size={16} />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-white/90 leading-snug">
                    {h.title}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
