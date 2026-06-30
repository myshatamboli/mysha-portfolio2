import { motion } from 'framer-motion'
import { Trophy, BadgeCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { awards, certifications } from '../data/portfolio'

export default function Awards() {
  return (
    <section id="awards" className="section-pad py-24 sm:py-32 relative">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="// 05 — Recognition" title="Awards & certifications" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="eyebrow mb-6">
              <Trophy size={12} className="text-gold" /> Awards & Achievements
            </h3>
            <div className="space-y-1">
              {awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-4 py-3.5 border-b border-line/70 last:border-b-0"
                >
                  <span className="font-mono text-xs text-gold/70 mt-0.5 w-10 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink">{a.title}</p>
                    <p className="text-xs text-ink-dim mt-0.5">{a.detail}</p>
                  </div>
                  {a.year && (
                    <span className="ml-auto font-mono text-[11px] text-ink-faint shrink-0">{a.year}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="eyebrow mb-6">
              <BadgeCheck size={12} className="text-violet-soft" /> Licenses & Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="glass-card p-5 flex items-start gap-4 hover:border-violet/30 transition-colors duration-300"
                >
                  <span className="w-9 h-9 rounded-full bg-violet/10 border border-violet/25 flex items-center justify-center text-violet-soft shrink-0">
                    <BadgeCheck size={15} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink leading-snug">{c.title}</p>
                    <p className="text-xs text-ink-dim mt-1">
                      {c.org}
                      {c.detail ? ` · ${c.detail}` : ''}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
