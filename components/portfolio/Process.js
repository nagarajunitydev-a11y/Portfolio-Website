'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { PROCESS } from '@/lib/portfolio/data'

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Process"
          title="How we deliver, end to end."
          subtitle="A proven eight-step delivery framework that our team uses on every engagement — from discovery to long-term support."
        />

        <div className="mt-16 relative">
          {/* connector line on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.55 }}
                  className="relative"
                >
                  <div className="hidden lg:flex absolute -top-2 left-6 h-4 w-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] ring-4 ring-[#0A0A0A]" />
                  <div className="group relative rounded-2xl glass border-glow p-6 hover:-translate-y-1 transition-transform duration-500 lg:mt-6">
                    <div className="flex items-center justify-between">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
                        <div className="h-full w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-center">
                          <Icon className="text-[#F4D97C]" size={18} />
                        </div>
                      </div>
                      <span className="text-xs tracking-[0.3em] text-[#F4D97C]/80">{p.step}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-[#A0A0A0] leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
