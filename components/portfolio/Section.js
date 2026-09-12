'use client'
import Reveal from './Reveal'

/**
 * Standard section shell: consistent vertical rhythm, max width and header
 * treatment. Keeping this in one place is what stops each section inventing
 * its own spacing and heading sizes.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  headerClassName = 'max-w-2xl',
  bare = false,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-10 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {!bare && (
          <Reveal className={headerClassName}>
            {eyebrow && (
              <div className="flex items-center gap-3">
                <span className="rule-accent" aria-hidden="true" />
                <span className="t-eyebrow">{eyebrow}</span>
              </div>
            )}
            {title && <h2 className="t-h2 mt-5 text-balance text-[hsl(var(--ink))]">{title}</h2>}
            {lead && <p className="t-lead mt-5 text-pretty">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
