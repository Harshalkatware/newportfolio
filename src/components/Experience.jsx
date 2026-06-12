import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase } from 'lucide-react'

const timeline = [
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Bachelor of Computer Science',
    org: 'Rajarshi chatrapati shahu college, kolhapur.',
    period: '2021 – 2024',
    desc: 'Studied core CS fundamentals including Data Structures, Algorithms, Database Management, Operating Systems, and Software Engineering. Built strong foundation for full stack development.',
    tags: ['HTML5','C','C++','javascript'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    type: 'learning',
    icon: <GraduationCap size={18} />,
    title: 'Master of Computer Applications',
    org: 'DY patil agricultural & technical university, kolhapur.',
    period: '2024 – 2026',
    desc: 'Deep-dived into Java ecosystem — Core Java, Spring Framework, Spring Boot, REST APIs, and microservices architecture. Completed multiple hands-on projects.',
    tags: ['Java', 'Spring Boot', 'REST API', 'React.js', 'PostgreSQL'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    type: 'project',
    icon: <Briefcase size={18} />,
    title: 'Junior Software Developer Intern',
    org: 'Starsoftech solutions',
    period: 'Present',
    desc: 'Built responsive web interfaces using HTML5, CSS3, JavaScript, and Tailwind CSS. Focused on modern design patterns and performance optimization.',
    tags: ['React', 'Tailwind', 'JavaScript', 'Vite'],
    color: 'from-cyan-500 to-blue-600',
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
    <section id="experience" ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0F172A, #1a0500, #0F172A)' }}>
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.05)' }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#22D3EE' }}>My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(to right, #3B82F6, #8B5CF6)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)' }} />

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`reveal relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 md:-translate-x-2 top-6 z-10" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', borderColor: '#0F172A', boxShadow: '0 0 10px rgba(59,130,246,0.4)' }} />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass gradient-border rounded-2xl p-10 transition-all group">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
                        <p className="font-mono text-xs mt-0.5" style={{ color: '#22D3EE' }}>{item.org}</p>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full text-slate-400 text-xs font-mono mb-3" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                      📅 {item.period}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-lg glass text-xs text-slate-300" style={{ borderColor: 'rgba(59,130,246,0.2)' }}>
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