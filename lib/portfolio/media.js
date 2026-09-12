/**
 * Central image manifest.
 *
 * Why this file exists: next.config.js sets `images.unoptimized: true`, so Next
 * does NOT resize or re-encode anything. Two consequences drive every entry here:
 *
 *  1. Sizing is done at the source with Unsplash CDN params (`w`, `q`, auto=format
 *     serves WebP/AVIF to browsers that accept it). Never point at a raw full-size
 *     Unsplash file.
 *  2. Every entry carries explicit `w`/`h` so <Image> can reserve the box and the
 *     page cannot shift (CLS). The numbers are the real delivered pixel size.
 *
 * `alt` is written for screen readers, not for keyword stuffing. Decorative
 * backdrops use alt: '' and are marked decorative.
 */

const unsplash = (id, w, h, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`;

/**
 * Full-bleed hero backdrop: a cinematic 3D render rather than an office photo,
 * so the first thing on the page speaks to the CGI/VFX side of the studio.
 * Decorative — the headline carries the meaning. The white theme lays a scrim
 * over this, and the scrim opacities in Hero.js are measured against it.
 */
export const HERO_MEDIA = {
  src: unsplash('1639762681485-074b7f938ba0', 1920, 1280, 78),
  w: 1920,
  h: 1280,
  alt: '',
  decorative: true,
};

/** Contextual preview per service card (Bento grid). */
export const SERVICE_MEDIA = {
  ai: {
    src: unsplash('1633356122544-f134324a6cee', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Abstract visualisation of an artificial intelligence network',
  },
  software: {
    src: unsplash('1461749280684-dccba630e2f6', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Application source code on a developer’s screen',
  },
  xr: {
    src: unsplash('1593508512255-86ab42a8e620', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Person using a virtual reality headset',
  },
  games: {
    src: unsplash('1550745165-9bc0b252726f', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Real-time interactive graphics on display',
  },
  growth: {
    src: unsplash('1460925895917-afdab827c52f', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Marketing performance dashboard showing campaign analytics',
  },
  crm: {
    src: unsplash('1552664730-d307ca884978', 1200, 900),
    w: 1200,
    h: 900,
    alt: 'Team reviewing a business workflow together',
  },
  cgi: {
    // Supplied asset, not sourced from Unsplash. A VFX supervisor on a
    // blue-screen set reviewing a composited sci-fi shot — the literal
    // CGI & VFX pipeline rather than an abstract stand-in. Local file, so it
    // is served as-is (next.config images.unoptimized: true) at its native
    // 2816×1536; Services.js crops it to the card's 16:10 box.
    src: '/Images/CGIVFX.webp',
    w: 2816,
    h: 1536,
    alt: 'VFX supervisor on a blue-screen film set reviewing a composited sci-fi shot on a monitor',
  },
};

/** Editorial photography for the About narrative blocks. */
export const ABOUT_MEDIA = [
  {
    src: unsplash('1521737604893-d14cc237f11d', 1400, 1050),
    w: 1400,
    h: 1050,
    alt: 'Engineering team working together in an open office',
  },
  {
    src: unsplash('1617791160536-598cf32026fb', 1400, 1050),
    w: 1400,
    h: 1050,
    alt: 'Real-time 3D render of a neural network form',
  },
];

/** Consultant visual beside the contact form. */
export const CONTACT_MEDIA = {
  src: unsplash('1573164713988-8665fc963095', 1000, 1250),
  w: 1000,
  h: 1250,
  alt: 'Qvrix consultant available to discuss a new project',
};

/** Ambient texture behind the metrics band. Decorative. */
export const IMPACT_MEDIA = {
  src: unsplash('1451187580459-43490279c0fa', 1920, 1080, 62),
  w: 1920,
  h: 1080,
  alt: '',
  decorative: true,
};

/**
 * Fallbacks for real project work that has no photograph of its own.
 * Local project imagery is preferred and lives in lib/portfolio/data.js.
 */
export const WORK_FALLBACK_MEDIA = {
  configurator: {
    // A vehicle isolated on a neutral studio ground — visually what a
    // configurator viewport actually looks like. The previous fallback was a
    // circuit board, which said nothing about real-time 3D product config.
    // Sourced at 16:9 so that, shown in the 4:3 card, there is real
    // horizontal overflow for the crop anchor below to work with.
    src: unsplash('1617788138017-80ad40651399', 1900, 1050, 76),
    w: 1900,
    h: 1050,
    // Anchored hard right so the showroom's wall signage stays out of frame — the
    // project is a generic configurator, not work for that manufacturer.
    position: '100% center',
    alt: 'Vehicle rendered in real time on a neutral studio background, as shown in the browser-based configurator',
  },
};

/** Cinematic render behind the closing conversion block. Decorative. */
export const CTA_MEDIA = {
  src: unsplash('1636955840493-f43a02bfa064', 1920, 900, 70),
  w: 1920,
  h: 900,
  alt: '',
  decorative: true,
};
