import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { Download, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `피그마 **"00. Common Design System"**의 **Button** 컴포넌트입니다.
- **Class Name**: \`btn\`
- **Type**: \`primary\` | \`secondary\` | \`tertiary\` (중요도에 따른 위계 구분)
- **Size**: \`xl\` | \`lg\` | \`md\` | \`sm\` | \`xs\` (컨텐츠 내 비중에 따른 5단계 크기)
- **State**: \`normal\` | \`hover\` | \`pressed\` | \`disabled\` (상호작용 상태 피드백)
- **Icon**: 좌측(속성 시각화) 및 우측(다음 액션 보조) 아이콘 지원`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼 중요도 위계 (Figma Type)',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      description: '버튼 크기 (Figma Size)',
      table: { defaultValue: { summary: 'md' } },
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'pressed', 'disabled'],
      description: '버튼 인터랙션 상태 (Figma State)',
      table: { defaultValue: { summary: 'normal' } },
    },
    children: {
      control: 'text',
      description: '버튼 라벨 텍스트',
      defaultValue: '버튼명',
    },
    fullWidth: {
      control: 'boolean',
      description: '너비 100% 확장 여부',
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 스피너 활성화',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 기본 인터랙티브 버튼
 */
export const Default: Story = {
  args: {
    type: 'primary',
    size: 'md',
    state: 'normal',
    children: '버튼명',
    fullWidth: false,
    isLoading: false,
    disabled: false,
  },
};

/**
 * 1. Type (중요도에 따라 버튼 간 위계를 구분하여 사용)
 */
export const TypeHierarchy: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button type="primary" size="lg">버튼명</Button>
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--primitive-font-family)' }}>Primary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button type="secondary" size="lg">버튼명</Button>
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--primitive-font-family)' }}>Secondary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button type="tertiary" size="lg">버튼명</Button>
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--primitive-font-family)' }}>Tertiary</span>
        </div>
      </div>
    </div>
  ),
};

/**
 * 2. Size (컨텐츠 내 적절한 비중을 가진 크기로 사용: xl, lg, md, sm, xs)
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="xl">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XLarge (56px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Large (48px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="md">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Medium (40px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="sm">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Small (32px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="xs">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XSmall (24px)</span>
      </div>
    </div>
  ),
};

/**
 * 3. State (사용자의 상호작용 시 컬러가 변경: Default, Hover, Pressed, Disabled)
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg" state="normal">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg" state="hover">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Hover</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg" state="pressed">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Pressed</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg" state="disabled">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Disabled</span>
      </div>
    </div>
  ),
};

/**
 * 4. Icon (버튼 내 시각적인 상징이 필요한 경우: Left / Right)
 */
export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="tertiary" size="md" leftIcon={<Download size={16} />}>
          쿠폰 다운로드
        </Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Left Icon (속성 시각화)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="tertiary" size="md" rightIcon={<ChevronRight size={16} />}>
          배송지 목록
        </Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Right Icon (다음 액션 보조)</span>
      </div>
    </div>
  ),
};

/**
 * 5. Figma Component Matrix (피그마 전체 변형 60종 1:1 완벽 재현)
 */
export const FigmaComponentMatrix: Story = {
  render: () => {
    const types: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
    const sizes: Array<'xl' | 'lg' | 'md' | 'sm' | 'xs'> = ['xl', 'lg', 'md', 'sm', 'xs'];
    const states: Array<'normal' | 'hover' | 'pressed' | 'disabled'> = ['normal', 'hover', 'pressed', 'disabled'];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--primitive-number-10)',
          padding: 'var(--primitive-number-9)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--primitive-number-6)',
          border: '1px dashed var(--color-border-default)',
        }}
      >
        {types.map((type) => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-6)' }}>
            <h4 style={{ margin: 0, textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-default)', fontFamily: 'var(--primitive-font-family)' }}>
              {type} Matrix (5 Sizes × 4 States)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4)' }}>
              {sizes.map((size) => (
                <div key={size} style={{ display: 'flex', gap: 'var(--primitive-number-6)', alignItems: 'center' }}>
                  {states.map((state) => (
                    <div key={state} style={{ width: '130px', display: 'flex', justifyContent: 'center' }}>
                      <Button type={type} size={size} state={state}>
                        버튼명
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * 6. Figma Design Token 1:1 Mapping Table (디자인 토큰 매핑 상세 검증표)
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
          Button ➔ Figma Design Token 1:1 매핑 명세서
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          모든 스타일 속성은 피그마 <code>00. Common Design System</code>에 등록된 토큰 명칭과 100% 동일하게 매핑됩니다.
        </p>
      </div>

      {/* 1. Typography */}
      <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--primitive-number-3)', overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-bg-secondary)', fontWeight: 600, fontSize: '14px', color: 'var(--color-text-default)' }}>
          1. Typography 매핑 (Pretendard, Medium 500, 자간 -0.02em)
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-default)' }}>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>버튼 Size</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>피그마 토큰 경로</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>적용 CSS 변수명</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>값</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'xl', path: '.Primitive / Typography / Font-size / Body / Large', css: '--primitive-font-size-body-large', val: '16px' },
              { size: 'lg', path: '.Primitive / Typography / Font-size / Body / Medium', css: '--primitive-font-size-body-medium', val: '15px' },
              { size: 'md', path: '.Primitive / Typography / Font-size / Body / Small', css: '--primitive-font-size-body-small', val: '14px' },
              { size: 'sm', path: '.Primitive / Typography / Font-size / Body / XSmall', css: '--primitive-font-size-body-xsmall', val: '13px' },
              { size: 'xs', path: '.Primitive / Typography / Font-size / Body / XXSmall', css: '--primitive-font-size-body-xxsmall', val: '12px' },
            ].map((row, i) => (
              <tr key={row.size} style={{ borderBottom: i < 4 ? '1px solid var(--color-border-secondary)' : 'none' }}>
                <td style={{ padding: '10px 16px', fontWeight: 600 }}>{row.size}</td>
                <td style={{ padding: '10px 16px' }}><code>{row.path}</code></td>
                <td style={{ padding: '10px 16px', color: 'var(--primitive-color-orange-50)' }}><code>var({row.css})</code></td>
                <td style={{ padding: '10px 16px' }}>{row.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. Number Dimensions */}
      <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--primitive-number-3)', overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-bg-secondary)', fontWeight: 600, fontSize: '14px', color: 'var(--color-text-default)' }}>
          2. Number 치수 매핑 (Height, Padding, Gap, Corner Radius)
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-default)' }}>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>버튼 Size</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Height</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Padding (X)</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Gap</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Radius</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'xl', h: '--primitive-number-13 (56px)', p: '--primitive-number-9 (24px)', g: '--primitive-number-4 (8px)', r: '--primitive-number-3 (6px)' },
              { size: 'lg', h: '--primitive-number-12 (48px)', p: '--primitive-number-8 (20px)', g: '--primitive-number-4 (8px)', r: '--primitive-number-3 (6px)' },
              { size: 'md', h: '--primitive-number-11 (40px)', p: '--primitive-number-7 (16px)', g: '--primitive-number-3 (6px)', r: '--primitive-number-2 (4px)' },
              { size: 'sm', h: '--primitive-number-10 (32px)', p: '--primitive-number-6 (12px)', g: '--primitive-number-3 (6px)', r: '--primitive-number-2 (4px)' },
              { size: 'xs', h: '--primitive-number-9 (24px)', p: '--primitive-number-4 (8px)', g: '--primitive-number-2 (4px)', r: '--primitive-number-2 (4px)' },
            ].map((row, i) => (
              <tr key={row.size} style={{ borderBottom: i < 4 ? '1px solid var(--color-border-secondary)' : 'none' }}>
                <td style={{ padding: '10px 16px', fontWeight: 600 }}>{row.size}</td>
                <td style={{ padding: '10px 16px' }}><code>var({row.h})</code></td>
                <td style={{ padding: '10px 16px' }}><code>var({row.p})</code></td>
                <td style={{ padding: '10px 16px' }}><code>var({row.g})</code></td>
                <td style={{ padding: '10px 16px' }}><code>var({row.r})</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. Color Tokens */}
      <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--primitive-number-3)', overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-bg-secondary)', fontWeight: 600, fontSize: '14px', color: 'var(--color-text-default)' }}>
          3. Color 매핑 (Primary, Secondary, Tertiary × Normal, Hover, Pressed, Disabled)
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-default)' }}>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Type</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Normal (기본)</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Hover (오버)</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Pressed (누름)</th>
              <th style={{ padding: '10px 16px', color: 'var(--color-text-secondary)' }}>Disabled (비활성)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border-secondary)' }}>
              <td style={{ padding: '10px 16px', fontWeight: 600 }}>Primary</td>
              <td style={{ padding: '10px 16px' }}>
                BG: <code>var(--primitive-color-gray-0)</code><br />
                Text: <code>var(--color-text-inverse)</code><br />
                Icon: <code>var(--color-icon-inverse)</code>
              </td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--primitive-color-gray-20)</code></td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--primitive-color-gray-30)</code></td>
              <td style={{ padding: '10px 16px' }}>
                BG: <code>var(--color-bg-disabled)</code><br />
                Text: <code>var(--color-text-disabled)</code>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-secondary)' }}>
              <td style={{ padding: '10px 16px', fontWeight: 600 }}>Secondary</td>
              <td style={{ padding: '10px 16px' }}>
                BG: <code>var(--primitive-color-gray-96)</code><br />
                Text: <code>var(--color-text-default)</code><br />
                Icon: <code>var(--color-icon-default)</code>
              </td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--color-bg-tertiary)</code></td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--primitive-color-gray-85)</code></td>
              <td style={{ padding: '10px 16px' }}>
                BG: <code>var(--color-bg-disabled)</code><br />
                Text: <code>var(--color-text-disabled)</code>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px 16px', fontWeight: 600 }}>Tertiary</td>
              <td style={{ padding: '10px 16px' }}>
                BG: <code>var(--color-bg-default)</code><br />
                Border: <code>var(--color-border-default)</code><br />
                Text: <code>var(--color-text-default)</code>
              </td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--color-bg-secondary)</code></td>
              <td style={{ padding: '10px 16px' }}>BG: <code>var(--color-bg-tertiary)</code></td>
              <td style={{ padding: '10px 16px' }}>
                Border: <code>var(--color-border-disabled)</code><br />
                Text: <code>var(--color-text-disabled)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};
