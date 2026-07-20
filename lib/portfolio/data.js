// Central content file — replace all placeholders with real data.
import {
  Car, Boxes, Building2, HeartPulse, Film, Cpu, Factory,
  Trophy, Sparkles, Layers, Zap, Video, Image as ImageIcon,
  Globe, LifeBuoy, Clock, ShieldCheck,
} from 'lucide-react';

export const PROFILE = {
  fullName: '{FULL_NAME}',
  title: '{TITLE}',
  tagline: 'Photorealistic CGI, immersive XR & real-time 3D — crafted for global brands.',
  aboutShort: '{ABOUT_SHORT}',
  about: '{ABOUT}',
  email: '{EMAIL}',
  phone: '9789010719',
  location: 'Chennai, Tamil Nadu',
  linkedin: '{LINKEDIN}',
  github: '{GITHUB}',
  twitter: '{TWITTER}',
  dribbble: '{DRIBBBLE}',
  resume: '{RESUME_URL}',
  profileImage: '{PROFILE_IMAGE}',
  logo: '{LOGO}',
  calendly: '{CALENDLY_URL}',
  whatsapp: '919789010719',
};

export const STATS = [
  { value: 16, suffix: '+', label: 'Years of CGI Craft' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Global Clients' },
  { value: 24, suffix: '', label: 'Industry Awards' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const CONFIGURATOR_URL = 'https://showroom-configurator.vercel.app/';

/**
 * Service categories — each has an icon, title, description and a list of concrete deliverables.
 * The one with `configurator: true` renders the "Launch 3D Configurator" button.
 */
export const SERVICE_CATEGORIES = [
  {
    icon: Car,
    title: 'Automotive CGI & Digital Asset Development',
    description:
      'High-quality CGI content for automotive brands — photorealistic visuals and engaging animations for manufacturers and marketing teams.',
    services: [
      '16K Studio Lighting Product Images',
      'Realistic Outdoor & Environment Lighting Renders',
      'Product Launch CGI Films',
      'CGI Teaser Videos',
      'Technical Explainer Animations',
      'Owner’s Manual & Feature Demonstration Videos',
      'Interactive 3D Assets (WebGL)',
      'Product Visualization & Marketing Content',
    ],
  },
  {
    icon: Boxes,
    title: 'WebGL, AR, VR & MR Asset Development',
    description:
      'Immersive, high-performance real-time 3D experiences optimized for web, mobile, and extended reality platforms.',
    configurator: true,
    services: [
      'Lightweight & Photorealistic WebGL Asset Development',
      'Real-Time 3D Product Configurators',
      'Interactive Product Experiences',
      'Optimized Low-Polygon Asset Development',
      'CAD-to-WebGL Asset Optimization',
      'Cross-Platform 3D Asset Development',
      'Augmented Reality (AR) Experiences',
      'Virtual Reality (VR) Applications',
      'Mixed Reality (MR) Experiences',
      'Digital Twin Visualization',
      'Interactive Product Showcases',
    ],
  },
  {
    icon: Building2,
    title: 'Architecture & Construction Visualization',
    description:
      'Cinematic visualizations that help clients experience architectural projects before construction begins.',
    services: [
      'Photorealistic Architectural Walkthroughs',
      'Interior & Exterior CGI Visualization',
      'Residential & Commercial Rendering',
      'High-Resolution Brochure Images',
      'Project Launch Videos',
      'Real Estate Marketing Visuals',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical Animation',
    description:
      'Accurate, engaging medical visualizations for education, training and product marketing.',
    services: [
      'Surgical Procedure Animations',
      'Medical Device Visualization',
      'Product Brochure Images',
      'Healthcare Training Videos',
      'Medical Explainer Animations',
      'Patient Education Videos',
    ],
  },
  {
    icon: Film,
    title: 'Film & Entertainment',
    description:
      'Cinematic-quality CGI for movies, trailers and digital entertainment.',
    services: [
      'AI-Assisted CGI Movie Production',
      'Cinematic Visual Effects (VFX)',
      'Title & Logo Animations',
      'Opening Sequences',
      'Trailer & Teaser Production',
      'Digital Environment Creation',
    ],
  },
  {
    icon: Cpu,
    title: 'IT & Technology',
    description:
      'Simplify complex technologies through engaging motion graphics and animations.',
    services: [
      'Motion Graphics',
      'Infographic Animations',
      'Product Explainer Videos',
      'Software Demonstrations',
      'UI/UX Animation',
      'Corporate Presentation Videos',
    ],
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description:
      'Technical visual content that improves product understanding, training and workplace safety.',
    services: [
      'Training Videos',
      'User Manual Animations',
      'Safety Explainer Videos',
      'Assembly Process Animation',
      'Machine Operation Demonstrations',
      'Maintenance & Service Guides',
    ],
  },
];

// Backwards-compat export used by any older references
export const SERVICES = SERVICE_CATEGORIES;

export const HIGHLIGHTS = [
  { icon: Trophy, title: '16+ Years of Professional CGI Experience' },
  { icon: Sparkles, title: 'Photorealistic Visual Quality' },
  { icon: Zap, title: 'Lightweight & Real-Time Optimized 3D Assets' },
  { icon: Layers, title: 'WebGL, AR, VR & MR Expertise' },
  { icon: ImageIcon, title: '16K Image Production' },
  { icon: Video, title: '4K Ultra HD Videos' },
  { icon: Film, title: '4K & 8K Animation Pipeline' },
  { icon: Clock, title: 'Fast Turnaround' },
  { icon: ShieldCheck, title: 'End-to-End CGI Production' },
  { icon: Globe, title: 'Global Client Support' },
];

export const PROJECT_CATEGORIES = ['All', 'Automotive', 'WebGL & XR', 'Architecture', 'Healthcare', 'Film & VFX', 'Industrial'];

export const PROJECTS = [
  {
    id: 1,
    title: 'Aurora GT Launch Film',
    category: 'Automotive',
    description: 'Full CGI launch film with 16K studio lighting and dynamic environment reveals.',
    tech: ['CGI', 'V-Ray', '4K'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Showroom Configurator',
    category: 'WebGL & XR',
    description: 'Real-time 3D product configurator optimized for the browser — CAD-to-WebGL pipeline.',
    tech: ['WebGL', 'Three.js', 'GLTF'],
    image: 'https://images.unsplash.com/photo-1626387346567-68d0c07293f9?auto=format&fit=crop&w=1200&q=80',
    demo: CONFIGURATOR_URL,
    github: '#',
  },
  {
    id: 3,
    title: 'Marina Bay Residences',
    category: 'Architecture',
    description: 'Cinematic architectural walkthrough with interior + exterior CGI visualization.',
    tech: ['Corona', 'UE5', '4K'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Cardio Surgical Animation',
    category: 'Healthcare',
    description: 'Accurate surgical procedure animation for medical device training.',
    tech: ['ZBrush', 'Blender', 'Nuke'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Cosmos Trailer VFX',
    category: 'Film & VFX',
    description: 'Cinematic VFX and digital environment creation for an original feature trailer.',
    tech: ['Houdini', 'Nuke', 'AI'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'CNC Assembly Explainer',
    category: 'Industrial',
    description: 'Assembly process animation for training and safety operations at scale.',
    tech: ['Solidworks', 'Blender', '4K'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'Hyperion EV — AR Try',
    category: 'WebGL & XR',
    description: 'AR-enabled car visualization for showroom staff and end customers.',
    tech: ['WebAR', 'USDZ', 'GLTF'],
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Aria Skyline Reveal',
    category: 'Architecture',
    description: 'High-resolution brochure imagery and reveal video for a luxury tower project.',
    tech: ['Corona', 'V-Ray', '8K'],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Titan Assembly Line',
    category: 'Industrial',
    description: 'Machine operation and maintenance guide animations for a manufacturing plant.',
    tech: ['UE5', 'Blender', '4K'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    demo: '#',
    github: '#',
  },
];

export const SKILL_GROUPS = [
  {
    name: 'CGI & Rendering',
    skills: [
      { name: 'V-Ray / Corona', level: 96 },
      { name: 'Blender / Cycles', level: 94 },
      { name: 'Unreal Engine 5', level: 90 },
      { name: '3ds Max / Maya', level: 92 },
    ],
  },
  {
    name: 'Compositing & VFX',
    skills: [
      { name: 'Nuke / After Effects', level: 92 },
      { name: 'Houdini', level: 82 },
      { name: 'DaVinci Resolve', level: 88 },
      { name: 'AI-Assisted VFX', level: 86 },
    ],
  },
  {
    name: 'Real-Time 3D & XR',
    skills: [
      { name: 'Three.js / R3F', level: 95 },
      { name: 'WebXR / WebAR', level: 90 },
      { name: 'Unity / Unreal XR', level: 88 },
      { name: 'GLTF / USDZ Pipeline', level: 92 },
    ],
  },
  {
    name: 'Modeling & Sculpting',
    skills: [
      { name: 'Hard-surface Modeling', level: 94 },
      { name: 'ZBrush Sculpting', level: 84 },
      { name: 'CAD-to-WebGL', level: 92 },
      { name: 'Substance Painter', level: 90 },
    ],
  },
  {
    name: 'Motion & Animation',
    skills: [
      { name: 'Character / Product Anim.', level: 90 },
      { name: 'Motion Graphics', level: 92 },
      { name: 'Simulation (Cloth/FX)', level: 84 },
      { name: '4K / 8K Pipelines', level: 94 },
    ],
  },
  {
    name: 'Delivery & Ops',
    skills: [
      { name: 'Render Farm / Cloud', level: 90 },
      { name: 'Project Management', level: 92 },
      { name: 'Client Collaboration', level: 95 },
      { name: 'Global Delivery', level: 93 },
    ],
  },
];

export const EXPERIENCES = [
  {
    role: 'Founder & CGI Director',
    company: '{STUDIO_NAME}',
    period: '2018 — Present',
    description: 'Leading a boutique CGI & VFX studio delivering photorealistic content and real-time 3D pipelines for global automotive, architecture and film clients.',
    achievements: ['300+ projects delivered', '16K & 8K production pipeline', 'Global client base across 12+ countries'],
    tech: ['V-Ray', 'UE5', 'Three.js', 'Nuke'],
  },
  {
    role: 'Senior CGI Artist',
    company: '{COMPANY_2}',
    period: '2013 — 2018',
    description: 'Delivered flagship automotive launch films and architectural visualisations for enterprise clients.',
    achievements: ['Led team of 8 artists', 'Award-winning launch campaign', 'Built in-house asset library'],
    tech: ['3ds Max', 'V-Ray', 'AE', 'Nuke'],
  },
  {
    role: 'CGI Artist',
    company: '{COMPANY_3}',
    period: '2010 — 2013',
    description: 'Focused on high-end architectural interior and exterior renders for real-estate marketing.',
    achievements: ['500+ still frames', '50+ brochure sets', 'Mentor to 4 junior artists'],
    tech: ['3ds Max', 'V-Ray', 'Photoshop'],
  },
  {
    role: 'Junior 3D Artist',
    company: '{COMPANY_4}',
    period: '2008 — 2010',
    description: 'Foundation years — mastering modeling, texturing and lighting fundamentals.',
    achievements: ['Product visualization', 'Print-quality renders', 'Motion graphics for TVCs'],
    tech: ['Maya', 'AE', 'Photoshop'],
  },
];

export const CERTIFICATIONS = [
  { name: 'Autodesk Certified Professional', org: 'Autodesk', date: '2023', link: '#' },
  { name: 'Chaos V-Ray Master', org: 'Chaos Group', date: '2022', link: '#' },
  { name: 'Unreal Authorized Instructor', org: 'Epic Games', date: '2023', link: '#' },
  { name: 'Blender Certified Trainer', org: 'Blender Foundation', date: '2022', link: '#' },
];

export const TESTIMONIALS = [
  {
    quote: 'One of the most talented CGI directors I have ever collaborated with. The delivery quality is simply next-level.',
    name: '{CLIENT_1}',
    role: 'VP of Marketing',
    company: '{COMPANY_A}',
    avatar: 'https://i.pravatar.cc/120?img=12',
    rating: 5,
  },
  {
    quote: 'Transformed our vision into stunning photorealistic visuals that blew our stakeholders away.',
    name: '{CLIENT_2}',
    role: 'Chief Product Officer',
    company: '{COMPANY_B}',
    avatar: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
  },
  {
    quote: 'Fast, thoughtful, and deeply technical. A true partner from concept to final delivery.',
    name: '{CLIENT_3}',
    role: 'Founder',
    company: '{COMPANY_C}',
    avatar: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
  },
  {
    quote: 'Delivered a real-time configurator that lifted our conversion rate by 38% in the first quarter.',
    name: '{CLIENT_4}',
    role: 'Head of eCommerce',
    company: '{COMPANY_D}',
    avatar: 'https://i.pravatar.cc/120?img=68',
    rating: 5,
  },
];

export const TECH_STACK = [
  'V-Ray', 'Corona', 'Unreal Engine', 'Blender', 'Maya', '3ds Max',
  'ZBrush', 'Substance', 'Houdini', 'Nuke', 'After Effects', 'DaVinci',
  'Three.js', 'WebGL', 'WebXR', 'GLTF', 'USDZ', 'Cinema 4D',
  'AI Pipelines', 'Photoshop', 'Illustrator', 'Marmoset', 'RenderMan', 'Redshift',
];

export const VALUES = [
  { title: 'Craftsmanship', text: 'Photorealistic detail and obsessive attention to every pixel and frame.' },
  { title: 'Performance', text: 'Lightweight, real-time optimized 3D assets engineered for real devices.' },
  { title: 'Storytelling', text: 'Cinematic composition and motion that turns products into narratives.' },
  { title: 'Partnership', text: 'Long-term collaboration built on trust, transparency and shared vision.' },
];
