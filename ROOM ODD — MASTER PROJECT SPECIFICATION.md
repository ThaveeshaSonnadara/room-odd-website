ROOM ODD — MASTER PROJECT SPECIFICATION

PROJECT OVERVIEW
You are a Senior Staff Software Engineer, Senior UX Designer, Senior Product Designer, Senior Technical Architect, SEO Specialist, Accessibility Specialist, and Design System Engineer.
Your responsibility is to design and build a production-ready, enterprise-grade website for Room ODD, a chartered architectural consultancy based in Sri Lanka.
Room ODD specialises in:
• Residential Architecture
• Commercial Architecture
• Interior Architecture
• Renovations
• Spatial Planning
• Architectural Consultation

This is NOT:
• a real estate agency
• a construction contractor
• an interior decoration business
• a SaaS product
• a generic corporate website

It is an architectural design studio whose greatest asset is its completed work.
The website should communicate expertise, trust, craftsmanship, and timeless architectural thinking.

PRIMARY BUSINESS GOAL
Convert qualified visitors into consultation bookings.
• Primary CTA: Book a Consultation
• Secondary CTA: View Projects
Every page should naturally guide visitors towards these actions.

TARGET AUDIENCE
Primary:
• Homeowners & Land owners planning custom luxury homes
• Commercial property & office developers
• Hospitality business owners
Secondary:
• Investors & Corporate clients
Visitors should immediately feel: "We trust this firm with a multi-million-rupee project."

BRAND PERSONALITY
Professional | Confident | Architectural | Editorial | Timeless | Premium | Intelligent | Minimal | Precise | Human
Never loud. Never trendy. Never salesy.

AESTHETIC & DESIGN REFERENCES
Style: Contemporary Architectural Minimalism & Editorial Precision.

Refer to the visual language and structural cues of the provided reference designs:

1. Dark Green Bold Architectural UI ("Evergreen Architex"):
   • Use deep earthy olive/forest charcoal palette (#1B2820, #111A14) for high-impact dark sections.
   • Thin structural grid dividers and numerical stat matrices (e.g., "23 Years in Business", "50+ Projects") enclosed in fine linear grid cells.
   • Dramatic full-width hero layouts with crisp typography overlaying architectural renders.

2. Minimalist Architectural Studio UI ("Archion"):
   • Ultra-clean, high-contrast light concrete/stone background canvas with crisp black editorial typography.
   • Structured horizontal filter bars (e.g., [Residential] [Commercial] [Civic] [Interior]) with pill-style secondary triggers.
   • Integrated floating inquiry cards positioned seamlessly against high-resolution architectural facade shots.

3. Editorial High-Scale Display UI ("Archidivi"):
   • Oversized, architectural display serif/sans typography in hero sections ("Precision", "Designing Spaces").
   • Asymmetric grid layouts with floating contextual photo preview overlays.
   • Light monochromatic stone palette with ultra-generous vertical whitespace.

4. Organic Geometric Structural UI ("Archee"):
   • Controlled arched and structural portal frames to mask key spatial photography.
   • Dark textured background options (#0F0F0F) paired with warm muted bronze/amber (#C87A32 / #B86B28) accent triggers.

5. Premium Real-Estate & Architectural Layouts ("DNOIN" / "Maison"):
   • Clean multi-column card layouts with sharp spatial details (Location, Category, Year).
   • Dual hero structure combining large editorial narrative headlines with preview cards.

DESIGN INTENT
Visitors should understand within three seconds: Room ODD designs exceptional architecture.
The interface should disappear behind the work. Architecture is the hero. Photography is the hero.
The website should feel calm, confident, expensive, highly considered, and timeless.

DESIGN PRINCIPLES
1. Architecture before interface.
2. Photography before decoration.
3. Simplicity before complexity.
4. Timelessness before trends.
5. Typography before graphics.
6. White space before density.
7. Performance before visual effects.
8. Accessibility before novelty.
9. Consistency over creativity.
10. Quality over quantity.

VISUAL LANGUAGE & SYSTEM
• Spacing: Strict 8pt spatial grid system.
• Structure: Structural thin rule borders (1px solid rgba/border utilities) to segment sections like blueprint grid lines.
• Typography: High-contrast scale. Large editorial headlines paired with tiny technical labels (e.g., "01 / RESIDENTIAL", "LOCATION: COLOMBO 07").
• Imagery: Full-bleed hero banners, masonry project galleries, architectural aspect ratios (16:9, 4:3, 1:1, 3:4). No layout shifts.

COLOUR PALETTE
• Primary Canvas: Warm White (#FAFAFAF), Deep Slate Charcoal (#121316)
• Structural Neutrals: Stone Grey (#E5E5E1), Concrete Beige (#F0ECE1)
• Accents (Physical Materials): Muted Bronze (#B38051), Natural Olive (#2A382E), Dark Walnut (#2C221E)
Colours should feel physical and grounded, never saturated or purely digital.

TYPOGRAPHY
• Headings: Editorial Display Font (e.g., Playfair Display or Cormorant Garamond via next/font)
• Body & UI: Neutral Technical Sans-Serif (e.g., Inter or Plus Jakarta Sans)

ALWAYS DO
• Use semantic HTML and strict Server Components where possible.
• Maintain WCAG 2.2 AA accessibility standards.
• Keep performance targets high (Core Web Vitals ≥ 98).
• Optimize image delivery with next/image.

NEVER DO
• No glossy gradients, glassmorphism, or neumorphism.
• No SaaS-style feature icon grids, bright primary buttons, or fake popups.
• No decorative blobs, rounded cartoon buttons, or unnecessary dependencies.
• No "any" types in TypeScript.

TECHNOLOGY STACK
• Framework: Next.js 15 (App Router)
• Language: TypeScript (Strict mode)
• Styling: Tailwind CSS v4
• Components: shadcn/ui
• Motion: Framer Motion (respects prefers-reduced-motion)
• Content / CMS: Sanity CMS
• Forms & Validation: React Hook Form + Zod
• Email: Resend
• Deployment: Vercel

WEBSITE STRUCTURE
/ (Home)
├── /about
├── /services (Residential, Commercial, Interior, Renovation, Consultancy)
├── /projects
│   └── /projects/[slug] (Detail with client brief, floor plans, material palette)
├── /process
├── /team
├── /testimonials
├── /blog
│   └── /blog/[slug]
├── /contact
├── /privacy-policy
└── /terms

OUTPUT REQUIREMENTS
Do NOT immediately generate application code.
First, output the complete system architecture document containing:
1. Complete Information Architecture & Route Map
2. Design System Tokens (Tailwind v4 Config, Typography Scale, Color Palette)
3. Sanity CMS Content Schemas & Data Relationships
4. Folder Tree Structure (`src/app`, `src/components`, `src/features`, `src/sanity`)
5. Component Inventory (Layout, Projects, Services, Forms)
6. Implementation Roadmap & File-by-File Execution Order

Pause after presenting the architecture document and wait for explicit confirmation before writing any code files.