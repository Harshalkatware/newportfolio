import { useEffect, useRef } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    emoji: '🛒',
    description: 'Full-featured online shopping platform with product catalog, cart management, order processing, and secure payment integration.',
    tags: ['Java', 'Spring Boot', 'React', 'SQL', 'REST API'],
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/40',
    accent: 'text-blue-400',
    stars: 12,
    github: 'https://github.com/Harshalkatware',
    demo: '#',
  },
  {
    title: 'Hotel  Management System',
    emoji: '🎓',
    description: 'Comprehensive system for managing student records, attendance, grades, and course enrollment with role-based access control.',
    tags: ['Java', 'Spring Boot', 'SQL', 'Tailwind CSS'],
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/40',
    accent: 'text-purple-400',
    stars: 8,
    github: 'https://github.com/Harshalkatware',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    emoji: '💼',
    description: 'Modern, responsive personal portfolio with glassmorphism design, smooth animations, and dynamic content management.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/40',
    accent: 'text-cyan-400',
    stars: 15,
    github: 'https://github.com/Harshalkatware/Portfolio',
    demo: 'https://portfolio-harshalkatware.vercel.app',
  },
  {
    title: 'Task Management App',
    emoji: '✅',
    description: 'Productivity application with task tracking, priority management, due date reminders, and collaborative features.',
    tags: ['Java', 'Spring Boot', 'JavaScript', 'CSS3'],
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'hover:border-green-500/40',
    accent: 'text-green-400',
    stars: 9,
    github: 'https://github.com/Harshalkatware',
    demo: '#',
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">A collection of projects showcasing my skills across full stack development.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal glass gradient-border rounded-3xl overflow-hidden ${project.border} transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/10`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-br ${project.color} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="relative flex items-center justify-between">
                  <div className="text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </div>
                  <div className="flex items-center gap-1 glass px-3 py-1 rounded-full">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-slate-300 text-xs font-mono">{project.stars}</span>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2.5 py-1 rounded-lg glass text-xs font-medium ${project.accent} border border-current/20`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-300 hover:text-white hover:border-blue-500/40 transition-all text-sm font-medium"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all text-sm font-medium hover:opacity-90 hover:scale-105"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/Harshalkatware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass gradient-border rounded-2xl text-slate-300 hover:text-white transition-all group"
          >
            <Github size={18} />
            <span>See all projects on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
