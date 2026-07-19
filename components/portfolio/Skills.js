'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { SKILL_GROUPS } from '@/lib/portfolio/data'

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Toolbox & mastery."
          subtitle="A living inventory of the technologies I use every day to ship world-class products."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (gi % 3) * 0.08, duration: 0.6 }}
              className="rounded-3xl glass border-glow p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">{group.name}</h3>
                <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-xs text-[#00E5FF]">0{gi + 1}</span>
              </div>
              <div className="space-y-4">
                {group.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-white/90">{s.name}</span>
                      <span className="text-[#A8A8A8] text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB3]"
                        style={{ boxShadow: '0 0 12px rgba(0,229,255,0.5)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
