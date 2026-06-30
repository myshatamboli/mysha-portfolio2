import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 sm:pt-5 px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-content flex items-center justify-between rounded-full border transition-all duration-300 px-4 sm:px-5 py-2.5 ${
          scrolled
            ? 'bg-bg-surface/80 backdrop-blur-xl border-line shadow-card'
            : 'bg-transparent border-transparent'
        }`}
      >
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-display font-semibold text-ink text-sm tracking-tight"
        >
          <span className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 text-gold flex items-center justify-center font-mono text-[11px]">
            MT
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-colors ${
                active === l.id ? 'text-ink' : 'text-ink-dim hover:text-ink'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-bg-raised border border-line rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvFile}
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-bg bg-ink rounded-full px-4 py-2 hover:shadow-glow transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-line text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[68px] left-4 right-4 bg-bg-surface/95 backdrop-blur-xl border border-line rounded-2xl p-3 flex flex-col gap-1 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                  active === l.id ? 'bg-bg-raised text-ink' : 'text-ink-dim'
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={profile.cvFile}
              download
              className="mt-1 text-center px-4 py-3 rounded-xl text-sm font-semibold bg-ink text-bg"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
