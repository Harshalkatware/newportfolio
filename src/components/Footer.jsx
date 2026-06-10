import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-slate-800/60 bg-[#0a1120]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Text */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
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
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
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
              { href: 'mailto:harshalkatware@email.com', icon: <Mail size={17} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              >
                {icon}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 hover:scale-110 transition-all shadow-lg shadow-blue-500/20 ml-1"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
