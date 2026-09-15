import React, { useState } from 'react';
import {
  Heart,
  Search,
  Check,
  AlertCircle,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Type,
  Hash,
  Palette,
  Sliders,
  Maximize2,
} from 'lucide-react';
import './tokens-showcase.css';

// =============================================================================
// 1. Text Tokens (11 Variables)
// =============================================================================
export const FIGMA_TEXT_TOKENS = [
  { name: 'Default', path: 'Color / Text / Default', alias: 'Color/Gray/0', cssVar: '--color-text-default', hex: '#000000', role: '상품명 타이틀, 본문 기본 텍스트', sample: 'Double-Breasted Wool Oversized Coat' },
  { name: 'Subtle', path: 'Color / Text / Subtle', alias: 'Color/Gray/20', cssVar: '--color-text-subtle', hex: '#333333', role: '서브 헤딩, 강조된 보조 본문', sample: 'Exclusive Capsule Collection 2026' },
  { name: 'Secondary', path: 'Color / Text / Secondary', alias: 'Color/Gray/40', cssVar: '--color-text-secondary', hex: '#666666', role: '보조 설명, 상품 상세 스펙', sample: '100% 프리미엄 울 블렌드 소재의 오버사이즈 실루엣' },
  { name: 'Tertiary', path: 'Color / Text / Tertiary', alias: 'Color/Gray/60', cssVar: '--color-text-tertiary', hex: '#999999', role: '플레이스홀더, 메타데이터', sample: '주문일로부터 2~3일 이내 순차 출고 예정' },
  { name: 'Disabled', path: 'Color / Text / Disabled', alias: 'Color/Gray/70', cssVar: '--color-text-disabled', hex: '#b2b2b2', role: '비활성화된 텍스트, 품절 안내', sample: '현재 준비된 재고가 모두 소진되었습니다 (품절)' },
  { name: 'Inverse', path: 'Color / Text / Inverse', alias: 'Color/Gray/100', cssVar: '--color-text-inverse', hex: '#ffffff', role: '다크 배경 또는 버튼 내부 반전 텍스트', sample: 'ADD TO SHOPPING BAG', isInverse: true },
  { name: 'Error', path: 'Color / Text / Error', alias: 'Color/Red/50', cssVar: '--color-text-error', hex: '#e51a1a', role: '유효성 오류, 할인율 강조, 마감 임박 경고', sample: '마감 임박! 남은 수량 2개 • 40% OFF' },
  { name: 'Success', path: 'Color / Text / Success', alias: 'Color/Blue/52', cssVar: '--color-text-success', hex: '#1e4eed', role: '주문 완료, 무료 배송 달성 안내', sample: '무료 특급 배송 혜택이 적용되었습니다' },
  { name: 'Point Primary', path: 'Color / Text / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-text-point-primary', hex: '#e4541b', role: '브랜드 메인 포인트 컬러, 주요 프로모션 링크/가격', sample: 'ATELIER SPECIAL PROMOTION • ₩389,000' },
  { name: 'Point Secondary', path: 'Color / Text / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-text-point-secondary', hex: '#b74315', role: '세컨더리 포인트 강조, 서브 브랜드 액센트', sample: 'Limited Edition Handcrafted Leather Goods' },
  { name: 'Point Tertiary', path: 'Color / Text / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-text-point-tertiary', hex: '#5b210b', role: '딥 럭셔리 포인트, 에디토리얼 시그니처 텍스트', sample: 'Timeless Aesthetic Crafted in Seoul' },
];

// =============================================================================
// 2. Border Tokens (10 Variables)
// =============================================================================
export const FIGMA_BORDER_TOKENS = [
  { name: 'Default', path: 'Color / Border / Default', alias: 'Color/Gray/85', cssVar: '--color-border-default', hex: '#d9d9d9', role: '컴포넌트 기본 외곽선, 인풋 박스, 카드 기본 보더', label: '기본 인풋 / 카드 외곽선' },
  { name: 'Secondary', path: 'Color / Border / Secondary', alias: 'Color/Gray/90', cssVar: '--color-border-secondary', hex: '#e5e5e5', role: '서브 디바이더, 테이블 행 구분선', label: '리스트 / 테이블 행 분할선' },
  { name: 'Tertiary', path: 'Color / Border / Tertiary', alias: 'Color/Gray/96', cssVar: '--color-border-tertiary', hex: '#f5f5f5', role: '초미세 서피스 경계선, 배경 분할선', label: '초미세 레이어 경계선' },
  { name: 'Subtle', path: 'Color / Border / Subtle', alias: 'Color/Gray/30', cssVar: '--color-border-subtle', hex: '#4d4d4d', role: '딥 모노크롬 외곽선, 활성 탭 인디케이터', label: '강조 아웃라인 버튼' },
  { name: 'Disabled', path: 'Color / Border / Disabled', alias: 'Color/Gray/85', cssVar: '--color-border-disabled', hex: '#d9d9d9', role: '비활성 컴포넌트 외곽선', label: '품절 / 비활성 외곽선' },
  { name: 'Negative', path: 'Color / Border / Negative', alias: 'Color/Red/50', cssVar: '--color-border-negative', hex: '#e51a1a', role: '입력 유효성 에러 외곽선, 세일 강조 테두리', label: '에러 경고 테두리' },
  { name: 'Positive', path: 'Color / Border / Positive', alias: 'Color/Blue/52', cssVar: '--color-border-positive', hex: '#1e4eed', role: '포커스 링, 선택된 활성 테두리', label: '포커스 / 인증 테두리' },
  { name: 'Point Primary', path: 'Color / Border / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-border-point-primary', hex: '#e4541b', role: '브랜드 메인 웜 테라코타 포인트 외곽선', label: '브랜드 포인트 버튼 외곽선' },
  { name: 'Point Secondary', path: 'Color / Border / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-border-point-secondary', hex: '#b74315', role: '세컨더리 포인트 외곽선', label: '세컨더리 포인트 외곽선' },
  { name: 'Point Tertiary', path: 'Color / Border / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-border-point-tertiary', hex: '#5b210b', role: '딥 럭셔리 라인, 시그니처 테두리', label: '시그니처 테두리 라인' },
];

// =============================================================================
// 3. Background Tokens (8 Variables)
// =============================================================================
export const FIGMA_BG_TOKENS = [
  { name: 'Default', path: 'Color / Background / Default', alias: 'Color/Gray/100', cssVar: '--color-bg-default', hex: '#ffffff', role: '기본 캔버스, 모달 서피스, 카드 베이스', border: true },
  { name: 'Secondary', path: 'Color / Background / Secondary', alias: 'Color/Gray/96', cssVar: '--color-bg-secondary', hex: '#f5f5f5', role: '보조 영역 배경, 뱃지 소프트 배경', border: false },
  { name: 'Tertiary', path: 'Color / Background / Tertiary', alias: 'Color/Gray/90', cssVar: '--color-bg-tertiary', hex: '#e5e5e5', role: '테이블 헤더, 강조 카드 배경', border: false },
  { name: 'Disabled', path: 'Color / Background / Disabled', alias: 'Color/Gray/96', cssVar: '--color-bg-disabled', hex: '#f5f5f5', role: '비활성 버튼 및 인풋 배경', border: false },
  { name: 'Point Primary', path: 'Color / Background / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-bg-point-primary', hex: '#e4541b', role: '메인 브랜드 CTA 버튼 배경', textColor: '#ffffff' },
  { name: 'Point Secondary', path: 'Color / Background / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-bg-point-secondary', hex: '#b74315', role: '세컨더리 포인트 배경', textColor: '#ffffff' },
  { name: 'Point Tertiary', path: 'Color / Background / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-bg-point-tertiary', hex: '#5b210b', role: '딥 럭셔리 포인트 배경', textColor: '#ffffff' },
  { name: 'Point Subtle', path: 'Color / Background / Point / Subtle', alias: 'Color/Primary/Subtle', cssVar: '--color-bg-point-subtle', hex: '#f4baa4', role: '포인트 틴트 배경, 프로모션 카드 하이라이트', textColor: '#b74315' },
];

// =============================================================================
// 4. Icon Tokens (9 Variables)
// =============================================================================
export const FIGMA_ICON_TOKENS = [
  { name: 'Default', path: 'Color / Icon / Default', alias: 'Color/Gray/0', cssVar: '--color-icon-default', hex: '#000000', role: '기본 네비게이션, 주요 기능 아이콘', icon: Search },
  { name: 'Secondary', path: 'Color / Icon / Secondary', alias: 'Color/Gray/40', cssVar: '--color-icon-secondary', hex: '#666666', role: '보조 정보, 펼치기/접기 아이콘', icon: ArrowRight },
  { name: 'Tertiary', path: 'Color / Icon / Tertiary', alias: 'Color/Gray/60', cssVar: '--color-icon-tertiary', hex: '#999999', role: '입력창 클리어, 보조 인디케이터', icon: ShoppingBag },
  { name: 'Disabled', path: 'Color / Icon / Disabled', alias: 'Color/Gray/70', cssVar: '--color-icon-disabled', hex: '#b2b2b2', role: '비활성 버튼 내부 아이콘', icon: Heart },
  { name: 'Inverse', path: 'Color / Icon / Inverse', alias: 'Color/Gray/100', cssVar: '--color-icon-inverse', hex: '#ffffff', role: '다크 배경/버튼 내부 반전 아이콘', icon: ShoppingBag, isInverse: true },
  { name: 'Subtle', path: 'Color / Icon / Subtle', alias: 'Color/Gray/30', cssVar: '--color-icon-subtle', hex: '#4d4d4d', role: '강조 아이콘, 활성 툴바', icon: Sparkles },
  { name: 'Negative', path: 'Color / Icon / Negative', alias: 'Color/Red/50', cssVar: '--color-icon-negative', hex: '#e51a1a', role: '에러 경고, 삭제, 찜 해제', icon: AlertCircle },
  { name: 'Positive', path: 'Color / Icon / Positive', alias: 'Color/Blue/52', cssVar: '--color-icon-positive', hex: '#1e4eed', role: '성공 완료, 인증 마크', icon: Check },
  { name: 'Point', path: 'Color / Icon / Point', alias: 'Color/Orange/50', cssVar: '--color-icon-point', hex: '#e4541b', role: '브랜드 포인트 강조 아이콘', icon: Heart },
];

// =============================================================================
// 5. Overlay Tokens (6 Variables)
// =============================================================================
export const FIGMA_OVERLAY_TOKENS = [
  { name: 'Black-Light', path: 'Color / Overlay / Black-Light', alias: 'Color/Overlay/Black20 (20%)', cssVar: '--color-overlay-black-light', rgba: 'rgba(0, 0, 0, 0.2)', role: '은은한 이미지 틴트, 카드 마우스 오버 오버레이' },
  { name: 'Black-Balance', path: 'Color / Overlay / Black-Balance', alias: 'Color/Overlay/Black50 (50%)', cssVar: '--color-overlay-black-balance', rgba: 'rgba(0, 0, 0, 0.5)', role: '표준 모달/드로어 딤드(Dimmed) 배경' },
  { name: 'Black-Strong', path: 'Color / Overlay / Black-Strong', alias: 'Color/Overlay/Black80 (80%)', cssVar: '--color-overlay-black-strong', rgba: 'rgba(0, 0, 0, 0.8)', role: '룩북 풀스크린 뷰어, 딥 포커스 배경' },
  { name: 'White-Light', path: 'Color / Overlay / White-Light', alias: 'Color/Overlay/White20 (20%)', cssVar: '--color-overlay-white-light', rgba: 'rgba(255, 255, 255, 0.2)', role: '다크 이미지 위 소프트 글래스모피즘 효과' },
  { name: 'White-Balance', path: 'Color / Overlay / White-Balance', alias: 'Color/Overlay/White50 (50%)', cssVar: '--color-overlay-white-balance', rgba: 'rgba(255, 255, 255, 0.5)', role: '품절 상품 마스킹 오버레이' },
  { name: 'White-Strong', path: 'Color / Overlay / White-Strong', alias: 'Color/Overlay/White90 (90%)', cssVar: '--color-overlay-white-strong', rgba: 'rgba(255, 255, 255, 0.9)', role: '라이트 테마 다이얼로그 딤드' },
];

// =============================================================================
// 6. Primary Brand Tokens (4 Variables)
// =============================================================================
export const FIGMA_PRIMARY_TOKENS = [
  { name: 'Default', path: 'Color / Primary / Default', alias: 'Color/Orange/50', cssVar: '--color-primary-default', hex: '#e4541b', role: '브랜드 시그니처 웜 테라코타 메인 컬러', textColor: '#ffffff' },
  { name: 'Secondary', path: 'Color / Primary / Secondary', alias: 'Color/Orange/40', cssVar: '--color-primary-secondary', hex: '#b74315', role: '호버/액티브 상태 및 세컨더리 포인트', textColor: '#ffffff' },
  { name: 'Tertiary', path: 'Color / Primary / Tertiary', alias: 'Color/Orange/20', cssVar: '--color-primary-tertiary', hex: '#5b210b', role: '딥 에디토리얼 시그니처 와인/브라운', textColor: '#ffffff' },
  { name: 'Subtle', path: 'Color / Primary / Subtle', alias: 'Color/Orange/80', cssVar: '--color-primary-subtle', hex: '#f4baa4', role: '브랜드 소프트 틴트 배경 및 뱃지 베이스', textColor: '#b74315' },
];

// =============================================================================
// 7. Typography Tokens (.Primitive / Typography - 15 Variables)
// =============================================================================
export const FIGMA_TYPOGRAPHY_HEADING = [
  { name: 'XLarge', path: 'Typography / Font-size / Heading / XLarge', value: '32px', numeric: 32, cssVar: '--primitive-font-size-heading-xlarge', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-XLarge', role: '메인 룩북 타이틀, 기획전 대형 헤드라인', sample: '2026 Spring / Summer Haute Couture Collection' },
  { name: 'Large', path: 'Typography / Font-size / Heading / Large', value: '24px', numeric: 24, cssVar: '--primitive-font-size-heading-large', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Large', role: '섹션 헤딩, 상품 상세 대표 명칭', sample: 'Double-Breasted Cashmere Blend Long Coat' },
  { name: 'Medium', path: 'Typography / Font-size / Heading / Medium', value: '18px', numeric: 18, cssVar: '--primitive-font-size-heading-medium', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Medium', role: '카드 타이틀, 다이얼로그 모달 헤딩', sample: 'Atelier Signature Tailored Collection' },
  { name: 'Small', path: 'Typography / Font-size / Heading / Small', value: '16px', numeric: 16, cssVar: '--primitive-font-size-heading-small', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Small', role: '서브 섹션 타이틀, 드로어 헤더', sample: 'Shopping Bag Summary & Order Options' },
];

export const FIGMA_TYPOGRAPHY_BODY = [
  { name: 'Large', path: 'Typography / Font-size / Body / Large', value: '16px', numeric: 16, cssVar: '--primitive-font-size-body-large', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Large', role: '강조 본문 리드 텍스트, 중요 안내 문구', sample: '이탈리아 최고급 원사를 사용하여 유려한 드레이프와 편안한 착용감을 선사합니다.' },
  { name: 'Medium', path: 'Typography / Font-size / Body / Medium', value: '15px', numeric: 15, cssVar: '--primitive-font-size-body-medium', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Medium', role: '기본 상품 설명 본문, 아티클 단락', sample: '군더더기 없는 미니멀 실루엣에 자연스러운 입체 패턴을 더해 일상 속 포멀함을 완성합니다.' },
  { name: 'Small', path: 'Typography / Font-size / Body / Small', value: '14px', numeric: 14, cssVar: '--primitive-font-size-body-small', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Small', role: '보조 설명, 주문 옵션 선택 정보', sample: '모델 신장 178cm, S 사이즈 착용 (평소 정사이즈 착용 권장)' },
  { name: 'XSmall', path: 'Typography / Font-size / Body / XSmall', value: '13px', numeric: 13, cssVar: '--primitive-font-size-body-xsmall', figmaVar: '--figma-Primitive-Typography-Font-size-Body-XSmall', role: '배송 안내, 소재 혼용률, 케어 라벨', sample: '겉감: 버진울 90%, 캐시미어 10% / 드라이클리닝 전용' },
  { name: 'XXSmall', path: 'Typography / Font-size / Body / XXSmall', value: '12px', numeric: 12, cssVar: '--primitive-font-size-body-xxsmall', figmaVar: '--figma-Primitive-Typography-Font-size-Body-XXSmall', role: '최소 캡션, 부가세 포함 안내, 저작권 표기', sample: '제조국: 대한민국 / 품질보증기준: 전자상거래 소비자 보호법 준수' },
];

export const FIGMA_TYPOGRAPHY_LETTER_SPACING = [
  { name: '0', path: 'Typography / Letter-spacing / 0', value: '0em', numeric: '0', cssVar: '--primitive-letter-spacing-0', figmaVar: '--figma-Primitive-Typography-Letter-spacing-0', role: '기본 자간 (영문 및 본문 텍스트 표준)', sampleKr: '기본 자간 (0em): 패션 에디토리얼 프리미엄 컬렉션', sampleEn: 'The quick brown fox jumps over the lazy dog (Tracking: 0em)' },
  { name: '1', path: 'Typography / Letter-spacing / 1', value: '-0.02em', numeric: '-0.02', cssVar: '--primitive-letter-spacing-1', figmaVar: '--figma-Primitive-Typography-Letter-spacing-1', role: '타이트 자간 (국문 최적 가독성, 가격 및 타이틀)', sampleKr: '타이트 자간 (-0.02em): ₩389,000 (40% OFF) 프리미엄 테일러드 울 코트', sampleEn: 'Exclusive Haute Couture Edition • Special Selection (-0.02em)' },
];

export const FIGMA_TYPOGRAPHY_WEIGHT = [
  { name: 'Regular', path: 'Typography / Font-weight / Regular', value: '400', cssVar: '--primitive-font-weight-regular', figmaVar: '--figma-Primitive-Typography-Font-weight-Regular', role: '기본 본문, 상세 스펙 및 제품 설명', sample: 'Regular 400: Timeless aesthetic crafted with sustainable organic wool fabrics.' },
  { name: 'Medium', path: 'Typography / Font-weight / Medium', value: '500', cssVar: '--primitive-font-weight-medium', figmaVar: '--figma-Primitive-Typography-Font-weight-Medium', role: '서브헤딩, 필터 옵션, 네비게이션 링크', sample: 'Medium 500: Exclusive Capsule Selection & Handcrafted Leather Goods' },
  { name: 'SemiBold', path: 'Typography / Font-weight / SemiBold', value: '600', cssVar: '--primitive-font-weight-semibold', figmaVar: '--figma-Primitive-Typography-Font-weight-SemiBold', role: '메인 헤드라인, 액션 버튼 텍스트, 가격 강조', sample: 'SemiBold 600: ATELIER ARCHIVE SALE • UP TO 50% OFF TODAY' },
];

// =============================================================================
// 8. Number Tokens (.Primitive / Number - 22 Variables)
// =============================================================================
export const FIGMA_NUMBER_TOKENS = [
  { name: '0', path: 'Number / 0', value: '0px', num: 0, cssVar: '--primitive-number-0', role: '제로 여백, 테두리 없음, 베이스 오프셋' },
  { name: '1', path: 'Number / 1', value: '2px', num: 2, cssVar: '--primitive-number-1', role: '초미세 갭, XS 래디우스' },
  { name: '2', path: 'Number / 2', value: '4px', num: 4, cssVar: '--primitive-number-2', role: 'SM 래디우스 (기본 인풋/버튼), 4px 그리드 베이스' },
  { name: '3', path: 'Number / 3', value: '6px', num: 6, cssVar: '--primitive-number-3', role: 'MD 래디우스 (셀렉트박스/카드 모서리)' },
  { name: '4', path: 'Number / 4', value: '8px', num: 8, cssVar: '--primitive-number-4', role: 'LG 래디우스, 기본 컴포넌트 내부 패딩' },
  { name: '5', path: 'Number / 5', value: '10px', num: 10, cssVar: '--primitive-number-5', role: '컴포넌트 보조 갭 및 여백' },
  { name: '6', path: 'Number / 6', value: '12px', num: 12, cssVar: '--primitive-number-6', role: 'XL 래디우스, 칩 및 아이콘 버튼 여백' },
  { name: '7', path: 'Number / 7', value: '16px', num: 16, cssVar: '--primitive-number-7', role: '2XL 래디우스, 모바일 기본 컨테이너 패딩' },
  { name: '8', path: 'Number / 8', value: '20px', num: 20, cssVar: '--primitive-number-8', role: '섹션 간 여백, 룩북 카드 갭' },
  { name: '9', path: 'Number / 9', value: '24px', num: 24, cssVar: '--primitive-number-9', role: '그리드 거터, 데스크톱 컨테이너 여백' },
  { name: '10', path: 'Number / 10', value: '32px', num: 32, cssVar: '--primitive-number-10', role: '주요 블록 간격, CTA 버튼 높이/패딩' },
  { name: '11', path: 'Number / 11', value: '40px', num: 40, cssVar: '--primitive-number-11', role: '모바일 인터랙션 최소 타겟 크기' },
  { name: '12', path: 'Number / 12', value: '48px', num: 48, cssVar: '--primitive-number-12', role: '대형 버튼 높이, 헤더 높이 여백' },
  { name: '13', path: 'Number / 13', value: '56px', num: 56, cssVar: '--primitive-number-13', role: '플로팅 바, 바텀시트 상단 여백' },
  { name: '14', path: 'Number / 14', value: '64px', num: 64, cssVar: '--primitive-number-14', role: '대형 모달 여백, 섹션 패딩' },
  { name: '15', path: 'Number / 15', value: '72px', num: 72, cssVar: '--primitive-number-15', role: '브랜드 스토리 배너 여백' },
  { name: '16', path: 'Number / 16', value: '80px', num: 80, cssVar: '--primitive-number-16', role: '에디토리얼 컬렉션 구분 여백' },
  { name: '17', path: 'Number / 17', value: '96px', num: 96, cssVar: '--primitive-number-17', role: '데스크톱 히어로 섹션 패딩' },
  { name: '18', path: 'Number / 18', value: '120px', num: 120, cssVar: '--primitive-number-18', role: '최상위 페이지 상하 여백' },
  { name: '19', path: 'Number / 19', value: '140px', num: 140, cssVar: '--primitive-number-19', role: '대형 기획전 섹션 여백' },
  { name: '20', path: 'Number / 20', value: '160px', num: 160, cssVar: '--primitive-number-20', role: '스토어 룩북 풀스크린 디바이더' },
  { name: 'circle', path: 'Number / circle', value: '999px', num: 999, cssVar: '--primitive-number-circle', role: '완전한 원형 및 알약형(Pill) 캡슐 래디우스' },
];

// =============================================================================
// 9. Semantic Radius Tokens (.Semantic / Layout / Radius - 8 Variables)
// 피그마 'Semantic' 컬렉션의 Layout / Radius (8종)와 .Primitive/Number 1:1 매핑
// =============================================================================
export const FIGMA_RADIUS_TOKENS = [
  {
    name: 'None',
    path: 'Layout / Radius / None',
    alias: 'Number/0',
    value: '0px',
    num: 0,
    cssVar: '--radius-none',
    semanticVar: '--semantic-radius-none',
    figmaVar: '--figma-Semantic-Layout-Radius-None',
    role: '0px 샤프 미니멀리즘, 각진 모서리 (기본 버튼, 테이블 셀)',
  },
  {
    name: 'XSmall',
    path: 'Layout / Radius / XSmall',
    alias: 'Number/1',
    value: '2px',
    num: 2,
    cssVar: '--radius-xsmall',
    semanticVar: '--semantic-radius-xsmall',
    figmaVar: '--figma-Semantic-Layout-Radius-XSmall',
    role: '2px 초미세 곡률 (XS 뱃지, 라벨 태그)',
  },
  {
    name: 'Small',
    path: 'Layout / Radius / Small',
    alias: 'Number/2',
    value: '4px',
    num: 4,
    cssVar: '--radius-small',
    semanticVar: '--semantic-radius-small',
    figmaVar: '--figma-Semantic-Layout-Radius-Small',
    role: '4px 기본 컴포넌트 곡률 (SM 인풋, 칩, 버튼)',
  },
  {
    name: 'Medium',
    path: 'Layout / Radius / Medium',
    alias: 'Number/3',
    value: '6px',
    num: 3,
    cssVar: '--radius-medium',
    semanticVar: '--semantic-radius-medium',
    figmaVar: '--figma-Semantic-Layout-Radius-Medium',
    role: '6px 중간 곡률 (MD 셀렉트박스, 카드 모서리, 아이콘 버튼)',
  },
  {
    name: 'Large',
    path: 'Layout / Radius / Large',
    alias: 'Number/4',
    value: '8px',
    num: 4,
    cssVar: '--radius-large',
    semanticVar: '--semantic-radius-large',
    figmaVar: '--figma-Semantic-Layout-Radius-Large',
    role: '8px 대형 곡률 (LG 모달, 컨테이너, 다이얼로그)',
  },
  {
    name: 'XLarge',
    path: 'Layout / Radius / XLarge',
    alias: 'Number/6',
    value: '12px',
    num: 12,
    cssVar: '--radius-xlarge',
    semanticVar: '--semantic-radius-xlarge',
    figmaVar: '--figma-Semantic-Layout-Radius-XLarge',
    role: '12px 룩북 배너, 특수 카드, 드로어 상단 모서리 (Number/6 매핑)',
  },
  {
    name: 'XXLarge',
    path: 'Layout / Radius / XXLarge',
    alias: 'Number/7',
    value: '16px',
    num: 16,
    cssVar: '--radius-xxlarge',
    semanticVar: '--semantic-radius-xxlarge',
    figmaVar: '--figma-Semantic-Layout-Radius-XXLarge',
    role: '16px 대형 바텀시트, 플로팅 카드 모서리 (Number/7 매핑)',
  },
  {
    name: 'Circle',
    path: 'Layout / Radius / Circle',
    alias: 'Number/circle',
    value: '999px',
    num: 999,
    cssVar: '--radius-circle',
    semanticVar: '--semantic-radius-circle',
    figmaVar: '--figma-Semantic-Layout-Radius-Circle',
    role: '999px 완전한 원형 및 알약형(Pill) 캡슐 라운딩 (플로팅 버튼, 스와치)',
  },
];

// =============================================================================
// Standalone Category 1: Typography Showcase (.Primitive / Typography - 15)
// =============================================================================
export interface TypographyShowcaseProps {
  subCategory?: 'all' | 'heading' | 'body' | 'spacing' | 'weight' | 'tester';
  showHeader?: boolean;
}

export const TypographyShowcase: React.FC<TypographyShowcaseProps> = ({
  subCategory: initialSubCategory = 'all',
  showHeader = true,
}) => {
  const [subCategory, setSubCategory] = useState<string>(initialSubCategory);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Interactive Tester State
  const [testerText, setTesterText] = useState('Exclusive Haute Couture Capsule Selection 2026');
  const [testerSize, setTesterSize] = useState('--primitive-font-size-heading-large');
  const [testerWeight, setTesterWeight] = useState('--primitive-font-weight-semibold');
  const [testerSpacing, setTesterSpacing] = useState('--primitive-letter-spacing-1');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const subTabs = [
    { id: 'all', label: '전체 (15)' },
    { id: 'heading', label: 'Headings (4)' },
    { id: 'body', label: 'Body (5)' },
    { id: 'spacing', label: 'Letter-spacing (2)' },
    { id: 'weight', label: 'Font-weight (3)' },
    { id: 'tester', label: '⚡ Interactive Tester' },
  ];

  return (
    <section className="tokens-section">
      {showHeader && (
        <div className="figma-type-summary-banner">
          <div>
            <h2 className="tokens-section-title" style={{ margin: 0, border: 'none', padding: 0 }}>
              .Primitive / Typography (15 Variables)
            </h2>
            <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
              공식 Pretendard 서체 기반 헤딩 스케일(4), 본문 스케일(5), 자간(2), 굵기(3) 완벽 동기화
            </p>
          </div>
          <div className="figma-type-summary-chips">
            <span className="figma-type-chip">Font: <strong>Pretendard</strong></span>
            <span className="figma-type-chip">Heading: <strong>4 sizes</strong></span>
            <span className="figma-type-chip">Body: <strong>5 sizes</strong></span>
            <span className="figma-type-chip">Letter-spacing: <strong>2 options</strong></span>
            <span className="figma-type-chip">Font-weight: <strong>3 weights</strong></span>
          </div>
        </div>
      )}

      {/* Sub Category Filters */}
      <div className="tokens-subtab-bar">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tokens-subtab-btn ${subCategory === tab.id ? 'tokens-subtab-btn--active' : ''}`}
            onClick={() => setSubCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Tester */}
      {(subCategory === 'all' || subCategory === 'tester') && (
        <div className="figma-interactive-tester">
          <div className="figma-tester-header">
            <h3 className="figma-tester-title">
              <Type size={18} color="var(--color-primary-default)" />
              실시간 타이포그래피 인터랙티브 테스터 (Live Typography Tester)
            </h3>
            <span className="figma-alias-badge">Interactive Mode</span>
          </div>

          <div className="figma-tester-controls">
            <div className="figma-tester-field" style={{ flex: '2 1 300px' }}>
              <label>테스트 문구 입력 (Sample Text)</label>
              <input
                type="text"
                className="figma-tester-input"
                value={testerText}
                onChange={(e) => setTesterText(e.target.value)}
                placeholder="테스트할 텍스트를 입력하세요"
              />
            </div>

            <div className="figma-tester-field">
              <label>폰트 크기 (Font-size)</label>
              <select
                className="figma-tester-select"
                value={testerSize}
                onChange={(e) => setTesterSize(e.target.value)}
              >
                <optgroup label="Heading">
                  {FIGMA_TYPOGRAPHY_HEADING.map((h) => (
                    <option key={h.cssVar} value={h.cssVar}>
                      {h.name} ({h.value})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Body">
                  {FIGMA_TYPOGRAPHY_BODY.map((b) => (
                    <option key={b.cssVar} value={b.cssVar}>
                      {b.name} ({b.value})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="figma-tester-field">
              <label>굵기 (Font-weight)</label>
              <select
                className="figma-tester-select"
                value={testerWeight}
                onChange={(e) => setTesterWeight(e.target.value)}
              >
                {FIGMA_TYPOGRAPHY_WEIGHT.map((w) => (
                  <option key={w.cssVar} value={w.cssVar}>
                    {w.name} ({w.value})
                  </option>
                ))}
              </select>
            </div>

            <div className="figma-tester-field">
              <label>자간 (Letter-spacing)</label>
              <select
                className="figma-tester-select"
                value={testerSpacing}
                onChange={(e) => setTesterSpacing(e.target.value)}
              >
                {FIGMA_TYPOGRAPHY_LETTER_SPACING.map((s) => (
                  <option key={s.cssVar} value={s.cssVar}>
                    {s.name} ({s.value})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="figma-tester-display-box">
            <p
              style={{
                fontSize: `var(${testerSize})`,
                fontWeight: `var(${testerWeight})` as unknown as number,
                letterSpacing: `var(${testerSpacing})`,
                fontFamily: 'var(--primitive-font-family)',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {testerText || '텍스트를 입력해 보세요'}
            </p>
          </div>

          <div className="figma-tester-code-summary">
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>적용된 CSS 변수:</span>
            <code
              className="figma-css-var"
              onClick={() => handleCopy(`var(${testerSize})`)}
              title="클릭하여 복사"
            >
              var({testerSize})
            </code>
            <code
              className="figma-css-var"
              onClick={() => handleCopy(`var(${testerWeight})`)}
              title="클릭하여 복사"
            >
              var({testerWeight})
            </code>
            <code
              className="figma-css-var"
              onClick={() => handleCopy(`var(${testerSpacing})`)}
              title="클릭하여 복사"
            >
              var({testerSpacing})
            </code>
            {copiedToken && <span className="copy-tag">복사됨! ✓</span>}
          </div>
        </div>
      )}

      {/* Heading Sizes (4) */}
      {(subCategory === 'all' || subCategory === 'heading') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">Typography / Font-size / Heading (4 Variables)</h3>
          <p className="color-group-desc">상품 상세 대형 타이틀, 기획전 에디토리얼 헤드라인 및 모달 헤딩</p>
          <div className="figma-type-table">
            {FIGMA_TYPOGRAPHY_HEADING.map((item) => (
              <div
                key={item.path}
                className="figma-type-row"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-type-col-name">
                  <span className="figma-type-size-pill">{item.numeric}px</span>
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                </div>

                <div className="figma-type-col-meta">
                  <span className="figma-alias-badge">Value: {item.value}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <span className="figma-role-desc">{item.role}</span>
                </div>

                <div className="figma-type-col-preview">
                  <p
                    className="figma-type-preview-text"
                    style={{
                      fontSize: `var(${item.cssVar})`,
                      fontWeight: 600,
                      letterSpacing: 'var(--primitive-letter-spacing-1)',
                    }}
                  >
                    {item.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Body Sizes (5) */}
      {(subCategory === 'all' || subCategory === 'body') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">Typography / Font-size / Body (5 Variables)</h3>
          <p className="color-group-desc">상품 상세 설명, 소재 정보, 주문 옵션 및 마이크로 캡션</p>
          <div className="figma-type-table">
            {FIGMA_TYPOGRAPHY_BODY.map((item) => (
              <div
                key={item.path}
                className="figma-type-row"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-type-col-name">
                  <span className="figma-type-size-pill">{item.numeric}px</span>
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                </div>

                <div className="figma-type-col-meta">
                  <span className="figma-alias-badge">Value: {item.value}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <span className="figma-role-desc">{item.role}</span>
                </div>

                <div className="figma-type-col-preview">
                  <p
                    className="figma-type-preview-text"
                    style={{
                      fontSize: `var(${item.cssVar})`,
                      fontWeight: 400,
                      letterSpacing: 'var(--primitive-letter-spacing-0)',
                    }}
                  >
                    {item.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Letter Spacing (2) */}
      {(subCategory === 'all' || subCategory === 'spacing') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">Typography / Letter-spacing (2 Variables)</h3>
          <p className="color-group-desc">국문 가독성 최적화 자간(-0.02em)과 영문/본문 표준 자간(0em)</p>
          <div className="figma-tracking-grid">
            {FIGMA_TYPOGRAPHY_LETTER_SPACING.map((item) => (
              <div
                key={item.path}
                className="figma-tracking-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-tracking-header">
                  <div>
                    <strong className="figma-var-name">Letter-spacing: {item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                  <span className="figma-tracking-val">{item.value}</span>
                </div>
                <code className="figma-css-var" style={{ display: 'block', marginBottom: '8px' }}>
                  var({item.cssVar})
                </code>
                {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                <div
                  className="figma-tracking-sample"
                  style={{ letterSpacing: `var(${item.cssVar})` }}
                >
                  <p style={{ fontWeight: 600, margin: '0 0 6px 0' }}>{item.sampleKr}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>{item.sampleEn}</p>
                </div>
                <p className="figma-role-desc">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Font Weight (3) */}
      {(subCategory === 'all' || subCategory === 'weight') && (
        <div>
          <h3 className="color-group-title">Typography / Font-weight (3 Variables)</h3>
          <p className="color-group-desc">Pretendard 가변 웨이트 3단계: Regular(400), Medium(500), SemiBold(600)</p>
          <div className="figma-weight-grid">
            {FIGMA_TYPOGRAPHY_WEIGHT.map((item) => (
              <div
                key={item.path}
                className="figma-weight-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-tracking-header">
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                  <span className="figma-weight-badge">{item.value}</span>
                </div>
                <code className="figma-css-var" style={{ display: 'block', marginBottom: '8px' }}>
                  var({item.cssVar})
                </code>
                {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: `var(${item.cssVar})` as unknown as number,
                    margin: '12px 0',
                    lineHeight: 1.5,
                  }}
                >
                  {item.sample}
                </p>
                <p className="figma-role-desc">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

// =============================================================================
// Standalone Category 2: Number Showcase (.Primitive / Number - 22)
// =============================================================================
export interface NumberShowcaseProps {
  subCategory?: 'all' | 'spacing' | 'radius' | 'visualizer';
  showHeader?: boolean;
}

export const NumberShowcase: React.FC<NumberShowcaseProps> = ({
  subCategory: initialSubCategory = 'all',
  showHeader = true,
}) => {
  const [subCategory, setSubCategory] = useState<string>(initialSubCategory);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Interactive Visualizer State
  const [visualizerMode, setVisualizerMode] = useState<'radius' | 'number'>('radius');
  const [radiusIndex, setRadiusIndex] = useState<number>(3); // Default Medium (6px)
  const [numberIndex, setNumberIndex] = useState<number>(7); // Default 16px (Number/7)

  const currentRadiusToken = FIGMA_RADIUS_TOKENS[radiusIndex] || FIGMA_RADIUS_TOKENS[3];
  const currentNumberToken = FIGMA_NUMBER_TOKENS[numberIndex] || FIGMA_NUMBER_TOKENS[7];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const subTabs = [
    { id: 'all', label: '전체 (22 Numbers + 8 Radius)' },
    { id: 'radius', label: '곡률 스케일 (Radius 8종)' },
    { id: 'spacing', label: '수치/여백 매트릭스 (Number 22종)' },
    { id: 'visualizer', label: '⚡ Interactive Visualizer' },
  ];

  return (
    <section className="tokens-section">
      {showHeader && (
        <div className="figma-type-summary-banner">
          <div>
            <h2 className="tokens-section-title" style={{ margin: 0, border: 'none', padding: 0 }}>
              .Primitive / Number (22) & Semantic / Radius (8)
            </h2>
            <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
              피그마 'Semantic' 컬렉션의 Radius 8종과 .Primitive/Number 22종 수치 매트릭스 1:1 매핑
            </p>
          </div>
          <div className="figma-type-summary-chips">
            <span className="figma-type-chip">Semantic Radius: <strong>8 variables</strong></span>
            <span className="figma-type-chip">Primitive Number: <strong>22 variables</strong></span>
            <span className="figma-type-chip">Range: <strong>0px ~ 160px, circle</strong></span>
          </div>
        </div>
      )}

      {/* Sub Category Filters */}
      <div className="tokens-subtab-bar">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tokens-subtab-btn ${subCategory === tab.id ? 'tokens-subtab-btn--active' : ''}`}
            onClick={() => setSubCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Visualizer */}
      {(subCategory === 'all' || subCategory === 'visualizer') && (
        <div className="figma-number-visualizer">
          <div className="figma-tester-header">
            <h3 className="figma-tester-title">
              <Sliders size={18} color="var(--color-primary-default)" />
              실시간 곡률 & 수치 인터랙티브 뷰어 (Live Radius & Number Scale Visualizer)
            </h3>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                type="button"
                className={`tokens-subtab-btn ${visualizerMode === 'radius' ? 'tokens-subtab-btn--active' : ''}`}
                onClick={() => setVisualizerMode('radius')}
                style={{ padding: '4px 10px', fontSize: '11px' }}
              >
                Radius Mode (8)
              </button>
              <button
                type="button"
                className={`tokens-subtab-btn ${visualizerMode === 'number' ? 'tokens-subtab-btn--active' : ''}`}
                onClick={() => setVisualizerMode('number')}
                style={{ padding: '4px 10px', fontSize: '11px' }}
              >
                Number Mode (22)
              </button>
            </div>
          </div>

          {visualizerMode === 'radius' ? (
            <div>
              <div className="figma-visualizer-controls">
                <div className="figma-visualizer-slider-group">
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Radius 선택:</span>
                  <input
                    type="range"
                    min={0}
                    max={FIGMA_RADIUS_TOKENS.length - 1}
                    value={radiusIndex}
                    onChange={(e) => setRadiusIndex(Number(e.target.value))}
                    className="figma-visualizer-slider"
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="figma-radius-mapping-badge">
                    Radius / {currentRadiusToken.name} → {currentRadiusToken.alias}
                  </span>
                  <span className="figma-number-val" style={{ fontSize: '18px' }}>
                    {currentRadiusToken.value}
                  </span>
                  <code
                    className="figma-css-var"
                    onClick={() => handleCopy(`var(${currentRadiusToken.cssVar})`)}
                    title="클릭하여 복사"
                  >
                    var({currentRadiusToken.cssVar})
                  </code>
                  {copiedToken && <span className="copy-tag">복사됨! ✓</span>}
                </div>
              </div>

              <div className="figma-visualizer-stage" style={{ gap: '24px', flexWrap: 'wrap' }}>
                {/* UI Card Preview */}
                <div
                  style={{
                    width: '260px',
                    padding: '20px',
                    background: 'var(--color-white)',
                    border: '2px solid var(--color-primary-default)',
                    borderRadius: `var(${currentRadiusToken.cssVar})`,
                    boxShadow: 'var(--shadow-md)',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--color-primary-secondary)', fontWeight: 700, marginBottom: '4px' }}>
                    UI CARD PREVIEW
                  </div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: 'var(--text-primary)' }}>
                    Radius: {currentRadiusToken.name} ({currentRadiusToken.value})
                  </h4>
                  <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {currentRadiusToken.role}
                  </p>
                  <button
                    type="button"
                    style={{
                      padding: '8px 16px',
                      background: 'var(--color-primary-default)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: `var(${currentRadiusToken.cssVar})`,
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Button with {currentRadiusToken.name}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="figma-visualizer-controls">
                <div className="figma-visualizer-slider-group">
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Number 스케일:</span>
                  <input
                    type="range"
                    min={0}
                    max={FIGMA_NUMBER_TOKENS.length - 1}
                    value={numberIndex}
                    onChange={(e) => setNumberIndex(Number(e.target.value))}
                    className="figma-visualizer-slider"
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="figma-number-pill">Number / {currentNumberToken.name}</span>
                  <span className="figma-number-val" style={{ fontSize: '18px' }}>
                    {currentNumberToken.value}
                  </span>
                  <code
                    className="figma-css-var"
                    onClick={() => handleCopy(`var(${currentNumberToken.cssVar})`)}
                    title="클릭하여 복사"
                  >
                    var({currentNumberToken.cssVar})
                  </code>
                  {copiedToken && <span className="copy-tag">복사됨! ✓</span>}
                </div>
              </div>

              <div className="figma-visualizer-stage">
                <div
                  className="figma-visualizer-box"
                  style={{
                    padding: currentNumberToken.name === 'circle' ? '24px 32px' : `var(${currentNumberToken.cssVar})`,
                    borderRadius: currentNumberToken.name === 'circle' ? '999px' : `var(${currentNumberToken.cssVar})`,
                    gap: currentNumberToken.name === 'circle' ? '8px' : `var(${currentNumberToken.cssVar})`,
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Number: {currentNumberToken.name} ({currentNumberToken.value})
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Padding & Radius: {currentNumberToken.value}
                  </span>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <span style={{ fontSize: '11px', background: 'var(--bg-surface-subtle)', padding: '2px 8px', borderRadius: '4px' }}>
                      {currentNumberToken.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Section 1: 8 Figma Semantic Radius Tokens */}
      {(subCategory === 'all' || subCategory === 'radius') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <div className="figma-type-summary-banner" style={{ background: 'var(--bg-surface-subtle)', marginBottom: 'var(--space-4)' }}>
            <div>
              <h3 className="color-group-title" style={{ margin: 0, fontSize: '18px' }}>
                Semantic / Layout / Radius (8 Variables)
              </h3>
              <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
                피그마 'Semantic' 컬렉션의 Radius 8종과 .Primitive/Number 1:1 매핑 (None:Number/0, XSmall:Number/1, Small:Number/2, Medium:Number/3, Large:Number/4, XLarge:Number/6, XXLarge:Number/7, Circle:Number/circle)
              </p>
            </div>
            <div className="figma-type-summary-chips">
              <span className="figma-type-chip">Figma Group: <strong>Layout / Radius</strong></span>
              <span className="figma-type-chip">Source: <strong>.Primitive / Number</strong></span>
              <span className="figma-type-chip">Total: <strong>8 variables</strong></span>
            </div>
          </div>

          <div className="figma-radius-grid">
            {FIGMA_RADIUS_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-radius-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-radius-header">
                  <span className="figma-radius-name">{item.name}</span>
                  <span className="figma-radius-mapping-badge">→ {item.alias} ({item.value})</span>
                </div>

                <div className="figma-radius-preview-stage">
                  <div
                    className="figma-radius-preview-shape"
                    style={{
                      borderRadius: `var(${item.cssVar})`,
                    }}
                  >
                    <span className="figma-radius-preview-label">{item.value}</span>
                  </div>
                </div>

                <div className="figma-radius-meta">
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <code className="figma-css-var">var({item.cssVar})</code>
                    <code className="figma-css-var" style={{ color: 'var(--text-secondary)' }}>var({item.semanticVar})</code>
                  </div>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 2: Grid of Number Tokens (22) */}
      {(subCategory === 'all' || subCategory === 'spacing') && (
        <div>
          <div className="figma-type-summary-banner" style={{ background: 'var(--bg-surface-subtle)', marginBottom: 'var(--space-4)' }}>
            <div>
              <h3 className="color-group-title" style={{ margin: 0, fontSize: '18px' }}>
                .Primitive / Number (22 Variables)
              </h3>
              <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
                여백(Spacing, Gap, Padding) 및 컴포넌트 크기(Sizing)의 베이스 수치 스케일 (0px ~ 160px, circle 999px)
              </p>
            </div>
            <div className="figma-type-summary-chips">
              <span className="figma-type-chip">Range: <strong>0px ~ 160px</strong></span>
              <span className="figma-type-chip">Total: <strong>22 variables</strong></span>
            </div>
          </div>

          <div className="figma-number-grid">
            {FIGMA_NUMBER_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-number-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-number-header">
                  <span className="figma-number-pill">{item.name}</span>
                  <span className="figma-number-val">{item.value}</span>
                </div>

                <div className="figma-number-bar-container">
                  {item.name === 'circle' ? (
                    <div className="figma-number-circle-demo" title="Radius: 999px Circle" />
                  ) : (
                    <div
                      className="figma-number-bar-fill"
                      style={{ width: `${Math.min(item.num * 1.5, 200)}px` }}
                    />
                  )}
                </div>

                <div className="figma-number-meta">
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

// =============================================================================
// Standalone Category 3: Color Showcase (Semantic / Color - 48)
// =============================================================================
export interface ColorShowcaseProps {
  subCategory?: 'all' | 'text' | 'border' | 'background' | 'icon' | 'overlay' | 'primary';
  showHeader?: boolean;
}

export const ColorShowcase: React.FC<ColorShowcaseProps> = ({
  subCategory: initialSubCategory = 'all',
  showHeader = true,
}) => {
  const [subCategory, setSubCategory] = useState<string>(initialSubCategory);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const subTabs = [
    { id: 'all', label: '전체 색상 (48)' },
    { id: 'text', label: 'Text (11)' },
    { id: 'border', label: 'Border (10)' },
    { id: 'background', label: 'Background (8)' },
    { id: 'icon', label: 'Icon (9)' },
    { id: 'overlay', label: 'Overlay (6)' },
    { id: 'primary', label: 'Primary Brand (4)' },
  ];

  return (
    <section className="tokens-section">
      {showHeader && (
        <div className="figma-type-summary-banner">
          <div>
            <h2 className="tokens-section-title" style={{ margin: 0, border: 'none', padding: 0 }}>
              Semantic / Color (48 Variables)
            </h2>
            <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
              패션 이커머스 UI 맥락에 부여된 6대 영역 시맨틱 컬러 토큰
            </p>
          </div>
          <div className="figma-type-summary-chips">
            <span className="figma-type-chip">Text: <strong>11</strong></span>
            <span className="figma-type-chip">Border: <strong>10</strong></span>
            <span className="figma-type-chip">Background: <strong>8</strong></span>
            <span className="figma-type-chip">Icon: <strong>9</strong></span>
            <span className="figma-type-chip">Overlay: <strong>6</strong></span>
            <span className="figma-type-chip">Primary: <strong>4</strong></span>
          </div>
        </div>
      )}

      {/* Sub Category Filters */}
      <div className="tokens-subtab-bar">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tokens-subtab-btn ${subCategory === tab.id ? 'tokens-subtab-btn--active' : ''}`}
            onClick={() => setSubCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. Text Tokens (11) */}
      {(subCategory === 'all' || subCategory === 'text') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">1. Color / Text (11 Variables)</h3>
          <p className="color-group-desc">상품명, 가격, 할인율, 가이드 본문 및 시그니처 텍스트 컬러</p>
          <div className="figma-text-table">
            {FIGMA_TEXT_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-text-row"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-text-col-name">
                  <div className="figma-swatch-circle" style={{ backgroundColor: item.hex }} />
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                </div>
                <div className="figma-text-col-meta">
                  <span className="figma-alias-badge">→ {item.alias} ({item.hex})</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <span className="figma-role-desc">{item.role}</span>
                </div>
                <div
                  className="figma-text-col-sample"
                  style={{
                    backgroundColor: item.isInverse ? '#0f0f10' : 'transparent',
                    padding: item.isInverse ? '6px 12px' : '0',
                    borderRadius: '4px',
                  }}
                >
                  <span
                    className="figma-sample-text"
                    style={{
                      color: `var(${item.cssVar})`,
                      fontFamily: item.name.includes('Point') ? 'var(--font-serif)' : 'var(--font-sans)',
                      fontWeight: item.name.includes('Point') || item.name === 'Default' ? 600 : 400,
                    }}
                  >
                    {item.sample}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Border Tokens (10) */}
      {(subCategory === 'all' || subCategory === 'border') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">2. Color / Border (10 Variables)</h3>
          <p className="color-group-desc">인풋 필드, 카드 외곽선, 리스트 디바이더, 상태 표시 보더</p>
          <div className="figma-border-grid">
            {FIGMA_BORDER_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-border-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-border-header">
                  <div className="figma-swatch-circle" style={{ backgroundColor: item.hex }} />
                  <strong className="figma-var-name">{item.name}</strong>
                </div>
                <div
                  className="figma-border-demo-box"
                  style={{
                    borderColor: `var(${item.cssVar})`,
                    borderWidth: item.name.includes('Point') || item.name === 'Negative' || item.name === 'Positive' ? '2px' : '1px',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{item.label}</span>
                </div>
                <div className="figma-border-meta">
                  <span className="figma-alias-badge">→ {item.alias} ({item.hex})</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Background Tokens (8) */}
      {(subCategory === 'all' || subCategory === 'background') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">3. Color / Background (8 Variables)</h3>
          <p className="color-group-desc">서피스, 모달, 카드 캔버스 및 브랜드 포인트 배경 컬러</p>
          <div className="figma-bg-grid">
            {FIGMA_BG_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-bg-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div
                  className="figma-bg-surface-preview"
                  style={{
                    backgroundColor: `var(${item.cssVar})`,
                    border: item.border ? '1px solid var(--color-border-secondary)' : 'none',
                    color: item.textColor || 'var(--text-primary)',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{item.name}</span>
                  <span style={{ fontSize: '12px', opacity: 0.85, fontFamily: 'var(--font-mono)' }}>{item.hex}</span>
                </div>
                <div className="figma-bg-meta">
                  <span className="figma-alias-badge">→ {item.alias}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Icon Tokens (9) */}
      {(subCategory === 'all' || subCategory === 'icon') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">4. Color / Icon (9 Variables)</h3>
          <p className="color-group-desc">네비게이션, 장바구니, 위시리스트, 상태 피드백 아이콘 전용 컬러</p>
          <div className="figma-icon-grid">
            {FIGMA_ICON_TOKENS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.path}
                  className="figma-icon-card"
                  onClick={() => handleCopy(`var(${item.cssVar})`)}
                  title="클릭하여 CSS 변수명 복사"
                >
                  <div
                    className="figma-icon-preview-box"
                    style={{
                      backgroundColor: item.isInverse ? '#0f0f10' : 'var(--bg-surface-subtle)',
                    }}
                  >
                    <IconComp size={24} color={`var(${item.cssVar})`} strokeWidth={2} />
                  </div>
                  <div className="figma-icon-meta">
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-alias-badge">→ {item.alias} ({item.hex})</span>
                    <code className="figma-css-var">var({item.cssVar})</code>
                    {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                    <p className="figma-role-desc">{item.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Overlay Tokens (6) */}
      {(subCategory === 'all' || subCategory === 'overlay') && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h3 className="color-group-title">5. Color / Overlay (6 Variables)</h3>
          <p className="color-group-desc">모달 딤드, 이미지 틴트, 글래스모피즘 오버레이</p>
          <div className="figma-overlay-grid">
            {FIGMA_OVERLAY_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-overlay-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div
                  className="figma-overlay-preview"
                  style={{
                    backgroundColor: `var(${item.cssVar})`,
                  }}
                >
                  <span style={{ color: item.name.startsWith('Black') ? '#ffffff' : '#0f0f10', fontSize: '13px', fontWeight: 600 }}>
                    {item.name}
                  </span>
                  <span style={{ color: item.name.startsWith('Black') ? '#ffffff' : '#0f0f10', opacity: 0.75, fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                    {item.rgba}
                  </span>
                </div>
                <div className="figma-overlay-meta">
                  <span className="figma-alias-badge">→ {item.alias}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Primary Brand Tokens (4) */}
      {(subCategory === 'all' || subCategory === 'primary') && (
        <div>
          <h3 className="color-group-title">6. Color / Primary (4 Variables)</h3>
          <p className="color-group-desc">패션 브랜드 아이덴티티 시그니처 웜 테라코타 팔레트</p>
          <div className="figma-bg-grid">
            {FIGMA_PRIMARY_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-bg-card"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div
                  className="figma-bg-surface-preview"
                  style={{
                    backgroundColor: `var(${item.cssVar})`,
                    color: item.textColor,
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{item.name}</span>
                  <span style={{ fontSize: '12px', opacity: 0.9, fontFamily: 'var(--font-mono)' }}>{item.hex}</span>
                </div>
                <div className="figma-bg-meta">
                  <span className="figma-alias-badge figma-alias-badge--point">→ {item.alias}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

// =============================================================================
// Master Component: TokensShowcase (Suite Dashboard)
// =============================================================================
export interface TokensShowcaseProps {
  category?: 'all' | 'typography' | 'number' | 'color';
  subCategory?: string;
  initialTab?: string;
  hideHeader?: boolean;
}

export const TokensShowcase: React.FC<TokensShowcaseProps> = ({
  category = 'all',
  subCategory,
  initialTab,
  hideHeader = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialTab || category || 'all'
  );

  const mainCategories = [
    { id: 'all', label: 'All Tokens (85)', icon: Maximize2 },
    { id: 'typography', label: 'Typography (15)', icon: Type },
    { id: 'number', label: 'Number (22)', icon: Hash },
    { id: 'color', label: 'Color (48)', icon: Palette },
  ];

  return (
    <div className="tokens-showcase-container">
      {/* Header */}
      {!hideHeader && (
        <header className="tokens-header">
          <span className="tokens-badge">FIGMA DESIGN TOKENS FULL SUITE</span>
          <h1 className="tokens-title font-editorial">Figma Design System Tokens (85)</h1>
          <p className="tokens-subtitle">
            피그마 <strong>"00. Common Design System"</strong>에 정의된{' '}
            <code>Typography(15)</code>, <code>Number(22)</code>, <code>Color(48)</code> 총{' '}
            <strong>85개 베리어블</strong>이 체계적으로 분류 및 동기화되었습니다.
          </p>

          {/* Level 1 Category Navigation */}
          <div className="tokens-tab-bar">
            {mainCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`tokens-tab-btn ${activeCategory === cat.id ? 'tokens-tab-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <IconComp size={15} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </header>
      )}

      {/* Category 1: Typography */}
      {(activeCategory === 'all' || activeCategory === 'typography') && (
        <TypographyShowcase
          subCategory={subCategory as any}
          showHeader={activeCategory === 'typography'}
        />
      )}

      {/* Category 2: Number */}
      {(activeCategory === 'all' || activeCategory === 'number') && (
        <NumberShowcase
          subCategory={subCategory as any}
          showHeader={activeCategory === 'number'}
        />
      )}

      {/* Category 3: Color */}
      {(activeCategory === 'all' || activeCategory === 'color') && (
        <ColorShowcase
          subCategory={subCategory as any}
          showHeader={activeCategory === 'color'}
        />
      )}
    </div>
  );
};
