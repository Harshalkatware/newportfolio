import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

const timeline = [
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Bachelor of Engineering',
    org: 'Computer Science & Engineering',
    period: '2021 – 2025',
    desc: 'Studied core CS fundamentals including Data Structures, Algorithms, Database Management, Operating Systems, and Software Engineering. Built strong foundation for full stack development.',
    tags: ['DSA', 'DBMS', 'OOP', 'OS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'learning',
    icon: <Award size={18} />,
    title: 'Java Full Stack Development',
    org: 'Self-Taught / Online Courses',
    period: '2023 – Present',
    desc: 'Deep-dived into Java ecosystem — Core Java, Spring Framework, Spring Boot, REST APIs, and microservices architecture. Completed multiple hands-on projects.',
    tags: ['Java', 'Spring Boot', 'REST API', 'Microservices'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'project',
    icon: <Briefcase size={18} />,
    title: 'Frontend Development',
    org: 'Personal Projects',
    period: '2022 – Present',
    desc: 'Built responsive web interfaces using HTML5, CSS3, JavaScript, and Tailwind CSS. Focused on modern design patterns and performance optimization.',
    tags: ['React', 'Tailwind', 'JavaScript', 'Vite'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    type: 'achievement',
    icon: <Award size={18} />,
    title: 'Portfolio & GitHub Active',
    org: 'Open Source Contributions',
    period: '2024 – Present',
    desc: 'Actively building and deploying projects on Vercel, maintaining GitHub repositories, and continuously expanding technical skills through real-world projects.',
    tags: ['Git', 'GitHub', 'Vercel', 'Deployment'],
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`reveal relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#0F172A] shadow-lg shadow-blue-500/30 md:-translate-x-2 top-6 z-10" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass gradient-border rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
                        <p className="text-blue-400 text-xs font-mono mt-0.5">{item.org}</p>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-slate-700/50 text-slate-400 text-xs font-mono mb-3 border border-slate-600/30">
                      📅 {item.period}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-lg glass text-xs text-slate-300 border-slate-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
