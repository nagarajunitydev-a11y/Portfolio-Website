'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

          aria-label="Back to top"
          className="glass-nav fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--accent)/0.4)]"
        >
          <ArrowUp size={17} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
