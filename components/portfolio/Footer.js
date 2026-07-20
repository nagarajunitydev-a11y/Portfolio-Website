'use client'
import { STUDIO, NAV_LINKS } from '@/lib/portfolio/data'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const FOOTER_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Technologies', href: '#technology' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="glass-strong border-glow rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#F4D97C] mb-2">Newsletter</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Insights from our team, monthly.</h3>
            <p className="text-[#A0A0A0] mt-1 text-sm">Deep-dives on AI, XR and craft — no spam, unsubscribe anytime.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 md:w-80 px-4 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white placeholder:text-[#A0A0A0]/60 focus:outline-none focus:border-[#D4AF37]/60"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D97C] text-black font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#7C3AED] to-[#F4D97C] p-[1.5px]">
                <div className="h-full w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-center font-bold text-white text-sm">
                  {'{L}'}
                </div>
              </div>
              <span className="font-semibold tracking-tight text-white">{STUDIO.name}</span>
            </a>
            <p className="mt-4 text-sm text-[#A0A0A0] max-w-sm leading-relaxed">
              We build AI-powered software, immersive WebXR experiences and photorealistic CGI — for startups, enterprises and global brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Github, href: STUDIO.github, label: 'GitHub' },
                { icon: Linkedin, href: STUDIO.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: STUDIO.twitter, label: 'Twitter' },
                { icon: Mail, href: `mailto:${STUDIO.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-lg glass border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-[#D4AF37]/40 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#F4D97C] mb-4">Navigate</div>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#F4D97C] mb-4">Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">Cookies</a></li>
              <li><a href={`mailto:${STUDIO.email}`} className="text-sm text-[#A0A0A0] hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A0A0A0]">
            © {new Date().getFullYear()} {STUDIO.name}. Crafted by our team with obsession.
          </div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-[#A0A0A0] hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
