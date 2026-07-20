'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { STUDIO, VALUES, EXPERTISE } from '@/lib/portfolio/data'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Us"
          title="We build digital experiences that inspire."
          subtitle="A multidisciplinary team of software engineers, AI specialists, XR developers, technical architects, CGI artists, VFX professionals and creative designers — united by a passion for building next-generation digital experiences."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong border-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/25 via-[#7C3AED]/15 to-[#F4D97C]/20" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="text-xs text-[#A0A0A0] uppercase tracking-[0.3em] mb-2">Studio</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{STUDIO.name}</div>
                  <div className="text-sm text-[#F4D97C]">{STUDIO.tagline}</div>
                  <div className="text-xs text-[#A0A0A0] mt-2">{STUDIO.location}</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] opacity-70 blur-xl animate-pulse-slow" />
              <div className="absolute top-1/2 left-4 h-24 w-24 rounded-full bg-[#F4D97C]/40 blur-2xl animate-float" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Our team combines expertise in
              <span className="text-[#F4D97C]"> software engineering</span>,
              <span className="text-[#F4D97C]"> AI</span>,
              <span className="text-[#F4D97C]"> WebXR</span>,
              <span className="text-[#F4D97C]"> AR/VR</span>,
              <span className="text-[#F4D97C]"> cloud technologies</span>,
              <span className="text-[#F4D97C]"> real-time 3D graphics</span> and
              <span className="text-[#F4D97C]"> cinematic visualization</span> —
              delivering scalable, high-performance solutions for startups, SMEs and enterprise organizations worldwide.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-[#A0A0A0] leading-relaxed"
            >
              From product strategy to deployment, we collaborate closely with our clients to transform ideas into innovative digital products that create measurable business value.
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
                  <div className="text-xs text-[#F4D97C] uppercase tracking-widest mb-2">0{i + 1}</div>
                  <div className="text-white font-semibold text-lg tracking-tight">{v.title}</div>
                  <div className="text-sm text-[#A0A0A0] mt-1">{v.text}</div>
                </motion.div>
              ))}
            </div>

            {/* Expertise chips */}
            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#F4D97C]/80 mb-3">Our Expertise</div>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map((e) => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/85 hover:border-[#D4AF37]/40 hover:text-white transition-colors"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
