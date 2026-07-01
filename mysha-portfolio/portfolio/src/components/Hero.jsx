import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile, heroStats } from '../data/portfolio'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(720px circle at ${mx}px ${my}px, rgba(245,197,107,0.14), transparent 42%)`

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <motion.div style={{ background }} className="pointer-events-none absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[130px]" />
      <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-violet/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-gold backdrop-blur"
            >
              <Sparkles size={14} />
              London · Founder · Builder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[7rem] xl:text-[8rem]"
            >
              Mysha
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-soft to-violet-soft bg-clip-text text-transparent">
                Tamboli
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-xl leading-relaxed text-white/65 sm:text-2xl"
            >
              I build technology that solves real human problems through AI, accessibility and maternal health innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={profile.cvFile}
                download
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-1 hover:bg-gold"
              >
                Download CV
              </a>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold/60 hover:text-gold"
              >
                View Work
              </button>

              <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href={profile.socials.github} label="GitHub">
                <Github size={18} />
              </SocialIcon>
              <SocialIcon href={profile.socials.email} label="Email">
                <Mail size={18} />
              </SocialIcon>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[600px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl" />
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold/25 to-violet/20 blur-3xl" />

            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-[230px] rounded-3xl border border-white/10 bg-white/[0.065] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-gold/40 ${
                  i === 0 ? 'right-10 top-8' :
                  i === 1 ? 'left-4 top-44' :
                  i === 2 ? 'right-0 top-80' :
                  'left-28 bottom-12'
                }`}
              >
                <p className="font-display text-3xl font-bold text-white">{stat.label}</p>
                <p className="mt-2 text-sm leading-snug text-white/55">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 sm:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 backdrop-blur transition hover:-translate-y-1 hover:border-gold/50 hover:text-gold"
    >
      {children}
    </a>
  )
}
