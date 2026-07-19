'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center"
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
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[#00E5FF] border-r-[#7B61FF]"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B61FF]/20 border border-white/10 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#00FFB3] animate-pulse" />
              </div>
            </motion.div>
            <div className="text-xs tracking-[0.4em] text-[#A8A8A8] uppercase">Loading experience</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
