'use client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Compass,
  Cpu,
  Eye,
  Globe2,
  Handshake,
  Layers3,
  Lightbulb,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

const capabilities = [
  {
    title: 'AI & Data Strategy',
    description: 'Scalable intelligence layers that turn data into production-ready decisions.',
    icon: BrainCircuit
  },
  {
    title: 'Enterprise Systems',
    description: 'Secure, resilient software platforms designed for modern business operations.',
    icon: Layers3
  },
  {
    title: 'Immersive Experiences',
    description: 'AR, VR, and MR products that create memorable digital moments and outcomes.',
    icon: Orbit
  }
]

const features = [
  {
    title: 'AI-Driven Innovation',
    description: 'We design intelligent systems that adapt, learn, and deliver measurable impact.',
    icon: BrainCircuit
  },
  {
    title: 'Enterprise Software Excellence',
    description: 'Robust platforms engineered for scale, governance, and dependable delivery.',
    icon: ShieldCheck
  },
  {
    title: 'Immersive Technology Specialists',
    description: 'Our team builds immersive products that feel natural, useful, and future-ready.',
    icon: Orbit
  },
  {
    title: 'Real-Time 3D Engineering',
    description: 'High-performance 3D experiences tailored for simulation, visualization, and interaction.',
    icon: Cpu
  },
  {
    title: 'Cloud-Native Architecture',
    description: 'Modern cloud foundations that support speed, resilience, and continuous growth.',
    icon: Globe2
  },
  {
    title: 'Long-Term Technology Partnership',
    description: 'We stay close to your roadmap, helping you evolve with confidence over time.',
    icon: Handshake
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries with thoughtful ideas and emerging technologies.',
    icon: Sparkles
  },
  {
    title: 'Excellence',
    description: 'Every detail is crafted with precision, quality, and long-term value in mind.',
    icon: Target
  },
  {
    title: 'Collaboration',
    description: 'We work closely with clients and partners to create aligned, high-impact outcomes.',
    icon: Users
  },
  {
    title: 'Integrity',
    description: 'Trust, transparency, and responsibility guide our decisions and partnerships.',
    icon: ShieldCheck
  },
  {
    title: 'Continuous Learning',
    description: 'We stay curious, sharpen our craft, and evolve with the pace of change.',
    icon: TrendingUp
  }
]

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionDivider() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-6%] top-8 h-56 w-56 rounded-full bg-[#D4AF37]/12 blur-3xl" />
        <div className="absolute right-[-4%] top-24 h-72 w-72 rounded-full bg-[#7C3AED]/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:gap-16">
        <FadeUp className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,20,20,0.92),rgba(10,10,10,0.84))] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F4D97C]">
                <Sparkles size={14} />
                About Qvrix
              </div>
              <h2 className="h-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Building the Future with Intelligent Technology
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#CFCFCF] sm:text-xl">
                Qvrix helps organizations transform bold ideas into intelligent solutions with AI, enterprise software, immersive technologies, and cloud-native engineering.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  aria-label="Contact Qvrix"
                  className="btn-luxury inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition hover:scale-[1.01]"
                >
                  Let&apos;s connect
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  aria-label="Explore Qvrix services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7C3AED]/50 hover:bg-white/[0.08]"
                >
                  Explore services
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-[1.75rem] border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">Global delivery</p>
                  <p className="mt-2 text-3xl font-semibold text-white">24/7</p>
                </div>
                <div className="rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/15 p-3 text-[#A78BFA]">
                  <Compass size={24} />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {capabilities.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#F4D97C]">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#A0A0A0]">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </FadeUp>

        <SectionDivider />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <FadeUp className="glass rounded-[2rem] border border-white/10 p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F4D97C]">
              <Eye size={14} />
              About Qvrix
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We build technology that creates opportunity, drives innovation, and accelerates growth.
            </h3>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#CFCFCF]">
              <p>
                At Qvrix, we believe technology should do more than solve problems—it should create opportunities, drive innovation, and accelerate business growth.
              </p>
              <p>
                We are a technology consulting and digital engineering company specializing in Artificial Intelligence, Enterprise Software, Extended Reality (AR/VR/MR), Digital Twins, Cloud Engineering, and Real-Time 3D Experiences.
              </p>
              <p>
                Our multidisciplinary team collaborates to build secure, scalable, and future-ready digital products from strategy and architecture through deployment and continuous innovation.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="glass rounded-[2rem] border border-white/10 p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">Our strength</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">A multidisciplinary team with depth and precision</h3>
              </div>
              <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-3 text-[#F4D97C]">
                <Zap size={20} />
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Software engineers',
                'AI specialists',
                'Solution architects',
                'XR developers',
                'Cloud experts',
                'Designers & CGI artists'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#CFCFCF]">
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <SectionDivider />

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Mission',
              description: 'To empower businesses with intelligent technologies that simplify complexity, accelerate innovation, and create sustainable digital growth.',
              icon: Rocket
            },
            {
              title: 'Vision',
              description: 'To become a globally trusted digital engineering partner delivering innovative AI, immersive technologies, and enterprise software that shape the future of digital business.',
              icon: Compass
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <FadeUp key={item.title} delay={index * 0.08} className="group">
                <div className="glass-gold h-full rounded-[1.75rem] border border-[#D4AF37]/20 p-8 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_24px_80px_rgba(212,175,55,0.14)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#F4D97C] transition duration-500 group-hover:scale-105">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#CFCFCF]">{item.description}</p>
                </div>
              </FadeUp>
            )
          })}
        </div>

        <SectionDivider />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeUp className="glass rounded-[2rem] border border-white/10 p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">What we do</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Technology is changing faster than ever. We help turn complexity into opportunity.
            </h3>
            <p className="mt-6 text-base leading-8 text-[#CFCFCF]">
              Qvrix combines deep engineering expertise with emerging technologies to develop intelligent digital products that improve efficiency, enhance customer experiences, automate operations, and unlock new business opportunities.
            </p>
            <p className="mt-5 text-base leading-8 text-[#CFCFCF]">
              Whether you&apos;re building a startup, modernizing enterprise systems, or exploring AI and immersive technologies, we help transform vision into reality.
            </p>
          </FadeUp>

          <FadeUp delay={0.06} className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Strategy & architecture', text: 'Product strategy aligned to industry realities and measurable business value.' },
              { title: 'Development & deployment', text: 'Secure delivery pipelines for scalable product launches and continuous improvement.' },
              { title: 'Intelligent product design', text: 'Thoughtful interfaces, workflows, and systems shaped around human needs.' },
              { title: 'Long-term growth', text: 'Ongoing optimization that helps clients stay ahead of change.' }
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#7C3AED]/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7C3AED]/15 text-[#A78BFA]">
                  <Lightbulb size={20} />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{item.text}</p>
              </div>
            ))}
          </FadeUp>
        </div>

        <SectionDivider />

        <FadeUp className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,14,14,0.92),rgba(20,20,20,0.9))] p-8 sm:p-10">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">Why choose Qvrix</p>
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A trusted partner for ambitious technology transformation.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-[#D4AF37]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#F4D97C] transition duration-500 group-hover:scale-105">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </FadeUp>

        <SectionDivider />

        <FadeUp className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4D97C]">Core values</p>
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Principles that guide how we build and grow.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/15 text-[#A78BFA]">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-white">{value.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
