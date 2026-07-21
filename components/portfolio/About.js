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

        <div className="mt-20 space-y-10">
          <div className="space-y-8">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative rounded-3xl glass border-glow p-6 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-500 ease-out h-full"
              >
                <div className="text-xs text-[#F4D97C] uppercase tracking-[0.28em] mb-3">0{i + 1}</div>
                <div className="text-white font-semibold text-lg tracking-tight mb-3">{v.title}</div>
                <div className="text-sm text-[#A0A0A0] leading-6">{v.text}</div>
              </motion.div>
            ))}
          </div>

          <div>
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
    </section>
  )
}
