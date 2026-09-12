'use client'
import Image from 'next/image'

/**
 * Qvrix brand lockup: the NewLogo.png mark + the QvrixName.png wordmark.
 *
 * NewLogo.png is a 1254×1254 (1:1) glossy render and is the primary mark
 * everywhere — it already carries enough white/blue contrast to read on both
 * light and dark surfaces unmodified, so unlike the wordmark it needs no
 * inverse treatment. `object-contain` at a fixed square box guarantees it is
 * never stretched.
 *
 * QvrixName.png is 2172×724 (aspect exactly 3.0) and already contains both
 * "QVRIX" and the "TECHNOLOGIES" sub-line, so it is used as the complete
 * wordmark and never re-typeset. Every size below keeps that 3:1 ratio.
 *
 * The wordmark artwork is ~91% dark pixels on transparency, so it reads on
 * light surfaces but disappears on dark ones — `tone="inverse"` swaps in a
 * typeset wordmark for dark/photographic backgrounds until a light export
 * exists.
 */
const SIZES = {
  nav: { mark: 30, nameW: 90, nameH: 30 },
  lg: { mark: 42, nameW: 132, nameH: 44 },
}

export default function BrandMark({ className = '', size = 'nav', tone = 'auto', priority = true }) {
  const s = SIZES[size] || SIZES.nav
  const inverse = tone === 'inverse'

  return (
    <div
      role="img"
      aria-label="Qvrix Technologies"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/NewLogo.png"
        alt=""
        aria-hidden="true"
        width={s.mark}
        height={s.mark}
        priority={priority}
        sizes={`${s.mark}px`}
        className="h-auto w-auto shrink-0 object-contain"
        style={{ width: s.mark, height: s.mark }}
      />

      {inverse ? (
        // Fallback for dark surfaces: the PNG is dark-on-transparent.
        <span aria-hidden="true" className="leading-none">
          <span className="block text-[1.0625rem] font-semibold tracking-[0.02em] text-white">
            QVRIX
          </span>
          <span className="mt-[2px] block text-[7px] font-medium tracking-[0.32em] text-white/60">
            TECHNOLOGIES
          </span>
        </span>
      ) : (
        <Image
          src="/QvrixName.png"
          alt=""
          aria-hidden="true"
          width={s.nameW}
          height={s.nameH}
          priority={priority}
          sizes={`${s.nameW}px`}
          className="h-auto w-auto object-contain"
          style={{ width: s.nameW, height: 'auto' }}
        />
      )}
    </div>
  )
}
