// Central content file — replace all placeholders with real data.
import {
  Cpu, Sparkles, Megaphone, Globe, Smartphone, Building2,
  Zap, Cloud, Boxes, Layers, Bot, Compass,
} from 'lucide-react';

export const PROFILE = {
  fullName: '{FULL_NAME}',
  title: '{TITLE}',
  tagline: 'Crafting immersive digital experiences at the edge of AI, XR & the Web.',
  aboutShort: '{ABOUT_SHORT}',
  about: '{ABOUT}',
  email: '{EMAIL}',
  phone: '{PHONE}',
  location: '{LOCATION}',
  linkedin: '{LINKEDIN}',
  github: '{GITHUB}',
  twitter: '{TWITTER}',
  dribbble: '{DRIBBBLE}',
  resume: '{RESUME_URL}',
  profileImage: '{PROFILE_IMAGE}',
  logo: '{LOGO}',
  calendly: '{CALENDLY_URL}',
  whatsapp: '{WHATSAPP_NUMBER}',
};

export const STATS = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Global Clients' },
  { value: 9, suffix: 'yrs', label: 'Experience' },
  { value: 24, suffix: '', label: 'Industry Awards' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: Boxes,
    title: 'XR Development',
    description: 'Immersive VR, AR & MR experiences built with Unity, Unreal and WebXR.',
    features: ['WebXR', 'Meta Quest', 'Apple Vision Pro', 'Hand Tracking'],
    tech: ['Unity', 'Unreal', 'WebXR', 'A-Frame'],
  },
  {
    icon: Sparkles,
    title: 'AI Development',
    description: 'Production-grade AI systems: LLMs, RAG pipelines and computer vision.',
    features: ['LLM Integration', 'RAG', 'Fine-tuning', 'Vector DBs'],
    tech: ['OpenAI', 'LangChain', 'PyTorch', 'Pinecone'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Full-funnel growth strategy: SEO, paid, content & analytics.',
    features: ['SEO', 'Paid Ads', 'Analytics', 'Automation'],
    tech: ['GA4', 'Meta Ads', 'HubSpot', 'Ahrefs'],
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Blazing-fast websites with Next.js, headless CMS and edge deploys.',
    features: ['Next.js', 'Headless CMS', 'A11y', 'Core Web Vitals'],
    tech: ['Next.js', 'React', 'Vercel', 'Sanity'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps with delightful UX and offline-first design.',
    features: ['iOS', 'Android', 'Push', 'Offline'],
    tech: ['React Native', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    icon: Building2,
    title: 'Enterprise Solutions',
    description: 'Scalable platforms, ERP integrations & internal tools for enterprises.',
    features: ['ERP', 'CRM', 'SSO', 'RBAC'],
    tech: ['Node.js', 'Postgres', 'Kubernetes', 'GraphQL'],
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Workflow automation with agents, n8n, Zapier and custom pipelines.',
    features: ['Agents', 'Zapier', 'n8n', 'Airflow'],
    tech: ['Python', 'Node.js', 'n8n', 'Make'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud-native architectures, IaC and cost-optimised deployments.',
    features: ['AWS', 'GCP', 'IaC', 'Serverless'],
    tech: ['AWS', 'Terraform', 'Docker', 'K8s'],
  },
  {
    icon: Layers,
    title: 'WebGL Development',
    description: 'Cinematic real-time 3D web experiences with Three.js & shaders.',
    features: ['Three.js', 'Shaders', 'GLTF', 'GPU'],
    tech: ['Three.js', 'GLSL', 'R3F', 'GSAP'],
  },
  {
    icon: Cpu,
    title: '3D Configurator',
    description: 'Interactive product configurators for e-commerce & industrial use cases.',
    features: ['Product Viz', 'AR Try-On', 'Custom Options', 'Analytics'],
    tech: ['Three.js', 'Babylon.js', 'WebGL', 'R3F'],
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Autonomous AI agents that plan, reason and execute in your systems.',
    features: ['Planning', 'Tools', 'Memory', 'Multi-Agent'],
    tech: ['LangGraph', 'CrewAI', 'OpenAI', 'Claude'],
  },
  {
    icon: Compass,
    title: 'Consulting',
    description: 'Technical strategy, architecture review & team enablement.',
    features: ['Strategy', 'Audits', 'Roadmaps', 'Workshops'],
    tech: ['Architecture', 'Agile', 'DDD', 'CI/CD'],
  },
];

export const PROJECT_CATEGORIES = ['All', 'XR', 'AI', 'Web', 'Mobile', 'Digital Marketing', '3D', 'Automation'];

export const PROJECTS = [
  {
    id: 1,
    title: 'Neon Realms VR',
    category: 'XR',
    description: 'Multiplayer WebXR experience with real-time avatars and spatial audio.',
    tech: ['WebXR', 'Three.js', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1626387346567-68d0c07293f9?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Aurora AI Studio',
    category: 'AI',
    description: 'RAG-powered enterprise knowledge assistant with agentic workflows.',
    tech: ['OpenAI', 'LangGraph', 'Pinecone'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Vertex Commerce',
    category: 'Web',
    description: 'Headless commerce platform with 98 Lighthouse score and edge SSR.',
    tech: ['Next.js', 'Shopify', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Halo Health',
    category: 'Mobile',
    description: 'AI-driven wellness app with wearable integrations and coaching.',
    tech: ['React Native', 'HealthKit', 'GPT-4o'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Pulse Campaigns',
    category: 'Digital Marketing',
    description: 'Omnichannel growth engine that scaled a DTC brand to 8-figures.',
    tech: ['GA4', 'Meta Ads', 'Segment'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Configura 3D',
    category: '3D',
    description: 'Realtime 3D configurator for premium furniture with AR try-on.',
    tech: ['Three.js', 'GLTF', 'WebAR'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'FlowOps',
    category: 'Automation',
    description: 'Enterprise workflow automation platform with 200+ integrations.',
    tech: ['n8n', 'Node.js', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Orbit Metaverse',
    category: 'XR',
    description: 'Persistent virtual event space powering global brand activations.',
    tech: ['Unity', 'WebXR', 'Photon'],
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Sentinel Vision',
    category: 'AI',
    description: 'Real-time computer vision system for smart manufacturing lines.',
    tech: ['PyTorch', 'YOLOv9', 'Edge'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
];

export const SKILL_GROUPS = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 98 },
      { name: 'TypeScript', level: 95 },
      { name: 'Tailwind / shadcn', level: 96 },
      { name: 'Framer Motion / GSAP', level: 92 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 94 },
      { name: 'Python / FastAPI', level: 90 },
      { name: 'GraphQL / REST', level: 92 },
      { name: 'PostgreSQL / Mongo', level: 90 },
    ],
  },
  {
    name: 'XR & 3D',
    skills: [
      { name: 'Three.js / R3F', level: 93 },
      { name: 'WebXR', level: 88 },
      { name: 'Unity', level: 82 },
      { name: 'GLSL Shaders', level: 78 },
    ],
  },
  {
    name: 'AI & Data',
    skills: [
      { name: 'LLM / RAG', level: 94 },
      { name: 'LangChain / LangGraph', level: 90 },
      { name: 'PyTorch', level: 82 },
      { name: 'Vector DBs', level: 88 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS / GCP', level: 91 },
      { name: 'Docker / Kubernetes', level: 88 },
      { name: 'Terraform', level: 82 },
      { name: 'CI/CD', level: 92 },
    ],
  },
  {
    name: 'Design & Tools',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Blender', level: 75 },
      { name: 'Motion Design', level: 84 },
      { name: 'Prototyping', level: 92 },
    ],
  },
];

export const EXPERIENCES = [
  {
    role: 'Founder & Principal Engineer',
    company: '{COMPANY_1}',
    period: '2022 — Present',
    description: 'Leading a boutique studio building XR, AI and premium web experiences for Fortune 500 clients.',
    achievements: ['Delivered 40+ flagship projects', 'Grew team to 12', 'Featured in Awwwards & CSSDA'],
    tech: ['Next.js', 'Three.js', 'OpenAI', 'AWS'],
  },
  {
    role: 'Senior Full-Stack Engineer',
    company: '{COMPANY_2}',
    period: '2019 — 2022',
    description: 'Architected multi-tenant SaaS serving 2M+ users with 99.99% uptime.',
    achievements: ['Cut infra cost 45%', 'Rebuilt design system', 'Led team of 6'],
    tech: ['React', 'Node.js', 'Postgres', 'K8s'],
  },
  {
    role: 'XR Engineer',
    company: '{COMPANY_3}',
    period: '2017 — 2019',
    description: 'Built immersive VR training simulators for aerospace & healthcare.',
    achievements: ['5 shipped simulators', 'Patent co-inventor', 'Speaker at XR Days'],
    tech: ['Unity', 'C#', 'WebXR', 'Blender'],
  },
  {
    role: 'Junior Developer',
    company: '{COMPANY_4}',
    period: '2015 — 2017',
    description: 'Foundation years crafting responsive web apps and design systems.',
    achievements: ['20+ client sites', 'Internal component library', 'Front-end guild lead'],
    tech: ['Vue.js', 'PHP', 'MySQL', 'SCSS'],
  },
];

export const CERTIFICATIONS = [
  { name: 'AWS Solutions Architect Pro', org: 'Amazon Web Services', date: '2024', link: '#' },
  { name: 'Google Professional ML', org: 'Google Cloud', date: '2023', link: '#' },
  { name: 'Meta Certified XR Developer', org: 'Meta', date: '2023', link: '#' },
  { name: 'NVIDIA DLI Deep Learning', org: 'NVIDIA', date: '2022', link: '#' },
];

export const TESTIMONIALS = [
  {
    quote: 'One of the most talented engineers I have ever collaborated with. The delivery quality is simply next-level.',
    name: '{CLIENT_1}',
    role: 'VP of Engineering',
    company: '{COMPANY_A}',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
  },
  {
    quote: 'Transformed our vision into a stunning immersive experience that blew our stakeholders away.',
    name: '{CLIENT_2}',
    role: 'Chief Product Officer',
    company: '{COMPANY_B}',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
  },
  {
    quote: 'Fast, thoughtful, and deeply technical. A true partner from strategy to production.',
    name: '{CLIENT_3}',
    role: 'Founder',
    company: '{COMPANY_C}',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
  },
  {
    quote: 'Delivered a 3D configurator that lifted our conversion rate by 38% in the first quarter.',
    name: '{CLIENT_4}',
    role: 'Head of eCommerce',
    company: '{COMPANY_D}',
    avatar: 'https://i.pravatar.cc/120?img=68',
    rating: 5,
  },
];

export const TECH_STACK = [
  'Next.js', 'React', 'TypeScript', 'Three.js', 'Framer Motion', 'GSAP',
  'Node.js', 'Python', 'FastAPI', 'AWS', 'GCP', 'Docker',
  'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'OpenAI',
  'LangChain', 'PyTorch', 'Unity', 'WebXR', 'Blender', 'Figma',
];

export const VALUES = [
  { title: 'Craftsmanship', text: 'Pixel-perfect execution and obsessive attention to detail across every layer.' },
  { title: 'Performance', text: 'Blazing-fast experiences engineered for real users on real devices.' },
  { title: 'Innovation', text: 'Adopting emerging tech responsibly to unlock measurable business outcomes.' },
  { title: 'Partnership', text: 'Long-term collaboration built on trust, transparency and shared ownership.' },
];
