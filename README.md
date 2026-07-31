# Room ODD — Chartered Architectural Consultancy

A production-ready, enterprise-grade web application built for **Room ODD**, a chartered architectural consultancy based in Colombo, Sri Lanka.

Designed with contemporary architectural minimalism, editorial typography, and structural grid layouts to showcase completed residential, commercial, interior, and hospitality projects.

---

## 🏛️ Project Overview

Room ODD specializes in:
- **Residential Architecture** — Custom luxury villas, contemporary family residences
- **Commercial Architecture** — High-rise office towers, retail flagships
- **Interior Architecture** — Spatial planning, material & lighting design
- **Renovations & Adaptive Reuse** — Heritage restoration, structural modernizations
- **Spatial Planning** — Master planning, land utilization analysis
- **Architectural Consultation** — Feasibility studies & expert design strategy

---

## 🎨 Design System & Aesthetic Reference

The UI follows contemporary architectural minimalism and editorial precision:

- **Typography**:
  - Headings: `Cormorant Garamond` (Editorial display serif)
  - Body & UI: `Inter` (Technical sans-serif)
- **Palette**:
  - Primary Canvas: Warm White (`#FAFAFA`), Deep Slate Charcoal (`#121316`)
  - Structural Neutrals: Stone Grey (`#E5E5E1`), Concrete Beige (`#F0ECE1`)
  - Accents: Muted Bronze (`#B38051`), Natural Olive (`#2A382E`), Dark Walnut (`#2C221E`)
- **Grid & Rules**:
  - 8pt spatial grid system
  - Blueprint-style thin-rule structural borders (`structural-border`)

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion (respects `prefers-reduced-motion`)
- **Forms & Validation**: React Hook Form + Zod
- **Email Delivery**: Resend API
- **Fonts**: Next.js Font Optimization (`next/font/google`)

---

## 🌐 Site Structure (13 Routes)

```
/                            # Home (Hero, Stats Matrix, Services, Featured Projects, Testimonials, CTA)
├── /about                   # Studio philosophy, team values, firm history
├── /services                # Detailed breakdown of 6 design disciplines
├── /projects                # Portfolio gallery with category filtering
│   └── /projects/[slug]     # Project detail (Brief, Material Palette, Image Gallery)
├── /process                 # 5-step architectural workflow (Discovery → Delivery)
├── /team                    # Leadership profiles & qualifications
├── /testimonials            # Full client testimonials page
├── /blog                    # Architectural journal listing
│   └── /blog/[slug]         # Article view
├── /contact                 # Consultation booking form (RHF + Zod + Resend)
├── /privacy-policy          # Privacy policy
└── /terms                   # Terms & conditions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ThaveeshaSonnadara/room-odd-website.git
   cd room-odd-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_resend_api_key_here
   CONTACT_RECEIVER_EMAIL=studio@roomodd.lk
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Repository Structure

```
room-odd-website/
├── src/
│   ├── app/                 # Next.js App Router pages & API routes
│   ├── components/          # Reusable UI & section components
│   │   ├── home/            # Home page sections (Hero, Stats, Featured, etc.)
│   │   ├── layout/          # Header, Footer, MobileMenu
│   │   └── ui/              # Button, Container, ProjectCard, ServiceCard, etc.
│   ├── lib/                 # Data schemas & placeholder content
│   └── styles/              # Global CSS & Tailwind directives
├── public/                  # Static assets & images
├── tailwind.config.cjs      # Custom design tokens & spatial grid
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # Strict TypeScript configuration
└── README.md                # Project documentation
```

---

## ⚖️ License

&copy; Room ODD (Pvt) Ltd. All rights reserved.
