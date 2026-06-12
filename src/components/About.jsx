import { useEffect, useRef } from 'react'
import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '12+' },
  { label: 'GitHub Repos', value: '15+' },
  { label: 'Months Learning', value: '18+' },
]

const highlights = [
  { icon: <Code2 size={22} />, title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code.' },
  { icon: <Cpu size={22} />, title: 'Backend Expertise', desc: 'Java & Spring Boot for robust server-side applications.' },
  { icon: <Globe size={22} />, title: 'Full Stack', desc: 'End-to-end development from UI to database layers.' },
  { icon: <Zap size={22} />, title: 'Fast Learner', desc: 'Constantly exploring and adopting new technologies.' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0F172A, #1a0500, #0F172A)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.05)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#22D3EE' }}>Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(to right, #3B82F6, #8B5CF6)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar + Stats */}
          <div className="reveal space-y-8">
            {/* Avatar Card */}
            <div className="glass gradient-border rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))' }} />
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-2xl flex items-center justify-center text-5xl font-black text-white shadow-2xl mb-4" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)', boxShadow: '0 0 40px rgba(59,130,246,0.3)' }}>
                  HK
                </div>
                <h3 className="text-2xl font-bold text-white">Harshal Katware</h3>
                <p className="font-mono text-sm mt-1" style={{ color: '#22D3EE' }}>Full Stack Java Developer</p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full text-xs border" style={{ background: 'rgba(59,130,246,0.2)', color: '#22D3EE', borderColor: 'rgba(59,130,246,0.3)' }}>Java</span>
                  <span className="px-3 py-1 rounded-full text-xs border" style={{ background: 'rgba(139,92,246,0.2)', color: '#A78BFA', borderColor: 'rgba(139,92,246,0.3)' }}>Spring Boot</span>
                  <span className="px-3 py-1 rounded-full text-xs border" style={{ background: 'rgba(139,92,246,0.2)', color: '#67E8F9', borderColor: 'rgba(139,92,246,0.3)' }}>React</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="glass rounded-2xl p-5 text-center transition-all group" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                  <div className="text-3xl font-black gradient-text group-hover:scale-110 transition-transform inline-block">{value}</div>
                  <div className="text-slate-400 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Text + Highlights */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Hey! I'm <span className="text-white font-semibold">Harshal Katware</span>, a passionate Full Stack Java Developer focused on building modern, scalable web applications that solve real-world problems.
              </p>
              <p>
                I specialize in <span style={{ color: '#22D3EE' }}>Java & Spring Boot</span> for backend systems and enjoy crafting clean, responsive frontends. I believe in writing code that's not just functional, but maintainable and elegant.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, and continuously leveling up my skills in the ever-evolving tech landscape.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map(({ icon, title, desc }) => (
                <div key={title} className="glass rounded-2xl p-4 transition-all group cursor-default" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(59,130,246,0.2)', color: '#22D3EE' }}>
                    {icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{title}</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}