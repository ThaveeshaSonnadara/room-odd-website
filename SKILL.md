---
name: design-system-tuple
description: >
  Apply the Tuple design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# Tuple — Design System Skill

## When to Use

- Building new UI components for Tuple.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Tuple — https://tuple.app/
- **Surface:** marketing
- **Audience:** Developers and technical decision-makers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and a complementary two-font typographic system.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-14 | `#F4F4F5` | Background |
| color-1 | `#27272A` | Text Primary |
| color-6 | `#71717A` | Text Secondary |
| color-10 | `#A1A1AA` | Text Secondary |
| color-3 | `#6F42C1` | Accent |
| color-4 | `#005CC5` | Accent |
| color-5 | `#6A5ED9` | Accent |
| color-7 | `#22863A` | Accent |
| color-8 | `#D73A49` | Accent |
| color-9 | `#16A34A` | Accent |
| color-11 | `#25C43A` | Accent |
| color-12 | `#FFB929` | Accent |
| color-13 | `#E4E4E7` | Border |
| color-2 | `#52525B` | Background Dark |
| color-15 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Inter Variable, DM Mono

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 11px | Captions, metadata |
| text-sm | 13px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 18px | Subheadings, emphasis |
| text-xl | 20px | Section headings |
| text-2xl | 60px | Section headings |

**Weight scale:** 400 · 500 · 600 · 700
**Line heights:** 28px · 72px · 29.25px · 24px · 20px · 16.5px · 21.125px · 26px · 12px

### Spacing

**Base unit:** 4px

`space-1: 2px` · `space-2: 4px` · `space-3: 6px` · `space-4: 7px` · `space-5: 8px` · `space-6: 10px` · `space-7: 11px` · `space-8: 12px` · `space-9: 16px` · `space-10: 17px` · `space-11: 20px` · `space-12: 24px` · `space-13: 32px` · `space-14: 48px` · `space-15: 64px` · `space-16: 128px` · `space-17: 152px` · `space-18: 160px` · `space-19: 344px` · `space-20: 471px`

### Shapes

**Border radius:** `radius-sm: 4px` · `radius-md: 6px` · `radius-lg: 8px` · `radius-xl: 12px` · `radius-full: 12px 12px 0px 0px` · `radius-6: 16px` · `radius-7: 24px` · `radius-full: 9999px`

### Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **shadow-md:** `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **shadow-lg:** `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `fill 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.1s forwards slide-fade-in`
- **duration-slow:** `1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.3s forwards slide-fade-in`
- **duration-slow:** `1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.6s forwards slide-fade-in`
- **duration-slow:** `1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.5s forwards fade-in`
- **duration-slow:** `1s steps(1) infinite blink`
- **duration-slow:** `1.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0.5s forwards hero`

## Component Inventory

- **Links:** 53 detected
- **Navigation:** 1 elements
- **Code blocks:** 11 detected
- **Images:** 120 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (4px, 6px, 8px, 12px, 12px 12px 0px 0px, 16px, 24px, 9999px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
