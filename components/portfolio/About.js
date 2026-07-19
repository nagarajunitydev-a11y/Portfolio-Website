'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { PROFILE, VALUES } from '@/lib/portfolio/data'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Building at the edge of art & engineering."
          subtitle="I partner with ambitious teams and founders to build immersive, performant, and beautifully-crafted digital products that move markets."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong border-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-[#7C3AED]/10 to-[#F4D97C]/20" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="text-xs text-[#A8A8A8] uppercase tracking-widest mb-2">Profile</div>
                  <div className="text-2xl font-bold text-white">{PROFILE.fullName}</div>
                  <div className="text-sm text-[#D4AF37]">{PROFILE.title}</div>
                  <div className="text-xs text-[#A8A8A8] mt-2">{PROFILE.location}</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] opacity-70 blur-xl animate-pulse-slow" />
              <div className="absolute top-1/2 left-4 h-24 w-24 rounded-full bg-[#F4D97C]/40 blur-2xl animate-float" />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              I&apos;m a multi-disciplinary technologist with 9+ years of experience shipping products across{' '}
              <span className="text-[#D4AF37]">XR</span>, <span className="text-[#7C3AED]">AI</span>, and the modern web.
              My work spans Fortune 500 clients, funded startups, and personal experiments — always with an obsession
              for craft.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-[#A8A8A8] leading-relaxed"
            >
              {'{ABOUT} — My mission is to build technology that feels human. My vision is a web that is fast, expressive, and inclusive. My philosophy: ship with taste, measure with data, iterate relentlessly.'}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative rounded-2xl glass border-glow p-5 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-2">0{i + 1}</div>
                  <div className="text-white font-semibold text-lg">{v.title}</div>
                  <div className="text-sm text-[#A8A8A8] mt-1">{v.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
