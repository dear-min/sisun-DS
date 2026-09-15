---
description: Fashion E-Commerce Design System architecture, Figma token mapping conventions, and component authoring rules.
globs: ["src/**/*", "tokens/**/*", ".storybook/**/*", "**/*"]
---

# Design System Rules for Antigravity Agent

This workspace is a fashion e-commerce design system ("Atelier Design System") built with React, TypeScript, Storybook, and Vanilla CSS tokens linked 1:1 with Figma (`00. Common Design System`).

## 0. Evidence-Based Implementation & Material Analysis (자료 기반 분석 & 상상코딩 전면 금지)
- **상상코딩 전면 금지 (No Guesswork / Imagination Coding)**:
  - 어떠한 경우에도 임의의 추측, 자의적인 상상, 눈대중으로 스타일이나 컴포넌트 코드를 작성하지 않습니다.
  - 디자인 시스템 토큰 체계에 정의되지 않은 임의의 `#hex`, `px`, 스타일 속성을 마음대로 하드코딩하거나 추가하지 않습니다.
- **제공 자료 정밀 선행 분석 (Thorough Analysis of Provided Materials)**:
  - 코딩 및 수정 작업 전, 반드시 사용자가 제공한 모든 공식 자료를 철저히 선행 분석한 근거에 기반하여 작업합니다.
    1. **Figma 레이아웃**: 레이아웃 구조, 오토레이아웃(Flexbox), 정렬, 여백/패딩, 반응형 규격 등
    2. **디자인 토큰 JSON**: `tokens.json`, Figma Tokens Studio 값, Primitive 및 Semantic 계층
    3. **컴포넌트 명세**: Variants, State(Default/Hover/Active/Disabled), Props, 접근성(A11y)
    4. **요구사항 가이드**: 프로젝트 컨벤션, 비즈니스 및 사용자 경험 요구사항
- **이미지 정밀 분석 및 디자인 토큰 1:1 매핑 (Image Analysis & Token Mapping)**:
  - 사용자가 요청 시 제공하거나 참조하는 모든 이미지(피그마 캡처, 디자인 시안, 컴포넌트 스크린샷 등)는 작업 전 반드시 시각 요소를 정밀 분석합니다.
  - 색상, 폰트 크기, 굵기, 행간/자간, 여백/패딩/갭, 테두리(보더), 곡률(border-radius), 아이콘 크기 등 모든 시각적 요소를 프로젝트에 정의된 공식 디자인 토큰(`var(--color-*)`, `var(--primitive-*)`, `var(--space-*)`, `var(--radius-*)` 등)에 1:1로 엄격히 매핑한 근거를 바탕으로 작업합니다.
- **모호성 해결 절차 (Ambiguity Resolution)**:
  - 제공 자료에 정의되지 않았거나 상충되는 요소가 발견될 경우, 임의로 판단하거나 추측하여 코딩하지 않고 분석된 근거와 선택지를 사용자에게 질문하여 확인 후 진행합니다.
- **룰 거버넌스 (Rule Governance)**:
  - 모든 룰 업데이트는 대화 세션을 통해 합의하고 룰 문서에 국문으로 명확히 기록 및 유지 관리합니다.

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
