'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { SERVICES } from '@/lib/portfolio/data'
import { ArrowUpRight, Rocket } from 'lucide-react'

const CONFIGURATOR_URL = 'https://showroom-configurator.vercel.app/'

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(124,58,237,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="What I build."
          subtitle="Twelve deeply-crafted service lines — from immersive XR to autonomous AI agents, engineered to move real business metrics."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            const is3D = s.title === '3D Configurator'
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
                className={`group relative rounded-3xl glass border-glow p-7 overflow-hidden hover:-translate-y-1.5 transition-all duration-500 ${
                  is3D ? 'ring-1 ring-[#D4AF37]/25' : ''
                }`}
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#D4AF37]/25 to-[#7C3AED]/15 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                {is3D && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[10px] uppercase tracking-widest text-[#F4D97C]">
                    Live Demo
                  </div>
                )}

                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
                    <div className="h-full w-full rounded-[14px] bg-[#0A0A0A] flex items-center justify-center">
                      <Icon className="text-[#F4D97C]" size={22} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white flex items-center justify-between tracking-tight">
                    {s.title}
                    {!is3D && (
                      <ArrowUpRight
                        className="text-[#A0A0A0] group-hover:text-[#F4D97C] group-hover:rotate-45 transition-all duration-500"
                        size={20}
                      />
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-[#A0A0A0] leading-relaxed">{s.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#A0A0A0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {is3D && (
                    <a
                      href={CONFIGURATOR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Launch 3D Configurator (opens in new tab)"
                      className="btn-luxury mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold text-sm tracking-tight glow-gold hover:shadow-[0_18px_60px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 will-change-transform"
                    >
                      <Rocket size={16} className="transition-transform duration-500 group-hover:rotate-12" />
                      <span className="relative z-10">Launch 3D Configurator</span>
                      <ArrowUpRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
