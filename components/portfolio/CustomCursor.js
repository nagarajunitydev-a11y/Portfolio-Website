'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const over = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      const interactive = t.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]')
      setHover(!!interactive)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        animate={{
          x: pos.x - (hover ? 24 : 6),
          y: pos.y - (hover ? 24 : 6),
          scale: hover ? 1 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.3 }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            hover
              ? 'w-12 h-12 border border-[#00E5FF] bg-[#00E5FF]/10 backdrop-blur-sm'
              : 'w-3 h-3 bg-[#00E5FF]'
          }`}
          style={{ boxShadow: '0 0 20px rgba(0,229,255,0.5)' }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, opacity: visible ? 0.6 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.6 }}
      >
        <div className="w-10 h-10 rounded-full border border-white/10" />
      </motion.div>
    </>
  )
}
