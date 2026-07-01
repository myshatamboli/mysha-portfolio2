import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects, research } from '../data/portfolio'

const accentMap = {
  gold: { text: 'text-gold', border: 'hover:border-gold/40', dot: 'bg-gold', chipBorder: 'border-gold/30' },
  violet: {
    text: 'text-violet-soft',
    border: 'hover:border-violet/40',
    dot: 'bg-violet',
    chipBorder: 'border-violet/30'
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-24 sm:py-32 relative">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="// 03 — Projects"
          title="Ventures & research"
          description="Two founded companies and an independent research study — each born from a real problem worth solving."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const accent = accentMap[p.accent]
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group glass-card p-7 flex flex-col transition-all duration-300 ${accent.border} hover:-translate-y-1 hover:shadow-card`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`chip ${accent.text} ${accent.chipBorder}`}>{p.tag}</span>
                 {p.website && (
                    <a
                     href={p.website}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink-dim group-hover:text-ink group-hover:border-ink/30 transition-colors"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
                <p className="text-xs font-mono text-ink-faint mt-1">{p.role}</p>
               <p className="text-sm text-ink-dim mt-4 leading-relaxed">
  {p.description}
</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.impact.map((point) => (
                    <li key={point} className="text-[13px] text-ink-dim leading-relaxed flex gap-2.5">
                      <span className={`mt-1.5 w-1 h-1 rounded-full ${accent.dot} shrink-0`} />
                      {point}
                    </li>
                  ))}
                </ul>

                {p.website && (
                  <a
                   href={p.website}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text}`}
                  >
                    Visit live site
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 glass-card p-6 flex flex-wrap items-center gap-4 justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-violet/10 border border-violet/30 flex items-center justify-center text-violet-soft shrink-0">
              <Sparkles size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{research.title}</p>
              <p className="text-xs text-ink-dim mt-0.5">{research.points[0]}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-ink-faint shrink-0">{research.period}</span>
        </motion.div>
      </div>
    </section>
  )
}
