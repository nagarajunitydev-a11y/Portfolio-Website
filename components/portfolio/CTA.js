'use client'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Media from './Media'
import { STUDIO } from '@/lib/portfolio/data'
import { CTA_MEDIA } from '@/lib/portfolio/media'

/** The site's only conversion block. Contact below it is the form, not a repeat. */
export default function CTA() {
  return (
    <section className="bg-sec-b relative overflow-hidden px-5 py-24 sm:px-8 md:py-36 lg:px-10">
      {/* Cinematic render behind the closing block, held well back so the
          headline keeps its contrast. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Media media={CTA_MEDIA} ratio="auto" className="h-full w-full" sizes="100vw" />
        <div className="absolute inset-0 bg-[hsl(var(--bg)/0.9)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 ambient"
        style={{ '--ax': '50%', '--ay': '50%' }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="t-h2 text-balance text-[hsl(var(--ink))]">
          Have a complex idea?
          <br />
          <span className="accent-text">Let&apos;s turn it into something real.</span>
        </h2>
        <p className="t-lead mx-auto mt-6 max-w-lg text-pretty">
          Tell us what you are trying to build. We will tell you honestly whether we are the
          right team for it.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn btn-primary">
            Start a Project
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={`mailto:${STUDIO.email}`} className="btn btn-ghost">
            Talk to Qvrix
          </a>
        </div>
      </Reveal>
    </section>
  )
}
