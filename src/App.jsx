import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
// import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-[100]">
      <div className="text-center space-y-4">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin" />
          <div className="absolute inset-2 rounded-full border-t-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        </div>
        <p className="font-mono text-blue-400 text-sm animate-pulse">Loading portfolio...</p>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <GitHubStats /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
