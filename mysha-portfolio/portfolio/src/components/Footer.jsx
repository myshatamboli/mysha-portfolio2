import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="section-pad py-8 border-t border-line">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <p className="font-mono text-[11px] text-ink-faint">{profile.location}</p>
      </div>
    </footer>
  )
}
