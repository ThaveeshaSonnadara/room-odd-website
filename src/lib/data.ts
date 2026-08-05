/* ──────────────────────────────────────────────────────────────────
   Room ODD — Placeholder Data
   Structured to mirror future Sanity CMS schemas.
   Replace with GROQ queries once Sanity is integrated.
   ────────────────────────────────────────────────────────────────── */

// ── Types ──────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  heroImage: string;
  images: string[];
  brief: string;
  description: string;
  materials: string[];
  featured: boolean;
}

export type ProjectCategory =
  | 'residential'
  | 'commercial'
  | 'interior'
  | 'renovation'
  | 'hospitality';

export interface Service {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  project: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface Stat {
  value: string;
  label: string;
}

// ── Stats ──────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '150+', label: 'Projects Completed' },
  { value: '6', label: 'Design Disciplines' },
  { value: '40+', label: 'Industry Awards' },
];

// ── Services ───────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'residential',
    index: '01',
    title: 'Residential Architecture',
    subtitle: 'Luxury Living Redefined',
    description:
      'From bespoke villas to contemporary apartments, we craft living spaces that reflect your lifestyle, embrace the landscape, and stand the test of time.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 'commercial',
    index: '02',
    title: 'Commercial Architecture',
    subtitle: 'Spaces That Work',
    description:
      'Purpose-driven commercial environments — from corporate headquarters to retail flagships — designed to elevate brand identity and operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'interior',
    index: '03',
    title: 'Interior Architecture',
    subtitle: 'Material & Light',
    description:
      'Interior spatial design that considers volume, light, material, and human experience to create environments of extraordinary quality.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    id: 'renovation',
    index: '04',
    title: 'Renovations',
    subtitle: 'Thoughtful Transformation',
    description:
      'Sensitive restoration and adaptive reuse of existing structures, preserving heritage while introducing contemporary living standards.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 'spatial-planning',
    index: '05',
    title: 'Spatial Planning',
    subtitle: 'Intelligent Layouts',
    description:
      'Strategic spatial analysis and planning for sites of all scales, ensuring optimal land utilisation, circulation, and environmental responsiveness.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 'consultation',
    index: '06',
    title: 'Architectural Consultation',
    subtitle: 'Expert Guidance',
    description:
      'Independent professional advice on feasibility studies, planning applications, heritage compliance, and sustainable design strategy.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

// ── Projects ───────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: 'villa-serenity',
    title: 'Villa Serenity',
    category: 'residential',
    location: 'Colombo 07, Sri Lanka',
    year: 2024,
    area: '12,400 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    brief:
      'A contemporary family villa designed to harmonise with the mature garden landscape of Colombo 07, offering seamless indoor-outdoor living across three levels.',
    description:
      'Villa Serenity reimagines the traditional Colombo residence for a modern family. The design centres on a double-height living volume that opens onto a landscaped courtyard, creating a dialogue between architecture and nature. Natural stone, timber, and exposed concrete define the material palette, grounding the home in warmth and authenticity. Every space is calibrated for natural ventilation and daylight, reducing energy dependency while elevating comfort.',
    materials: ['Natural Stone', 'Timber Cladding', 'Exposed Concrete', 'Bronze Fixtures'],
    featured: true,
  },
  {
    slug: 'the-coral-house',
    title: 'The Coral House',
    category: 'residential',
    location: 'Galle, Sri Lanka',
    year: 2023,
    area: '8,200 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80',
    ],
    brief:
      'A beachfront residence on the southern coast that celebrates the intersection of tropical architecture and contemporary minimalism.',
    description:
      'Set on a coral-stone cliff overlooking the Indian Ocean, The Coral House is an exercise in restraint and sensitivity. The form follows the coastline, with cantilevered terraces that frame panoramic ocean views. Local coral stone walls reference the architectural heritage of Galle Fort, while the open plan interiors maximise cross-ventilation from the prevailing sea breeze.',
    materials: ['Coral Stone', 'Teak', 'Polished Concrete', 'Glass'],
    featured: true,
  },
  {
    slug: 'zenith-office-tower',
    title: 'Zenith Office Tower',
    category: 'commercial',
    location: 'Colombo 02, Sri Lanka',
    year: 2023,
    area: '64,000 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    ],
    brief:
      'A Grade-A commercial tower that sets a new benchmark for workplace architecture in Colombo\'s central business district.',
    description:
      'Zenith rises as a study in verticality and transparency. The curtain wall facade employs high-performance glazing with integrated solar shading, achieving Class-A energy performance while flooding every floor plate with natural light. The ground-level public plaza connects to the city fabric, while the rooftop terrace offers panoramic views of the Beira Lake.',
    materials: ['Structural Steel', 'High-Performance Glass', 'Granite', 'Aluminium'],
    featured: true,
  },
  {
    slug: 'kandy-heritage-boutique',
    title: 'Kandy Heritage Boutique',
    category: 'hospitality',
    location: 'Kandy, Sri Lanka',
    year: 2024,
    area: '18,600 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
    ],
    brief:
      'An adaptive reuse of a colonial-era estate transformed into a twelve-suite boutique hotel, honouring heritage while delivering contemporary luxury.',
    description:
      'The Kandy Heritage Boutique Hotel is a careful restoration of a 1920s tea planter\'s estate. Original timber joinery, clay-tile roofing, and colonial-era proportions are preserved, while new interventions — a cantilevered infinity pool, a subterranean spa — introduce modern indulgence. The design philosophy is one of dialogue: old and new, landscape and shelter, stillness and luxury.',
    materials: ['Restored Timber', 'Clay Tiles', 'Brass', 'Handloom Textiles'],
    featured: false,
  },
  {
    slug: 'the-courtyard-residence',
    title: 'The Courtyard Residence',
    category: 'residential',
    location: 'Battaramulla, Sri Lanka',
    year: 2022,
    area: '6,800 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
    ],
    brief:
      'A courtyard-centred family home that reinterprets the traditional Sri Lankan walawwa for contemporary suburban living.',
    description:
      'Organised around a central courtyard garden, this residence creates a private oasis within the suburban density of Battaramulla. The courtyard acts as the heart of the home — a source of light, air, and tranquility. Sliding timber screens modulate privacy and ventilation, while a restrained material palette of fair-faced concrete and timber creates a quiet, meditative atmosphere.',
    materials: ['Fair-faced Concrete', 'Timber Screens', 'Terrazzo', 'Corten Steel'],
    featured: false,
  },
  {
    slug: 'oceanic-resort-spa',
    title: 'Oceanic Resort & Spa',
    category: 'hospitality',
    location: 'Tangalle, Sri Lanka',
    year: 2024,
    area: '45,000 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    ],
    brief:
      'A twenty-villa coastal resort that dissolves the boundary between architecture and the Sri Lankan southern coastline.',
    description:
      'Oceanic Resort & Spa is conceived as a village of pavilions, each villa positioned to capture the drama of the Tangalle coastline. Rammed earth walls, thatched cadjan roofs, and open-air bathing courtyards root the design in local building traditions, while infinity pools, climate-controlled wine cellars, and smart-home systems deliver world-class luxury.',
    materials: ['Rammed Earth', 'Cadjan Thatch', 'Natural Stone', 'Reclaimed Timber'],
    featured: true,
  },
  {
    slug: 'kandalama-cliff-residence',
    title: 'Kandalama Cliff Residence',
    category: 'residential',
    location: 'Dambulla, Sri Lanka',
    year: 2024,
    area: '9,800 sq ft',
    heroImage: '/projects/kandalama-cliff-residence/hero.jpg',
    images: [
      '/projects/kandalama-cliff-residence/hero.jpg',
      '/projects/kandalama-cliff-residence/interior.jpg',
    ],
    brief:
      'A cliffside family home suspended above the Kandalama reservoir, where living spaces cascade down natural rock terraces. Raw concrete and timber frame frameless glazing that disappears into the landscape.',
    description:
      'Kandalama Cliff Residence is an exercise in topological architecture — the house does not sit on the land but emerges from it. The design follows the natural rock terraces of the cliff face, with each level stepping down toward the water\'s edge. Fair-faced concrete walls anchor the structure, while full-height frameless glazing dissolves the boundary between interior and the panoramic reservoir view. Teak screens modulate the intense Sri Lankan sun, casting patterned shadows that shift across the day. Bronze clerestory frames catch the golden hour light, warming the concrete\'s cool materiality. The infinity pool appears to merge with the reservoir below, a visual continuity that reinforces the architecture\'s dialogue with landscape.',
    materials: ['Fair-faced Concrete', 'Teak Screens', 'Bronze Clerestory Frames', 'Local Stone'],
    featured: true,
  },
  {
    slug: 'barefoot-luxury-pavilion',
    title: 'Barefoot Luxury Pavilion',
    category: 'hospitality',
    location: 'Ahangama, Sri Lanka',
    year: 2023,
    area: '12,600 sq ft',
    heroImage: '/projects/barefoot-luxury-pavilion/hero.jpg',
    images: [
      '/projects/barefoot-luxury-pavilion/hero.jpg',
      '/projects/barefoot-luxury-pavilion/yoga-deck.jpg',
      '/projects/barefoot-luxury-pavilion/treatment-room.jpg',
      '/projects/barefoot-luxury-pavilion/sunken-lounge.jpg',
    ],
    brief:
      'An oceanfront wellness pavilion for a boutique resort — open-air yoga deck, treatment rooms, and a sunken lounge all unified by a signature bronze-louvred roof canopy filtering tropical light.',
    description:
      'Barefoot Luxury Pavilion redefines the wellness typology for Sri Lanka\'s southern coast. Conceived as a single expansive roof gesture, the bronze-louvred canopy floats above a sequence of open and enclosed volumes, filtering the tropical sun into a soft, dappled glow. The yoga deck extends toward the Indian Ocean horizon, its timber decking warm underfoot at dawn. Treatment rooms are carved from rammed earth, their thick walls providing thermal sanctuary. The sunken lounge — a conversation pit wrapped in reclaimed timber — invites post-treatment repose with the sound of waves as backdrop. Every material is chosen for its honesty: rammed earth breathes, timber ages gracefully, bronze develops a living patina. This is architecture that does not impose on the coast but becomes part of its rhythm.',
    materials: ['Rammed Earth', 'Reclaimed Timber', 'Bronze Louvres', 'Cadjan Thatch Accents'],
    featured: true,
  },
];

// ── Team ───────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    name: 'Arjuna Wickramasinghe',
    role: 'Principal Architect & Founder',
    bio: 'With over 25 years of practice, Arjuna founded Room ODD with a vision to elevate Sri Lankan architecture to the international stage. His work bridges tropical modernism and contemporary minimalism, earning recognition from the Sri Lanka Institute of Architects and the Aga Khan Award for Architecture.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    qualifications: ['B.Arch (Moratuwa)', 'M.Arch (AA London)', 'SLIA Chartered'],
  },
  {
    name: 'Dinusha Perera',
    role: 'Senior Architect & Design Director',
    bio: 'Dinusha leads the design team with a meticulous eye for detail and a deep understanding of material craft. Her portfolio spans luxury residential and hospitality projects across Sri Lanka and the Maldives.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    qualifications: ['B.Arch (Moratuwa)', 'LEED AP', 'SLIA Chartered'],
  },
  {
    name: 'Kasun Rathnayake',
    role: 'Interior Architecture Lead',
    bio: 'Kasun brings spatial poetry to every interior he touches. Trained in Scandinavian design principles, he creates interiors that balance warmth, function, and restraint — always letting the architecture breathe.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    qualifications: ['B.Des (NSBM)', 'MA Interior Design (RCA London)'],
  },
  {
    name: 'Sachini Fernando',
    role: 'Project Manager',
    bio: 'Sachini ensures every project moves from concept to completion with precision and care. Her project management expertise and client-first approach keep timelines on track and stakeholders informed at every stage.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    qualifications: ['B.Sc (QS, Moratuwa)', 'PMP Certified'],
  },
];

// ── Testimonials ───────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Room ODD understood our vision from the very first meeting. What they delivered was not just a house — it was a home that tells our story. Every detail, every material choice, every spatial decision was considered with extraordinary care.',
    client: 'Rohan & Nimalka De Silva',
    role: 'Homeowners',
    project: 'Villa Serenity',
  },
  {
    id: '2',
    quote:
      'The Zenith Tower has transformed how our team works. Room ODD designed a workplace that attracts talent and embodies our brand values. The attention to light, air quality, and communal spaces is genuinely world-class.',
    client: 'Priyantha Jayasuriya',
    role: 'CEO, Zenith Holdings',
    project: 'Zenith Office Tower',
  },
  {
    id: '3',
    quote:
      'They took a crumbling colonial estate and created something magical — a hotel that honours its history while offering an experience our guests describe as transformative. Our occupancy rates exceeded projections within the first quarter.',
    client: 'Anoma Ratnayake',
    role: 'Director, Heritage Hospitality Group',
    project: 'Kandy Heritage Boutique',
  },
  {
    id: '4',
    quote:
      'Working with Room ODD was a masterclass in collaborative design. They listened, challenged our assumptions constructively, and delivered a home that exceeded every expectation. The courtyard is now the soul of our family life.',
    client: 'Dr. Chaminda & Iresha Weerasinghe',
    role: 'Homeowners',
    project: 'The Courtyard Residence',
  },
];

// ── Process Steps ──────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Brief',
    description:
      'We begin by listening. Through in-depth consultations, site visits, and contextual analysis, we develop a comprehensive understanding of your aspirations, constraints, and the unique character of your site.',
    duration: '2–4 Weeks',
  },
  {
    number: '02',
    title: 'Concept Design',
    description:
      'Ideas take form through sketches, physical models, and digital visualisations. We explore multiple design directions, testing spatial relationships, material palettes, and environmental strategies before refining the concept.',
    duration: '4–6 Weeks',
  },
  {
    number: '03',
    title: 'Design Development',
    description:
      'The approved concept is developed into a detailed design package — structural systems, material specifications, MEP coordination, and interior detailing are integrated into a cohesive architectural resolution.',
    duration: '6–10 Weeks',
  },
  {
    number: '04',
    title: 'Documentation',
    description:
      'Comprehensive construction documents, specifications, and schedules are prepared to the highest industry standards, ensuring precise communication to contractors and regulatory authorities.',
    duration: '4–8 Weeks',
  },
  {
    number: '05',
    title: 'Construction Administration',
    description:
      'We remain closely involved during construction — conducting regular site inspections, reviewing shop drawings, managing change orders, and ensuring the built outcome faithfully realises the design intent.',
    duration: 'Project Duration',
  },
];

// ── Blog Posts ──────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: 'tropical-modernism-sri-lanka',
    title: 'Tropical Modernism: Designing for the Sri Lankan Climate',
    excerpt:
      'How contemporary architecture can learn from centuries of tropical building wisdom to create homes that breathe, cool naturally, and celebrate their environment.',
    category: 'Design Philosophy',
    date: '2024-11-15',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    content:
      'Sri Lanka\'s equatorial climate presents both challenges and extraordinary opportunities for architecture. The island\'s building traditions — from the wind-catching courtyards of the Kandyan walawwa to the deep verandahs of colonial bungalows — offer a rich vocabulary of passive climate strategies that remain deeply relevant to contemporary practice.\n\nAt Room ODD, we approach each project as a conversation between modern ambition and environmental intelligence. Every design decision — from building orientation and fenestration ratios to material thermal mass and ventilation pathways — is calibrated to work with the climate, not against it.',
  },
  {
    slug: 'material-honesty-architecture',
    title: 'The Case for Material Honesty in Architecture',
    excerpt:
      'Why we believe in letting materials speak truthfully — exposing concrete, celebrating timber grain, and allowing patina to become part of the design narrative.',
    category: 'Materials',
    date: '2024-10-02',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    content:
      'In an age of surface-deep finishes and synthetic imitations, there is a quiet power in materials that are allowed to be themselves. At Room ODD, material honesty is not an aesthetic preference — it is an ethical position.\n\nWhen we specify fair-faced concrete, we accept its imperfections as evidence of craft. When we use timber, we celebrate the grain, the knots, the subtle variations that no factory can replicate. And when we allow materials to age — to develop patina, to weather, to evolve — we are designing for time, not against it.',
  },
  {
    slug: 'future-of-sri-lankan-hospitality',
    title: 'The Future of Sri Lankan Hospitality Architecture',
    excerpt:
      'As Sri Lanka reclaims its position as a premier travel destination, we explore how architectural design is shaping the next generation of boutique hotels and resorts.',
    category: 'Hospitality',
    date: '2024-08-20',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    content:
      'Sri Lanka\'s hospitality sector is undergoing a renaissance. International travellers are increasingly seeking authentic, place-specific experiences over generic luxury — and the island\'s extraordinary cultural heritage, diverse landscapes, and warm hospitality traditions position it perfectly to deliver.\n\nThe most compelling new hotels and resorts are those that embed themselves in their context — architecturally, culturally, and environmentally. They are designed not as isolated compounds but as gateways to the landscape, the culture, and the community.',
  },
];

// ── Company Info ────────────────────────────────────────────────────

export const companyInfo = {
  name: 'Room ODD',
  tagline: 'Chartered Architectural Consultancy',
  founded: 1999,
  address: '42 Ward Place, Colombo 07, Sri Lanka',
  phone: '+94 11 269 4200',
  email: 'studio@roomodd.lk',
  hours: 'Monday – Friday, 9:00 AM – 6:00 PM',
  social: {
    instagram: 'https://instagram.com/roomodd',
    linkedin: 'https://linkedin.com/company/roomodd',
    pinterest: 'https://pinterest.com/roomodd',
  },
};
