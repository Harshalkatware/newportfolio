import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
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
    color: 'from-blue-500 to-purple-600',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 88, icon: '☕' },
      { name: 'Spring Boot', level: 82, icon: '🍃' },
    ]
  },
  {
    title: 'Database',
    color: 'from-purple-500 to-pink-500',
    icon: '🗄️',
    skills: [
      { name: 'SQL', level: 80, icon: '🗄️' },
    ]
  },
  {
    title: 'Tools',
    color: 'from-orange-500 to-amber-400',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'Postman', level: 80, icon: '📬' },
    ]
  },
]

const techBadges = ['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'SQL', 'Git', 'GitHub', 'Postman', 'REST API']

function SkillBar({ name, level, icon, color, animated }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-slate-300 text-sm font-medium">
          <span>{icon}</span> {name}
        </span>
        <span className="text-blue-400 font-mono text-sm font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1500 ease-out`}
          style={{ width: animated ? `${level}%` : '0%', transition: 'width 1.5s ease' }}
        />
      </div>
    </div>
  )
}

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
              // Animate all bars
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
    <section id="skills" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <div key={cat.title} className="reveal glass gradient-border rounded-3xl p-6 hover:border-blue-500/30 transition-all group" style={{ transitionDelay: `${ci * 0.1}s` }}>
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
                      <span className="font-mono text-sm text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
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
          <p className="text-slate-400 text-sm mb-6 font-mono">// Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-xl text-sm font-medium text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all cursor-default hover:scale-105"
                style={{ transitionDelay: `${i * 0.03}s` }}
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
