'use client'
import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, Check, Loader2 } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import Media from './Media'
import { PROFILE } from '@/lib/portfolio/data'
import { CONTACT_MEDIA } from '@/lib/portfolio/media'

function Field({ id, label, type = 'text', value, onChange, required, rows, placeholder }) {
  const shared =
    'mt-2 w-full rounded-lg border border-[hsl(var(--line)/0.12)] bg-[hsl(var(--bg))] px-4 py-3 text-sm text-[hsl(var(--ink))] placeholder:text-[hsl(var(--ink-3))] transition-colors focus:border-[hsl(var(--accent))] focus:outline-none'

  return (
    <div>
      <label htmlFor={id} className="t-eyebrow">
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={shared}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Submit logic preserved exactly — posts to /api/contact (MongoDB backed).
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

  const channels = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message us',
      href: `https://wa.me/${PROFILE.whatsapp}`,
    },
  ]

  return (
    <Section
      id="contact"
      className="bg-sec-a"
      eyebrow="Get started"
      title="Start a project"
      lead="Tell us what you're building. We reply within one business day."
    >
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Consultant visual + direct channels */}
        <Reveal>
          <Media
            media={CONTACT_MEDIA}
            ratio="4 / 5"
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="rounded-2xl border border-[hsl(var(--line)/0.09)]"
          />

          <ul className="mt-5 space-y-px overflow-hidden rounded-xl border border-[hsl(var(--line)/0.08)] bg-[hsl(var(--line)/0.08)]">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-4 bg-[hsl(var(--bg))] p-4 transition-colors hover:bg-[hsl(var(--surface))]"
                >
                  <Icon
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-[hsl(var(--ink-3))] transition-colors group-hover:text-[hsl(var(--accent-soft))]"
                  />
                  <span className="min-w-0">
                    <span className="t-eyebrow block">{label}</span>
                    <span className="mt-0.5 block break-all text-sm text-[hsl(var(--ink))]">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="t-meta mt-5">{PROFILE.location}</p>
        </Reveal>

        {/* Form card */}
        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            noValidate
            className="surface-raised grid gap-5 rounded-2xl p-6 sm:grid-cols-2 sm:p-8"
          >
            <Field
              id="name"
              label="Name"
              value={form.name}
              onChange={change}
              required
              placeholder="Your full name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={change}
              required
              placeholder="you@company.com"
            />
            <div className="sm:col-span-2">
              <Field
                id="subject"
                label="Subject"
                value={form.subject}
                onChange={change}
                placeholder="Project enquiry, collaboration, etc."
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                id="message"
                label="Message"
                rows={6}
                value={form.message}
                onChange={change}
                required
                placeholder="What are you trying to build, and what does success look like?"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full disabled:opacity-60 sm:w-auto"
              >
                {status === 'loading' && (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                )}
                {status === 'success' ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  status !== 'loading' && <Send size={15} aria-hidden="true" />
                )}
                {status === 'loading'
                  ? 'Sending…'
                  : status === 'success'
                    ? 'Message sent'
                    : 'Send message'}
              </button>

              <p role="status" aria-live="polite" className="mt-4 text-sm">
                {error && <span className="text-red-400">{error}</span>}
                {status === 'success' && !error && (
                  <span className="text-[hsl(var(--accent-soft))]">
                    Thanks — we&apos;ll be in touch shortly.
                  </span>
                )}
              </p>

              <p className="t-meta mt-2">
                By submitting, you agree to be contacted about your enquiry.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
