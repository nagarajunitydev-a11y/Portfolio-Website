'use client'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import Media from './Media'
import { SERVICES } from '@/lib/portfolio/data'
import { SERVICE_MEDIA } from '@/lib/portfolio/media'

/**
 * Bento grid: the first card spans two columns on large screens so the grid
 * reads as an editorial composition rather than six identical tiles.
 */
const SPAN = {
  ai: 'lg:col-span-2',
  crm: 'lg:col-span-2',
}

/** Disciplines whose work is literally rendered — these get the viewport corner brackets. */
const CGI_LED = new Set(['cgi', 'xr', 'games'])
/**
 * The wireframe grid pass on top of that is right over an abstract 3D render
 * but reads as noise over a real photograph — cgi's card is a photo of a VFX
 * supervisor on set, not a render, so it's excluded here.
 */
const WIRE_LED = new Set(['xr', 'games'])

function ServiceCard({ service, index }) {
  const Icon = service.icon
  const media = SERVICE_MEDIA[service.id]
  const wide = Boolean(SPAN[service.id])

  return (
    <Reveal
      delay={(index % 3) * 0.06}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(var(--line)/0.09)] bg-[hsl(var(--surface))] transition-colors duration-500 hover:border-[hsl(var(--accent)/0.35)] ${
        SPAN[service.id] || ''
      }`}
    >
      {/* The 3D-native disciplines carry the render-viewport treatment; the
          rest stay plain so the motif keeps its meaning. */}
      <Media
        media={media}
        zoom
        viewport={CGI_LED.has(service.id)}
        wire={WIRE_LED.has(service.id)}
        ratio={wide ? '21 / 9' : '16 / 10'}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full"
      />
      {/* Hairline between art and copy. A fade-to-surface scrim was used on the
          dark theme; on white it washed out the lower half of every photo, so
          the image now ends cleanly at its own edge. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[hsl(var(--line)/0.08)]"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--line)/0.1)] bg-[hsl(var(--surface-2))]">
            <Icon size={16} className="text-[hsl(var(--accent-soft))]" aria-hidden="true" />
          </span>
          <span className="t-eyebrow rounded-full border border-[hsl(var(--line)/0.1)] px-2.5 py-1">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="t-h3 mt-5 text-[hsl(var(--ink))]">{service.title}</h3>
        <p className="t-body mt-2.5">{service.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {service.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[hsl(var(--line)/0.1)] bg-[hsl(var(--bg)/0.5)] px-2.5 py-1 text-xs text-[hsl(var(--ink-2))]"
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[hsl(var(--ink-2))] transition-colors group-hover:text-[hsl(var(--accent-soft))]"
        >
          Discuss this
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-sec-c"
      eyebrow="Solutions"
      title="What we build"
      lead="Six capabilities that combine. Most engagements start with one and grow into two or three."
    >
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </Section>
  )
}
