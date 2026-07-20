'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden glass-strong border-glow rounded-[2rem] p-10 md:p-14"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#7C3AED]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#F4D97C]/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#F4D97C] font-medium">
                  Ready to Start?
                </span>
              </div>
              <h2 className="h-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let&apos;s build something <span className="text-gradient">extraordinary.</span>
              </h2>
              <p className="mt-5 text-[#A0A0A0] text-lg leading-relaxed">
                Whether you&apos;re building an AI platform, enterprise application, immersive WebXR experience or
                cinematic CGI production — our team is ready to transform your vision into reality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-luxury group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold tracking-tight glow-gold hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-luxury inline-flex items-center gap-2 px-6 py-4 rounded-full glass border border-white/10 text-white font-medium hover:border-[#D4AF37]/60 hover:text-[#F4D97C] transition-all"
              >
                <Mail size={16} />
                <span>Contact Our Team</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
