'use client'
import Image from 'next/image'
import { LOGO_CONCEPTS, ACTIVE_CONCEPT } from '@/components/portfolio/brand/concepts'

/**
 * Internal logo exploration page (/brand).
 *
 * Not linked from the site and excluded from search (see app/brand/layout.js).
 * Each concept is shown at the sizes that actually matter — nav, large, and a
 * 24px favicon-scale check — on light, tinted and dark grounds, because a mark
 * that only works in one of those is not finished.
 */
function Row({ concept }) {
  const { id, name, note, Mark } = concept
  const active = id === ACTIVE_CONCEPT

  return (
    <section className="hairline py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-3">
        <h2 className="t-h3 text-[hsl(var(--ink))]">{name}</h2>
        <code className="t-meta">{id}</code>
        {active && (
          <span className="rounded-full bg-[hsl(var(--accent-strong))] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            ACTIVE_CONCEPT
          </span>
        )}
      </div>
      <p className="t-body mt-2 max-w-prose">{note}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* full lockup on white */}
        <div className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--line)/0.1)] bg-white p-5">
          <Mark size={30} />
          <Image
            src="/QvrixName.png"
            alt=""
            width={90}
            height={30}
            className="h-auto object-contain"
            style={{ width: 90 }}
          />
        </div>

        {/* lockup on the section tint */}
        <div className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--line)/0.1)] bg-[hsl(211_66%_94%)] p-5">
          <Mark size={30} />
          <Image
            src="/QvrixName.png"
            alt=""
            width={90}
            height={30}
            className="h-auto object-contain"
            style={{ width: 90 }}
          />
        </div>

        {/* inverse on dark */}
        <div className="flex items-center gap-2.5 rounded-xl bg-[hsl(218_35%_12%)] p-5">
          <Mark size={30} inverse />
          <span className="leading-none">
            <span className="block text-[1.0625rem] font-semibold tracking-[0.02em] text-white">
              QVRIX
            </span>
            <span className="mt-[2px] block text-[7px] font-medium tracking-[0.32em] text-white/60">
              TECHNOLOGIES
            </span>
          </span>
        </div>

        {/* scale check: the mark alone, down to favicon size */}
        <div className="flex items-center justify-center gap-5 rounded-xl border border-[hsl(var(--line)/0.1)] bg-white p-5">
          <Mark size={48} />
          <Mark size={32} />
          <Mark size={24} />
          <Mark size={16} />
        </div>
      </div>
    </section>
  )
}

export default function BrandPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <p className="t-eyebrow">Internal · not linked from the site</p>
      <h1 className="t-h2 mt-4 text-[hsl(var(--ink))]">Qvrix logo concepts</h1>
      <p className="t-lead mt-4 max-w-prose">
        Six alternative marks, all pairing with the existing QvrixName.png wordmark. The live site
        uses NewLogo.png as its mark — these are concepts to choose from instead. To adopt one, set{' '}
        <code className="rounded bg-[hsl(var(--surface-2))] px-1.5 py-0.5 text-[0.85em]">
          ACTIVE_CONCEPT
        </code>{' '}
        in <code className="text-[0.85em]">components/portfolio/brand/concepts.js</code>.
      </p>

      <div className="mt-14">
        {LOGO_CONCEPTS.map((c) => (
          <Row key={c.id} concept={c} />
        ))}
      </div>
    </main>
  )
}
