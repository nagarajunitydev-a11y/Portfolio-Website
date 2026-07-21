'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { PROFILE } from '@/lib/portfolio/data'
import { Mail, Phone, Github, Linkedin, Twitter, Send, Check, Loader2, MessageCircle, Calendar } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in name, email and message.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4500)
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212, 175, 55,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something extraordinary."
          subtitle="Have a project in mind or want to say hi? Drop a message — our team typically responds within 24 hours."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Info card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-strong border-glow rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white">Contact info</h3>
              <p className="text-sm text-[#A8A8A8] mt-2">Reach out through any of these channels.</p>
              <div className="mt-8 space-y-5">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 group">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#7C3AED]/20 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#A8A8A8]">Email</div>
                    <div className="text-white group-hover:text-[#D4AF37] transition-colors">{PROFILE.email}</div>
                  </div>
                </a>
                <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-4 group">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#F4D97C]/20 border border-white/10 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#A8A8A8]">Phone</div>
                    <div className="text-white group-hover:text-[#7C3AED] transition-colors">{PROFILE.phone}</div>
                  </div>
                </a>
                {/* Location removed per request */}
              </div>

              <div className="mt-8 flex items-center gap-3">
                {[
                  { icon: Github, href: PROFILE.github, label: 'GitHub' },
                  { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: PROFILE.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}

                    className="h-10 w-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[#A8A8A8] hover:text-white hover:border-[#D4AF37]/40 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Placeholders row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PROFILE.calendly}
                className="glass border-glow rounded-2xl p-5 flex items-center gap-3 hover:bg-white/[0.03] transition-colors"

              >
                <Calendar className="text-[#D4AF37]" size={18} />
                <div>
                  <div className="text-xs text-[#A8A8A8]">Schedule</div>
                  <div className="text-sm text-white font-medium">Book a call</div>
                </div>
              </a>
              <a
                href={`https://wa.me/${PROFILE.whatsapp}`}
                className="glass border-glow rounded-2xl p-5 flex items-center gap-3 hover:bg-white/[0.03] transition-colors"

              >
                <MessageCircle className="text-[#F4D97C]" size={18} />
                <div>
                  <div className="text-xs text-[#A8A8A8]">WhatsApp</div>
                  <div className="text-sm text-white font-medium">Chat now</div>
                </div>
              </a>
            </div>

            {/* Map embed and location section removed per request */}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={submit}
            className="lg:col-span-7 glass-strong border-glow rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#A8A8A8]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Your full name"
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#A8A8A8]/60 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#A8A8A8]">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={change}
                  placeholder="you@company.com"
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#A8A8A8]/60 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[#A8A8A8]">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={change}
                placeholder="Project inquiry, collaboration, etc."
                className="mt-2 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#A8A8A8]/60 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[#A8A8A8]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={change}
                rows={6}
                placeholder="Tell me about your project, goals and timeline..."
                className="mt-2 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#A8A8A8]/60 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/[0.05] transition-all resize-none"
              />
            </div>

            {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}

              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#7C3AED] text-black font-semibold overflow-hidden disabled:opacity-70"
              style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.25)' }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check size={18} /> Message sent!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-[#F4D97C] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
            </button>

            <p className="text-xs text-[#A8A8A8]/70">
              By submitting, you agree to be contacted via email regarding your inquiry.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
