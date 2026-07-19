'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '@/lib/portfolio/data'

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
          <a href="#home" className="flex items-center gap-2 group" data-cursor="hover">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-[#00E5FF] via-[#7B61FF] to-[#00FFB3] p-[1.5px]">
              <div className="h-full w-full rounded-[10px] bg-[#0a0a0a] flex items-center justify-center font-bold text-white text-sm">
                {'{L}'}
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white hidden sm:block">
              {PROFILE.fullName}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                  active === link.href ? 'text-white' : 'text-[#A8A8A8] hover:text-white'
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
              data-cursor="hover"
              className="relative group px-5 py-2 text-sm rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-black font-medium overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFB3] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
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
            className="fixed top-20 left-4 right-4 z-40 md:hidden glass-strong rounded-2xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm ${
                    active === link.href ? 'bg-white/5 text-white' : 'text-[#A8A8A8]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-black font-medium text-center"
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
