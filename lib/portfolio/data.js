/**
 * Single source of content for the Qvrix site.
 *
 * Content rule (enforced during the redesign): each constant below is owned by
 * exactly ONE section. Hero states what Qvrix is, SERVICES states what it
 * builds, WORK proves it, CAPABILITIES covers technical strength, PROCESS is
 * how, ABOUT is who. Nothing is restated across sections.
 */
import {
  Bot, Code2, Boxes, Gamepad2, TrendingUp, Workflow, Clapperboard,
  Compass, PenTool, Rocket, LineChart, Search,
} from 'lucide-react';

export const SITE_URL = 'https://portfolio-website-ishari.vercel.app';

export const PROMISE =
  'Qvrix is a global technology studio building AI systems, software, immersive XR, cinematic CGI & VFX and real-time games.';

export const STUDIO = {
  name: 'Qvrix',
  short: 'Qvrix',
  tagline: 'Intelligent Technology. Immersive Experiences. Cinematic CGI.',
  email: 'qvrixtechnologies@gmail.com',
  phone: '8838302641',
  location: 'Global · remote-first delivery',
  linkedin: '{LINKEDIN}',
  github: '{GITHUB}',
  twitter: '{TWITTER}',
  whatsapp: '918838302641',
  calendly: '{CALENDLY_URL}',
};
export const PROFILE = STUDIO; // back-compat for Contact.js

/** Phase 8 — positioning strip. Deliberately five words, nothing more. */
export const POSITIONING = ['AI', 'Software', 'XR', 'CGI & VFX', 'Games'];

export const NAV_LINKS = [
  { name: 'Solutions', href: '#services' },
  { name: 'Impact', href: '#impact' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
];

export const CONFIGURATOR_URL = 'https://showroom-configurator.vercel.app/';

/** Phase 9 — six categories. Owned by the Services section only. */
export const SERVICES = [
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automation',
    description: 'Systems that reason over your data and act inside your workflows.',
    items: ['AI Agents', 'RAG Applications', 'LLM Applications', 'AI Chatbots', 'Business Automation'],
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software & SaaS',
    description: 'Products engineered to carry real load, from first release to scale.',
    items: ['Web Applications', 'SaaS Platforms', 'Enterprise Applications', 'API & Backend Systems'],
  },
  {
    id: 'xr',
    icon: Boxes,
    title: 'XR & Spatial Computing',
    description: 'Immersive tools for training, sales and operations — headset or browser.',
    // Engine/SDK names deliberately live in CAPABILITIES, not here: this list
    // is what we build, that list is what we build it with.
    items: ['AR', 'VR', 'MR', 'WebXR', 'Digital Twins', 'Product Configurators'],
  },
  {
    id: 'games',
    icon: Gamepad2,
    title: 'Game & Interactive',
    description: 'Real-time 3D built for engagement, simulation and learning.',
    items: ['Game Development', '3D Experiences', 'Simulation', 'Interactive Applications', 'Training Experiences'],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Digital Growth',
    description: 'Demand generation wired to pipeline, not vanity metrics.',
    items: ['Google Ads', 'Meta Ads', 'SEO', 'Local SEO', 'Social Media', 'Lead Generation', 'Content Strategy'],
  },
  {
    id: 'crm',
    icon: Workflow,
    title: 'CRM & Business Automation',
    description: 'The operational layer that turns activity into managed revenue.',
    items: ['CRM', 'WhatsApp Automation', 'Lead Management', 'Workflow Automation', 'Business Dashboards'],
  },
  {
    id: 'cgi',
    icon: Clapperboard,
    title: 'CGI & VFX',
    description: 'Photoreal imagery and effects built from the same assets as your 3D work.',
    items: ['3D Modeling', 'Product Visualization', 'CGI Animation', 'VFX & Compositing', 'Motion Graphics'],
  },
];

/**
 * Phase 10 / 17 — real projects only. Outcomes are described qualitatively
 * because no verified client metrics exist; do not add numbers without proof.
 */
export const WORK = [
  {
    id: 'hololens',
    name: 'HoloLens 2 Preventive Maintenance',
    category: 'Mixed Reality · Enterprise',
    summary:
      'Hands-free holographic work instructions that walk technicians through preventive maintenance step by step, with an authoring tool so engineers can build procedures without writing code.',
    challenge:
      'Maintenance procedures lived in PDFs and tribal knowledge. Technicians worked with hands occupied and no reliable way to confirm a step was done correctly.',
    approach:
      'Mapped the real maintenance workflow with engineers first, then designed hands-free interaction around gaze, gesture and voice so nothing required putting tools down.',
    solution:
      'A HoloLens 2 application delivering 3D step-by-step guidance anchored to equipment, plus a procedure authoring pipeline and backend integration for content updates.',
    tech: ['Unity', 'MRTK', 'OpenXR', 'C#', 'Azure', 'REST APIs'],
    outcome:
      'Technicians follow procedures hands-free with guidance anchored to the equipment itself, and new procedures can be authored without a rebuild.',
    image: '/Images/Hololens01.jpg',
    href: null,
  },
  {
    id: 'nestra',
    name: 'Nestra — AI Real Estate CRM',
    category: 'SaaS · AI Automation',
    summary:
      'A CRM for Indian real estate brokers that captures leads, tracks the sales pipeline and automates the follow-up work that normally falls through the cracks.',
    challenge:
      'Brokers managed leads across WhatsApp, spreadsheets and memory, losing track of follow-ups with no visibility into the pipeline.',
    approach:
      'Built around the broker’s actual day — capture fast, follow up automatically, and keep property listings and client conversations in one place.',
    solution:
      'A responsive web platform with AI-assisted lead management, property listings, pipeline tracking, task automation and an analytics dashboard.',
    tech: ['React', 'Node.js', 'REST APIs', 'AI Automation'],
    outcome:
      'Lead capture, follow-up and listings run in one system instead of three, and the product is live in production.',
    image: '/Images/NestraImage.png',
    href: 'https://nestra.co.in/',
  },
  {
    id: 'asset-platform',
    name: 'Cloud XR Asset Management Platform',
    category: 'Cloud · XR Infrastructure',
    summary:
      'A Unity Editor framework and cloud pipeline that lets teams manage 3D assets centrally and push content to XR applications without shipping a new build.',
    challenge:
      'Every 3D content change meant rebuilding and redistributing the application, making updates slow and expensive across devices.',
    approach:
      'Separated content from the binary — assets live in cloud storage and are resolved at runtime, so updating content stops being an engineering release.',
    solution:
      'A custom Unity Editor framework over AWS S3 with runtime asset downloading, versioning, synchronization and cross-platform distribution.',
    tech: ['Unity', 'AWS S3', 'WebXR', 'Addressables'],
    outcome:
      'Content updates ship without application rebuilds, and assets are distributed from one repository across platforms.',
    image: '/Images/AssetManage.png',
    href: null,
  },
  {
    id: 'configurator',
    name: 'Showroom Configurator',
    category: 'WebXR · Real-Time 3D',
    summary:
      'A browser-based product configurator running a CAD-to-WebGL pipeline, so a customer can specify a vehicle in real time on an ordinary device.',
    challenge:
      'Engineering-grade CAD geometry is far too heavy to load in a browser, yet sales needed a configurable 3D product experience on the web.',
    approach:
      'Built a geometry optimization pipeline that preserves visual fidelity while cutting payload to something a mid-range device can render at speed.',
    solution:
      'A real-time WebGL configurator with live material and option switching, delivered entirely in the browser with no install.',
    tech: ['Three.js', 'WebGL', 'glTF'],
    outcome:
      'The configurator is publicly live and runs in the browser without a plugin or download.',
    image: null,
    href: CONFIGURATOR_URL,
  },
];

/** Phase 13 — differentiators only. Never restates About or Services. */
export const DIFFERENTIATORS = [
  {
    title: 'Engineering-first',
    text: 'The people who scope your project build it. No hand-off between a sales team and an unknown delivery team.',
  },
  {
    title: 'AI-native thinking',
    text: 'We treat AI as an architectural layer with evaluation and cost control, not a feature bolted on at the end.',
  },
  {
    title: 'XR depth',
    text: 'Years of shipping headset, WebXR and real-time 3D work — including the hard parts like CAD optimization and device performance.',
  },
  {
    title: 'Product mindset',
    text: 'We push back on requirements that will not serve users, and we care what happens after launch.',
  },
  {
    title: 'Built to scale',
    text: 'Architecture, security and delivery pipelines chosen for where the product is going, not just the first release.',
  },
];

/** Phase 14 — five steps, stated once, nowhere else on the site. */
export const PROCESS = [
  { no: '01', title: 'Discover', text: 'Understand the business, the users and the constraints before proposing anything.', icon: Search },
  { no: '02', title: 'Strategize', text: 'Define scope, architecture and success measures — and what we deliberately will not build.', icon: Compass },
  { no: '03', title: 'Design & Build', text: 'Design and engineering run together in short cycles you can review continuously.', icon: PenTool },
  { no: '04', title: 'Launch', text: 'Ship to production with testing, monitoring and a staged rollout.', icon: Rocket },
  { no: '05', title: 'Scale', text: 'Measure real usage, then refine and extend the product against what it shows.', icon: LineChart },
];

/** Phase 15 — grouped, no logo wall. Only what the projects above evidence. */
export const CAPABILITIES = [
  { group: 'AI', items: ['OpenAI', 'Azure OpenAI', 'LLMs', 'RAG', 'AI Agents'] },
  { group: 'Development', items: ['React', 'Next.js', '.NET', 'Node.js', 'Python', 'C#'] },
  { group: 'XR & Real-Time 3D', items: ['Unity', 'Unreal Engine', 'OpenXR', 'WebXR', 'AR Foundation', 'Three.js'] },
  { group: 'Infrastructure', items: ['Azure', 'AWS', 'APIs', 'Databases', 'CI/CD'] },
];

/**
 * Digital Growth framed as an outcome funnel. The service list itself lives in
 * SERVICES and is intentionally not repeated.
 */
export const GROWTH_FUNNEL = ['Visibility', 'Leads', 'Engagement', 'Conversions', 'Growth'];

/**
 * Technology ribbon (#clients).
 *
 * These are the platforms Qvrix actually ships on, taken from CAPABILITIES and
 * the WORK stack lists. It is deliberately NOT a customer logo wall: presenting
 * invented client marks would misrepresent real business relationships. Swap in
 * real customer/partner logos here once you have written permission to show them.
 */
export const TECH_RIBBON = [
  'OpenAI', 'Azure', 'Unity', 'Unreal Engine', 'React', 'Next.js',
  'Node.js', '.NET', 'Python', 'AWS', 'WebXR', 'OpenXR', 'Three.js', 'MongoDB',
];

/**
 * Impact band (#impact).
 *
 * Every figure below is derived from verifiable facts in this file — the number
 * of delivered projects, service lines and production launches — NOT from
 * unaudited marketing claims. Replace `label`/`value` with audited business
 * metrics (uptime, deployment frequency, client count) once you can evidence
 * them; keep `note` honest about what each number counts.
 */
export const IMPACT_METRICS = [
  { value: '4', label: 'Production systems delivered', note: 'Shipped end to end' },
  { value: '6', label: 'Disciplines under one team', note: 'AI to growth' },
  { value: '2', label: 'Products live in production', note: 'Publicly reachable' },
  { value: '14+', label: 'Platforms shipped on', note: 'Cloud, web, XR, engines' },
];
