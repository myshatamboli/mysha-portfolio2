/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0C',
          surface: '#131316',
          raised: '#1A1A1F'
        },
        line: '#232329',
        ink: {
          DEFAULT: '#F4F4F6',
          dim: '#9C9CA3',
          faint: '#5C5C63'
        },
        gold: {
          DEFAULT: '#E8B86D',
          soft: '#F2CE96',
          dim: '#8A6A3C'
        },
        violet: {
          DEFAULT: '#8C7AE6',
          soft: '#ADA1ED',
          dim: '#564C8C'
        }
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      maxWidth: {
        content: '1180px'
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(232,184,109,0.10), transparent 60%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(232,184,109,0.15), 0 8px 40px -8px rgba(232,184,109,0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
}
