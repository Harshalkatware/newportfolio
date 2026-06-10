import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setActive(id); setOpen(false) }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-blue-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('Home')} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-mono font-bold text-lg">
            <span className="gradient-text">HK</span>
            <span className="text-slate-400">.</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === link
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >{link}</button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('Contact')}
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/25"
        >
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 hover:text-white transition-colors p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-strong mx-4 mb-4 rounded-2xl p-4 space-y-1">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="block w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo('Contact')} className="block w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold text-center">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}
