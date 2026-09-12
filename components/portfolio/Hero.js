'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import Media from './Media'
import { HERO_MEDIA } from '@/lib/portfolio/media'
import { POSITIONING } from '@/lib/portfolio/data'

const LINES = ['Intelligent technology.', 'Immersive experiences.', 'Digital growth.']

export default function Hero() {
  const reduced = useReducedMotion()
  // Always emit initial+animate (never an empty prop bag): reduced motion only
  // removes the travel and the duration, so the element can never be left
  // stranded at opacity 0 if the hook resolves after the first render.
  const rise = (delay) => ({
    initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-sec-a relative isolate overflow-hidden">
      {/* Full-section background image. The <img> renders with object-cover —
          the replaced-element equivalent of background-size: cover — so the
          artwork fills the whole section without stretching; overflow crops
          instead. Position is biased slightly high (see HERO_MEDIA.position)
          to keep the wave ridges in frame on wide and tall viewports alike.
          bg-cover / bg-center on the wrapper state the same cover intent at
          the CSS background level. */}
      <div className="absolute inset-0 -z-10">
        <Media
          media={HERO_MEDIA}
          priority
          sizes="100vw"
          ratio="auto"
          className="h-full w-full bg-cover bg-center"
        />
        {/* Legibility scrim. Below lg the copy spans the full width, so it gets
            an even light wash and the waves read as texture. From lg the copy
            sits left, so the scrim stays near-opaque behind the text and thins
            to the right where the artwork shows through. Dark ink on this wash
            clears AA with wide margin at every breakpoint. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--bg)/0.93)_0%,hsl(var(--bg)/0.88)_55%,hsl(var(--bg)/0.82)_100%)] lg:bg-[linear-gradient(96deg,hsl(var(--bg))_8%,hsl(var(--bg)/0.96)_40%,hsl(var(--bg)/0.84)_62%,hsl(var(--bg)/0.42)_82%,hsl(var(--bg)/0.38)_100%)]"
          aria-hidden="true"
        />
        {/* Seamless hand-off to the next section + faint brand tint. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--bg))_2%,transparent_30%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[hsl(var(--accent)/0.05)]" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      </div>

      <div className="mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="max-w-2xl text-left">
          {/* Glassmorphism eyebrow badge */}
          <motion.div {...rise(0)} className="w-fit">
            <span className="glass-nav inline-flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-4">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--accent-strong))]">
                <ShieldCheck size={13} className="text-white" aria-hidden="true" />
              </span>
              <span className="t-eyebrow !tracking-[0.14em] text-[hsl(var(--ink-2))]">
                Global technology studio · AI, XR & CGI
              </span>
            </span>
          </motion.div>

          <h1
            id="hero-heading"
            className="t-display mt-7 max-w-[16ch] text-balance text-[hsl(var(--ink))] sm:mt-8"
          >
            {LINES.map((line, i) => (
              // pb/-mb pair gives the clipping box room for descenders (g, y)
              <span key={line} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 2 ? <span className="accent-text">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...rise(0.5)} className="t-lead mt-6 max-w-xl text-pretty sm:mt-7">
            We build AI systems, software products and immersive experiences — then the growth
            engine that puts them in front of the right people.
          </motion.p>

          <motion.div
            {...rise(0.62)}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              Get Started
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#work" className="btn btn-ghost w-full sm:w-auto">
              <PlayCircle size={17} aria-hidden="true" />
              Watch Overview
            </a>
          </motion.div>

          {/* Proof strip */}
          <motion.div {...rise(0.78)} className="mt-12 lg:mt-14">
            <ul className="hairline flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 sm:gap-x-10">
              {POSITIONING.map((p) => (
                <li key={p} className="t-eyebrow text-[hsl(var(--ink-2))]">
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
