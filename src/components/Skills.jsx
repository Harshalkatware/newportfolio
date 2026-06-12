import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'Tailwind CSS', level: 82, icon: '💨' },
    ]
  },
  {
    title: 'Backend',
    color: 'from-purple-500 to-violet-600',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 88, icon: '☕' },
      { name: 'Spring Boot', level: 82, icon: '🍃' },
    ]
  },
  {
    title: 'Database',
    color: 'from-pink-500 to-rose-500',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 80, icon: '🗄️' },
    ]
  },
  {
    title: 'Tools',
    color: 'from-cyan-500 to-blue-600',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'Postman', level: 80, icon: '📬' },
    ]
  },
]

const techBadges = ['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'SQL', 'Git', 'GitHub', 'Postman', 'REST API']

export default function Skills() {
  const ref = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            if (!animatedRef.current) {
              animatedRef.current = true
              ref.current?.querySelectorAll('.skill-fill').forEach(bar => {
                const w = bar.dataset.width
                setTimeout(() => { bar.style.width = w }, 200)
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0F172A, #100500, #0F172A)' }}>
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.05)' }} />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#22D3EE' }}>What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(to right, #3B82F6, #8B5CF6)' }} />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <div key={cat.title} className="reveal glass gradient-border rounded-3xl p-6 transition-all group" style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                  <span className="text-slate-400 text-sm">{cat.skills.length} skills</span>
                </div>
              </div>
              <div>
                {cat.skills.map(skill => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm flex items-center gap-1">
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span className="font-mono text-sm font-bold" style={{ color: '#22D3EE' }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(59,130,246,0.15)' }}>
                      <div
                        className={`skill-fill h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        data-width={`${skill.level}%`}
                        style={{ width: '0%', transition: 'width 1.5s ease' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badge Cloud */}
        <div className="reveal text-center">
          <p className="text-sm mb-6 font-mono" style={{ color: 'rgba(100,180,255,0.6)' }}>// Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-xl text-sm font-medium text-slate-300 transition-all cursor-default hover:scale-105"
                style={{ transitionDelay: `${i * 0.03}s` }}
                onMouseEnter={e => { e.target.style.color = '#22D3EE'; e.target.style.borderColor = 'rgba(59,130,246,0.4)' }}
                onMouseLeave={e => { e.target.style.color = ''; e.target.style.borderColor = '' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}