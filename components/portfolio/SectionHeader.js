'use client'
import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-4"
      >
        <span className="h-px w-8 bg-gradient-to-r from-[#00E5FF] to-transparent" />
        <span className="text-xs tracking-[0.3em] uppercase text-[#00E5FF] font-medium">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="h-display text-4xl md:text-6xl font-bold text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-[#A8A8A8] text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
