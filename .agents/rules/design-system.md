---
description: Fashion E-Commerce Design System architecture, Figma token mapping conventions, and component authoring rules.
globs: ["src/**/*", "tokens/**/*", ".storybook/**/*"]
---

# Design System Rules for Antigravity Agent

This workspace is a fashion e-commerce design system ("Atelier Design System") built with React, TypeScript, Storybook, and Vanilla CSS tokens linked 1:1 with Figma (`00. Common Design System`).

## 0. Evidence-Based Implementation & Rule Governance (자료 기반 분석 & 상상 코딩 금지)
- **상상 코딩 금지 (No Guesswork/Imagination)**: 자의적인 추측이나 상상으로 코드를 작성하지 않습니다. 반드시 사용자가 제공한 원본 자료(피그마, 토큰 JSON, 컴포넌트 명세)를 선행 분석한 근거에 기반하여 개발합니다.
- **룰 거버넌스 (Rule Governance)**: 모든 룰 업데이트는 대화 세션을 통해 합의하고 `rules.md`에 국문으로 기록 및 유지 관리합니다.

## 1. Zero Hardcoding Policy
- NEVER hardcode arbitrary `#hex`, `rgb()`, or pixel values directly in components or CSS.
- Always use CSS variables from `src/tokens/colors.css`, `typography.css`, and `spacing.css`.
- Semantic color naming rules:
  - Text: `var(--color-text-*)` (default, subtle, secondary, tertiary, disabled, inverse, error, success, point-primary/secondary/tertiary)
  - Border: `var(--color-border-*)` (default, secondary, tertiary, subtle, disabled, negative, positive, point-*)
  - Background: `var(--color-bg-*)` (default, secondary, tertiary, disabled, point-*)
  - Icon: `var(--color-icon-*)` (default, secondary, tertiary, disabled, inverse, subtle, negative, positive, point)
  - Overlay: `var(--color-overlay-*)`
  - Primary Brand: `var(--color-primary-*)`

## 2. Typography Standard
- Primary Font Family: `Pretendard`, loaded via official CDN (`--primitive-font-family`).
- Primitive Tokens:
  - Heading font sizes: `var(--primitive-font-size-heading-xlarge/large/medium/small)` (32px, 24px, 18px, 16px)
  - Body font sizes: `var(--primitive-font-size-body-large/medium/small/xsmall/xxsmall)` (16px, 15px, 14px, 13px, 12px)
  - Letter spacing: `var(--primitive-letter-spacing-0)` (0em), `var(--primitive-letter-spacing-1)` (-0.02em)
  - Font weights: `var(--primitive-font-weight-regular/medium/semibold)` (400, 500, 600)
- Price numbers: Always apply `font-variant-numeric: tabular-nums` (class `.tabular-nums`) to avoid layout jitter.

## 2-1. Primitive Number Standard (.Primitive/Number)
- 22 Primitive Scale: `var(--primitive-number-0)` through `var(--primitive-number-20)` (0px~160px) + `var(--primitive-number-circle)` (999px).
- All component spacing (`var(--space-*)`) and border-radii (`var(--radius-*)`) must strictly derive from this Primitive Number scale.

## 3. Atomic Structure & File Organization
- Every component belongs to:
  - `src/components/atoms/` (Buttons, Badges, Prices, Swatches, WishlistButton, Icon)
  - `src/components/molecules/` (ProductCard, QuantitySelector, FilterChip)
  - `src/components/organisms/` (Header, CartDrawer, ProductGrid, MobileStickyOrderBar)
- Each component directory MUST have:
  - `ComponentName.tsx`
  - `component-name.css`
  - `ComponentName.stories.tsx`

## 4. TypeScript & Bundler Compatibility
- Interfaces and types MUST be imported with `import type { ... }` due to Vite/Rolldown isolated modules.
- Props must strictly reflect Figma variants and properties.

## 5. Mobile-First & Fashion Standards
- Fashion lookbook images must adhere to 3:4 portrait ratio (`--aspect-fashion: 3 / 4`).
- All interactive elements must have minimum 40px touch targets and visible focus rings (`:focus-visible`).
- Pure icon buttons must have `aria-label`.
