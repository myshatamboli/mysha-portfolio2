import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { leadership } from '../data/portfolio'

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad py-24 sm:py-32 relative bg-bg-surface/30">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="// 04 — Leadership"
          title="Leadership & extracurricular"
          description="Representing students, leading teams, and showing up for community — on the pitch and off it."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {leadership.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass-card p-6 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold shrink-0">
                  <Users size={15} />
                </span>
                <span className="font-mono text-[11px] text-ink-faint text-right shrink-0">{item.period}</span>
              </div>
              <h3 className="font-display text-base font-semibold text-ink mt-4">{item.title}</h3>
              <p className="text-xs text-gold/70 font-mono mt-0.5">{item.org}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="text-[13px] text-ink-dim leading-relaxed flex gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
