'use client'
import Section from './Section'
import Reveal from './Reveal'
import Media from './Media'
import { DIFFERENTIATORS, PROCESS } from '@/lib/portfolio/data'
import { ABOUT_MEDIA } from '@/lib/portfolio/media'

/**
 * Absorbs the former standalone "Why Qvrix" and "Process" sections so the page
 * keeps one narrative block about the company instead of three that overlap.
 */
export default function About() {
  return (
    <Section
      id="about"
      className="bg-sec-e"
      eyebrow="About"
      title="We combine engineering, intelligent technology and creative thinking"
      lead="Qvrix exists because most technology problems are not really technology problems. They are unclear scope, the wrong architecture chosen early, or a product nobody asked for."
    >
      {/* Narrative + photography, alternating */}
      <div className="mt-14 grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <Reveal>
          <Media
            media={ABOUT_MEDIA[0]}
            zoom
            viewport
            wire
            tag="Studio"
            ratio="4 / 3"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="group rounded-2xl border border-[hsl(var(--line)/0.09)]"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="t-h3 text-[hsl(var(--ink))]">Engineers, not account managers</h3>
          <p className="t-body mt-4 max-w-prose">
            Our team spans AI engineering, full-stack development, real-time 3D and growth —
            which means we can take a problem from first conversation to a running product
            without handing it between agencies. The people who scope your project build it.
          </p>
          <p className="t-body mt-4 max-w-prose">
            We would rather tell you something is not worth building than bill you for it.
          </p>
        </Reveal>
      </div>

      {/* Differentiators */}
      <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[hsl(var(--line)/0.08)] bg-[hsl(var(--line)/0.08)] sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal
            key={d.title}
            delay={(i % 3) * 0.06}
            className="bg-[hsl(var(--bg))] p-7 lg:p-8"
          >
            <dt className="t-h3 text-[hsl(var(--ink))]">{d.title}</dt>
            <dd className="t-body mt-3">{d.text}</dd>
          </Reveal>
        ))}
        <Reveal
          delay={0.12}
          className="flex flex-col justify-between bg-[hsl(var(--surface))] p-7 lg:p-8"
        >
          <p className="t-h3 text-balance text-[hsl(var(--ink))]">
            Want to pressure-test an idea before committing?
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-[hsl(var(--accent-soft))] transition-colors hover:text-[hsl(var(--ink))]"
          >
            Talk to an engineer
          </a>
        </Reveal>
      </dl>

      {/* Process, folded in */}
      <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rule-accent" aria-hidden="true" />
            <span className="t-eyebrow">How we work</span>
          </div>
          <p className="t-lead mt-5 max-w-prose">
            Five stages, reviewed with you at every one. No black box between kickoff and
            delivery.
          </p>
          <Media
            media={ABOUT_MEDIA[1]}
            zoom
            viewport
            wire
            tag="Render pass"
            ratio="16 / 10"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="group mt-8 rounded-2xl border border-[hsl(var(--line)/0.09)]"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ol>
            {PROCESS.map((step) => {
              const Icon = step.icon
              return (
                <li
                  key={step.no}
                  className="group hairline grid grid-cols-[auto_1fr] items-start gap-x-5 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="t-meta tabular-nums pt-1 text-[hsl(var(--ink-3))] transition-colors duration-500 group-hover:text-[hsl(var(--accent-soft))]">
                    {step.no}
                  </span>
                  <div>
                    <h3 className="t-h3 flex items-center gap-2.5 text-[hsl(var(--ink))]">
                      <Icon
                        size={16}
                        aria-hidden="true"
                        className="text-[hsl(var(--ink-3))] transition-colors duration-500 group-hover:text-[hsl(var(--accent-soft))]"
                      />
                      {step.title}
                    </h3>
                    <p className="t-body mt-2 max-w-prose">{step.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
