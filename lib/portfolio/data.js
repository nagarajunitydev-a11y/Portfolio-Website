// Central content — replace placeholders with real studio data.
import {
  Brain, Code2, Boxes, Film, Car, Building2, Factory, Clapperboard,
  Trophy, Sparkles, Layers, Zap, Globe, ShieldCheck,
  Search, Target, Palette, Blocks, TestTube2, Rocket, LifeBuoy, Users,
} from 'lucide-react';

export const STUDIO = {
  name: 'Qvrix',
  short: 'Qvrix',
  tagline: 'AI. WebXR. Software Engineering. CGI & VFX.',
  email: 'qvrixstudios@gmail.com',
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
      'Build intelligent AI-powered applications that automate workflows, improve decision-making, enhance customer experiences, and accelerate digital transformation.',
    services: [
      'AI Agents & Autonomous Workflows',
      'Generative AI Applications',
      'Enterprise AI Solutions',
      'AI Chatbots & Virtual Assistants',
      'Intelligent Document Processing',
      'Retrieval-Augmented Generation (RAG)',
      'Knowledge Management Platforms',
      'LLM Integration & Fine-Tuning',
      'AI-powered Customer Experience',
      'Predictive Analytics & Automation',
    ],
  },
  {
    icon: Code2,
    title: 'Enterprise Software Engineering',
    description:
      'Design and develop secure, scalable, cloud-native software solutions that modernize business operations and support long-term growth.',
    services: [
      'Custom Software Development',
      'Enterprise Platforms',
      'SaaS Product Development',
      'Web Applications',
      'Mobile Applications',
      'Business Process Automation',
      'CRM & ERP Solutions',
      'API Development & Integration',
      'Cloud-native Applications',
      'DevOps & Continuous Delivery',
    ],
  },
  {
    icon: Boxes,
    title: 'XR (WebXR, AR, VR & MR)',
    description:
      'Develop immersive digital experiences that improve visualization, collaboration, training, simulation, and customer engagement across modern platforms.',
    services: [
      'WebXR Experiences',
      'Augmented Reality (AR)',
      'Virtual Reality (VR)',
      'Mixed Reality (MR)',
      'Digital Twins',
      'Interactive Product Configurators',
      'Spatial Computing',
      'Industrial Simulations',
      'Virtual Training',
      'CAD to Web Optimization',
    ],
  },
  {
    icon: Film,
    title: 'CGI & Digital Visualization',
    description:
      'Create photorealistic CGI, real-time 3D assets, cinematic animations, and digital content that elevate marketing and product storytelling.',
    services: [
      'Product Visualization',
      'Photorealistic CGI',
      'Interactive 3D Assets',
      'Marketing Visuals',
      'Product Launch Content',
      'Technical Animations',
      'Commercial CGI',
      'Real-Time Rendering',
      'Brand Storytelling',
      'Digital Content Production',
    ],
  },
  {
    icon: Car,
    title: 'Automotive & Product Experiences',
    description:
      'Deliver immersive product experiences through real-time visualization, digital showrooms, and interactive product configurators.',
    configurator: true,
    services: [
      'Interactive Product Configurators',
      'Digital Showrooms',
      'Product Visualization',
      'Real-Time 3D Experiences',
      'Marketing Content',
      'Technical Demonstrations',
      'Digital Brochures',
      'Product Launch Experiences',
      'Interactive Sales Tools',
      'Customer Engagement Solutions',
    ],
  },
  {
    icon: Building2,
    title: 'Architecture & Built Environment',
    description:
      'Transform concepts into immersive architectural visualization and interactive digital experiences for design, construction, and real estate.',
    services: [
      'Architectural Visualization',
      'Interior & Exterior Rendering',
      'Virtual Walkthroughs',
      'Interactive Property Experiences',
      'Digital Twins',
      'Project Presentations',
      'Real Estate Visualization',
      'Construction Planning',
      'Urban Planning Visualization',
      'Interactive Design Reviews',
    ],
  },
  {
    icon: Factory,
    title: 'Industrial & Engineering Solutions',
    description:
      'Improve engineering, manufacturing, training, and maintenance with immersive visualization and digital engineering solutions.',
    services: [
      'Industrial Visualization',
      'Digital Twins',
      'Technical Animations',
      'Product Demonstrations',
      'Interactive Training',
      'Assembly & Maintenance Guides',
      'Safety Simulations',
      'Process Visualization',
      'Equipment Demonstrations',
      'Engineering Content',
    ],
  },
  {
    icon: Clapperboard,
    title: 'Media, Entertainment & Digital Content',
    description:
      'Produce cinematic CGI, visual effects, motion graphics, and immersive digital content for brands and entertainment platforms.',
    services: [
      'CGI Production',
      'Visual Effects (VFX)',
      'Motion Graphics',
      'Cinematic Animation',
      'Digital Environments',
      'Interactive Media',
      'Marketing Content',
      'AI-assisted Content Creation',
      'Creative Storytelling',
      'Branded Digital Experiences',
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
  { icon: ShieldCheck, title: 'Transparent Communication' },
  { icon: Globe, title: 'Global Client Support' },
];

export const EXPERTISE = [
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
    id: 9,
    title: 'HoloLens 2 Preventive Maintenance & Interactive Procedure Creation',
    category: 'Enterprise',
    description:
      "Developed an enterprise-grade Mixed Reality application for Microsoft HoloLens 2 enabling technicians to perform preventive maintenance through immersive, hands-free, step-by-step holographic guidance.",
    tech: [
      'Microsoft HoloLens 2',
      'Unity',
      'MRTK',
      'OpenXR',
      'C#',
      'Azure',
      'REST APIs',
    ],
    image: '/Images/Hololens01.jpg',
    gallery: [
      '/Images/Hololens01.jpg',
      '/projects/hololens-maintenance/maintenance-01.svg',
      '/projects/hololens-maintenance/maintenance-02.svg',
      '/projects/hololens-maintenance/maintenance-03.svg',
      '/projects/hololens-maintenance/maintenance-04.svg',
      '/projects/hololens-maintenance/maintenance-05.svg',
    ],
    demo: '#',
    github: '#',
    roles: [
      'XR solution architecture',
      'Unity application development',
      'HoloLens 2 application development',
      'Mixed Reality interaction design',
      'Gesture and voice interaction implementation',
      '3D workflow visualization',
      'Performance optimization',
      'Backend API integration',
    ],
    impact:
      'Reduced maintenance time, improved technician productivity, increased maintenance accuracy, and enabled enterprise digital transformation.',
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
    id: 10,
    title: 'Nestra – AI-Powered Real Estate CRM',
    category: 'Web Application | CRM | AI Automation | SaaS',
    description:
      'Nestra is an AI-powered Real Estate CRM that helps brokers and agencies in India capture, manage, and convert leads while streamlining property listings, client communication, and sales workflows.',
    tech: ['React.js', 'Node.js', 'REST APIs', 'AI Automation'],
    image: '/Images/NestraImage.png',
    demo: 'https://nestra.co.in/',
    github: '#',
    features: [
      'AI lead management',
      'Property listings',
      'CRM & sales pipeline',
      'Task automation',
      'Analytics dashboard',
      'Responsive design',
    ],
    contributions: [
      'Responsive UI development',
      'API integration',
      'Reusable components',
      'Performance optimization',
      'Business workflow implementation',
    ],
  },
  {
    id: 11,
    title: 'Cloud-Based XR Asset Management Platform',
    category: 'Web Application | XR | Cloud | SaaS',
    description:
      'Built a scalable Unity Editor framework for centralized 3D asset management, enabling organizations to create, manage, and distribute interactive XR content from a single cloud repository.',
    tech: ['Unity', 'AWS S3', 'WebXR', 'Cloud Pipeline'],
    image: '/Images/AssetManage.png',
    demo: '#',
    github: '#',
    features: [
      'Custom Unity Editor framework',
      'Centralized cloud storage with AWS S3',
      'Cross-platform asset distribution',
      'Runtime asset downloading and synchronization',
      'Asset versioning and update management',
      'Remote content updates without rebuilds',
      'Secure and scalable cloud architecture',
    ],
    contributions: [
      'Enterprise asset management design',
      'Cloud deployment workflow',
      'Runtime synchronization architecture',
      'Cross-platform distribution planning',
      'Performance and packaging optimization',
    ],
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
    id: 1,
    title: 'Aurora AI Studio',
    category: 'AI',
    description: 'Agentic knowledge assistant with RAG and multi-tool orchestration for a Fortune 500 enterprise.',
    tech: ['OpenAI', 'LangGraph', 'Azure'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
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
