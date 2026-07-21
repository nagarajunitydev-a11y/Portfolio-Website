'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BrandMark from './BrandMark'

export default function LoadingScreen() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] bg-[#0A0A0A] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-16 w-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[#D4AF37] border-r-[#7C3AED]"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#7C3AED]/20 border border-white/10 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#F4D97C] animate-pulse" />
              </div>
            </motion.div>
            <BrandMark className="justify-center" />
            <div className="text-xs tracking-[0.4em] text-[#A8A8A8] uppercase">Loading experience</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
