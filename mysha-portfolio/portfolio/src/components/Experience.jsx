import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-pad py-24 sm:py-32 relative bg-bg-surface/30">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="// 02 — Experience"
          title="Where I've worked"
          description="Hands-on roles in operations, coaching and education — building the leadership instincts behind every venture."
        />

        <div className="relative mt-4">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-14"
              >
                <span className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bg-surface border border-line flex items-center justify-center text-gold">
                  <Briefcase size={14} />
                </span>

                <div className="glass-card p-6 hover:border-gold/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">{job.org}</h3>
                    <span className="font-mono text-xs text-gold/80">{job.period}</span>
                  </div>
                  <p className="text-sm text-ink-dim mt-1">{job.role} · {job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="text-sm text-ink-dim leading-relaxed flex gap-2.5">
                        <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
