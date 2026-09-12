'use client'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import BrandMark from './BrandMark'
import { STUDIO, NAV_LINKS, SERVICES } from '@/lib/portfolio/data'

const SOCIAL = [
  { icon: Github, href: STUDIO.github, label: 'GitHub' },
  { icon: Linkedin, href: STUDIO.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: STUDIO.twitter, label: 'Twitter' },
]

const LEGAL = [
  { name: 'Privacy Policy', href: '#contact' },
  { name: 'Terms of Service', href: '#contact' },
  { name: 'Accessibility', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--line)/0.08)] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <BrandMark size="lg" />
            <p className="t-body mt-5 max-w-xs">{STUDIO.tagline}</p>
            <ul className="mt-6 flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--line)/0.1)] text-[hsl(var(--ink-2))] transition-colors hover:border-[hsl(var(--accent)/0.4)] hover:text-[hsl(var(--ink))]"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="t-eyebrow">Company</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[hsl(var(--ink-2))] transition-colors hover:text-[hsl(var(--ink))]"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="t-eyebrow">Solutions</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-[hsl(var(--ink-2))] transition-colors hover:text-[hsl(var(--ink))]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="t-eyebrow">Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="break-all text-sm text-[hsl(var(--ink-2))] transition-colors hover:text-[hsl(var(--ink))]"
                >
                  {STUDIO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${STUDIO.phone}`}
                  className="text-sm text-[hsl(var(--ink-2))] transition-colors hover:text-[hsl(var(--ink))]"
                >
                  {STUDIO.phone}
                </a>
              </li>
              <li className="text-sm text-[hsl(var(--ink-3))]">{STUDIO.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[hsl(var(--line)/0.08)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta">
            © {new Date().getFullYear()} {STUDIO.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="t-meta transition-colors hover:text-[hsl(var(--ink))]">
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#hero"
                className="t-meta inline-flex items-center gap-1.5 transition-colors hover:text-[hsl(var(--ink))]"
              >
                Back to top
                <ArrowUp size={12} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
