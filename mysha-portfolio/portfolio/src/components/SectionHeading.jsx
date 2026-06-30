import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
    >
      <span className="eyebrow mb-4">
        <span className="w-4 h-px bg-gold/60" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-ink leading-[1.1] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-dim text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
