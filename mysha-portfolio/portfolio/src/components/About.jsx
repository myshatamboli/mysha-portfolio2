import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Languages, Award } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { about } from '../data/portfolio'

const factIcons = [MapPin, GraduationCap, Award, Languages]

export default function About() {
  return (
    <section id="about" className="section-pad py-24 sm:py-32 relative">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="// 01 — About" title="Profile" />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ink-dim text-base sm:text-lg leading-relaxed">{about.summary}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {about.facts.map((fact, i) => {
                const Icon = factIcons[i % factIcons.length]
                return (
                  <div key={fact.label} className="glass-card p-5">
                    <Icon size={16} className="text-gold mb-3" />
                    <p className="text-[11px] font-mono uppercase tracking-wide text-ink-faint">
                      {fact.label}
                    </p>
                    <p className="text-sm text-ink mt-1.5 leading-snug">{fact.value}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="eyebrow mb-4">Education</h3>
              <div className="space-y-4">
                {about.education.map((ed) => (
                  <div key={ed.period} className="border-l border-line pl-4">
                    <p className="text-sm font-semibold text-ink">{ed.school}</p>
                    <p className="text-xs font-mono text-gold/80 mt-0.5">{ed.period}</p>
                    <p className="text-sm text-ink-dim mt-1.5 leading-relaxed">{ed.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Skills</h3>
              <div className="space-y-4">
                {Object.entries(about.skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-xs text-ink-faint font-mono uppercase tracking-wide mb-2">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
