# Atelier Design System - Agent Guidelines & Rules

이 워크스페이스는 피그마(`00. Common Design System`)와 1:1로 연동되는 패션 이커머스 디자인 시스템("Atelier Design System")입니다.

## 0. 자료 기반 분석 & 상상코딩 전면 금지 원칙 (Evidence-Based Implementation)
- **상상코딩 전면 금지 (No Guesswork / Imagination Coding)**:
  - 어떠한 경우에도 임의의 추측, 자의적인 상상, 눈대중으로 스타일이나 컴포넌트 코드를 작성하지 않습니다.
  - 디자인 토큰 체계에 정의되지 않은 임의의 `#hex`, `px`, 스타일 속성을 마음대로 하드코딩하거나 추가하지 않습니다.
- **제공 자료 정밀 선행 분석 (Thorough Analysis of Provided Materials)**:
  - 코딩 및 수정 작업 전, 반드시 사용자가 제공한 모든 공식 자료를 철저히 선행 분석한 근거에 기반하여 작업합니다.
    1. **Figma 레이아웃**: 레이아웃 구조, 오토레이아웃(Flexbox), 정렬, 패딩, 반응형 규격 등
    2. **디자인 토큰 JSON**: `tokens.json`, Figma Tokens Studio 값, Primitive 및 Semantic 계층
    3. **컴포넌트 명세**: Variants, State(Default/Hover/Active/Disabled), Props, 접근성(A11y)
    4. **요구사항 가이드**: 프로젝트 컨벤션, 비즈니스 및 사용자 경험 요구사항
- **이미지 정밀 분석 및 토큰 1:1 매핑 (Image Analysis & Token Mapping)**:
  - 사용자가 제공하거나 요청하는 모든 이미지(피그마 캡처, 디자인 시안, 컴포넌트 스크린샷 등)는 **작업 전 반드시 최우선으로 시각 요소를 정밀 분석**합니다.
  - 색상, 타이포그래피(크기/굵기/행간/자간), 안팎 여백(Padding/Margin/Gap), 테두리(Border), 모서리 곡률(Radius), 아이콘 규격 등 모든 시각 요소를 프로젝트에 정의된 공식 디자인 토큰(`var(--color-*)`, `var(--primitive-*)`, `var(--space-*)`, `var(--radius-*)` 등)에 **1:1로 엄격히 매핑한 근거**를 도출한 후 작업합니다.
- **모호성 해결 절차 (Ambiguity Resolution)**:
  - 제공 자료에 정의되지 않았거나 상충되는 요소가 발견될 경우, 임의로 판단하지 않고 분석된 근거와 선택지를 사용자에게 질문하여 확인 후 진행합니다.

## 1. 하드코딩 전면 금지 (Zero Hardcoding Policy)
- 임의의 `#hex`, `rgb()`, `px` 단위 하드코딩을 절대 금지합니다.
- 반드시 `src/tokens/colors.css`, `typography.css`, `spacing.css` 등의 CSS 변수를 사용합니다.
- 시맨틱 토큰 명명 규칙:
  - Text: `var(--color-text-*)`
  - Border: `var(--color-border-*)`
  - Background: `var(--color-bg-*)`
  - Icon: `var(--color-icon-*)`
  - Overlay: `var(--color-overlay-*)`
  - Primary: `var(--color-primary-*)`

## 2. 타이포그래피 & Primitive 규격
- Font Family: `Pretendard` (`--primitive-font-family`)
- Primitive Number: `var(--primitive-number-0)` ~ `var(--primitive-number-20)` 및 `circle` (999px)
- 모든 컴포넌트의 Spacing 및 Radius는 반드시 이 Primitive Number 스케일을 기반으로 매핑합니다.

## 3. 상세 규칙 및 레퍼런스
- 전체 디자인 시스템 아키텍처 및 상세 매핑 명세는 [DESIGN_SYSTEM.md](file:///c:/Users/user/Desktop/DesignSystem/DESIGN_SYSTEM.md) 및 [.agents/rules/design-system.md](file:///c:/Users/user/Desktop/DesignSystem/.agents/rules/design-system.md)를 준수합니다.
