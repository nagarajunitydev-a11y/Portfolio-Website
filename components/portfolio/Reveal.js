'use client'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * The single scroll-reveal primitive for the site.
 *
 * Deliberately renders ONE motion element in every case rather than branching
 * on `useReducedMotion()`. That hook returns null on the first render and only
 * resolves after hydration; branching made React reconcile the two branches as
 * the same node, so the `initial` inline `opacity: 0` stuck around with nothing
 * left to animate it away — content stayed invisible for reduced-motion users.
 *
 * Keeping one element means `whileInView` always drives it to the visible
 * state; reduced motion just removes the travel and the duration.
 */
export default function Reveal({ children, delay = 0, y = 18, as = 'div', className = '' }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        reduced ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </MotionTag>
  )
}
