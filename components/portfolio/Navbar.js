'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/portfolio/data'
import BrandMark from './BrandMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map((l) => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'glass-strong rounded-2xl mx-4 md:mx-auto' : ''
          }`}
          style={scrolled ? { padding: '0.75rem 1.5rem' } : {}}
        >
          <a href="#home" className="flex items-center group">
            <BrandMark className="transition-opacity group-hover:opacity-90" />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] rounded-full transition-colors ${
                  active === link.href ? 'text-white' : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-luxury relative group px-5 py-2 text-sm rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden glass-strong rounded-2xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm ${
                    active === link.href ? 'bg-white/5 text-white' : 'text-[#A0A0A0]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold text-center"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
