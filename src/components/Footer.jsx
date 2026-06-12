import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative" style={{ borderTop: '1px solid rgba(59,130,246,0.15)', background: '#0F172A' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Text */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                <Code2 size={15} className="text-white" />
              </div>
              <span className="font-mono font-bold text-lg gradient-text">HK.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Crafted with <Heart size={12} className="inline text-red-500 fill-red-500 mx-1" /> by Harshal Katware
            </p>
            <p className="text-slate-600 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
              <button key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-500 text-sm transition-colors"
                onMouseEnter={e => e.target.style.color = '#22D3EE'}
                onMouseLeave={e => e.target.style.color = ''}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social + Back to Top */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Harshalkatware', icon: <Github size={17} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/harshalkatware', icon: <Linkedin size={17} />, label: 'LinkedIn' },
              { href: 'mailto:katwareharshal@gmail.com', icon: <Mail size={17} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 transition-all"
                onMouseEnter={e => e.currentTarget.style.color = '#22D3EE'}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                {icon}
              </a>
            ))}
            <button onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white hover:opacity-90 hover:scale-110 transition-all ml-1"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 15px rgba(59,130,246,0.25)' }}
              aria-label="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}