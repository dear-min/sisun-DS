import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FloatingButton } from './FloatingButton';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof FloatingButton> = {
  title: 'Atoms/Floating Button',
  component: FloatingButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Floating Button Atom Component
피그마 **"00. Common Design System"**의 **Floating Button** 원자 단위 컴포넌트입니다.

- **Class Name**: \`floating-btn\` (호환 별칭: \`btn--floating\`)
- **Type**: \`floating\`
  - 버튼 내 시각적인 상징이 필요한 경우 사용합니다.
  - Left: 버튼의 속성을 시각화하여 이해를 보조하는 경우
  - Right: 버튼의 다음 액션을 시각화하여 이해를 보조하는 경우
- **Size (2종)**:
  - \`md\` (Medium): 높이 40px (\`--primitive-number-11\`), 좌우 패딩 16px (\`--primitive-number-7\`), 폰트 14px Medium
  - \`sm\` (Small): 높이 32px (\`--primitive-number-10\`), 좌우 패딩 12px (\`--primitive-number-6\`), 폰트 13px Medium
- **State (3종)**:
  - \`normal\` (default): 화이트 서피스 (\`--color-button-floating-bg\`) + 엘리베이션 드롭 섀도우
  - \`hover\`: 엘리베이션 상승 (\`translateY(-1px)\`) + 깊어진 섀도우
  - \`pressed\`: 소프트 그레이 채움 피드백 (\`--color-button-floating-pressed\` #e5e5e5)
- **Border Radius**: 999px 완전 원형 캡슐 (\`--primitive-radius-circle\`)
- **기본 아이콘**: 피그마 46종 인벤토리 등록 태그 에셋 \`setup_16\` 1:1 연동
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm'],
      description: '버튼 크기 (md: 40px, sm: 32px)',
      table: { defaultValue: { summary: 'md' } },
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'pressed'],
      description: '인터랙션 상태',
      table: { defaultValue: { summary: 'normal' } },
    },
    icon: {
      control: 'boolean',
      description: '아이콘 표시 여부 (기본값: setup_16 태그 아이콘)',
      table: { defaultValue: { summary: 'true' } },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '아이콘 위치 (left: 속성 보조, right: 액션 보조)',
      table: { defaultValue: { summary: 'left' } },
    },
    label: {
      control: 'text',
      description: '버튼 라벨 텍스트',
      table: { defaultValue: { summary: '버튼명' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

// 공통 그레이 캔버스 스타일 (화이트 플로팅 버튼 & 섀도우 부각용)
const grayCanvasStyle: React.CSSProperties = {
  background: '#bdbdbd',
  borderRadius: '16px',
  padding: '40px 32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '120px',
};

/**
 * 1. Type (floating) - 피그마 시안 Card 1 100% 재현
 */
export const TypeVariants: Story = {
  name: '1. Type (floating)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Type</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>floating</span>
            </div>
          </div>
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666666', lineHeight: 1.6 }}>
            버튼 내 시각적인 상징이 필요한 경우 사용합니다.<br />
            Left : 버튼의 속성을 시각화하여 이해를 보조하는 경우<br />
            Right : 버튼의 다음 액션을 시각화하여 이해를 보조하는 경우
          </p>
        </div>

        <div style={grayCanvasStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="md" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Floating
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 2. Size (md vs sm) - 피그마 시안 Card 2 100% 재현
 */
export const SizeVariants: Story = {
  name: '2. Size (md vs sm)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Size</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>md</span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>sm</span>
            </div>
          </div>
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666666', lineHeight: 1.6 }}>
            컨텐츠 내 적합한 계층을 가진 크기로 사용합니다.
          </p>
        </div>

        <div style={{ ...grayCanvasStyle, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', justifyItems: 'center' }}>
          {/* Medium */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="md" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Medium
            </span>
          </div>

          {/* Small */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="sm" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Small
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 3. State (normal, hover, pressed) - 피그마 시안 Card 3 100% 재현
 */
export const StateVariants: Story = {
  name: '3. State (normal, hover, pressed)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>State</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>
                normal <span style={{ color: '#71717a', fontSize: '11px' }}>default</span>
              </span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>hover</span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>pressed</span>
            </div>
          </div>
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666666', lineHeight: 1.6 }}>
            버튼 내 시각적인 상징이 필요한 경우 사용합니다.<br />
            Left : 버튼의 속성을 시각화하여 이해를 보조하는 경우<br />
            Right : 버튼의 다음 액션을 시각화하여 이해를 보조하는 경우
          </p>
        </div>

        <div style={{ ...grayCanvasStyle, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', justifyItems: 'center' }}>
          {/* Default (Normal) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="md" state="normal" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Default
            </span>
          </div>

          {/* Hover */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="md" state="hover" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Hover
            </span>
          </div>

          {/* Pressed */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <FloatingButton size="md" state="pressed" label="버튼명" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#333333' }}>
              Pressed
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 4. Component Matrix (Figma Spec View) - 피그마 시안 Card 4 보라색 점선 뷰 100% 재현
 */
export const ComponentMatrix: Story = {
  name: '4. Component Matrix (Figma Spec View)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '640px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Component</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Component 프레임 내 3(State) × 2(Size) 6종 매트릭스
          </p>
        </div>

        <div style={grayCanvasStyle}>
          <div
            style={{
              border: '1.5px dashed #8b5cf6',
              borderRadius: '16px',
              padding: '32px 40px',
              display: 'inline-grid',
              gridTemplateColumns: 'auto auto',
              columnGap: '32px',
              rowGap: '20px',
              alignItems: 'center',
              justifyItems: 'start',
            }}
          >
            {/* Row 1: Normal (md, sm) */}
            <FloatingButton size="md" state="normal" label="버튼명" />
            <FloatingButton size="sm" state="normal" label="버튼명" />

            {/* Row 2: Hover (md, sm) */}
            <FloatingButton size="md" state="hover" label="버튼명" />
            <FloatingButton size="sm" state="hover" label="버튼명" />

            {/* Row 3: Pressed (md, sm) */}
            <FloatingButton size="md" state="pressed" label="버튼명" />
            <FloatingButton size="sm" state="pressed" label="버튼명" />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 5. Interactive E-Commerce Showcase (패션 이커머스 플로팅 액션)
 */
export const InteractiveEcommerceShowcase: Story = {
  name: '5. Interactive E-Commerce Showcase',
  render: () => {
    const [couponClaimed, setCouponClaimed] = useState(false);

    return (
      <div style={{ padding: '32px 24px', maxWidth: '720px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Interactive E-Commerce Floating Actions
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          Atelier 패션몰 화면 우하단/하단 고정 플로팅 액션 버튼 실무 패턴
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Section 1: Icon Left vs Right */}
          <div style={{ background: '#f5f5f5', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              아이콘 위치별 시각화 (Left: 속성 이해 / Right: 다음 액션)
            </h3>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <FloatingButton
                size="md"
                iconPosition="left"
                label="시즌 쿠폰팩"
              />
              <FloatingButton
                size="md"
                iconPosition="right"
                icon={<Icon name="arrow_right_16" size={16} />}
                label="바로 구매하기"
              />
              <FloatingButton
                size="sm"
                iconPosition="left"
                icon={<Icon name="arrow_up_12" size={12} />}
                label="TOP"
              />
            </div>
          </div>

          {/* Section 2: Interactive Floating Coupon */}
          <div style={{ background: '#f5f5f5', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              실시간 인터랙티브 쿠폰 발급 토글
            </h3>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <FloatingButton
                size="md"
                onClick={() => setCouponClaimed(!couponClaimed)}
                label={couponClaimed ? '쿠폰 적용 완료 (15%)' : '15% 할인쿠폰 받기'}
              />
              <span style={{ fontSize: '13px', color: '#4b5563' }}>
                {couponClaimed ? '✅ 쿠폰이 장바구니에 적용되었습니다.' : '버튼을 클릭하여 쿠폰을 다운로드하세요.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 6. Token Mapping Table - 제로 하드코딩 토큰 1:1 바인딩 대조표
 */
export const TokenMappingTable: Story = {
  name: '6. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tokens = [
      {
        part: 'Height (md)',
        prop: 'Medium Height',
        figma: '40px',
        token: 'var(--primitive-number-11)',
        desc: 'Medium 플로팅 버튼 표준 높이',
      },
      {
        part: 'Height (sm)',
        prop: 'Small Height',
        figma: '32px',
        token: 'var(--primitive-number-10)',
        desc: 'Small 플로팅 버튼 표준 높이',
      },
      {
        part: 'Padding (md / sm)',
        prop: 'Horizontal Padding',
        figma: '16px / 12px',
        token: 'var(--primitive-number-7) / var(--primitive-number-6)',
        desc: '크기별 수평 내부 여백',
      },
      {
        part: 'Radius',
        prop: 'Border Radius',
        figma: '999px (완전 캡슐)',
        token: 'var(--primitive-radius-circle)',
        desc: '좌우 반원형 필(Pill) 캡슐 곡률',
      },
      {
        part: 'Gap (md / sm)',
        prop: 'Icon-to-Label Gap',
        figma: '6px / 4px',
        token: 'var(--primitive-number-3) / var(--primitive-number-2)',
        desc: '아이콘과 텍스트 사이 간격',
      },
      {
        part: 'Icon',
        prop: 'Default Tag Icon',
        figma: 'Icon16/Fill/ico_setup_16',
        token: 'setup_16 (<Icon name="setup_16" />)',
        desc: '피그마 공식 태그 아이콘 1:1 바인딩',
      },
      {
        part: 'Normal State',
        prop: 'Surface / Text / Shadow',
        figma: '#ffffff / #000000 / blur 12px',
        token: 'var(--color-button-floating-bg) / var(--color-button-floating-text)',
        desc: '화이트 서피스 + 소프트 드롭 섀도우',
      },
      {
        part: 'Hover State',
        prop: 'Surface / Elevation',
        figma: '#ffffff / translateY(-1px)',
        token: 'var(--color-button-floating-hover)',
        desc: '엘리베이션 상승 및 깊어진 섀도우',
      },
      {
        part: 'Pressed State',
        prop: 'Surface Feedback',
        figma: '#e5e5e5 (#e2e2e2)',
        token: 'var(--color-button-floating-pressed)',
        desc: '소프트 그레이 눌림 피드백',
      },
    ];

    return (
      <div style={{ padding: '32px 24px', maxWidth: '960px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Floating Button Design Token 1:1 Mapping Table
        </h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          피그마 '00. Common Design System'의 Floating Button 시각 요소를 프로젝트 공식 CSS 변수로 1:1 엄격 매핑한 결과입니다.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>구분 (Part)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>속성 (Property)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>피그마 추출값</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>적용 CSS 변수 토큰</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>비고 및 설명</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((t, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>{t.part}</td>
                <td style={{ padding: '12px 16px', color: '#4b5563' }}>{t.prop}</td>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#111827' }}>{t.figma}</td>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#4f46e5', fontWeight: 500 }}>
                  {t.token}
                </td>
                <td style={{ padding: '12px 16px', color: '#6b7280' }}>{t.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
