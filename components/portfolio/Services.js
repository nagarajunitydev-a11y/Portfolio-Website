'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Rocket } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { SERVICE_CATEGORIES, CONFIGURATOR_URL } from '@/lib/portfolio/data'

function ServiceCard({ service, index, isActive, onToggle }) {
  const Icon = service.icon
  const isConfig = Boolean(service.configurator)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,20,20,0.95),rgba(12,12,12,0.88))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/30 hover:shadow-[0_30px_100px_rgba(212,175,55,0.12)]"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_45%)] opacity-90" />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1.5px]">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0A0A0A] text-[#F4D97C]">
              <Icon size={22} />
            </div>
          </div>
          {isConfig && (
            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-[#F4D97C]">
              Live Demo
            </span>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{service.description}</p>
        </div>

        <div className="mt-8 flex-1">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isActive}
            aria-controls={`service-panel-${index}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition hover:border-[#D4AF37]/35 hover:bg-white/[0.08]"
          >
            <span>{isActive ? 'Hide details' : 'Learn More'}</span>
            {isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                id={`service-panel-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="mt-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#F4D97C]">Capabilities</div>
                <ul className="grid gap-2.5">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#D9D9D9]">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED] p-[1px]">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0A0A0A]">
                          <Check size={8} className="text-[#F4D97C]" strokeWidth={3} />
                        </span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.28em] text-[#A0A0A0]">Focused execution</span>
          <ArrowUpRight className="text-[#A0A0A0] transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F4D97C]" size={18} />
        </div>

        {isConfig && (
          <a
            href={CONFIGURATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Launch 3D configurator (opens in new tab)"
            className="btn-luxury mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] px-4 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:-translate-y-0.5"
          >
            <Rocket size={16} />
            <span>Launch demo</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Services() {
  const [activeCard, setActiveCard] = useState(null)

  const handleToggle = (index) => {
    setActiveCard((current) => (current === index ? null : index))
  }

  return (
    <section id="services" className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Enterprise Services"
          title="Services engineered for growth, transformation, and measurable impact."
          subtitle="From AI strategy to immersive digital experiences, we help ambitious teams modernize operations, accelerate product delivery, and create memorable customer experiences."
        />

        <div className="mt-12 flex flex-wrap gap-3 text-sm text-[#A0A0A0]">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">AI-led delivery</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Enterprise-grade engineering</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">Immersive product experiences</span>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {SERVICE_CATEGORIES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isActive={activeCard === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,20,20,0.95),rgba(12,12,12,0.88))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-10"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">Our delivery approach</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">A disciplined path from strategy to launch</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#A0A0A0]">
              Every engagement follows a clear, collaborative process designed to reduce risk and accelerate outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {[
              { title: 'Discovery & Consulting', detail: 'Clarify goals and business value' },
              { title: 'Strategy & Planning', detail: 'Align roadmap and technical direction' },
              { title: 'Design & Engineering', detail: 'Build experiences with precision' },
              { title: 'Agile Development', detail: 'Ship in iteration with visibility' },
              { title: 'Testing & Quality Assurance', detail: 'Validate performance and reliability' },
              { title: 'Deployment & Support', detail: 'Launch smoothly and scale confidently' },
            ].map((step, index) => (
              <div key={step.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#F4D97C]">0{index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#7C3AED]" />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#A0A0A0]">{step.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
