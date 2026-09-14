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

### 2.2 2-Tier Token Architecture (2단계 토큰 체계)
피그마의 구조와 100% 동일한 계층 분리:
1. **Layer 1: `.Primitive` (원시 토큰 - 총 105개 100% 등록 완료)**
   - **Typography (15개 - 100% 등록 완료)**:
     - `Font/Family`: `Pretendard`
     - `Font-size / Heading` (4개): `XLarge`(32px), `Large`(24px), `Medium`(18px), `Small`(16px)
     - `Font-size / Body` (5개): `Large`(16px), `Medium`(15px), `Small`(14px), `XSmall`(13px), `XXSmall`(12px)
     - `Letter-spacing` (2개): `0`(0em), `1`(-0.02em)
     - `Font-weight` (3개): `Regular`(400), `Medium`(500), `SemiBold`(600)
   - **Color (68개 - 100% 등록 완료)**:
     - 원시 색상값 보관: `Color/Gray/*` (0~100 스케일), `Color/Orange/*`, `Color/Red/50`, `Color/Blue/52`, `Color/Overlay/*`
   - **Number (22개 - 100% 등록 완료)**:
     - `0`~`20` (0px, 2px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 96px, 120px, 140px, 160px), `circle` (999px)
     - 여백(Spacing/Gap/Padding), 컴포넌트 크기(Sizing), 곡률(Radius)의 단일 진실 공급원(SSOT)
2. **Layer 2: `Semantic` (의미 기반 토큰)**
   - UI 맥락에 부여된 48개 색상 토큰: `Text(11)`, `Border(10)`, `Background(8)`, `Icon(9)`, `Overlay(6)`, `Primary(4)`
   - *향후 등록 예정*: Typescale(71개) 등 세부 시맨틱 타이포 스케일

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
│   │   ├── TokensShowcase.tsx      # 토큰 인터랙티브 뷰어 (탭 필터링 및 원클릭 복사)
│   │   └── Tokens.stories.tsx
│   ├── components/
│   │   ├── atoms/                  # [Atoms] 원자 단위 컴포넌트
│   │   │   ├── Button/             # 피그마 표준 Button (Class: btn, Type 3종, Size 5종, State 4종, Icon 좌우)
│   │   │   ├── Icon/               # 피그마 표준 Icon (총 46종: 시스템 35종 + 썸네일 11종 전수 등록, 6단계 스케일, 9종 시맨틱 컬러)
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

### 📌 Rule 0. 자료 기반 분석 및 개발 원칙 (Evidence-Based / 상상 코딩 전면 금지)
- **상상 코딩 금지**: 어떠한 경우에도 임의의 추측이나 자의적인 상상으로 스타일, 토큰, 컴포넌트 로직을 작성하지 않습니다.
- **제공 자료 정밀 분석**: 반드시 사용자가 제공한 공식 자료(Figma 레이아웃, 디자인 토큰 JSON, 컴포넌트 명세, 요구사항 가이드 등)를 철저히 선행 분석하고, 그 근거에 입각하여 개발 및 수정을 진행합니다.
- **모호성 해결 절차**: 제공 자료에 정의되지 않았거나 상충되는 요소가 발견될 경우, 임의로 판단하여 코딩하지 않고 분석된 근거와 선택지를 사용자에게 명확히 전달하여 확인 후 진행합니다.

### 📌 Rule 0-1. 룰 거버넌스 및 국문 문서화 원칙 (Rule Governance)
- **대화 채널 중심의 룰 업데이트**: 향후 디자인 시스템의 모든 규칙, 프로세스, 컨벤션 업데이트는 본 대화(세션)를 통해 소통하고 합의한 뒤 확정합니다.
- **국문(한국어) 표준 기록**: 확정된 모든 규칙은 `rules.md` 문서에 국문으로 명확하게 기록·관리하여 팀 전체가 공유하는 단일 진실 공급원(SSOT)을 유지합니다.

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
| **Typography** | `xl` (56px) 폰트 크기 | `Typography / Font-size / Body / Large` | `var(--primitive-font-size-body-large)` (16px) | 본문 스케일 1:1 매칭 (Heading 적용 금지) |
| | `lg` (48px) 폰트 크기 | `Typography / Font-size / Body / Medium` | `var(--primitive-font-size-body-medium)` (15px) | 본문 스케일 1:1 매칭 |
| | `md` (40px) 폰트 크기 | `Typography / Font-size / Body / Small` | `var(--primitive-font-size-body-small)` (14px) | 본문 스케일 1:1 매칭 |
| | `sm` (32px) 폰트 크기 | `Typography / Font-size / Body / XSmall` | `var(--primitive-font-size-body-xsmall)` (13px) | 본문 스케일 1:1 매칭 |
| | `xs` (24px) 폰트 크기 | `Typography / Font-size / Body / XXSmall` | `var(--primitive-font-size-body-xxsmall)` (12px) | 본문 스케일 1:1 매칭 |
| | 서체 / 굵기 / 자간 | Pretendard / Medium (500) / 1 (-0.02em) | `var(--primitive-font-family)` / `var(--primitive-font-weight-medium)` / `var(--primitive-letter-spacing-1)` | 폰트 기초 토큰 일관 적용 |
| **Number** | 높이 (xl~xs) | `Number / 13, 12, 11, 10, 9` | `var(--primitive-number-13)` (56) ~ `var(--primitive-number-9)` (24) | 5단계 높이 1:1 바인딩 |
| | 패딩 (xl~xs) | `Number / 9, 8, 7, 6, 4` | `var(--primitive-number-9)` (24) ~ `var(--primitive-number-4)` (8) | 5단계 수평 패딩 1:1 바인딩 |
| | 갭 (xl~xs) | `Number / 4, 4, 3, 3, 2` | `var(--primitive-number-4)` (8) ~ `var(--primitive-number-2)` (4) | 5단계 아이콘-텍스트 갭 |
| | 곡률 (xl~xs) | `Number / 3, 3, 2, 2, 2` | `var(--primitive-number-3)` (6) / `var(--primitive-number-2)` (4) | xl·lg는 6px, md·sm·xs는 4px |
| **Color** | Primary 배경 (Normal) | `Color / Gray / 0` | `var(--primitive-color-gray-0)` (#121212) | 텍스트 토큰(`--color-text-default`) 오용 금지 |
| | Primary 텍스트 / 아이콘 | `Color / Text(Icon) / Inverse` | `var(--color-text-inverse)` / `var(--color-icon-inverse)` | 인버스 화이트 토큰 |
| | Primary 호버 / 누름 | `Color / Gray / 20`, `30` | `var(--primitive-color-gray-20)` / `var(--primitive-color-gray-30)` | 원시 그레이 스케일 매핑 |
| | Secondary 배경 (Normal) | `Color / Gray / 96` | `var(--primitive-color-gray-96)` (#f0f0f2) | 소프트 그레이 서피스 |
| | Secondary 텍스트 / 아이콘 | `Color / Text(Icon) / Default` | `var(--color-text-default)` / `var(--color-icon-default)` | 기본 다크 텍스트/아이콘 |
| | Secondary 호버 / 누름 | `Background / Tertiary`, `Gray / 85` | `var(--color-bg-tertiary)` / `var(--primitive-color-gray-85)` | 인터랙션 피드백 토큰 |
| | Tertiary 배경 / 보더 / 텍스트 | `Background(Border, Text) / Default` | `var(--color-bg-default)` / `var(--color-border-default)` / `var(--color-text-default)` | 시맨틱 화이트 + 1px 보더 |
| | Disabled 상태 (공통) | `Background / Disabled`, `Text(Icon) / Disabled` | `var(--color-bg-disabled)` / `var(--color-text-disabled)` / `var(--color-icon-disabled)` | 비활성 표준 시맨틱 토큰 |
| | 포커스 링 (접근성) | `Color / Border / Positive` | `var(--color-border-positive)` (#2563eb) | 미정의 변수(`--border-focus`) 사용 금지 |

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
   - `default`: `var(--color-icon-default)` (`#121212` / 다크 `#ffffff`)
   - `secondary`: `var(--color-icon-secondary)` (`#737373` / 다크 `#a1a1aa`)
   - `tertiary`: `var(--color-icon-tertiary)` (`#a1a1aa` / 다크 `#71717a`)
   - `disabled`: `var(--color-icon-disabled)` (`#b0b0b0` / 다크 `#52525b`)
   - `inverse`: `var(--color-icon-inverse)` (`#ffffff` / 다크 `#121212`)
   - `subtle`: `var(--color-icon-subtle)` (`#52525b` / 다크 `#e4e4e7`)
   - `negative`: `var(--color-icon-negative)` (`#ef4444`)
   - `positive`: `var(--color-icon-positive)` (`#2563eb`)
   - `point`: `var(--color-icon-point)` (`#f97316`)

3. **등록된 아이콘 인벤토리 (총 46종)**:
   - **Icon8 (1)**: `bullet_8`
   - **Icon12 (8)**: `alarm_12`, `arrow_down_12`, `arrow_left_12`, `arrow_right_12`, `arrow_up_12`, `delete_12`, `minus_12`, `plus_12`
   - **Icon16 (18)**: `arrow_star_16`, `celeb_16`, `setup_16`, `arrow_down_16`, `arrow_left_16`, `arrow_left_double_16`, `arrow_right_16`, `arrow_right_double_16`, `arrow_right_double_16_1`(다운로드), `arrow_up_16`, `cart_16`, `copy_16`, `delete_16`, `minus_16`, `plus_16`, `secret_16`, `share_16`, `wish_16`
   - **Icon24 (6)**: `arrow_down_24`, `arrow_up_24`, `close_24`, `download_24`, `wish_24`, `zoom_24`
   - **Icon32 (1)**: `download_32`
   - **Icon64 (1)**: `nodata_64` (벡터 SVG + PNG 동시 지원)
   - **Thumbnail (11)**: `thumbnail_mobile`, `thumbnail_pc`, `thumbnail_pc_resource`, `thumbnail_name_ico_wish_state_active/inactive`, `thumbnail_pc_name_ico_wish_state_active/inactive`, `thumbnail_type_default/hover_state_active/inactive`

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
