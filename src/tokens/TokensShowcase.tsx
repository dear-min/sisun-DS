import React, { useState } from 'react';
import { Heart, Search, Check, AlertCircle, ShoppingBag, ArrowRight, Sparkles, Type } from 'lucide-react';
import './tokens-showcase.css';

// 1. Text Tokens
const FIGMA_TEXT_TOKENS = [
  { name: 'Default', path: 'Color / Text / Default', alias: 'Color/Gray/0', cssVar: '--color-text-default', hex: '#121212', role: '상품명 타이틀, 본문 기본 텍스트', sample: 'Double-Breasted Wool Oversized Coat' },
  { name: 'Subtle', path: 'Color / Text / Subtle', alias: 'Color/Gray/20', cssVar: '--color-text-subtle', hex: '#2d2d2d', role: '서브 헤딩, 강조된 보조 본문', sample: 'Exclusive Capsule Collection 2026' },
  { name: 'Secondary', path: 'Color / Text / Secondary', alias: 'Color/Gray/40', cssVar: '--color-text-secondary', hex: '#555555', role: '보조 설명, 상품 상세 스펙', sample: '100% 프리미엄 울 블렌드 소재의 오버사이즈 실루엣' },
  { name: 'Tertiary', path: 'Color / Text / Tertiary', alias: 'Color/Gray/60', cssVar: '--color-text-tertiary', hex: '#888888', role: '플레이스홀더, 메타데이터', sample: '주문일로부터 2~3일 이내 순차 출고 예정' },
  { name: 'Disabled', path: 'Color / Text / Disabled', alias: 'Color/Gray/70', cssVar: '--color-text-disabled', hex: '#b0b0b0', role: '비활성화된 텍스트, 품절 안내', sample: '현재 준비된 재고가 모두 소진되었습니다 (품절)' },
  { name: 'Inverse', path: 'Color / Text / Inverse', alias: 'Color/Gray/100', cssVar: '--color-text-inverse', hex: '#ffffff', role: '다크 배경 또는 버튼 내부 반전 텍스트', sample: 'ADD TO SHOPPING BAG', isInverse: true },
  { name: 'Error', path: 'Color / Text / Error', alias: 'Color/Red/50', cssVar: '--color-text-error', hex: '#dc2626', role: '유효성 오류, 할인율 강조, 마감 임박 경고', sample: '마감 임박! 남은 수량 2개 • 40% OFF' },
  { name: 'Success', path: 'Color / Text / Success', alias: 'Color/Blue/52', cssVar: '--color-text-success', hex: '#2563eb', role: '주문 완료, 무료 배송 달성 안내', sample: '무료 특급 배송 혜택이 적용되었습니다' },
  { name: 'Point Primary', path: 'Color / Text / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-text-point-primary', hex: '#d94e28', role: '브랜드 메인 포인트 컬러, 주요 프로모션 링크/가격', sample: 'ATELIER SPECIAL PROMOTION • ₩389,000' },
  { name: 'Point Secondary', path: 'Color / Text / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-text-point-secondary', hex: '#a93b1d', role: '세컨더리 포인트 강조, 서브 브랜드 액센트', sample: 'Limited Edition Handcrafted Leather Goods' },
  { name: 'Point Tertiary', path: 'Color / Text / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-text-point-tertiary', hex: '#6e2613', role: '딥 럭셔리 포인트, 에디토리얼 시그니처 텍스트', sample: 'Timeless Aesthetic Crafted in Seoul' },
];

// 2. Border Tokens
const FIGMA_BORDER_TOKENS = [
  { name: 'Default', path: 'Color / Border / Default', alias: 'Color/Gray/85', cssVar: '--color-border-default', hex: '#d4d4d8', role: '컴포넌트 기본 외곽선, 인풋 박스, 카드 기본 보더', label: '기본 인풋 / 카드 외곽선' },
  { name: 'Secondary', path: 'Color / Border / Secondary', alias: 'Color/Gray/90', cssVar: '--color-border-secondary', hex: '#e4e4e7', role: '서브 디바이더, 테이블 행 구분선', label: '리스트 / 테이블 행 분할선' },
  { name: 'Tertiary', path: 'Color / Border / Tertiary', alias: 'Color/Gray/98', cssVar: '--color-border-tertiary', hex: '#f4f4f5', role: '초미세 서피스 경계선, 배경 분할선', label: '초미세 레이어 경계선' },
  { name: 'Subtle', path: 'Color / Border / Subtle', alias: 'Color/Gray/30', cssVar: '--color-border-subtle', hex: '#3f3f46', role: '딥 모노크롬 외곽선, 활성 탭 인디케이터', label: '강조 아웃라인 버튼' },
  { name: 'Disabled', path: 'Color / Border / Disabled', alias: 'Color/Gray/85', cssVar: '--color-border-disabled', hex: '#d4d4d8', role: '비활성 컴포넌트 외곽선', label: '품절 / 비활성 외곽선' },
  { name: 'Negative', path: 'Color / Border / Negative', alias: 'Color/Red/50', cssVar: '--color-border-negative', hex: '#dc2626', role: '입력 유효성 에러 외곽선, 세일 강조 테두리', label: '에러 경고 테두리' },
  { name: 'Positive', path: 'Color / Border / Positive', alias: 'Color/Blue/52', cssVar: '--color-border-positive', hex: '#2563eb', role: '포커스 링, 선택된 활성 테두리', label: '포커스 / 인증 테두리' },
  { name: 'Point Primary', path: 'Color / Border / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-border-point-primary', hex: '#d94e28', role: '브랜드 메인 웜 테라코타 포인트 외곽선', label: '브랜드 포인트 버튼 외곽선' },
  { name: 'Point Secondary', path: 'Color / Border / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-border-point-secondary', hex: '#a93b1d', role: '세컨더리 포인트 외곽선', label: '세컨더리 포인트 외곽선' },
  { name: 'Point Tertiary', path: 'Color / Border / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-border-point-tertiary', hex: '#6e2613', role: '딥 럭셔리 라인, 시그니처 테두리', label: '시그니처 테두리 라인' },
];

// 3. Background Tokens
const FIGMA_BG_TOKENS = [
  { name: 'Default', path: 'Color / Background / Default', alias: 'Color/Gray/100', cssVar: '--color-bg-default', hex: '#ffffff', role: '기본 캔버스, 모달 서피스, 카드 베이스', border: true },
  { name: 'Secondary', path: 'Color / Background / Secondary', alias: 'Color/Gray/98', cssVar: '--color-bg-secondary', hex: '#f4f4f5', role: '보조 영역 배경, 뱃지 소프트 배경', border: false },
  { name: 'Tertiary', path: 'Color / Background / Tertiary', alias: 'Color/Gray/90', cssVar: '--color-bg-tertiary', hex: '#e4e4e7', role: '테이블 헤더, 강조 카드 배경', border: false },
  { name: 'Disabled', path: 'Color / Background / Disabled', alias: 'Color/Gray/96', cssVar: '--color-bg-disabled', hex: '#f0f0f2', role: '비활성 버튼 및 인풋 배경', border: false },
  { name: 'Point Primary', path: 'Color / Background / Point / Primary', alias: 'Color/Primary/Default', cssVar: '--color-bg-point-primary', hex: '#d94e28', role: '메인 브랜드 CTA 버튼 배경', textColor: '#ffffff' },
  { name: 'Point Secondary', path: 'Color / Background / Point / Secondary', alias: 'Color/Primary/Secondary', cssVar: '--color-bg-point-secondary', hex: '#a93b1d', role: '세컨더리 포인트 배경', textColor: '#ffffff' },
  { name: 'Point Tertiary', path: 'Color / Background / Point / Tertiary', alias: 'Color/Primary/Tertiary', cssVar: '--color-bg-point-tertiary', hex: '#6e2613', role: '딥 럭셔리 포인트 배경', textColor: '#ffffff' },
  { name: 'Point Subtle', path: 'Color / Background / Point / Subtle', alias: 'Color/Primary/Subtle', cssVar: '--color-bg-point-subtle', hex: '#fae8df', role: '포인트 틴트 배경, 프로모션 카드 하이라이트', textColor: '#a93b1d' },
];

// 4. Icon Tokens
const FIGMA_ICON_TOKENS = [
  { name: 'Default', path: 'Color / Icon / Default', alias: 'Color/Gray/0', cssVar: '--color-icon-default', hex: '#121212', role: '기본 네비게이션, 주요 기능 아이콘', icon: Search },
  { name: 'Secondary', path: 'Color / Icon / Secondary', alias: 'Color/Gray/40', cssVar: '--color-icon-secondary', hex: '#555555', role: '보조 정보, 펼치기/접기 아이콘', icon: ArrowRight },
  { name: 'Tertiary', path: 'Color / Icon / Tertiary', alias: 'Color/Gray/60', cssVar: '--color-icon-tertiary', hex: '#888888', role: '입력창 클리어, 보조 인디케이터', icon: ShoppingBag },
  { name: 'Disabled', path: 'Color / Icon / Disabled', alias: 'Color/Gray/70', cssVar: '--color-icon-disabled', hex: '#b0b0b0', role: '비활성 버튼 내부 아이콘', icon: Heart },
  { name: 'Inverse', path: 'Color / Icon / Inverse', alias: 'Color/Gray/100', cssVar: '--color-icon-inverse', hex: '#ffffff', role: '다크 배경/버튼 내부 반전 아이콘', icon: ShoppingBag, isInverse: true },
  { name: 'Subtle', path: 'Color / Icon / Subtle', alias: 'Color/Gray/30', cssVar: '--color-icon-subtle', hex: '#3f3f46', role: '강조 아이콘, 활성 툴바', icon: Sparkles },
  { name: 'Negative', path: 'Color / Icon / Negative', alias: 'Color/Red/50', cssVar: '--color-icon-negative', hex: '#dc2626', role: '에러 경고, 삭제, 찜 해제', icon: AlertCircle },
  { name: 'Positive', path: 'Color / Icon / Positive', alias: 'Color/Blue/52', cssVar: '--color-icon-positive', hex: '#2563eb', role: '성공 완료, 인증 마크', icon: Check },
  { name: 'Point', path: 'Color / Icon / Point', alias: 'Color/Orange/50', cssVar: '--color-icon-point', hex: '#d94e28', role: '브랜드 포인트 강조 아이콘', icon: Heart },
];

// 5. Overlay Tokens
const FIGMA_OVERLAY_TOKENS = [
  { name: 'Black-Light', path: 'Color / Overlay / Black-Light', alias: 'Color/Overlay/Black20 (20%)', cssVar: '--color-overlay-black-light', rgba: 'rgba(0, 0, 0, 0.2)', role: '은은한 이미지 틴트, 카드 마우스 오버 오버레이' },
  { name: 'Black-Balance', path: 'Color / Overlay / Black-Balance', alias: 'Color/Overlay/Black50 (50%)', cssVar: '--color-overlay-black-balance', rgba: 'rgba(0, 0, 0, 0.5)', role: '표준 모달/드로어 딤드(Dimmed) 배경' },
  { name: 'Black-Strong', path: 'Color / Overlay / Black-Strong', alias: 'Color/Overlay/Black80 (80%)', cssVar: '--color-overlay-black-strong', rgba: 'rgba(0, 0, 0, 0.8)', role: '룩북 풀스크린 뷰어, 딥 포커스 배경' },
  { name: 'White-Light', path: 'Color / Overlay / White-Light', alias: 'Color/Overlay/White20 (20%)', cssVar: '--color-overlay-white-light', rgba: 'rgba(255, 255, 255, 0.2)', role: '다크 이미지 위 소프트 글래스모피즘 효과' },
  { name: 'White-Balance', path: 'Color / Overlay / White-Balance', alias: 'Color/Overlay/White50 (50%)', cssVar: '--color-overlay-white-balance', rgba: 'rgba(255, 255, 255, 0.5)', role: '품절 상품 마스킹 오버레이' },
  { name: 'White-Strong', path: 'Color / Overlay / White-Strong', alias: 'Color/Overlay/White80 (80%)', cssVar: '--color-overlay-white-strong', rgba: 'rgba(255, 255, 255, 0.8)', role: '라이트 테마 다이얼로그 딤드' },
];

// 6. Primary Brand Tokens
const FIGMA_PRIMARY_TOKENS = [
  { name: 'Default', path: 'Color / Primary / Default', alias: 'Color/Orange/50', cssVar: '--color-primary-default', hex: '#d94e28', role: '브랜드 시그니처 웜 테라코타 메인 컬러', textColor: '#ffffff' },
  { name: 'Secondary', path: 'Color / Primary / Secondary', alias: 'Color/Orange/40', cssVar: '--color-primary-secondary', hex: '#a93b1d', role: '호버/액티브 상태 및 세컨더리 포인트', textColor: '#ffffff' },
  { name: 'Tertiary', path: 'Color / Primary / Tertiary', alias: 'Color/Orange/20', cssVar: '--color-primary-tertiary', hex: '#6e2613', role: '딥 에디토리얼 시그니처 와인/브라운', textColor: '#ffffff' },
  { name: 'Subtle', path: 'Color / Primary / Subtle', alias: 'Color/Orange/80', cssVar: '--color-primary-subtle', hex: '#fae8df', role: '브랜드 소프트 틴트 배경 및 뱃지 베이스', textColor: '#a93b1d' },
];

// 7. Typography Tokens (.Primitive / Typography - 15 Variables)
const FIGMA_TYPOGRAPHY_HEADING = [
  { name: 'XLarge', path: 'Typography / Font-size / Heading / XLarge', value: '32px', numeric: 32, cssVar: '--primitive-font-size-heading-xlarge', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-XLarge', role: '메인 룩북 타이틀, 기획전 대형 헤드라인', sample: '2026 Spring / Summer Haute Couture Collection' },
  { name: 'Large', path: 'Typography / Font-size / Heading / Large', value: '24px', numeric: 24, cssVar: '--primitive-font-size-heading-large', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Large', role: '섹션 헤딩, 상품 상세 대표 명칭', sample: 'Double-Breasted Cashmere Blend Long Coat' },
  { name: 'Medium', path: 'Typography / Font-size / Heading / Medium', value: '18px', numeric: 18, cssVar: '--primitive-font-size-heading-medium', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Medium', role: '카드 타이틀, 다이얼로그 모달 헤딩', sample: 'Atelier Signature Tailored Collection' },
  { name: 'Small', path: 'Typography / Font-size / Heading / Small', value: '16px', numeric: 16, cssVar: '--primitive-font-size-heading-small', figmaVar: '--figma-Primitive-Typography-Font-size-Heading-Small', role: '서브 섹션 타이틀, 드로어 헤더', sample: 'Shopping Bag Summary & Order Options' },
];

const FIGMA_TYPOGRAPHY_BODY = [
  { name: 'Large', path: 'Typography / Font-size / Body / Large', value: '16px', numeric: 16, cssVar: '--primitive-font-size-body-large', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Large', role: '강조 본문 리드 텍스트, 중요 안내 문구', sample: '이탈리아 최고급 원사를 사용하여 유려한 드레이프와 편안한 착용감을 선사합니다.' },
  { name: 'Medium', path: 'Typography / Font-size / Body / Medium', value: '15px', numeric: 15, cssVar: '--primitive-font-size-body-medium', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Medium', role: '기본 상품 설명 본문, 아티클 단락', sample: '군더더기 없는 미니멀 실루엣에 자연스러운 입체 패턴을 더해 일상 속 포멀함을 완성합니다.' },
  { name: 'Small', path: 'Typography / Font-size / Body / Small', value: '14px', numeric: 14, cssVar: '--primitive-font-size-body-small', figmaVar: '--figma-Primitive-Typography-Font-size-Body-Small', role: '보조 설명, 주문 옵션 선택 정보', sample: '모델 신장 178cm, S 사이즈 착용 (평소 정사이즈 착용 권장)' },
  { name: 'XSmall', path: 'Typography / Font-size / Body / XSmall', value: '13px', numeric: 13, cssVar: '--primitive-font-size-body-xsmall', figmaVar: '--figma-Primitive-Typography-Font-size-Body-XSmall', role: '배송 안내, 소재 혼용률, 케어 라벨', sample: '겉감: 버진울 90%, 캐시미어 10% / 드라이클리닝 전용' },
  { name: 'XXSmall', path: 'Typography / Font-size / Body / XXSmall', value: '12px', numeric: 12, cssVar: '--primitive-font-size-body-xxsmall', figmaVar: '--figma-Primitive-Typography-Font-size-Body-XXSmall', role: '최소 캡션, 부가세 포함 안내, 저작권 표기', sample: '제조국: 대한민국 / 품질보증기준: 전자상거래 소비자 보호법 준수' },
];

const FIGMA_TYPOGRAPHY_LETTER_SPACING = [
  { name: '0', path: 'Typography / Letter-spacing / 0', value: '0em', numeric: '0', cssVar: '--primitive-letter-spacing-0', figmaVar: '--figma-Primitive-Typography-Letter-spacing-0', role: '기본 자간 (영문 및 본문 텍스트 표준)', sampleKr: '기본 자간 (0em): 패션 에디토리얼 프리미엄 컬렉션', sampleEn: 'The quick brown fox jumps over the lazy dog (Tracking: 0em)' },
  { name: '1', path: 'Typography / Letter-spacing / 1', value: '-0.02em', numeric: '-0.02', cssVar: '--primitive-letter-spacing-1', figmaVar: '--figma-Primitive-Typography-Letter-spacing-1', role: '타이트 자간 (국문 최적 가독성, 가격 및 타이틀)', sampleKr: '타이트 자간 (-0.02em): ₩389,000 (40% OFF) 프리미엄 테일러드 울 코트', sampleEn: 'Exclusive Haute Couture Edition • Special Selection (-0.02em)' },
];

const FIGMA_TYPOGRAPHY_WEIGHT = [
  { name: 'Regular', path: 'Typography / Font-weight / Regular', value: '400', cssVar: '--primitive-font-weight-regular', figmaVar: '--figma-Primitive-Typography-Font-weight-Regular', role: '기본 본문, 상세 스펙 및 제품 설명', sample: 'Regular 400: Timeless aesthetic crafted with sustainable organic wool fabrics.' },
  { name: 'Medium', path: 'Typography / Font-weight / Medium', value: '500', cssVar: '--primitive-font-weight-medium', figmaVar: '--figma-Primitive-Typography-Font-weight-Medium', role: '서브헤딩, 필터 옵션, 네비게이션 링크', sample: 'Medium 500: Exclusive Capsule Selection & Handcrafted Leather Goods' },
  { name: 'SemiBold', path: 'Typography / Font-weight / SemiBold', value: '600', cssVar: '--primitive-font-weight-semibold', figmaVar: '--figma-Primitive-Typography-Font-weight-SemiBold', role: '메인 헤드라인, 액션 버튼 텍스트, 가격 강조', sample: 'SemiBold 600: ATELIER ARCHIVE SALE • UP TO 50% OFF TODAY' },
];

// 8. Number Tokens (.Primitive / Number - 22 Variables)
const FIGMA_NUMBER_TOKENS = [
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

export const TokensShowcase: React.FC = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const tabs = [
    { id: 'all', label: 'All Tokens (85)' },
    { id: 'typography', label: 'Typography (15)' },
    { id: 'number', label: 'Number (22)' },
    { id: 'background', label: 'Background (8)' },
    { id: 'border', label: 'Border (10)' },
    { id: 'text', label: 'Text (11)' },
    { id: 'icon', label: 'Icon (9)' },
    { id: 'overlay', label: 'Overlay (6)' },
    { id: 'primary', label: 'Primary (4)' },
  ];

  return (
    <div className="tokens-showcase-container">
      {/* Header */}
      <header className="tokens-header">
        <span className="tokens-badge">FIGMA DESIGN TOKENS FULL SUITE</span>
        <h1 className="tokens-title font-editorial">Figma Design System Tokens (85)</h1>
        <p className="tokens-subtitle">
          피그마 <strong>"00. Common Design System"</strong>에 정의된
          <code>.Primitive(Typography 15, Number 22)</code> 및 <code>Semantic(Color 48)</code>
          총 <strong>85개 베리어블</strong>이 1:1 오차 없이 완벽히 동기화되었습니다.
        </p>

        {/* Tab Navigation */}
        <div className="tokens-tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tokens-tab-btn ${activeTab === tab.id ? 'tokens-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* 0. Typography Tokens (15) */}
      {(activeTab === 'all' || activeTab === 'typography') && (
        <section className="tokens-section">
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

          {/* Heading Sizes (4) */}
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

          {/* Body Sizes (5) */}
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

          {/* Letter Spacing (2) */}
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

          {/* Font Weight (3) */}
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
        </section>
      )}

      {/* 0-1. Number Tokens (22) */}
      {(activeTab === 'all' || activeTab === 'number') && (
        <section className="tokens-section">
          <div className="figma-type-summary-banner">
            <div>
              <h2 className="tokens-section-title" style={{ margin: 0, border: 'none', padding: 0 }}>
                .Primitive / Number (22 Variables)
              </h2>
              <p className="color-group-desc" style={{ margin: '4px 0 0' }}>
                여백(Gap, Padding), 컴포넌트 크기(Sizing), 모서리 곡률(Radius)의 단일 진실 공급원 수치 스케일
              </p>
            </div>
            <div className="figma-type-summary-chips">
              <span className="figma-type-chip">Range: <strong>0px ~ 160px</strong></span>
              <span className="figma-type-chip">Pill / Circle: <strong>999px</strong></span>
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
                  <span className="figma-alias-badge">→ .Primitive/{item.path}</span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                  <p className="figma-role-desc">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 1. Background Tokens (8) */}
      {(activeTab === 'all' || activeTab === 'background') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">1. Color / Background (8 Variables)</h2>
          <p className="color-group-desc">페이지 캔버스, 카드 서피스, 모달 배경 및 포인트 서피스 토큰</p>

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
                    border: item.border ? '1px solid var(--border-default)' : 'none',
                    color: item.textColor || 'var(--text-primary)',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</span>
                  <span style={{ fontSize: '11px', opacity: 0.85, fontFamily: 'var(--font-mono)' }}>{item.hex}</span>
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
        </section>
      )}

      {/* 2. Border Tokens (10) */}
      {(activeTab === 'all' || activeTab === 'border') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">2. Color / Border (10 Variables)</h2>
          <p className="color-group-desc">컴포넌트 외곽선, 구분선, 유효성 상태(Negative/Positive) 및 포인트 보더</p>

          <div className="figma-text-table">
            {FIGMA_BORDER_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-text-row"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-text-col-name">
                  <div
                    className="figma-border-preview-dot"
                    style={{ borderColor: `var(${item.cssVar})`, backgroundColor: 'var(--bg-surface)' }}
                  />
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                </div>

                <div className="figma-text-col-alias">
                  <span className={`figma-alias-badge ${item.alias.includes('Primary') ? 'figma-alias-badge--point' : ''}`}>
                    → {item.alias}
                  </span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                </div>

                <div className="figma-border-col-preview">
                  <div className="figma-border-sample-box" style={{ border: `1.5px solid var(${item.cssVar})` }}>
                    <span style={{ fontSize: '12px', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: '10px', color: 'var(--color-grey-500)', fontFamily: 'var(--font-mono)' }}>{item.hex}</span>
                  </div>
                  <span className="figma-role-desc">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Text Tokens (11) */}
      {(activeTab === 'all' || activeTab === 'text') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">3. Color / Text (11 Variables)</h2>
          <p className="color-group-desc">기본 본문, 보조 설명, 상태 피드백 및 브랜드 포인트 텍스트</p>

          <div className="figma-text-table">
            {FIGMA_TEXT_TOKENS.map((item) => (
              <div
                key={item.path}
                className="figma-text-row"
                onClick={() => handleCopy(`var(${item.cssVar})`)}
                title="클릭하여 CSS 변수명 복사"
              >
                <div className="figma-text-col-name">
                  <div
                    className="figma-color-dot"
                    style={{ backgroundColor: item.hex, border: item.isInverse ? '1px solid #d4d4d8' : 'none' }}
                  />
                  <div>
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-var-path">{item.path}</span>
                  </div>
                </div>

                <div className="figma-text-col-alias">
                  <span className={`figma-alias-badge ${item.alias.includes('Primary') ? 'figma-alias-badge--point' : ''}`}>
                    → {item.alias}
                  </span>
                  <code className="figma-css-var">var({item.cssVar})</code>
                  {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                </div>

                <div className={`figma-text-col-preview ${item.isInverse ? 'figma-text-col-preview--dark' : ''}`}>
                  <div style={{ color: `var(${item.cssVar})`, fontSize: item.name === 'Default' ? '15px' : '13px', fontWeight: item.name === 'Default' ? 600 : 400 }}>
                    {item.sample}
                  </div>
                  <span className="figma-role-desc">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Icon Tokens (9) */}
      {(activeTab === 'all' || activeTab === 'icon') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">4. Color / Icon (9 Variables)</h2>
          <p className="color-group-desc">네비게이션, 유틸리티 버튼, 뱃지 및 액션 아이콘 전용 컬러</p>

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
                    className="figma-icon-circle"
                    style={{
                      background: item.isInverse ? '#18181b' : 'var(--bg-surface-subtle)',
                      color: `var(${item.cssVar})`,
                    }}
                  >
                    <IconComp size={22} strokeWidth={2} />
                  </div>
                  <div className="figma-icon-meta">
                    <strong className="figma-var-name">{item.name}</strong>
                    <span className="figma-alias-badge">→ {item.alias}</span>
                    <code className="figma-css-var">var({item.cssVar})</code>
                    {copiedToken === `var(${item.cssVar})` && <span className="copy-tag">복사됨! ✓</span>}
                    <p className="figma-role-desc">{item.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. Overlay Tokens (6) */}
      {(activeTab === 'all' || activeTab === 'overlay') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">5. Color / Overlay (6 Variables)</h2>
          <p className="color-group-desc">모달 딤드, 룩북 이미지 필터, 글래스모피즘 레이어를 위한 반투명 오버레이</p>

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
        </section>
      )}

      {/* 6. Primary Brand Tokens (4) */}
      {(activeTab === 'all' || activeTab === 'primary') && (
        <section className="tokens-section">
          <h2 className="tokens-section-title">6. Color / Primary (4 Variables)</h2>
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
        </section>
      )}
    </div>
  );
};
