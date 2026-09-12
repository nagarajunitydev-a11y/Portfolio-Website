'use client'

/**
 * Qvrix logo concepts — exploration set, viewable at /brand.
 *
 * Alternative marks only, not used on the live site. The primary mark is
 * NewLogo.png (via BrandMark.js); QvrixName.png remains the wordmark. These
 * are drawn as SVG so they stay sharp at 24px, inherit the theme tokens, and
 * weigh ~1KB rather than a megabyte.
 *
 * Shared constraints, so any concept can be dropped in without redesign:
 *   • one accent + one soft accent, no third colour
 *   • 48×48 viewBox, ~2.4 stroke, round joins
 *   • legible at 24px and on light or dark
 *   • `inverse` renders the mark in white for dark/photographic surfaces
 */

const stroke = (inverse) => (inverse ? '#fff' : 'hsl(var(--accent))')
const soft = (inverse) => (inverse ? '#fff' : 'hsl(var(--accent-soft))')

function Svg({ size, children, title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

/** 01 — Hexagon Lattice. The original identity, flattened. */
function HexLattice({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      <path
        d="M24 3.2 43.2 14.4v22.2L24 47.8 4.8 36.6V14.4z"
        stroke={stroke(inverse)}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 12.6 35 19v12.6L24 38 13 31.6V19z"
        stroke={soft(inverse)}
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity={inverse ? 0.5 : 0.38}
      />
      <path
        d="M17.8 18.6 30.2 31.2M30.2 18.6 17.8 31.2"
        stroke={stroke(inverse)}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </Svg>
  )
}

/** 02 — Prism. Light entering and splitting: rendering, refraction, CGI. */
function Prism({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      <path
        d="M24 6 42 38H6z"
        stroke={stroke(inverse)}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M3 22h11" stroke={stroke(inverse)} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M28 27h16M28 32h13M28 22h12"
        stroke={soft(inverse)}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={inverse ? 0.75 : 0.6}
      />
    </Svg>
  )
}

/**
 * 03 — Isometric Cube. The primitive every 3D scene starts from.
 * Replaced an earlier "Q built from cubes": that cluster read as a blob rather
 * than a letter and fell apart below ~24px. A single cube stays legible at 16.
 */
function IsoCube({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      {/* silhouette */}
      <path
        d="M24 5 41.5 15v20L24 45 6.5 35V15z"
        stroke={stroke(inverse)}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* the three visible faces meeting at the centre vertex */}
      <path
        d="M6.5 15 24 25l17.5-10M24 25v20"
        stroke={stroke(inverse)}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* top face, lifted with the soft accent */}
      <path
        d="M24 5 41.5 15 24 25 6.5 15z"
        fill={soft(inverse)}
        opacity={inverse ? 0.28 : 0.16}
        stroke="none"
      />
    </Svg>
  )
}

/** 04 — Aperture. Iris blades: camera, cinematic capture, VFX. */
function Aperture({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      <circle cx="24" cy="24" r="18" stroke={stroke(inverse)} strokeWidth="2.5" />
      <path
        d="M24 6 33 21.6M39.6 33 21.6 33M32.4 42 23.4 26.4M8.4 33 26.4 33M8.4 15 17.4 30.6"
        stroke={soft(inverse)}
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity={inverse ? 0.8 : 0.62}
      />
      <circle cx="24" cy="24" r="5" stroke={stroke(inverse)} strokeWidth="2.5" />
    </Svg>
  )
}

/** 05 — Vector Node. A node graph: AI pipelines, procedural systems. */
function VectorNode({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      <path
        d="M12 12 36 24M12 12 24 36M36 24 24 36M12 12 36 36"
        stroke={soft(inverse)}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={inverse ? 0.7 : 0.5}
      />
      <circle cx="12" cy="12" r="4.6" stroke={stroke(inverse)} strokeWidth="2.5" />
      <circle cx="36" cy="24" r="4.6" stroke={stroke(inverse)} strokeWidth="2.5" />
      <circle cx="24" cy="36" r="4.6" stroke={stroke(inverse)} strokeWidth="2.5" />
      <circle cx="36" cy="36" r="3" fill={stroke(inverse)} />
    </Svg>
  )
}

/** 06 — QX Monogram. The letters themselves, geometric and minimal. */
function Monogram({ size = 32, inverse = false }) {
  return (
    <Svg size={size}>
      <circle cx="19" cy="21" r="12.5" stroke={stroke(inverse)} strokeWidth="2.6" />
      <path d="M27 29 34 36" stroke={stroke(inverse)} strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M30 12 42 26M42 12 30 26"
        stroke={soft(inverse)}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity={inverse ? 0.85 : 0.7}
      />
    </Svg>
  )
}

export const LOGO_CONCEPTS = [
  {
    id: 'hex-lattice',
    name: 'Hexagon Lattice',
    note: 'Closest to the existing mark — flattened for a flat UI. Safest continuity.',
    Mark: HexLattice,
  },
  {
    id: 'prism',
    name: 'Prism',
    note: 'Light entering and splitting. Reads as rendering and refraction — the CGI side.',
    Mark: Prism,
  },
  {
    id: 'iso-cube',
    name: 'Isometric Cube',
    note: 'The primitive every 3D scene starts from. Reads as real-time 3D, games and CGI, and stays legible at 16px.',
    Mark: IsoCube,
  },
  {
    id: 'aperture',
    name: 'Aperture',
    note: 'Iris blades. The most cinematic option — leans VFX and capture.',
    Mark: Aperture,
  },
  {
    id: 'vector-node',
    name: 'Vector Node',
    note: 'A node graph. Reads AI pipeline and procedural systems.',
    Mark: VectorNode,
  },
  {
    id: 'monogram',
    name: 'QX Monogram',
    note: 'The letterforms themselves. Most conservative, works smallest.',
    Mark: Monogram,
  },
]

/** The concept currently used site-wide. Change this to switch. */
export const ACTIVE_CONCEPT = 'hex-lattice'
