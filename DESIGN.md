# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

**Architectural Minimalism & Grounded Materials**
The Room ODD visual identity reflects physical architecture — raw concrete, warm timber, natural light, and structural precision. No glossy SaaS gradients, no floating card blobs, no digital AI slop.

## Token System

### Colors

- **Canvas**: `#FAFAFA` (Warm Off-White)
- **Canvas Dark**: `#121316` (Deep Charcoal / Slate)
- **Bronze**: `#B38051` (Muted Architectural Bronze accent)
- **Bronze Dark**: `#96693F`
- **Olive**: `#2A382E` (Natural Deep Earth Olive)
- **Beige**: `#F0ECE1` (Concrete & Sand Beige)
- **Stone**: `#E5E5E1` (Muted Structural Stone)

### Typography

- **Display Header**: Cormorant Garamond (`font-display`), light weight, tracking-tighter, leading-tight.
- **Body & Technical**: Inter (`font-body`), clean sans-serif, neutral rendering.
- **Editorial Labels**: Uppercase `font-body text-xs uppercase tracking-widest text-canvas-dark/40`.

### Spacing & Grid

- **8pt Architectural Grid**: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px.
- **Borders**: Thin blueprint hairline borders (`border-white/10` or `border-canvas-dark/10`).

## Anti-Patterns & Bans

- ❌ **No AI Slop**: No rounded SaaS cards (`rounded-3xl`), no colorful neon gradients, no floating glassmorphic blur blobs, no purple or cyan accents.
- ❌ **No Decorative Motion**: Motion must serve state transition or scroll entrance; no erratic hover wobbles or spinning icons.
- ❌ **No Generic Placeholders**: Use curated high-resolution architectural imagery.

## Component Rules

- **Buttons**: Sharp or subtle 2px radius (`rounded-sm`), uppercase tracking-wider text, solid bronze or high-contrast border outline.
- **Cards**: Structural border outline (`structural-border` or `border-b border-canvas-dark/10`), minimal background tint, no generic drop shadows.
- **Navigation**: Clean fixed header with bronze active page indicator pill (`Framer Motion layoutId="activeNav"`).
- **Preloader**: Minimalist dark preloader overlay with animated bronze progress line.
