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
    <section id="hero" className="bg-sec-a relative isolate overflow-hidden">
      {/* Full-bleed contextual backdrop */}
      <div className="absolute inset-0 -z-10">
        <Media
          media={HERO_MEDIA}
          priority
          sizes="100vw"
          className="h-full w-full"
          ratio="auto"
        />
        {/* Legibility scrim, measured against the rendered pixels.
            The copy column needs a backdrop luminance of ~0.69 for the 19px
            lead to clear 4.5:1, which sets the floor on these opacities.

            Below lg the text spans the full width, so a sideways gradient
            cannot protect it — that breakpoint gets an even wash and the photo
            reads as a subtle texture. From lg the copy occupies the left half,
            so the scrim thins across to ~45% and the photograph is clearly
            visible on the right. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--bg)/0.93)_0%,hsl(var(--bg)/0.88)_60%,hsl(var(--bg)/0.84)_100%)] lg:bg-[linear-gradient(100deg,hsl(var(--bg))_10%,hsl(var(--bg)/0.96)_42%,hsl(var(--bg)/0.9)_60%,hsl(var(--bg)/0.46)_80%,hsl(var(--bg)/0.48)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--bg))_1%,transparent_32%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      </div>

      <div className="mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-36">
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

        <h1 className="t-display mt-8 max-w-[16ch] text-balance text-[hsl(var(--ink))]">
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

        <motion.p {...rise(0.5)} className="t-lead mt-8 max-w-xl text-pretty">
          We build AI systems, software products and immersive experiences — then the growth
          engine that puts them in front of the right people.
        </motion.p>

        <motion.div {...rise(0.62)} className="mt-11 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn btn-primary">
            Get Started
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#work" className="btn btn-ghost">
            <PlayCircle size={17} aria-hidden="true" />
            Watch Overview
          </a>
        </motion.div>

        {/* Floating proof strip */}
        <motion.div {...rise(0.78)} className="mt-20 lg:mt-24">
          <ul className="hairline flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 sm:gap-x-10">
            {POSITIONING.map((p) => (
              <li key={p} className="t-eyebrow text-[hsl(var(--ink-2))]">
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
