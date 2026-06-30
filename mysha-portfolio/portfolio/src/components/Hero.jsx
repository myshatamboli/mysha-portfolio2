import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile, heroStats } from '../data/portfolio'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgba(140,122,230,0.07), transparent 70%)`

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 section-pad"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 md:opacity-100 transition-opacity"
        style={{ background }}
      />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-violet/10 blur-[120px]" />

      <div className="relative max-w-content mx-auto w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              {profile.location} · Open to opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-semibold leading-[1.02] tracking-tight text-ink"
            >
              {profile.name.split(' ')[0]}
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-soft to-violet-soft bg-clip-text text-transparent">
                {profile.name.split(' ')[1]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-ink-dim leading-relaxed"
            >
              {profile.tagline} Co-founder of{' '}
              <span className="text-ink font-medium">Kangara</span> &{' '}
              <span className="text-ink font-medium">Echolocation</span>, independent psychology
              researcher, and Tetr College of Business scholar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.cvFile}
                download
                className="btn-primary"
              >
                Download CV
                <ArrowDown size={15} />
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                View Work
              </button>

              <div className="flex items-center gap-2 ml-1">
                <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
                  <Linkedin size={16} />
                </SocialIcon>
                <SocialIcon href={profile.socials.github} label="GitHub">
                  <Github size={16} />
                </SocialIcon>
                <SocialIcon href={profile.socials.email} label="Email">
                  <Mail size={16} />
                </SocialIcon>
              </div>
            </motion.div>
          </div>

          {/* right: floating achievement chips */}
          <div className="relative hidden lg:block h-[420px]">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute glass-card shadow-card px-5 py-4 w-[210px] animate-float`}
                style={{
                  top: ['4%', '30%', '58%', '78%'][i],
                  left: ['18%', '58%', '2%', '48%'][i],
                  animationDelay: `${i * 0.6}s`
                }}
              >
                <p className="font-display text-2xl font-semibold text-ink">{stat.label}</p>
                <p className="text-xs text-ink-dim mt-1 leading-snug">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 lg:hidden">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="glass-card px-4 py-4"
            >
              <p className="font-display text-lg font-semibold text-ink">{stat.label}</p>
              <p className="text-[11px] text-ink-dim mt-1 leading-snug">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ink-faint to-transparent"
        />
      </motion.div>
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
      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-dim hover:text-gold hover:border-gold/40 transition-colors duration-300"
    >
      {children}
    </a>
  )
}
