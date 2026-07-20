'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { INDUSTRIES } from '@/lib/portfolio/data'

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Trusted across industries."
          subtitle="Our team ships high-value software, XR and CGI solutions across a wide range of industries worldwide."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                className="group relative aspect-square rounded-2xl glass border-glow flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/0 to-[#7C3AED]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#7C3AED]/10 transition-all duration-500" />
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px] group-hover:scale-110 transition-transform duration-500">
                  <div className="h-full w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-center">
                    <Icon className="text-[#F4D97C]" size={20} />
                  </div>
                </div>
                <div className="relative text-sm font-medium text-white/90 tracking-tight text-center px-2">
                  {ind.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
