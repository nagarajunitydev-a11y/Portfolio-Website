'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { EXPERIENCES, CERTIFICATIONS } from '@/lib/portfolio/data'
import { Award, ExternalLink } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,255,179,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of building."
          subtitle="From studio founder to enterprise architect — a compressed timeline of key milestones."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7B61FF] ring-4 ring-black" />
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass border-glow rounded-3xl p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#00E5FF]">{e.period}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{e.role}</h3>
                    <div className="text-sm text-[#7B61FF] font-medium">{e.company}</div>
                    <p className="mt-3 text-sm text-[#A8A8A8] leading-relaxed">{e.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {e.achievements.map((a) => (
                        <li key={a} className="text-sm text-white/80 flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00FFB3]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-[#A8A8A8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#00E5FF]" />
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass border-glow rounded-2xl p-5 block"
                data-cursor="hover"
              >
                <div className="flex items-start justify-between">
                  <Award className="text-[#00FFB3]" size={22} />
                  <ExternalLink size={16} className="text-[#A8A8A8] group-hover:text-white transition-colors" />
                </div>
                <div className="mt-4 text-white font-medium text-sm">{c.name}</div>
                <div className="text-xs text-[#A8A8A8] mt-1">{c.org}</div>
                <div className="text-xs text-[#7B61FF] mt-2">{c.date}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
