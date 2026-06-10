import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const roles = ['Full Stack Java Developer', 'Spring Boot Specialist', 'React Developer', 'Problem Solver']

const floatingIcons = [
  { label: 'Java', color: 'from-orange-500 to-red-500', x: '8%', y: '20%', delay: '0s', size: 'w-12 h-12' },
  { label: 'Spring', color: 'from-green-500 to-emerald-600', x: '85%', y: '15%', delay: '1.5s', size: 'w-10 h-10' },
  { label: 'React', color: 'from-cyan-400 to-blue-500', x: '90%', y: '60%', delay: '3s', size: 'w-14 h-14' },
  { label: 'SQL', color: 'from-blue-500 to-indigo-600', x: '5%', y: '70%', delay: '2s', size: 'w-11 h-11' },
  { label: 'Git', color: 'from-orange-400 to-pink-500', x: '75%', y: '80%', delay: '0.5s', size: 'w-10 h-10' },
  { label: 'JS', color: 'from-yellow-400 to-orange-400', x: '15%', y: '85%', delay: '4s', size: 'w-12 h-12' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const mouseRef = useRef(null)
  const containerRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  // Mouse gradient
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      if (mouseRef.current) {
        mouseRef.current.style.background = `radial-gradient(600px at ${x}% ${y}%, rgba(59,130,246,0.12), transparent 60%)`
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Mouse follow gradient */}
      <div ref={mouseRef} className="absolute inset-0 pointer-events-none transition-all duration-300" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map((icon) => (
          <div
            key={icon.label}
            className={`absolute float-icon ${icon.size} rounded-2xl bg-gradient-to-br ${icon.color} flex items-center justify-center text-white font-bold text-xs shadow-lg opacity-60`}
            style={{ left: icon.x, top: icon.y, animationDelay: icon.delay }}
          >
            {icon.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
          <span className="text-white">Harshal</span>
          <br />
          <span className="gradient-text">Katware</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="font-mono text-xl md:text-2xl text-slate-300">
            <span className="text-blue-400">&lt;</span>
            <span className="text-cyan-300">{displayed}</span>
            <span className="typing-cursor text-blue-400" />
            <span className="text-blue-400"> /&gt;</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building <span className="text-blue-400 font-semibold">scalable web applications</span> with modern technologies.
          Passionate about clean code and elegant solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-2xl glass gradient-border text-white font-semibold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { href: 'https://github.com/Harshalkatware', icon: <Github size={20} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/harshalkatware', icon: <Linkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:harshalkatware@email.com', icon: <Mail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
