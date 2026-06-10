import { useEffect, useRef, useState } from 'react'
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// 🔧 Apni EmailJS details yahan daalo:
const EMAILJS_SERVICE_ID = 'service_k5wodq9'
const EMAILJS_TEMPLATE_ID = 'template_deoewfl'
const EMAILJS_PUBLIC_KEY = 'V5JOAKTYmIiEV6_aP'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'Harshal',
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((err) => {
        console.error('EmailJS Error:', err)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  const contacts = [
    { icon: <Mail size={20} />, label: 'Email', value: 'harshalkatware@email.com', href: 'mailto:harshalkatware@email.com', color: 'from-blue-500 to-cyan-500' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'github.com/Harshalkatware', href: 'https://github.com/Harshalkatware', color: 'from-slate-600 to-slate-500' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/harshalkatware', href: 'https://linkedin.com/in/harshalkatware', color: 'from-blue-600 to-blue-500' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Maharashtra, India', href: '#', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/5 -translate-x-1/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="font-mono text-blue-400 text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="reveal space-y-6">
            <div className="glass gradient-border rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Let's work together!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hello — my inbox is always open!
              </p>

              <div className="space-y-4">
                {contacts.map(({ icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{label}</div>
                      <div className="text-slate-200 text-sm font-medium group-hover:text-blue-400 transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass gradient-border rounded-2xl p-5 flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Available for Work</div>
                <div className="text-slate-400 text-xs">Open to full-time & freelance opportunities</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass gradient-border rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {status === 'sent' ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle size={48} className="text-green-400 mx-auto animate-bounce" />
                  <p className="text-white font-semibold text-lg">Message Sent!</p>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-12 space-y-3">
                  <XCircle size={48} className="text-red-400 mx-auto" />
                  <p className="text-white font-semibold text-lg">Something went wrong!</p>
                  <p className="text-slate-400 text-sm">Please try again or email me directly at harshalkatware@email.com</p>
                  <button onClick={() => setStatus('idle')} className="mt-2 px-4 py-2 rounded-xl glass text-slate-300 hover:text-white text-sm transition-all">Try Again</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Harshal Katware"
                      className="w-full bg-slate-800/60 border border-slate-600/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-slate-800 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full bg-slate-800/60 border border-slate-600/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-slate-800 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-800/60 border border-slate-600/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-slate-800 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}