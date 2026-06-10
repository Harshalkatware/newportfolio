import { useEffect, useRef } from 'react'
import { Github, GitBranch, Star, GitCommit, Users } from 'lucide-react'

const stats = [
  { icon: <GitCommit size={20} />, label: 'Total Commits', value: '200+', color: 'text-green-400' },
  { icon: <GitBranch size={20} />, label: 'Repositories', value: '15+', color: 'text-blue-400' },
  { icon: <Star size={20} />, label: 'Stars Earned', value: '44+', color: 'text-yellow-400' },
  { icon: <Users size={20} />, label: 'Followers', value: '10+', color: 'text-purple-400' },
]

export default function GitHubStats() {
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
    <section id="github" ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(({ icon, label, value, color }) => (
            <div key={label} className="glass gradient-border rounded-2xl p-5 text-center hover:border-blue-500/30 transition-all group">
              <div className={`${color} flex justify-center mb-3 group-hover:scale-110 transition-transform`}>{icon}</div>
              <div className={`text-3xl font-black ${color} mb-1`}>{value}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Cards */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          <div className="glass gradient-border rounded-2xl overflow-hidden">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Harshalkatware&show_icons=true&theme=transparent&hide_border=true&title_color=3B82F6&icon_color=8B5CF6&text_color=94a3b8&bg_color=00000000"
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="glass gradient-border rounded-2xl overflow-hidden">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Harshalkatware&theme=transparent&hide_border=true&ring=3B82F6&fire=8B5CF6&currStreakLabel=3B82F6&sideLabels=94a3b8&dates=94a3b8&currStreakNum=F8FAFC&sideNums=F8FAFC&stroke=1E293B"
              alt="GitHub Streak"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="reveal mt-6 glass gradient-border rounded-2xl overflow-hidden">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Harshalkatware&bg_color=transparent&color=3B82F6&line=8B5CF6&point=06B6D4&hide_border=true"
            alt="GitHub Activity"
            className="w-full"
            loading="lazy"
          />
        </div>

        <div className="reveal text-center mt-8">
          <a
            href="https://github.com/Harshalkatware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/25"
          >
            <Github size={18} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
