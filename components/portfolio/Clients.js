'use client'
import { TECH_RIBBON } from '@/lib/portfolio/data'

/**
 * Infinite horizontal ribbon.
 *
 * The list is rendered twice back-to-back and translated -50%, which is what
 * makes the loop seamless. The duplicate is aria-hidden so screen readers and
 * search engines see each name once.
 */
export default function Clients() {
  return (
    <section
      id="clients"
      aria-label="Technologies we build on"
      className="bg-sec-b relative scroll-mt-24 border-y border-[hsl(var(--line)/0.08)] py-10"
    >
      <p className="t-eyebrow mb-8 text-center">Built on the platforms enterprises rely on</p>

      <div
        className="relative flex overflow-hidden"
        // fade the ribbon into the page edges instead of cutting it off
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? 'true' : undefined}
            className="marquee flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
          >
            {TECH_RIBBON.map((name) => (
              <li
                key={name}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-[hsl(var(--ink-3))] transition-colors duration-300 hover:text-[hsl(var(--ink))] sm:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
