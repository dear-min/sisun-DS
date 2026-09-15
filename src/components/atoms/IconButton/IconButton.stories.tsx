import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `피그마 **"00. Common Design System"**의 **Icon Button** 컴포넌트입니다.
- **Class Name**: \`icon-btn\`
- **Type**: \`icon\` (아이콘을 사용하여 특정 동작의 수행을 돕습니다.)
- **State**: \`normal\` (default) | \`hover\` | \`active\` | \`disabled\` (사용자의 상호작용 시 컬러가 변경됩니다.)
- **Size**: \`xl (56px)\` | \`lg (48px)\` | \`md (40px)\` | \`sm (32px)\` | \`xs (24px)\` (1:1 정방형 비율)
- **Token**: 피그마 \`.Primitive\` 및 \`Semantic\` 토큰 1:1 바인딩 완료`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      description: '버튼 크기 (Figma Size: xl 56px, lg 48px, md 40px, sm 32px, xs 24px)',
      table: { defaultValue: { summary: 'xl' } },
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'active', 'disabled'],
      description: '버튼 상호작용 상태 (Figma State)',
      table: { defaultValue: { summary: 'normal' } },
    },
    isActive: {
      control: 'boolean',
      description: '활성화 상태 여부 (Active 시 브랜드 포인트 오렌지 컬러 적용)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * 기본 인터랙티브 아이콘 버튼 (클릭하여 상태를 토글해 볼 수 있습니다)
 */
export const Default: Story = {
  args: {
    size: 'xl',
    state: 'normal',
    disabled: false,
    'aria-label': '관심 상품',
  },
};

/**
 * 0. 피그마 공식 디자인 문서 1:1 완벽 재현 (Figma Spec View)
 */
export const FigmaSpecification: Story = {
  name: 'Figma Spec (공식 명세 완벽 재현)',
  render: () => (
    <div
      style={{
        width: '600px',
        maxWidth: '100%',
        backgroundColor: '#f7f7f8',
        padding: '40px 32px',
        borderRadius: '16px',
        boxSizing: 'border-box',
        fontFamily: 'var(--primitive-font-family, Pretendard, sans-serif)',
        color: '#1a1a1a',
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Icon Button
        </h2>
        <div style={{ width: '100%', height: '2px', backgroundColor: '#111111' }} />
      </div>

      {/* 1. Type Section */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '15px', fontWeight: 600 }}>Type</span>
          <span style={{ fontSize: '14px', color: '#666' }}>=</span>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              backgroundColor: '#e9ecef',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#333',
            }}
          >
            icon
          </span>
        </div>
        <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>
          아이콘을 사용하여 특정 동작의 수행을 돕습니다.
        </p>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '44px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          <IconButton size="xl" state="normal" />
        </div>
      </div>

      {/* 2. State Section */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '15px', fontWeight: 600 }}>State</span>
          <span style={{ fontSize: '14px', color: '#666' }}>=</span>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              backgroundColor: '#e9ecef',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#333',
            }}
          >
            normal <span style={{ color: '#888', fontSize: '11px' }}>default</span>
          </span>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              backgroundColor: '#e9ecef',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#333',
            }}
          >
            hover
          </span>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              backgroundColor: '#e9ecef',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#333',
            }}
          >
            active
          </span>
        </div>
        <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>
          사용자의 상호작용 시 컬러가 변경됩니다.
        </p>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <IconButton size="xl" state="normal" />
            <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <IconButton size="xl" state="hover" />
            <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Hover</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <IconButton size="xl" state="active" />
            <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Active</span>
          </div>
        </div>
      </div>

      {/* 3. Component Frame Section */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>
          Component
        </h3>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '44px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          {/* Purple dashed Figma Component Set bounding box */}
          <div
            style={{
              border: '1.5px dashed #8a38f5',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <IconButton size="xl" state="normal" />
            <IconButton size="xl" state="hover" />
            <IconButton size="xl" state="active" />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * 1. State (상호작용 상태별 시각적 피드백: Default, Hover, Active, Disabled)
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xl" state="normal" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Default (Normal)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xl" state="hover" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Hover (#f5f5f5)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xl" state="active" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Active (Point #e4541b)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xl" state="disabled" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Disabled</span>
      </div>
    </div>
  ),
};

/**
 * 2. Size (피그마 5단계 정방형 크기: xl 56px, lg 48px, md 40px, sm 32px, xs 24px)
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xl" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XLarge (56px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Large (48px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="md" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Medium (40px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="sm" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Small (32px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="xs" />
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XSmall (24px)</span>
      </div>
    </div>
  ),
};

/**
 * 3. Interactive Toggle (클릭 시 실제로 활성화 토글을 확인하는 스토리)
 */
export const InteractiveToggle: Story = {
  render: function Render() {
    const [active, setActive] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <IconButton
          size="xl"
          isActive={active}
          onToggle={(next) => setActive(next)}
          aria-label="관심 상품 토글"
        />
        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
          상태: <strong style={{ color: active ? 'var(--color-icon-point)' : 'inherit' }}>
            {active ? 'Active (관심 등록됨)' : 'Default (미등록)'}
          </strong>
          <br />
          <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
            클릭하여 Default ↔ Active 상태를 실시간으로 전환할 수 있습니다.
          </span>
        </div>
      </div>
    );
  },
};

/**
 * 4. Icon Inventory Variations (디자인 시스템 내 등록된 다양한 아이콘 적용 예시)
 */
export const IconVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="wish" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>wish (기본)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="cart_16" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>cart_16</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="share_16" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>share_16</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="download_24" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>download_24</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="close_24" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>close_24</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconButton size="lg" name="alarm_12" />
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>alarm_12</span>
      </div>
    </div>
  ),
};

/**
 * 5. Figma Token 1:1 Mapping Table (토큰 매핑 명세서)
 */
export const TokenMappingTable: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '860px',
        fontFamily: 'var(--primitive-font-family)',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: 'var(--color-text-default)' }}>
          Icon Button ➔ Figma Design Token 1:1 매핑 명세서
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          피그마 <code>00. Common Design System</code>의 <code>Icon Button</code>에 등록된 토큰 명칭과 100% 동일하게 매핑됩니다.
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            textAlign: 'left',
            lineHeight: 1.6,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '2px solid var(--color-border-default)' }}>
              <th style={{ padding: '10px 14px', fontWeight: 600 }}>속성 분류</th>
              <th style={{ padding: '10px 14px', fontWeight: 600 }}>컴포넌트 속성</th>
              <th style={{ padding: '10px 14px', fontWeight: 600 }}>피그마 토큰 경로</th>
              <th style={{ padding: '10px 14px', fontWeight: 600 }}>적용 CSS 토큰</th>
              <th style={{ padding: '10px 14px', fontWeight: 600 }}>값 / 비고</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Dimensions</td>
              <td style={{ padding: '10px 14px' }}>xl (56px 정방형)</td>
              <td style={{ padding: '10px 14px' }}><code>Number / 13</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--primitive-number-13)</code></td>
              <td style={{ padding: '10px 14px' }}>56px × 56px (곡률 6px)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Dimensions</td>
              <td style={{ padding: '10px 14px' }}>lg (48px 정방형)</td>
              <td style={{ padding: '10px 14px' }}><code>Number / 12</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--primitive-number-12)</code></td>
              <td style={{ padding: '10px 14px' }}>48px × 48px (곡률 6px)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Dimensions</td>
              <td style={{ padding: '10px 14px' }}>md (40px 정방형)</td>
              <td style={{ padding: '10px 14px' }}><code>Number / 11</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--primitive-number-11)</code></td>
              <td style={{ padding: '10px 14px' }}>40px × 40px (곡률 4px)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Default)</td>
              <td style={{ padding: '10px 14px' }}>배경 / 테두리 / 아이콘</td>
              <td style={{ padding: '10px 14px' }}><code>Bg/Default, Border/Default, Icon/Default</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-bg-default), var(--color-border-default)</code></td>
              <td style={{ padding: '10px 14px' }}>#ffffff / #d9d9d9 / #000000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Hover)</td>
              <td style={{ padding: '10px 14px' }}>호버 배경</td>
              <td style={{ padding: '10px 14px' }}><code>Background / Secondary</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-bg-secondary)</code></td>
              <td style={{ padding: '10px 14px' }}>#f5f5f5 (Color/Gray/96)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Active)</td>
              <td style={{ padding: '10px 14px' }}>활성 아이콘 컬러</td>
              <td style={{ padding: '10px 14px' }}><code>Icon / Point</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-icon-point)</code></td>
              <td style={{ padding: '10px 14px' }}>#e4541b (Color/Orange/50)</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Accessibility</td>
              <td style={{ padding: '10px 14px' }}>포커스 링</td>
              <td style={{ padding: '10px 14px' }}><code>Border / Positive</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-border-positive)</code></td>
              <td style={{ padding: '10px 14px' }}>2px solid #1e4eed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};
