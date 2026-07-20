'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { TECH_GROUPS } from '@/lib/portfolio/data'

export default function Technology() {
  return (
    <section id="technology" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Tools our team builds with."
          subtitle="A carefully curated stack across frontend, backend, AI, XR and cloud — chosen for scale, performance and long-term maintainability."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_GROUPS.map((g, i) => {
            const Icon = g.icon
            return (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
                className="group relative rounded-3xl glass border-glow p-6 hover:-translate-y-1.5 transition-transform duration-500"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#7C3AED]/15 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
                      <div className="h-full w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-center">
                        <Icon className="text-[#F4D97C]" size={18} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">{g.name}</h3>
                    <span className="ml-auto text-xs text-[#F4D97C]/80">0{i + 1}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/85 hover:border-[#D4AF37]/40 hover:text-white transition-colors"
                      >
                        {it}
                      </span>
                    ))}
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
