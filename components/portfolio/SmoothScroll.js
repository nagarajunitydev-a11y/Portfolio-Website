'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let lenis
    let raf
    ;(async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      })
      const rafLoop = (time) => {
        lenis.raf(time)
        raf = requestAnimationFrame(rafLoop)
      }
      raf = requestAnimationFrame(rafLoop)
    })()
    return () => {
      if (lenis) lenis.destroy()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return null
}
