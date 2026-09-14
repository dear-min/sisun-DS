import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Icon } from './Icon';
import type { IconColorToken, IconSize } from './types';
import { iconRegistry } from './iconData';
import './icon-showcase.css';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Icon Atom System
피그마 \`00. Common Design System\`의 **Icon (총 46종: 시스템 35종 + 썸네일 11종)**을 100% 등록 완료한 원자 단위 아이콘 컴포넌트입니다.

- **제로 하드코딩 (Rule 1)**: 모든 아이콘은 상위 요소 또는 시맨틱 아이콘 컬러 토큰(\`--color-icon-*\`)을 \`currentColor\`로 상속받습니다.
- **치수 토큰 연동 (Rule 2-1)**: \`8px\`, \`12px\`, \`16px\`, \`24px\`, \`32px\`, \`64px\` 스케일이 \`--primitive-number-*\` 토큰과 1:1 바인딩됩니다.
- **스마트 리졸빙**: \`name="cart"\`처럼 크기 접미사 없이 작성해도 \`size\` 프로퍼티에 맞춰 최적의 벡터 그래픽을 자동으로 렌더링합니다.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconRegistry),
      description: '등록된 아이콘 명칭',
    },
    size: {
      control: 'select',
      options: [8, 12, 16, 24, 32, 64],
      description: '아이콘 규격 (px)',
    },
    color: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'subtle',
        'negative',
        'positive',
        'point',
        'inherit',
      ],
      description: '피그마 시맨틱 아이콘 컬러 토큰',
    },
    rotate: {
      control: { type: 'range', min: 0, max: 360, step: 45 },
      description: '회전 각도 (deg)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * 1. 전체 아이콘 대화형 갤러리 (검색, 크기 필터링 및 원클릭 JSX 코드 복사)
 */
export const AllIconsGallery: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedSize, setSelectedSize] = useState<string>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [copiedName, setCopiedName] = useState<string | null>(null);

    const allIcons = Object.values(iconRegistry);

    const filtered = allIcons.filter((icon) => {
      const matchSearch =
        icon.name.toLowerCase().includes(search.toLowerCase()) ||
        icon.displayName.toLowerCase().includes(search.toLowerCase()) ||
        icon.originalFile.toLowerCase().includes(search.toLowerCase());

      const matchSize =
        selectedSize === 'all' ||
        icon.defaultSize.toString() === selectedSize;

      const matchCat =
        selectedCategory === 'all' ||
        icon.category === selectedCategory;

      return matchSearch && matchSize && matchCat;
    });

    const handleCopy = (iconName: string, defaultSize: number) => {
      const code = `<Icon name="${iconName}" size={${defaultSize}} />`;
      navigator.clipboard.writeText(code);
      setCopiedName(code);
      setTimeout(() => setCopiedName(null), 2000);
    };

    return (
      <div className="icon-showcase-container">
        <div className="icon-showcase-header">
          <h2 className="icon-showcase-title">
            <span>Atelier Icon Registry</span>
            <span className="icon-showcase-badge">총 {allIcons.length}개 등록 완료</span>
          </h2>
          <p className="icon-showcase-desc">
            피그마 원본 에셋에서 무손실 추출된 46종의 전체 아이콘 갤러리입니다. 카드를 클릭하면 바로 사용할 수 있는 JSX 코드가 복사됩니다.
          </p>
        </div>

        {/* 필터 및 검색 컨트롤 */}
        <div className="icon-filter-bar">
          <input
            type="text"
            className="icon-search-input"
            placeholder="아이콘 검색 (예: cart, arrow, wish, delete, download, bullet...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="icon-filter-groups">
            <div className="icon-chip-group">
              <span className="icon-chip-label">크기(Size):</span>
              {['all', '8', '12', '16', '24', '32', '64'].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`icon-filter-chip ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size === 'all' ? '전체' : `${size}px`}
                </button>
              ))}
            </div>

            <div className="icon-chip-group">
              <span className="icon-chip-label">분류(Category):</span>
              {[
                { id: 'all', label: '전체' },
                { id: 'system', label: '시스템 (35)' },
                { id: 'thumbnail', label: '썸네일 컴포넌트 (11)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`icon-filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 아이콘 그리드 */}
        <div className="icon-grid">
          {filtered.map((icon) => (
            <div
              key={icon.name}
              className="icon-card"
              onClick={() => handleCopy(icon.name, icon.defaultSize)}
              title="클릭하여 JSX 복사"
            >
              <div className="icon-card-preview">
                <Icon name={icon.name} size={icon.defaultSize as IconSize} />
              </div>
              <div className="icon-card-name">{icon.displayName}</div>
              <div className="icon-card-meta">
                {icon.defaultSize}px · {icon.style}
              </div>
            </div>
          ))}
        </div>

        {copiedName && (
          <div className="icon-copy-toast">
            복사 완료: <code>{copiedName}</code>
          </div>
        )}
      </div>
    );
  },
};

/**
 * 2. 규격별 스케일 비교 매트릭스 (8px ~ 64px)
 */
export const SizeMatrix: Story = {
  render: () => {
    const scaleIcons = [
      { name: 'bullet_8', label: 'Bullet (8px)', size: 8 },
      { name: 'arrow_down_12', label: 'Arrow Down (12px)', size: 12 },
      { name: 'arrow_down_16', label: 'Arrow Down (16px)', size: 16 },
      { name: 'arrow_down_24', label: 'Arrow Down (24px)', size: 24 },
      { name: 'download_32', label: 'Download (32px)', size: 32 },
      { name: 'nodata_64', label: 'No Data (64px)', size: 64 },
    ];

    return (
      <div className="icon-showcase-container">
        <div className="icon-showcase-header">
          <h2 className="icon-showcase-title">Icon Size Scale Matrix</h2>
          <p className="icon-showcase-desc">
            피그마 <code>Primitive / Number</code> 기반 8px, 12px, 16px, 24px, 32px, 64px 6단계 표준 스케일 검증 매트릭스입니다.
          </p>
        </div>

        <table className="icon-matrix-table">
          <thead>
            <tr>
              <th>구격 (Size)</th>
              <th>연동 CSS 토큰</th>
              <th>실제 픽셀</th>
              <th>아이콘 프리뷰</th>
            </tr>
          </thead>
          <tbody>
            {scaleIcons.map((item) => (
              <tr key={item.size}>
                <td><strong>{item.label}</strong></td>
                <td><code>var(--primitive-number-*)</code></td>
                <td>{item.size}px</td>
                <td>
                  <Icon name={item.name} size={item.size as IconSize} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/**
 * 3. 피그마 시맨틱 아이콘 컬러 토큰 9종 1:1 매트릭스
 */
export const ColorTokensMatrix: Story = {
  render: () => {
    const colors: { token: IconColorToken; name: string; cssVar: string; role: string }[] = [
      { token: 'default', name: 'Default', cssVar: '--color-icon-default', role: '기본 다크(#121212) / 다크모드 화이트' },
      { token: 'secondary', name: 'Secondary', cssVar: '--color-icon-secondary', role: '서브 액션 및 메뉴 회색(#737373)' },
      { token: 'tertiary', name: 'Tertiary', cssVar: '--color-icon-tertiary', role: '비활성 근접 은은한 회색(#a1a1aa)' },
      { token: 'disabled', name: 'Disabled', cssVar: '--color-icon-disabled', role: '비활성화 상태(#b0b0b0)' },
      { token: 'inverse', name: 'Inverse', cssVar: '--color-icon-inverse', role: 'Primary 버튼 배경 내 화이트(#ffffff)' },
      { token: 'subtle', name: 'Subtle', cssVar: '--color-icon-subtle', role: '미세 구분선 및 디바이더(#52525b)' },
      { token: 'negative', name: 'Negative', cssVar: '--color-icon-negative', role: '삭제, 경고, 에러 피드백(#ef4444)' },
      { token: 'positive', name: 'Positive', cssVar: '--color-icon-positive', role: '다운로드 완료, 링크, 성공(#2563eb)' },
      { token: 'point', name: 'Point', cssVar: '--color-icon-point', role: '브랜드 시그니처 테라코타 오렌지(#f97316)' },
    ];

    const sampleIcons = ['cart_16', 'wish_16', 'alarm_12', 'download_24', 'share_16'];

    return (
      <div className="icon-showcase-container">
        <div className="icon-showcase-header">
          <h2 className="icon-showcase-title">Semantic Color Tokens Matrix (9종)</h2>
          <p className="icon-showcase-desc">
            피그마 시맨틱 컬러 토큰(<code>--color-icon-*</code>)에 반응하는 아이콘 색상 일관성 테스트입니다.
          </p>
        </div>

        <table className="icon-matrix-table">
          <thead>
            <tr>
              <th>시맨틱 토큰 명</th>
              <th>CSS 변수명</th>
              <th>디자인 시스템 역할</th>
              {sampleIcons.map((ico) => (
                <th key={ico}>{ico}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colors.map((c) => (
              <tr key={c.token} style={c.token === 'inverse' ? { backgroundColor: '#121212', color: '#fff' } : undefined}>
                <td><strong>{c.name}</strong></td>
                <td><code>{c.cssVar}</code></td>
                <td>{c.role}</td>
                {sampleIcons.map((ico) => (
                  <td key={ico}>
                    <Icon name={ico} color={c.token} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/**
 * 4. 썸네일 / 위시리스트 오버레이 컴포넌트 뷰어
 */
export const ThumbnailVariants: Story = {
  render: () => {
    const thumbnails = [
      { name: 'thumbnail_mobile', title: 'Mobile Wishlist Overlay (92×56)' },
      { name: 'thumbnail_pc', title: 'PC Wishlist Overlay (115×124)' },
      { name: 'thumbnail_pc_resource', title: 'PC Resource Overlay (92×56)' },
      { name: 'thumbnail_name_ico_wish_state_active', title: 'Wish Active (16×16 Point Color)' },
      { name: 'thumbnail_name_ico_wish_state_inactive', title: 'Wish Inactive (16×16 Shadow Outline)' },
      { name: 'thumbnail_type_default_state_active', title: 'Pill Button: Default Active (32×32)' },
      { name: 'thumbnail_type_default_state_inactive', title: 'Pill Button: Default Inactive (32×32)' },
      { name: 'thumbnail_type_hover_state_active', title: 'Pill Button: Hover Active (32×32)' },
      { name: 'thumbnail_type_hover_state_inactive', title: 'Pill Button: Hover Inactive (32×32)' },
    ];

    return (
      <div className="icon-showcase-container">
        <div className="icon-showcase-header">
          <h2 className="icon-showcase-title">Thumbnail / Wishlist Overlay Components</h2>
          <p className="icon-showcase-desc">
            피그마 룩북 카드 및 상품 상세 페이지 썸네일 전용 오버레이 에셋 11종입니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          {thumbnails.map((t) => (
            <div
              key={t.name}
              style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-3)',
              }}
            >
              <div
                style={{
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#333',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                  width: '100%',
                }}
              >
                <Icon name={t.name} />
              </div>
              <div style={{ fontSize: 'var(--primitive-font-size-body-xsmall)', fontWeight: 500, textAlign: 'center' }}>
                {t.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * 5. 컨트롤 대화형 플레이그라운드
 */
export const Playground: Story = {
  args: {
    name: 'cart_16',
    size: 24,
    color: 'default',
    rotate: 0,
  },
};
