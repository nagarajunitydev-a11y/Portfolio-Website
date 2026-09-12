'use client'
import Media from './Media'
import Reveal from './Reveal'
import { IMPACT_METRICS, GROWTH_FUNNEL } from '@/lib/portfolio/data'
import { IMPACT_MEDIA } from '@/lib/portfolio/media'

export default function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      {/* Textured backdrop under a pale blue wash. The wash sits high enough
          that the photograph reads as texture only and the dark numerals keep
          their contrast. */}
      <div className="absolute inset-0 -z-10">
        <Media media={IMPACT_MEDIA} ratio="auto" className="h-full w-full" sizes="100vw" />
        <div
          className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--bg))_8%,hsl(208_100%_95%/0.97)_48%,hsl(210_60%_97%/0.97)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule-accent" aria-hidden="true" />
            <span className="t-eyebrow">Impact</span>
          </div>
          <h2 id="impact-heading" className="t-h2 mt-5 text-balance text-[hsl(var(--ink))]">
            Measured where it counts
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[hsl(var(--line)/0.1)] bg-[hsl(var(--line)/0.1)] sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className="bg-[hsl(var(--bg)/0.9)] p-7 backdrop-blur-sm lg:p-8"
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-5xl font-semibold tracking-tight text-[hsl(var(--ink))] lg:text-6xl">
                  {m.value}
                </span>
                <span className="mt-4 block text-sm font-medium text-[hsl(var(--ink))]">
                  {m.label}
                </span>
                <span className="t-meta mt-1.5 block">{m.note}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* growth funnel — folded in here so it no longer needs its own section */}
        <Reveal delay={0.1} className="mt-12">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {GROWTH_FUNNEL.map((stage, i) => (
              <li key={stage} className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium ${
                    i === GROWTH_FUNNEL.length - 1
                      ? 'text-[hsl(var(--accent-soft))]'
                      : 'text-[hsl(var(--ink-2))]'
                  }`}
                >
                  {stage}
                </span>
                {i < GROWTH_FUNNEL.length - 1 && (
                  <span className="h-px w-6 bg-[hsl(var(--line)/0.2)]" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
