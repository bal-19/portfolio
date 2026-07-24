import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.62,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  )
}
