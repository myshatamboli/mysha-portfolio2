import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Download } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'View profile', href: profile.socials.linkedin },
  { icon: Github, label: 'GitHub', value: 'View profile', href: profile.socials.github }
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="max-w-content mx-auto relative">
        <SectionHeading
          align="center"
          eyebrow="// 06 — Contact"
          title="Let's build something."
          description="Open to internships, collaborations, scholarships and conversations about ventures, research or leadership."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-4"
        >
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="glass-card p-5 flex items-center gap-4 group hover:border-gold/40 transition-colors duration-300"
            >
              <span className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold shrink-0">
                <c.icon size={16} />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-[11px] font-mono uppercase tracking-wide text-ink-faint">{c.label}</p>
                <p className="text-sm text-ink mt-0.5 truncate">{c.value}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto text-ink-faint group-hover:text-gold transition-colors shrink-0"
              />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mt-10"
        >
          <a href={profile.cvFile} download className="btn-primary">
            Download Full CV
            <Download size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
