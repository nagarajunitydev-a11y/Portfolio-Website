'use client'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [label, setLabel] = useState('')
  const [variant, setVariant] = useState('default') // default | hover | text | media
  const [visible, setVisible] = useState(false)
  const [pressed, setPressed] = useState(false)

  const update = useCallback((target) => {
    if (!target || !target.closest) return
    const el = target.closest('[data-cursor-text], a, button, [role="button"], input, textarea, select')
    if (!el) {
      setLabel('')
      setVariant('default')
      return
    }
    const inputLike = el.matches('input, textarea, select') || el.closest('input, textarea')
    if (inputLike) {
      setLabel('')
      setVariant('text')
      return
    }
    const t = el.getAttribute('data-cursor-text')
    if (t) {
      setLabel(t)
      setVariant('hover')
      return
    }
    setLabel('')
    setVariant('hover')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      update(e.target)
    }
    const over = (e) => update(e.target)
    const leave = () => setVisible(false)
    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [update])

  const isText = variant === 'text'
  const isHover = variant === 'hover'
  const showLabel = isHover && label.length > 0

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        animate={{
          x: pos.x - 22,
          y: pos.y - 22,
          opacity: visible ? 1 : 0,
          scale: isHover ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 140, mass: 0.5 }}
      >
        <div
          className="h-11 w-11 rounded-full border border-[#D4AF37]/40"
          style={{ mixBlendMode: 'exclusion' }}
        />
      </motion.div>

      {/* Inner core / label pill */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: pos.x - (showLabel ? 50 : 6),
          y: pos.y - (showLabel ? 18 : 6),
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.25 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {showLabel ? (
            <motion.div
              key={`label-${label}`}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 320 }}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black text-[11px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
              style={{ boxShadow: '0 8px 30px rgba(212,175,55,0.45)' }}
            >
              {label}
            </motion.div>
          ) : isText ? (
            <motion.div
              key="text"
              initial={{ scaleY: 0.2, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-6 w-[2px] rounded-full bg-[#D4AF37]"
              style={{ boxShadow: '0 0 10px rgba(212,175,55,0.9)' }}
            />
          ) : isHover ? (
            <motion.div
              key="ring"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="h-3 w-3 rounded-full bg-[#F4D97C]"
              style={{ boxShadow: '0 0 14px rgba(244,217,124,0.9)' }}
            />
          ) : (
            <motion.div
              key="dot"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="h-3 w-3 rounded-full bg-[#D4AF37]"
              style={{ boxShadow: '0 0 14px rgba(212,175,55,0.9)' }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
