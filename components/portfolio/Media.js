'use client'
import Image from 'next/image'

/**
 * CLS-safe image wrapper, with the optional CGI/VFX viewport treatment.
 *
 * Takes an entry straight from lib/portfolio/media.js and always renders inside
 * a ratio-locked box, so the browser reserves space before the bytes arrive.
 *
 * `viewport` adds render-viewport corner brackets, `wire` adds a wireframe pass
 * that fades in on hover, and `tag` prints a small viewport readout. They are
 * opt-in per usage so the motif stays an accent rather than wallpaper.
 */
export default function Media({
  media,
  className = '',
  imgClassName = '',
  ratio,
  priority = false,
  sizes = '100vw',
  zoom = false,
  viewport = false,
  wire = false,
  tag,
}) {
  if (!media) return null

  const aspect = ratio || `${media.w} / ${media.h}`
  // Per-image crop anchor. Used to keep third-party signage that happens to sit
  // in a stock frame out of shot, so nothing implies a client we do not have.
  const position = media.position || 'center'

  return (
    <div
      className={`relative overflow-hidden ${viewport ? 'vp' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={media.src}
        alt={media.decorative ? '' : media.alt}
        {...(media.decorative ? { 'aria-hidden': 'true' } : {})}
        width={media.w}
        height={media.h}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        style={{ objectPosition: position }}
        className={`h-full w-full object-cover ${zoom ? 'img-zoom' : ''} ${imgClassName}`}
      />
      {wire && <span className="wire" aria-hidden="true" />}
      {tag && (
        <span className="vp-tag" aria-hidden="true">
          {tag}
        </span>
      )}
    </div>
  )
}
