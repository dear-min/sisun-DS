# Atelier Fashion Design System: Purpose, Direction & Architectural Rules

> **피그마(Figma) `00. Common Design System`과 스토리북(Storybook) 간의 완벽한 1:1 싱크를 위한 디자인 시스템 마스터 가이드**

---

## 1. 목적 (Purpose)

### 1.1 비즈니스 & 프로덕트 목적
- **비주얼 경험 극대화**: 패션 도메인 특유의 실루엣, 패브릭 질감, 모델 착용 핏을 온전히 전달하여 상품 매력도와 구매 전환율(CVR) 증대.
- **모바일 쇼핑 최적화**: 트래픽의 80% 이상을 차지하는 모바일 사용자에게 2열 룩북 그리드와 화면 하단 고정 구매(Sticky CTA) 동선 제공.
- **프로모션 기민성**: 실시간 타임딜, 시즌 할인율, 신상품 뱃지 표기를 규칙화하여 마케팅/기획전 프로모션에 신속히 대응.

### 1.2 디자인 Ops & 엔지니어링 목적
- **Single Source of Truth (단일 진실 공급원)**: 피그마의 `Variables`와 코드베이스의 `CSS Tokens`를 1:1 일치시켜 디자인 부채(Design Debt) 제거.
- **커뮤니케이션 비용 최소화**: 피그마 컴포넌트의 Property(Variants, Booleans, Text)와 React의 Props를 동일한 네이밍으로 통일.
- **자동화된 동기화 파이프라인**: Figma Tokens Studio JSON을 원클릭(`npm run tokens:sync`)으로 CSS 변수로 컴파일.

---

## 2. 방향성 (Design Direction & Principles)

### 2.1 Visual-First & Editorial Aesthetics (비주얼 중심의 감성)
- 의류 및 룩북의 황금 비율인 **3:4 세로 비율(`--aspect-fashion: 3 / 4`)**을 표준으로 채택.
- 상품 자체의 비주얼을 해치지 않도록 **정갈한 모노크롬 베이스**에 브랜드 시그니처 웜 테라코타 포인트(`Color/Orange/50`)를 포인트로 조화롭게 활용.

### 2.2 2-Tier Token Architecture & Category Organization (토큰 체계 및 카테고리 분류)
피그마의 구조와 100% 동일한 계층 분리 및 스토리북 독립 카테고리 편성:
1. **Layer 1: `.Primitive` (원시 토큰 - 총 105개 100% 등록 완료)**
   - **Typography (15개 - 독립 카테고리 `Foundations/Design Tokens/Typography`)**:
     - `Font/Family`: `Pretendard`
     - `Font-size / Heading` (4개): `XLarge`(32px), `Large`(24px), `Medium`(18px), `Small`(16px)
     - `Font-size / Body` (5개): `Large`(16px), `Medium`(15px), `Small`(14px), `XSmall`(13px), `XXSmall`(12px)
     - `Letter-spacing` (2개): `0`(0em), `1`(-0.02em)
     - `Font-weight` (3개): `Regular`(400), `Medium`(500), `SemiBold`(600)
     - *전용 도구*: 실시간 문구/사이즈/굵기/자간 인터랙티브 테스터 내장
   - **Number (22개 - 독립 카테고리 `Foundations/Design Tokens/Number`)**:
     - `0`~`20` (0px, 2px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 96px, 120px, 140px, 160px), `circle` (999px)
     - 여백(Spacing/Gap/Padding), 컴포넌트 크기(Sizing), 곡률(Radius)의 단일 진실 공급원(SSOT)
     - *전용 도구*: 실시간 슬라이더 기반 박스 모델 & 스케일 인터랙티브 비주얼라이저 내장
   - **Color (68개 - 100% 등록 완료)**:
     - 원시 색상값 보관: `Color/Gray/*` (0~100 스케일), `Color/Orange/*`, `Color/Red/50`, `Color/Blue/52`, `Color/Overlay/*`
2. **Layer 2: `Semantic` (의미 기반 토큰 - 독립 카테고리 `Foundations/Design Tokens/Color`, `Layout/Radius`)**
   - **Color (48개)**: `Text(11)`, `Border(10)`, `Background(8)`, `Icon(9)`, `Overlay(6)`, `Primary(4)`
   - **Layout / Radius (8개 - 피그마 1:1 매핑)**:
     - `None`: `Number/0` (0px) - 샤프 미니멀리즘 직각 모서리
     - `XSmall`: `Number/1` (2px) - 초미세 뱃지/라벨 모서리
     - `Small`: `Number/2` (4px) - 기본 컴포넌트(인풋, 칩, 버튼)
     - `Medium`: `Number/3` (6px) - 셀렉트박스, 카드 모서리, 아이콘 버튼
     - `Large`: `Number/4` (8px) - 대형 모달, 컨테이너
     - `XLarge`: `Number/6` (12px) - 룩북 배너, 특수 카드 (`Number/6` 매핑)
     - `XXLarge`: `Number/7` (16px) - 대형 바텀시트, 플로팅 카드 (`Number/7` 매핑)
     - `Circle`: `Number/circle` (999px) - 완전한 원형 및 알약형(Pill) 캡슐
   - *향후 등록 예정*: Typescale(71개), Gap(20개), Padding(20개) 등 세부 레이아웃 토큰

---

### 2.3 Pretendard Typography & Tabular Pricing
- 국문과 영문의 완벽한 밸런스를 갖춘 공식 **Pretendard 웹폰트**를 전면 채택.
- 본문 및 헤딩 스케일은 피그마의 `Typography / Font-size` (Heading 4단계, Body 5단계)를 엄격히 준수.
- 국문 가독성과 헤드라인 임팩트를 위해 피그마 `Letter-spacing: 1`(-0.02em) 표준 적용.
- 가격 표기 시 할인 전/후 숫자의 폭이 달라져 레이아웃이 흔들리는 현상을 방지하기 위해 **`tabular-nums`(고정폭 숫자)**를 표준 적용.

### 2.4 Midnight Luxury Theme (다크 모드)
- 단순한 색상 반전이 아닌, 하이엔드 패션 브랜드의 고급스러운 밤을 연상시키는 **미드나잇 차콜/블랙(`#0f0f10`)** 기반의 다크 모드 제공.

---

## 3. 시스템 구조 (Architecture & Directory Layout)

```
DesignSystem/
├── .storybook/                     # 스토리북 설정 (뷰포트, 다크모드 툴바, 웹폰트)
│   ├── main.ts
│   └── preview.tsx
├── scripts/
│   └── sync-tokens.cjs             # tokens.json -> figma-generated.css 컴파일러
├── src/
│   ├── tokens/                     # [Foundations] 디자인 토큰 레이어
│   │   ├── colors.css              # Primitive + 48개 Semantic 색상 변수 + 다크모드
│   │   ├── typography.css          # Pretendard 서체, 타이포 스케일, 트래킹
│   │   ├── spacing.css             # 4px 그리드, 3:4 패션 비율, 래디우스, 그림자
│   │   ├── tokens.json             # W3C DTCG 표준 토큰 정의 파일
│   │   ├── figma-generated.css     # 스크립트로 자동 생성된 피그마 변수
│   │   ├── index.css               # 토큰 취합 및 글로벌 리셋
│   │   ├── TokensShowcase.tsx      # 독립 카테고리 쇼케이스 & 인터랙티브 도구
│   │   ├── Tokens.stories.tsx      # [Foundations/Design Tokens/Overview] 마스터 대시보드
│   │   ├── Typography.stories.tsx  # [Foundations/Design Tokens/Typography] 타이포그래피 전용 뷰
│   │   ├── Number.stories.tsx      # [Foundations/Design Tokens/Number] 수치/스케일 전용 뷰
│   │   └── Color.stories.tsx       # [Foundations/Design Tokens/Color] 시맨틱 컬러 전용 뷰
│   ├── components/
│   │   ├── atoms/                  # [Atoms] 원자 단위 컴포넌트
│   │   │   ├── Button/             # 피그마 표준 Button (Class: btn, Type 3종+icon, Size 5종, State 4종, Icon 좌우)
│   │   │   ├── IconButton/         # 피그마 표준 Icon Button (Class: icon-btn, Type: icon, Size 5종, State 3종: normal/hover/active)
│   │   │   ├── Input/              # 피그마 표준 Input (Class: input, State 6종: normal/focus/active/disabled/readonly/negative, 40px)
│   │   │   ├── Select/             # 피그마 표준 Select (Class: select, Size 2종: md(40px)/sm(32px), State 4종, Box true/false, Option State 4종)
│   │   │   ├── Radio/              # 피그마 표준 Radio (Class: radio, Type 2종: unchecked/checked, Disabled 2종: false/true, 16px 볼드 링)
│   │   │   ├── Tag/                # 피그마 표준 Tag (Class: tag, Type 5종: normal/point/inverse/positive/negative, Caption Small 12px)
│   │   │   ├── Icon/               # 피그마 표준 Icon 자산 [Foundations/Design Tokens/Icon] (총 46종: 시스템 35종 + 썸네일 11종 전수 등록, 6단계 스케일, 9종 시맨틱 컬러)
│   │   │   ├── WishlistButton/     # 글래스모피즘 플로팅 + 하트 팝 바운스
│   │   │   ├── Badge/              # SALE, NEW IN, EXCLUSIVE, SOLD OUT
│   │   │   ├── Price/              # 할인율 자동 계산(%), 정가 취소선, 다중 통화
│   │   │   └── Swatch/             # 컬러 원형 칩 & 사이즈(XS~XL) 사선 품절 처리
│   │   ├── molecules/              # [Molecules] 분자 단위 컴포넌트
│   │   │   ├── ProductCard/        # 3:4 패션 룩북 카드, 착용컷 호버 크로스페이드
│   │   │   ├── QuantitySelector/   # 수량 증감 미니멀 스텝퍼
│   │   │   └── FilterChip/         # 카테고리 필터 다중 선택 알약
│   │   └── organisms/              # [Organisms] 유기체 단위 컴포넌트
│   │       ├── Header/             # 글로벌 네비게이션, 프로모션 티커, 뱃지 카운터
│   │       ├── CartDrawer/         # 슬라이드오버 장바구니, 무료배송 프로그레스 바
│   │       ├── ProductGrid/        # 반응형 2열(모바일)/4열 그리드, 로딩 스켈레톤
│   │       └── MobileStickyOrderBar/# 모바일 하단 상시 고정 구매 바
│   └── stories/                    # 시스템 가이드 및 쇼케이스 스토리
│       ├── Introduction.stories.tsx# 디자인 시스템 웰컴 포털
│       └── FigmaSync.stories.tsx   # 피그마 토큰 연동 가이드
├── rules.md                        # [본 문서] 시스템 목적, 방향, 룰 규정집
└── package.json                    # 빌드 및 `tokens:sync` 명령어
```

---

## 4. 제작 및 확장 룰 (Rules & Conventions)

### 📌 Rule 0. 자료 기반 분석 및 개발 원칙 (Evidence-Based / 상상코딩 전면 금지)
- **상상코딩 전면 금지 (No Guesswork / Imagination Coding)**: 어떠한 경우에도 임의의 추측, 자의적인 상상, 눈대중으로 스타일이나 컴포넌트 코드를 작성하지 않습니다. 토큰에 매핑되지 않은 임의의 `#hex`, `px`, 스타일 속성을 마음대로 하드코딩하거나 추가하지 않습니다.
- **제공 자료 정밀 선행 분석 (Thorough Analysis of Provided Materials)**: 반드시 작업 착수 전 사용자가 제공한 모든 공식 자료를 철저히 선행 분석하고, 그 근거에 입각하여 개발 및 수정을 진행합니다:
  1. **Figma 레이아웃**: 레이아웃 구조, 오토레이아웃(Flexbox), 정렬, 패딩/마진, 반응형 규격 등
  2. **디자인 토큰 JSON**: `tokens.json`, Figma Tokens Studio 값, Primitive 및 Semantic 계층 구조
  3. **컴포넌트 명세**: Variants, State(Default/Hover/Active/Disabled), Props, A11y 요구사항
  4. **요구사항 가이드**: 프로젝트 컨벤션, 비즈니스 및 사용자 경험 가이드라인
- **이미지 정밀 분석 및 토큰 1:1 매핑**: 사용자가 제공하는 시안, 피그마 캡처, 컴포넌트 이미지는 작업 전 최우선으로 정밀 분석하여 색상, 폰트 크기, 굵기, 행간/자간, 여백/패딩/갭, 테두리, 곡률(radius), 아이콘 크기 등 모든 시각 요소를 공식 디자인 토큰(`var(--color-*)`, `var(--primitive-*)`, `var(--space-*)`, `var(--radius-*)` 등)에 1:1로 정확하게 매핑한 근거를 바탕으로 작업합니다.
- **모호성 해결 절차 (Ambiguity Resolution)**: 제공 자료에 정의되지 않았거나 상충되는 요소가 발견될 경우, 임의로 판단하여 코딩하지 않고 분석된 근거와 선택지를 사용자에게 명확히 전달하여 확인 후 진행합니다.

### 📌 Rule 0-1. 룰 거버넌스 및 국문 문서화 원칙 (Rule Governance)
- **대화 채널 중심의 룰 업데이트**: 향후 디자인 시스템의 모든 규칙, 프로세스, 컨벤션 업데이트는 본 대화(세션)를 통해 소통하고 합의한 뒤 확정합니다.
- **국문(한국어) 표준 기록**: 확정된 모든 규칙은 `.agents/rules/` 및 룰 문서에 국문으로 명확하게 기록·관리하여 팀 전체가 공유하는 단일 진실 공급원(SSOT)을 유지합니다.

### 📌 Rule 1. 색상 및 수치 하드코딩 금지 (Zero Hardcoding)
- CSS나 컴포넌트 인라인 스타일에 임의의 `#hex`, `rgb()`, `px` 값을 직접 작성하지 않습니다.
- 모든 색상은 반드시 시맨틱 토큰(`var(--color-text-*)`, `var(--color-border-*)`, `var(--color-bg-*)`, `var(--color-icon-*)`)을 사용합니다.
- 여백과 래디우스는 `var(--space-*)`, `var(--radius-*)`를 사용합니다.

### 📌 Rule 2. 피그마 베리어블 1:1 매핑 룰
피그마의 변수 그룹에 맞춰 아래 명명 규칙을 엄격히 유지합니다:
- **Primitive Typography**:
  - 피그마 `Typography / Font / [Name]` ➔ `var(--primitive-font-[name])`
  - 피그마 `Typography / Font-size / Heading / [Name]` ➔ `var(--primitive-font-size-heading-[name])`
  - 피그마 `Typography / Font-size / Body / [Name]` ➔ `var(--primitive-font-size-body-[name])`
  - 피그마 `Typography / Letter-spacing / [0|1]` ➔ `var(--primitive-letter-spacing-[0|1])`
  - 피그마 `Typography / Font-weight / [Name]` ➔ `var(--primitive-font-weight-[name])`
- **Primitive Number**:
  - 피그마 `Number / [0~20|circle]` ➔ `var(--primitive-number-[0~20|circle])`
- **Primitive Color**:
  - 피그마 `Color / Gray / [0~100]` ➔ `var(--primitive-color-gray-[name])`
  - 피그마 `Color / Red / [Name]` ➔ `var(--primitive-color-red-[name])`
  - 피그마 `Color / Blue / [Name]` ➔ `var(--primitive-color-blue-[name])`
  - 피그마 `Color / Orange / [Name]` ➔ `var(--primitive-color-orange-[name])`
- **Semantic Color**:
  - 피그마 `Color / Text / [Name]` ➔ `var(--color-text-[name])`
  - 피그마 `Color / Border / [Name]` ➔ `var(--color-border-[name])`
  - 피그마 `Color / Background / [Name]` ➔ `var(--color-bg-[name])`
  - 피그마 `Color / Icon / [Name]` ➔ `var(--color-icon-[name])`
  - 피그마 `Color / Overlay / [Name]` ➔ `var(--color-overlay-[name])`
  - 피그마 `Color / Primary / [Name]` ➔ `var(--color-primary-[name])`

### 📌 Rule 2-1. 컴포넌트 ➔ 디자인 토큰 1:1 엄격 매핑 원칙 (Button 예시)
컴포넌트 스타일링 시 시맨틱 역할(Role)과 디자인 토큰의 목적이 반드시 일치해야 하며, 임의의 대체 토큰이나 역할 위반(예: 배경색에 텍스트 토큰 적용 등)을 엄격히 금지합니다.

| 분류 | 컴포넌트 속성 | 피그마 토큰 경로 | 적용 CSS 토큰 | 매핑 근거 및 규칙 |
|---|---|---|---|---|
| **Typography** | `xl` (56px) 폰트/행간 | `Typescale / Body Large` | `16px / 24px` (`--typescale-body-large-*`) | 피그마 Typescale 1:1 매칭 |
| | `lg` (48px) 폰트/행간 | `Typescale / Body Medium` | `15px / 24px` (`--typescale-body-medium-*`) | 피그마 Typescale 1:1 매칭 |
| | `md` (40px) 폰트/행간 | `Typescale / Body Small` | `14px / 22px` (`--typescale-body-small-*`) | 피그마 Typescale 1:1 매칭 |
| | `sm` (32px) 폰트/행간 | `Typescale / Body XSmall` | `13px / 22px` (`--typescale-body-xsmall-*`) | 피그마 Typescale 1:1 매칭 |
| | `xs` (24px) 폰트/행간 | `Typescale / Caption Small` | `12px / 22px` (`--typescale-caption-small-*`) | 피그마 Typescale 1:1 매칭 |
| | 서체 / 굵기 / 자간 | Pretendard / Medium (500) / 1 (-0.02em) | `var(--primitive-font-family)` / `var(--primitive-font-weight-medium)` / `var(--primitive-letter-spacing-1)` | 폰트 기초 토큰 일관 적용 |
| **Number** | 높이 (xl~xs) | `Number / 13, 12, 11, 10, 9` | `var(--primitive-number-13)` (56) ~ `var(--primitive-number-9)` (24) | 5단계 높이 1:1 바인딩 |
| | 패딩 (xl~xs) | `Padding / Unit_24, 20, 16, 12, 8` | `var(--primitive-number-9)` (24) ~ `var(--primitive-number-4)` (8) | 5단계 수평 패딩 1:1 바인딩 |
| | 갭 (xl~xs) | `Gap / Unit_8, 8, 6, 6, 4` | `var(--primitive-number-4)` (8) ~ `var(--primitive-number-2)` (4) | 5단계 아이콘-텍스트 갭 |
| | 곡률 (xl~xs) | `Radius / Medium(6), Small(4)` | `var(--primitive-number-3)` (6) / `var(--primitive-number-2)` (4) | xl·lg는 6px, md·sm·xs는 4px |
| **Color** | Primary 배경 (Normal) | `Color / Button / Primary-fill` | `var(--color-button-primary-fill)` (#1a1a1a) | 딥 차콜 블랙 (Gray/10) |
| | Primary 텍스트 / 아이콘 | `Color / Text(Icon) / Inverse` | `var(--color-text-inverse)` / `var(--color-icon-inverse)` | 인버스 퓨어 화이트 토큰 |
| | Primary 호버 | `Color / Button / Primary-fill-hover` | `var(--color-button-primary-hover)` (#000000) | 더 어두운 퓨어 블랙 (Gray/0) |
| | Primary 누름 | `Color / Button / Primary-fill-pressed` | `var(--color-button-primary-pressed)` (#333333) | 다크 그레이 눌림 피드백 (Gray/20) |
| | Secondary 배경 (Normal) | `Color / Button / Secondary-fill` | `var(--color-button-secondary-fill)` (#f5f5f5) | 소프트 그레이 서피스 (Gray/96) |
| | Secondary 텍스트 / 아이콘 | `Color / Text(Icon) / Default` | `var(--color-text-default)` / `var(--color-icon-default)` | 기본 다크 텍스트/아이콘 (Gray/0) |
| | Secondary 호버 / 누름 | `Color / Button / Secondary-fill-hover / -pressed` | `var(--color-button-secondary-hover)` (#e5e5e5) / `var(--color-button-secondary-pressed)` (#d9d9d9) | 인터랙션 피드백 토큰 |
| | Tertiary 배경 / 보더 / 텍스트 | `Color / Button / Tertiary-fill / -border` | `var(--color-button-tertiary-fill)` (#ffffff) / `var(--color-button-tertiary-border)` (#4d4d4d) | 퓨어 화이트 + 1px 보더 |
| | Tertiary 호버 / 누름 | `Color / Button / Tertiary-fill-hover / -pressed` | `var(--color-button-tertiary-hover)` (#f5f5f5) / `var(--color-button-tertiary-pressed)` (#e5e5e5) | 인터랙션 피드백 토큰 |
| | Disabled 상태 (공통) | `Color / Button / Disabled-fill / -border / -text` | `var(--color-button-disabled-fill)` (#f5f5f5) / `var(--color-button-disabled-border)` (#e5e5e5) / `var(--color-button-disabled-text)` (#b2b2b2) | 비활성 표준 시맨틱 토큰 |
| | 포커스 링 (접근성) | `Color / Border / Positive` | `var(--color-border-positive)` (#1e4eed) | 미정의 변수(`--border-focus`) 사용 금지 |

### 📌 Rule 2-2. 컴포넌트 ➔ 디자인 토큰 1:1 엄격 매핑 원칙 (Icon 46종 전수 등록)
아이콘은 피그마 `Icon` 에셋 46종(시스템 35종, 썸네일 11종)을 전수 등록하였으며, 크기와 색상은 반드시 원시 및 시맨틱 디자인 토큰과 1:1 매핑되어야 합니다.

1. **Size 매핑 (Primitive Number 토큰 1:1)**:
   - `8px`: `var(--primitive-number-4)` (`.ds-icon--size-8`)
   - `12px`: `var(--primitive-number-6)` (`.ds-icon--size-12`)
   - `16px`: `var(--primitive-number-7)` (`.ds-icon--size-16`)
   - `24px`: `var(--primitive-number-9)` (`.ds-icon--size-24`)
   - `32px`: `var(--primitive-number-10)` (`.ds-icon--size-32`)
   - `64px`: `var(--primitive-number-14)` (`.ds-icon--size-64`)

2. **Color 매핑 (Semantic Icon Color 토큰 1:1)**:
   - 하드코딩된 `#hex` 색상 사용을 전면 금지하고 `currentColor` 상속을 표준으로 합니다.
   - `default`: `var(--color-icon-default)` (`#000000` / 다크 `#ffffff`)
   - `secondary`: `var(--color-icon-secondary)` (`#666666` / 다크 `#a1a1aa`)
   - `tertiary`: `var(--color-icon-tertiary)` (`#999999` / 다크 `#71717a`)
   - `disabled`: `var(--color-icon-disabled)` (`#b2b2b2` / 다크 `#52525b`)
   - `inverse`: `var(--color-icon-inverse)` (`#ffffff` / 다크 `#000000`)
   - `subtle`: `var(--color-icon-subtle)` (`#4d4d4d` / 다크 `#e4e4e7`)
   - `negative`: `var(--color-icon-negative)` (`#e51a1a`)
   - `positive`: `var(--color-icon-positive)` (`#1e4eed`)
   - `point`: `var(--color-icon-point)` (`#e4541b`)

3. **등록된 아이콘 인벤토리 (총 46종)**:
   - **Icon8 (1)**: `bullet_8`
   - **Icon12 (8)**: `alarm_12`, `arrow_down_12`, `arrow_left_12`, `arrow_right_12`, `arrow_up_12`, `delete_12`, `minus_12`, `plus_12`
   - **Icon16 (18)**: `arrow_star_16`, `celeb_16`, `setup_16`, `arrow_down_16`, `arrow_left_16`, `arrow_left_double_16`, `arrow_right_16`, `arrow_right_double_16`, `arrow_right_double_16_1`(다운로드), `arrow_up_16`, `cart_16`, `copy_16`, `delete_16`, `minus_16`, `plus_16`, `secret_16`, `share_16`, `wish_16`
   - **Icon24 (6)**: `arrow_down_24`, `arrow_up_24`, `close_24`, `download_24`, `wish_24`, `zoom_24`
   - **Icon32 (1)**: `download_32`
   - **Icon64 (1)**: `nodata_64` (벡터 SVG + PNG 동시 지원)
   - **Thumbnail (11)**: `thumbnail_mobile`, `thumbnail_pc`, `thumbnail_pc_resource`, `thumbnail_name_ico_wish_state_active/inactive`, `thumbnail_pc_name_ico_wish_state_active/inactive`, `thumbnail_type_default/hover_state_active/inactive`

### 📌 Rule 2-3. 컴포넌트 ➔ 디자인 토큰 1:1 엄격 매핑 원칙 (Icon Button)
피그마 `Icon Button`은 Type: `icon`, State: `normal` (default) | `hover` | `active` 3종을 기준으로 하며, 1:1 정방형 비율을 유지합니다.

| 분류 | 컴포넌트 속성 | 피그마 토큰 경로 | 적용 CSS 토큰 | 매핑 근거 및 규칙 |
|---|---|---|---|---|
| **Dimensions** | 크기 (xl~xs 5종) | `Number / 13, 12, 11, 10, 9` | `var(--primitive-number-13)` (56) ~ `var(--primitive-number-9)` (24) | 1:1 정방형 (너비=높이 동일) |
| | 곡률 (xl·lg / md·sm·xs) | `Number / 3, 2` | `var(--primitive-number-3)` (6) / `var(--primitive-number-2)` (4) | Button 규격과 동일한 곡률 |
| **Color** | Normal 배경 / 보더 / 아이콘 | `Background / Default`, `Border / Default`, `Icon / Default` | `var(--color-bg-default)` / `var(--color-border-default)` / `var(--color-icon-default)` | 화이트 서피스 + 기본 그레이 보더 + 블랙 아웃라인 |
| | Hover 배경 | `Background / Secondary` | `var(--color-bg-secondary)` (#f5f5f5) | 상호작용 피드백 소프트 그레이 |
| | Active 아이콘 | `Icon / Point` | `var(--color-icon-point)` (#e4541b) | 브랜드 메인 테라코타 오렌지 솔리드 채움 |
| | Disabled (공통) | `Background / Disabled`, `Border / Disabled`, `Icon / Disabled` | `var(--color-bg-disabled)` / `var(--color-border-disabled)` / `var(--color-icon-disabled)` | 비활성 표준 시맨틱 토큰 |
### 📌 Rule 2-7. 컴포넌트 ➔ 디자인 토큰 1:1 엄격 매핑 원칙 (Check Box)
피그마 `Check Box`는 Type: `unchecked` (default) | `checked`, Disabled: `false` (default) | `true` 4종 상태를 기준으로 하며, 클래스명은 `check` (별칭: `checkbox`)입니다.

| 분류 | 컴포넌트 속성 | 피그마 토큰 경로 | 적용 CSS 토큰 | 매핑 근거 및 규칙 |
|---|---|---|---|---|
| **Dimensions** | 박스 크기 | `Number / 7 (16px)` | `var(--primitive-number-7)` (16px) | 16px x 16px 정방형 박스 컨트롤 |
| | 곡률 (Radius) | `Radius / XSmall (2px)` | `var(--radius-xsmall)` (2px) | 모서리 2px 마이크로 곡률 |
| | 간격 (Gap) | `Number / 4 (8px)` | `var(--primitive-number-4)` (8px) | 박스와 라벨 텍스트 사이 거리 |
| **Typography** | 라벨 텍스트 | `Font / Body Small Regular` | `var(--primitive-font-size-body-small)`, `var(--primitive-font-weight-regular)` | Pretendard 14px Regular, 행간 1.4 |
| **Color** | Unchecked 배경 / 보더 | `Background / Default`, `Border / Default` | `var(--color-checkbox-bg)` (#ffffff) / `var(--color-checkbox-border)` (#d9d9d9) | 기본 화이트 서피스 + 1px 그레이 보더 |
| | Checked 배경 / 보더 / 아이콘 | `Primary / Default`, `Icon / Inverse` | `var(--color-checkbox-bg-checked)` (#000000) / `var(--color-checkbox-border-checked)` (#000000) / `var(--color-checkbox-icon-checked)` (#ffffff) | 솔리드 블랙 배경 + 화이트 SVG 체크 마크 |
| | Unchecked Disabled | `Background / Disabled`, `Border / Disabled`, `Text / Disabled` | `var(--color-checkbox-bg-disabled)` (#f5f5f5) / `var(--color-checkbox-border-disabled)` (#d9d9d9) / `var(--color-checkbox-text-disabled)` (#b2b2b2) | 비활성 소프트 그레이 서피스 + 비활성 텍스트 |
| | Checked Disabled | `Text / Disabled`, `Icon / Inverse` | `var(--color-checkbox-bg-checked-disabled)` (#b2b2b2) / `var(--color-checkbox-border-checked-disabled)` (#b2b2b2) / `var(--color-checkbox-icon-checked)` (#ffffff) | 솔리드 그레이 비활성 채움 + 화이트 SVG 체크 마크 |
| **A11y** | 포커스 링 / 스크린리더 | `Border / Positive`, 숨김 네이티브 인풋 | `var(--color-border-positive)`, `.check__input` | 키보드 탭 이동 및 접근성 보장 |

### 📌 Rule 3. 피그마 ➔ 코드 동기화 워크플로우
1. 피그마에서 Tokens Studio 플러그인 등으로 JSON 내보내기.
2. `src/tokens/tokens.json` 파일에 붙여넣기.
3. 터미널에서 `npm run tokens:sync` 실행.
4. `src/tokens/figma-generated.css`에 자동 변환된 토큰이 생성되고 전체 컴포넌트에 즉각 반영됨.

### 📌 Rule 4. TypeScript 타입 임포트 규칙
- Vite/Rolldown 번들러 호환성을 위해 타입과 인터페이스 임포트 시 반드시 **`import type`** 키워드를 사용합니다.
  ```typescript
  // 올바른 예:
  import { ProductCard } from './ProductCard';
  import type { ProductCardProps } from './ProductCard';
  ```

### 📌 Rule 5. 접근성(A11y) & 모바일 인터랙션 룰
- 터치 가능한 인터랙션 요소(버튼, 아이콘, 칩)는 모바일 기준 **최소 36px~44px** 이상의 타겟 영역을 보장합니다.
- 키보드 탭 이동 시 식별 가능한 포커스 링(`:focus-visible { outline: 2px solid var(--color-border-positive); }`)을 유지합니다.
- 텍스트가 없는 순수 아이콘 버튼(`WishlistButton`, `CartDrawer close`)은 스크린 리더용 `aria-label`을 필수로 선언합니다.

### 📌 Rule 6. 신규 컴포넌트 추가 프로세스
1. **Atoms 우선**: 최소 단위의 버튼, 라벨, 인풋부터 구현.
2. **CSS 분리**: 컴포넌트 폴더 안에 `[ComponentName].tsx`, `[component-name].css`, `[ComponentName].stories.tsx`로 파일 모듈화.
3. **Storybook 등록**: Controls(Props 조작)와 Autodocs를 포함하여 디자이너가 실시간으로 프로퍼티를 변경해 볼 수 있도록 구성.
4. **모바일 뷰포트 검증**: iPhone 15(393px) 뷰포트에서 깨짐 없는지 반드시 테스트.
