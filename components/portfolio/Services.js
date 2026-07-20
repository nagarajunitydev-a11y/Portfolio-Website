'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { SERVICE_CATEGORIES, CONFIGURATOR_URL } from '@/lib/portfolio/data'
import { ArrowUpRight, Rocket, Check } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(124,58,237,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="CGI & VFX Services"
          title="What I build."
          subtitle="Seven deeply-crafted service lines across automotive, XR, architecture, healthcare, film, technology and industrial — engineered for photorealism and real-time performance."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_CATEGORIES.map((s, i) => {
            const Icon = s.icon
            const isConfig = !!s.configurator
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.6 }}
                className={`group relative rounded-3xl glass border-glow p-7 md:p-8 overflow-hidden hover:-translate-y-1.5 transition-all duration-500 ${
                  isConfig ? 'ring-1 ring-[#D4AF37]/25' : ''
                }`}
              >
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#D4AF37]/25 to-[#7C3AED]/15 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                {isConfig && (
                  <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[10px] uppercase tracking-widest text-[#F4D97C]">
                    Live Demo
                  </div>
                )}

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
                      <div className="h-full w-full rounded-[14px] bg-[#0A0A0A] flex items-center justify-center">
                        <Icon className="text-[#F4D97C]" size={22} />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight flex items-start justify-between gap-2">
                        <span className="leading-snug">{s.title}</span>
                        {!isConfig && (
                          <ArrowUpRight
                            className="shrink-0 mt-1 text-[#A0A0A0] group-hover:text-[#F4D97C] group-hover:rotate-45 transition-all duration-500"
                            size={18}
                          />
                        )}
                      </h3>
                      <p className="mt-2 text-sm text-[#A0A0A0] leading-relaxed">{s.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4D97C]/80 mb-4">Services</div>
                    <ul className="grid grid-cols-1 gap-2">
                      {s.services.map((svc) => (
                        <li key={svc} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="mt-1 shrink-0 h-4 w-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1px]">
                            <span className="flex items-center justify-center h-full w-full rounded-full bg-[#0A0A0A]">
                              <Check size={9} className="text-[#F4D97C]" strokeWidth={3} />
                            </span>
                          </span>
                          <span className="leading-snug">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isConfig && (
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
