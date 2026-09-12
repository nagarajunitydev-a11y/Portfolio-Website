'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/portfolio/data'
import BrandMark from './BrandMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const reduced = useReducedMotion()
  const openerRef = useRef(null)

  // Background only — cheap, passive.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /**
   * Active-section tracking via IntersectionObserver.
   * rootMargin pulls the detection band to the upper third of the viewport so a
   * section highlights when its heading area is in view, not when it merely
   * touches the bottom edge.
   */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return

    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }
        if (!visible.size) return
        // topmost section currently in the band wins
        const winner = sections.find((s) => visible.has(s.id))
        if (winner) setActive(`#${winner.id}`)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock scroll + close on Escape, and return focus to the opener.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      openerRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? 'border-b border-[hsl(var(--line)/0.09)] bg-[hsl(var(--bg)/0.7)] backdrop-blur-md backdrop-saturate-150'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          <a href="#hero" aria-label="Qvrix — home" className="shrink-0">
            <BrandMark />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                  className="nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Get Started
            </a>
            <button
              ref={openerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-[hsl(var(--ink))] lg:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={reduced ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduced ? undefined : { x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,360px)] flex-col border-l border-[hsl(var(--line)/0.1)] bg-[hsl(var(--bg))] lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex h-[68px] items-center justify-between border-b border-[hsl(var(--line)/0.08)] px-5">
                <BrandMark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-[hsl(var(--ink))]"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
                <ul>
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={reduced ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                      className="border-b border-[hsl(var(--line)/0.08)]"
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 text-xl font-medium tracking-tight text-[hsl(var(--ink))]"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-8 w-full"
                >
                  Get Started
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
