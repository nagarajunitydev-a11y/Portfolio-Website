'use client'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import Media from './Media'
import { WORK } from '@/lib/portfolio/data'
import { WORK_FALLBACK_MEDIA } from '@/lib/portfolio/media'

function CaseDetail({ label, children }) {
  return (
    <div>
      <dt className="t-eyebrow text-[hsl(var(--ink-3))]">{label}</dt>
      <dd className="t-body mt-2">{children}</dd>
    </div>
  )
}

function Project({ project, index }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const flip = index % 2 === 1
  const panelId = `case-${project.id}`

  // Local project photography wins; Unsplash only fills genuine gaps.
  const media = project.image
    ? { src: project.image, w: 1400, h: 1050, alt: `${project.name} — ${project.category}` }
    : WORK_FALLBACK_MEDIA[project.id]

  return (
    <Reveal className="hairline pt-12 first:border-t-0 first:pt-0 md:pt-16">
      <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className={`group relative ${flip ? 'md:order-2' : ''}`}>
          <Media
            media={media}
            zoom
            viewport
            wire
            tag={String(index + 1).padStart(2, '0')}
            ratio="4 / 3"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl border border-[hsl(var(--line)/0.09)]"
          />
          {/* Outcome badge. Solid rather than translucent: over the darker
              project photographs the glass treatment dropped this to 2.5:1. */}
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--line)/0.1)] bg-[hsl(var(--bg))] py-2 pl-2.5 pr-4 shadow-[0_4px_16px_rgba(10,20,40,0.14)]">
            <CheckCircle2 size={14} className="text-[hsl(var(--accent-soft))]" aria-hidden="true" />
            <span className="text-xs font-medium text-[hsl(var(--ink))]">
              {project.href ? 'Live in production' : 'Delivered'}
            </span>
          </span>
        </div>

        <div className={flip ? 'md:order-1' : ''}>
          <span className="t-eyebrow text-[hsl(var(--accent-soft))]">{project.category}</span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[hsl(var(--ink))] sm:text-3xl">
            {project.name}
          </h3>

          {/* pull quote — the outcome, given weight */}
          <blockquote className="mt-5 border-l-2 border-[hsl(var(--accent))] pl-5">
            <p className="text-base leading-relaxed text-[hsl(var(--ink))] sm:text-lg">
              {project.outcome}
            </p>
          </blockquote>

          <p className="t-body mt-5 max-w-prose">{project.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[hsl(var(--line)/0.1)] px-3 py-1 text-xs text-[hsl(var(--ink-2))]"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--accent-soft))]"
            >
              {open ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
              {open ? 'Hide case study' : 'Read case study'}
            </button>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--ink-2))] transition-colors hover:text-[hsl(var(--ink))]"
              >
                Visit live
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduced ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <dl className="mt-7 grid gap-6 border-l border-[hsl(var(--line)/0.1)] pl-6">
                  <CaseDetail label="Challenge">{project.challenge}</CaseDetail>
                  <CaseDetail label="Approach">{project.approach}</CaseDetail>
                  <CaseDetail label="Solution">{project.solution}</CaseDetail>
                </dl>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  return (
    <Section
      id="work"
      className="bg-sec-d"
      eyebrow="Case studies"
      title="Proof, not promises"
      lead="Four systems we designed and engineered end to end."
    >
      <div className="mt-14 space-y-14 md:space-y-20">
        {WORK.map((project, i) => (
          <Project key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
