import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const roles = ['Full Stack Developer', 'React Developer', 'Java Developer', 'Problem Solver']

const floatingIcons = [
  { label: 'Java', color: 'from-blue-500 to-purple-500', x: '8%', y: '20%', delay: '0s', size: 'w-12 h-12' },
  { label: 'Spring', color: 'from-green-500 to-emerald-600', x: '85%', y: '15%', delay: '1.5s', size: 'w-10 h-10' },
  { label: 'React', color: 'from-cyan-400 to-blue-500', x: '90%', y: '60%', delay: '3s', size: 'w-14 h-14' },
  { label: 'SQL', color: 'from-blue-500 to-indigo-600', x: '5%', y: '70%', delay: '2s', size: 'w-11 h-11' },
  { label: 'Git', color: 'from-blue-400 to-violet-500', x: '75%', y: '80%', delay: '0.5s', size: 'w-10 h-10' },
  { label: 'JS', color: 'from-yellow-400 to-blue-400', x: '15%', y: '85%', delay: '4s', size: 'w-12 h-12' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

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

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

{/* ===== ACTUAL MOUNTAINS PHOTO BACKGROUND ===== */}
{/* <div
  className="absolute inset-0 w-full h-full z-0"
  style={{
    backgroundImage: `url(/MountainsBg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  }}
/> */}
{/* console.log line yaha se hata di */}

{/* Dark overlay so text is readable */}

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(5, 0, 15, 0.55)' }} />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0F172A)' }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map((icon) => (
          <div
            key={icon.label}
            className={`absolute float-icon ${icon.size} rounded-2xl bg-gradient-to-br ${icon.color} flex items-center justify-center text-white font-bold text-xs shadow-lg opacity-70`}
            style={{ left: icon.x, top: icon.y, animationDelay: icon.delay }}
          >
            {icon.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-4 rounded-full text-sm font-medium mb-8 animate-fade-in"
          style={{
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(59,130,246,0.5)',
            backdropFilter: 'blur(10px)',
            color: '#67E8F9',
          }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
          <span className="text-white drop-shadow-2xl">Harshal</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.5))',
          }}>Katware</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="font-mono text-xl md:text-2xl" style={{ color: '#67E8F9' }}>
            {displayed}
            <span className="typing-cursor" style={{ color: '#3B82F6' }} />
          </span>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(200,220,255,0.85)', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
          Building{' '}
          <span className="font-semibold" style={{ color: '#22D3EE' }}>scalable web applications</span>
          {' '}with modern technologies. Passionate about clean code and elegant solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              boxShadow: '0 0 30px rgba(59,130,246,0.4)',
            }}
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all flex items-center justify-center gap-2"
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(59,130,246,0.55)',
              backdropFilter: 'blur(10px)',
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { href: 'https://github.com/Harshalkatware', icon: <Github size={20} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/harshalkatware', icon: <Linkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:katwareharshal@gmail.com', icon: <Mail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(59,130,246,0.4)',
                backdropFilter: 'blur(10px)',
                color: '#67E8F9',
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
        style={{ color: 'rgba(59,130,246,0.7)' }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}