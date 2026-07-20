// Central content — replace placeholders with real studio data.
import {
  Brain, Code2, Boxes, Film, Car, Building2, HeartPulse, Factory, Clapperboard,
  Trophy, Sparkles, Layers, Zap, Video, Image as ImageIcon, Globe, Clock, ShieldCheck,
  ShoppingBag, GraduationCap, Home as HomeIcon, Plane, Briefcase, Newspaper, Landmark,
  Search, Target, Palette, Blocks, TestTube2, Rocket, LifeBuoy, Users,
} from 'lucide-react';

export const STUDIO = {
  name: '{STUDIO_NAME}',
  short: '{STUDIO_SHORT}',
  tagline: 'AI. WebXR. Software Engineering. CGI & VFX.',
  email: '{EMAIL}',
  phone: '9789010719',
  location: 'Chennai, Tamil Nadu',
  linkedin: '{LINKEDIN}',
  github: '{GITHUB}',
  twitter: '{TWITTER}',
  instagram: '{INSTAGRAM}',
  behance: '{BEHANCE}',
  logo: '{LOGO}',
  calendly: '{CALENDLY_URL}',
  whatsapp: '919789010719',
};
// Backward compat
export const PROFILE = STUDIO;

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Global Clients' },
  { value: 40, suffix: '+', label: 'Team Members' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'Industries', href: '#industries' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const CONFIGURATOR_URL = 'https://showroom-configurator.vercel.app/';

/**
 * Nine service categories. The one flagged `configurator: true` shows the Launch button.
 */
export const SERVICE_CATEGORIES = [
  {
    icon: Brain,
    title: 'AI Solutions & Intelligent Automation',
    description:
      'We develop AI-powered applications that streamline operations, automate workflows and improve decision-making.',
    services: [
      'AI Agent Development',
      'RAG Applications',
      'AI Chatbots',
      'Enterprise AI Solutions',
      'Workflow Automation',
      'Document Intelligence',
      'Knowledge Management Systems',
      'LLM Integration',
      'AI-powered Customer Support',
      'Custom AI Applications',
    ],
  },
  {
    icon: Code2,
    title: 'Enterprise Software Development',
    description:
      'We build scalable enterprise software tailored to modern business requirements.',
    services: [
      'Custom Software Development',
      'Full Stack Development',
      'Web Applications',
      'Mobile Applications',
      'SaaS Platforms',
      'CRM Development',
      'ERP Solutions',
      'API Development',
      'Cloud Applications',
      'DevOps & CI/CD',
    ],
  },
  {
    icon: Boxes,
    title: 'WebXR, AR, VR & MR Development',
    description:
      'We create immersive real-time experiences optimized for modern devices and browsers.',
    services: [
      'WebXR Experiences',
      'WebGL Applications',
      'Product Configurators',
      'AR Experiences',
      'VR Applications',
      'Mixed Reality Solutions',
      'Digital Twins',
      'Interactive Product Showcases',
      'Spatial Computing',
      'CAD to Web Optimization',
    ],
  },
  {
    icon: Film,
    title: 'CGI & VFX Services',
    description:
      'We produce cinematic-quality CGI and photorealistic digital content that helps brands market with stunning visual storytelling.',
    services: [
      'Automotive CGI',
      'Product Visualization',
      '16K Product Images',
      'Studio Lighting',
      'Outdoor Lighting',
      'Product Launch Films',
      'CGI Commercials',
      'Interactive 3D Assets',
      'Marketing Visuals',
      'Technical Animations',
    ],
  },
  {
    icon: Car,
    title: 'Automotive Visualization',
    description:
      'From real-time configurators to launch films — our team builds end-to-end automotive visual pipelines.',
    configurator: true,
    services: [
      'Vehicle Configurators',
      'Interactive Showrooms',
      'WebGL Configurators',
      'Product Launch Videos',
      'Automotive CGI',
      'Technical Feature Demonstrations',
      'Digital Brochure Assets',
      'Marketing Videos',
    ],
  },
  {
    icon: Building2,
    title: 'Architecture & Construction',
    description:
      'We help architects and developers experience projects before construction with cinematic visualization.',
    services: [
      'Architectural Walkthroughs',
      'Interior Visualization',
      'Exterior Rendering',
      'Residential CGI',
      'Commercial Visualization',
      'Project Launch Videos',
      'Real Estate Marketing',
      'Interactive Virtual Tours',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical',
    description:
      'Accurate, engaging medical visualizations for training, education and product marketing.',
    services: [
      'Medical Device Visualization',
      'Surgical Animations',
      'Healthcare Training',
      'Patient Education',
      'Medical Marketing',
      'Technical Explainers',
    ],
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description:
      'Technical visual content that improves product understanding, training and workplace safety.',
    services: [
      'Machine Demonstrations',
      'Technical Animations',
      'Training Videos',
      'Assembly Visualization',
      'Safety Demonstrations',
      'Maintenance Guides',
      'Digital Twin Visualization',
    ],
  },
  {
    icon: Clapperboard,
    title: 'Film, Media & Entertainment',
    description:
      'Cinematic CGI and VFX for movies, trailers, series and digital entertainment.',
    services: [
      'CGI Production',
      'VFX',
      'Cinematic Animations',
      'Movie Assets',
      'Title Animations',
      'Trailer Production',
      'Digital Environment Creation',
      'AI-assisted Content Production',
    ],
  },
];

export const SERVICES = SERVICE_CATEGORIES;

export const HIGHLIGHTS = [
  { icon: Users, title: 'Experienced Multidisciplinary Engineering Team' },
  { icon: ShieldCheck, title: 'Enterprise-Grade Architecture' },
  { icon: Brain, title: 'AI-First Development Approach' },
  { icon: Layers, title: 'WebXR Specialists' },
  { icon: Sparkles, title: 'Photorealistic CGI Production' },
  { icon: Zap, title: 'High-Performance Optimization' },
  { icon: Trophy, title: 'End-to-End Product Delivery' },
  { icon: Blocks, title: 'Agile Development Methodology' },
  { icon: Clock, title: 'Transparent Communication' },
  { icon: Globe, title: 'Global Client Support' },
];

export const EXPERTISE = [
  '15+ Years of Industry Experience',
  'Enterprise Software Engineering',
  'AI-powered Applications',
  'WebXR Specialists',
  'AR / VR / MR Development',
  'Photorealistic CGI',
  'Cinematic VFX',
  'Digital Twins',
  'Cloud-native Architecture',
  'Scalable Full Stack Development',
  'Real-Time Rendering',
  'Global Project Delivery',
];

export const TECH_GROUPS = [
  {
    name: 'Frontend',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Layers,
    items: ['Node.js', '.NET', 'Python', 'REST APIs'],
  },
  {
    name: 'AI',
    icon: Brain,
    items: ['OpenAI', 'Azure OpenAI', 'Ollama', 'LangChain', 'RAG', 'Vector Databases', 'AI Agents'],
  },
  {
    name: 'XR',
    icon: Boxes,
    items: ['Unity', 'Unreal Engine', 'WebXR', 'WebGL', 'OpenXR', 'AR Foundation', 'Meta Quest', 'HoloLens'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Globe,
    items: ['Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
];

export const INDUSTRIES = [
  { name: 'Automotive', icon: Car },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Architecture', icon: Building2 },
  { name: 'Real Estate', icon: HomeIcon },
  { name: 'Aerospace', icon: Plane },
  { name: 'Energy', icon: Zap },
  { name: 'Enterprise', icon: Briefcase },
  { name: 'Media', icon: Newspaper },
  { name: 'Entertainment', icon: Film },
];

export const PROCESS = [
  { step: '01', title: 'Discovery', text: 'Deep dive into goals, users and constraints.', icon: Search },
  { step: '02', title: 'Strategy', text: 'Roadmaps, KPIs and technical strategy.', icon: Target },
  { step: '03', title: 'UI/UX Design', text: 'Design systems, prototypes, motion studies.', icon: Palette },
  { step: '04', title: 'Architecture', text: 'Scalable, secure and cost-optimised blueprints.', icon: Layers },
  { step: '05', title: 'Development', text: 'Agile squads shipping in tight iterations.', icon: Blocks },
  { step: '06', title: 'Testing', text: 'Automated + manual QA across every layer.', icon: TestTube2 },
  { step: '07', title: 'Deployment', text: 'CI/CD, staged rollouts, observability.', icon: Rocket },
  { step: '08', title: 'Support', text: 'SLAs, monitoring and continuous evolution.', icon: LifeBuoy },
];

export const PROJECT_CATEGORIES = ['All', 'AI', 'Enterprise', 'WebXR', 'Automotive', 'Architecture', 'Film & VFX', 'Industrial'];

export const PROJECTS = [
  {
    id: 1,
    title: 'Aurora AI Studio',
    category: 'AI',
    description: 'Agentic knowledge assistant with RAG and multi-tool orchestration for a Fortune 500 enterprise.',
    tech: ['OpenAI', 'LangGraph', 'Azure'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Showroom Configurator',
    category: 'WebXR',
    description: 'Real-time browser-based automotive configurator engineered from a CAD-to-WebGL pipeline.',
    tech: ['WebGL', 'Three.js', 'GLTF'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    demo: CONFIGURATOR_URL,
    github: '#',
  },
  {
    id: 3,
    title: 'Vertex ERP Platform',
    category: 'Enterprise',
    description: 'Multi-tenant SaaS platform with role-based access, workflows and analytics dashboards.',
    tech: ['Next.js', '.NET', 'Azure'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Hyperion EV Launch',
    category: 'Automotive',
    description: 'Photorealistic CGI launch film and 16K brochure imagery for a global EV brand.',
    tech: ['V-Ray', 'UE5', '4K'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Marina Bay Residences',
    category: 'Architecture',
    description: 'Cinematic architectural walkthrough with interior and exterior visualization.',
    tech: ['Corona', 'UE5', '8K'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Cosmos Trailer VFX',
    category: 'Film & VFX',
    description: 'AI-assisted VFX and digital environment creation for an original feature trailer.',
    tech: ['Houdini', 'Nuke', 'AI'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'Halo Care Assistant',
    category: 'AI',
    description: 'Voice + chat healthcare assistant integrating patient records and clinical guidelines.',
    tech: ['Azure OpenAI', 'RAG', 'FHIR'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Meta Training Lab',
    category: 'WebXR',
    description: 'VR training simulator built on Unity with hand-tracking and multi-user sessions.',
    tech: ['Unity', 'Meta Quest', 'Photon'],
    image: 'https://images.unsplash.com/photo-1626387346567-68d0c07293f9?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Titan Assembly Line',
    category: 'Industrial',
    description: 'Machine operation, safety and maintenance animations for a manufacturing plant.',
    tech: ['UE5', 'Blender', '4K'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'One of the most talented engineering teams we have ever collaborated with. Every deliverable was simply next-level.',
    name: '{CLIENT_1}',
    role: 'VP of Engineering',
    company: '{COMPANY_A}',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
  },
  {
    quote: 'Their team transformed our vision into stunning immersive experiences that blew our stakeholders away.',
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
    quote: 'The configurator their team delivered lifted our conversion rate by 38% in the first quarter.',
    name: '{CLIENT_4}',
    role: 'Head of eCommerce',
    company: '{COMPANY_D}',
    avatar: 'https://i.pravatar.cc/120?img=68',
    rating: 5,
  },
];

export const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js', '.NET', 'Python',
  'OpenAI', 'Azure OpenAI', 'LangChain', 'RAG', 'Vector DBs', 'AI Agents',
  'Unity', 'Unreal Engine', 'WebXR', 'WebGL', 'OpenXR', 'AR Foundation',
  'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Meta Quest',
];

export const VALUES = [
  { title: 'Craftsmanship', text: 'Every pixel, frame and line of code is engineered with obsessive attention to detail.' },
  { title: 'Performance', text: 'We build lightweight, real-time optimized experiences that scale globally.' },
  { title: 'Innovation', text: 'AI-first, XR-native and cloud-native — we ship what’s next, responsibly.' },
  { title: 'Partnership', text: 'Long-term collaboration built on transparency, ownership and shared vision.' },
];
