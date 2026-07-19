'use client'
import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/portfolio/data'
import { Github, ExternalLink, Eye } from 'lucide-react'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected works."
          subtitle="A curated selection of recent projects across XR, AI, Web, Mobile, 3D and automation."
        />

        <div className="mt-10 flex flex-wrap gap-2 justify-start">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              data-cursor="hover"
              className={`relative px-4 py-2 rounded-full text-sm transition-all ${
                filter === c
                  ? 'text-black font-semibold'
                  : 'text-[#A8A8A8] hover:text-white border border-white/10 hover:border-white/30'
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7B61FF]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group relative rounded-3xl overflow-hidden glass border-glow"
                data-cursor="hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[#00E5FF]">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-3">
                      <a
                        href={p.demo}
                        className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#00FFB3] transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={p.github}
                        className="h-11 w-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md"
                        aria-label="Source code"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={`#`}
                        className="h-11 w-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md"
                        aria-label="Case study"
                      >
                        <Eye size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#A8A8A8] mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-[#A8A8A8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
