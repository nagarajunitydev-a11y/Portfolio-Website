'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { SERVICES } from '@/lib/portfolio/data'
import { ArrowUpRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(123,97,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="What I build."
          subtitle="Twelve deeply-crafted service lines — from immersive XR to autonomous AI agents, engineered to move real business metrics."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
                className="group relative rounded-3xl glass border-glow p-7 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
                data-cursor="hover"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B61FF]/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#7B61FF] p-[1.5px]">
                    <div className="h-full w-full rounded-[14px] bg-[#0a0a0a] flex items-center justify-center">
                      <Icon className="text-[#00E5FF]" size={22} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white flex items-center justify-between">
                    {s.title}
                    <ArrowUpRight
                      className="text-[#A8A8A8] group-hover:text-[#00FFB3] group-hover:rotate-45 transition-all duration-500"
                      size={20}
                    />
                  </h3>
                  <p className="mt-2 text-sm text-[#A8A8A8] leading-relaxed">{s.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#A8A8A8]"
                      >
                        {t}
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
