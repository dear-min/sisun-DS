import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `피그마 **"00. Common Design System"**의 **Button** 컴포넌트입니다.
- **Class Name**: \`btn\`
- **Type**: \`primary\` | \`secondary\` | \`tertiary\` (중요도에 따라 버튼 간 위계를 구분하여 사용)
- **Size**: \`xl\` | \`lg\` | \`md\` | \`sm\` | \`xs\` (컨텐츠 내 적절한 비중을 가진 크기로 사용)
- **State**: \`normal\` (default) | \`hover\` | \`pressed\` | \`disabled\` (사용자의 상호작용 시 컬러가 변경)
- **Icon**: 좌측(속성 시각화) 및 우측(다음 액션 보조) 아이콘 지원
- **Token 바인딩**: \`Component/Color/Button\`, \`Semantic/Typescale\`, \`Semantic/Layout\` 1:1 완벽 매핑`,
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
 * 0. 피그마 공식 디자인 명세서 1:1 완벽 재현 뷰 (Figma Spec View)
 */
export const FigmaSpecification: Story = {
  name: 'Figma Spec (공식 명세 완벽 재현)',
  render: () => {
    const sizes: Array<'xl' | 'lg' | 'md' | 'sm' | 'xs'> = ['xl', 'lg', 'md', 'sm', 'xs'];
    const states: Array<'normal' | 'hover' | 'pressed' | 'disabled'> = ['normal', 'hover', 'pressed', 'disabled'];

    return (
      <div
        style={{
          width: '680px',
          maxWidth: '100%',
          backgroundColor: '#f7f7f8',
          padding: '40px 32px',
          borderRadius: '16px',
          boxSizing: 'border-box',
          fontFamily: 'var(--primitive-font-family, Pretendard, sans-serif)',
          color: '#1a1a1a',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Button
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#666' }}>Class Name</span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  backgroundColor: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  color: '#333',
                  fontWeight: 600,
                }}
              >
                btn
              </span>
            </div>
          </div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#111111' }} />
        </div>

        {/* 1. Type Section */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Type</span>
            <span style={{ fontSize: '14px', color: '#666' }}>=</span>
            {['primary', 'secondary', 'tertiary'].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  backgroundColor: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  color: '#333',
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>
            중요도에 따라 버튼 간 위계를 구분하여 사용합니다.
          </p>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '36px 20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Primary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="secondary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Secondary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="tertiary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Tertiary</span>
            </div>
          </div>
        </div>

        {/* 2. Size Section */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Size</span>
            <span style={{ fontSize: '14px', color: '#666' }}>=</span>
            {['xl', 'lg', 'md', 'sm', 'xs'].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  backgroundColor: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  color: '#333',
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>
            컨텐츠 내 적절한 비중을 가진 크기로 사용합니다.
          </p>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '36px 20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="xl">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>XLarge</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Large</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="md">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Medium</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="sm">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Small</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="xs">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>XSmall</span>
            </div>
          </div>
        </div>

        {/* 3. State Section */}
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
            {['hover', 'pressed', 'disabled'].map((st) => (
              <span
                key={st}
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  backgroundColor: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  color: '#333',
                }}
              >
                {st}
              </span>
            ))}
          </div>
          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>
            사용자의 상호작용 시 컬러가 변경됩니다.
          </p>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '36px 20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg" state="normal">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Default</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg" state="hover">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Hover</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg" state="pressed">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Pressed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="primary" size="lg" state="disabled">버튼명</Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Disabled</span>
            </div>
          </div>
        </div>

        {/* 4. Icon Section */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Icon</span>
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
              false <span style={{ color: '#888', fontSize: '11px' }}>default</span>
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
              true
            </span>
          </div>
          <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#666' }}>
            버튼 내 시각적인 상징이 필요한 경우 사용합니다.
          </p>
          <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#888' }}>
            Left : 버튼의 속성을 시각화하여 이해를 보조하는 경우
          </p>
          <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#888' }}>
            Right : 버튼의 다음 액션을 시각화하여 이해를 보조하는 경우
          </p>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '36px 20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="tertiary" size="md" leftIcon={<Icon name="download_16" size={16} />}>
                쿠폰 다운로드
              </Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Left Icon</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Button type="tertiary" size="md" rightIcon={<Icon name="arrow_right_12" size={12} />}>
                배송지 목록
              </Button>
              <span style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Right Icon</span>
            </div>
          </div>
        </div>

        {/* 5. Component Section */}
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700 }}>
            Component
          </h3>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '40px 24px',
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
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
              }}
            >
              {(['primary', 'secondary', 'tertiary'] as const).map((type) => (
                <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sizes.map((size) => (
                    <div key={size} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {states.map((st) => (
                        <div key={st} style={{ width: '96px', display: 'flex', justifyContent: 'center' }}>
                          <Button type={type} size={size} state={st}>
                            버튼명
                          </Button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
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
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Primary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button type="secondary" size="lg">버튼명</Button>
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Secondary</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button type="tertiary" size="lg">버튼명</Button>
          <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Tertiary</span>
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
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XLarge</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="lg">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="md">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="sm">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="primary" size="xs">버튼명</Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>XSmall</span>
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
        <Button type="tertiary" size="md" leftIcon={<Icon name="download_16" size={16} />}>
          쿠폰 다운로드
        </Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Left Icon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Button type="tertiary" size="md" rightIcon={<Icon name="arrow_right_12" size={12} />}>
          배송지 목록
        </Button>
        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Right Icon</span>
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
          gap: '24px',
          padding: '24px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1.5px dashed #8a38f5',
          fontFamily: 'var(--primitive-font-family)',
        }}
      >
        {types.map((type) => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ margin: 0, textTransform: 'capitalize', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-default)' }}>
              {type} Matrix (5 Sizes × 4 States)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {sizes.map((size) => (
                <div key={size} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {states.map((state) => (
                    <div key={state} style={{ width: '100px', display: 'flex', justifyContent: 'center' }}>
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
          모든 스타일 속성은 피그마 <code>00. Common Design System</code>의 <code>Component / Color / Button</code> 및 <code>Typescale</code>과 100% 동일하게 매핑됩니다.
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
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Primary)</td>
              <td style={{ padding: '10px 14px' }}>Normal / Hover / Pressed</td>
              <td style={{ padding: '10px 14px' }}><code>Color.Button.Primary-fill / -hover / -pressed</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-button-primary-fill / -hover / -pressed)</code></td>
              <td style={{ padding: '10px 14px' }}>#1a1a1a (Gray/10) ➔ #000000 (Gray/0) ➔ #333333 (Gray/20)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Secondary)</td>
              <td style={{ padding: '10px 14px' }}>Normal / Hover / Pressed</td>
              <td style={{ padding: '10px 14px' }}><code>Color.Button.Secondary-fill / -hover / -pressed</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-button-secondary-fill / -hover / -pressed)</code></td>
              <td style={{ padding: '10px 14px' }}>#f5f5f5 (Gray/96) ➔ #e5e5e5 (Gray/90) ➔ #d9d9d9 (Gray/85)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Tertiary)</td>
              <td style={{ padding: '10px 14px' }}>배경 / 테두리</td>
              <td style={{ padding: '10px 14px' }}><code>Color.Button.Tertiary-fill / -border</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-button-tertiary-fill / -border)</code></td>
              <td style={{ padding: '10px 14px' }}>배경: #ffffff ➔ #f5f5f5 ➔ #e5e5e5 / 테두리: #4d4d4d (Border/Subtle)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Color (Disabled)</td>
              <td style={{ padding: '10px 14px' }}>배경 / 테두리 / 텍스트</td>
              <td style={{ padding: '10px 14px' }}><code>Color.Button.Disabled-fill / -border / -text</code></td>
              <td style={{ padding: '10px 14px' }}><code>var(--color-button-disabled-fill / -border / -text)</code></td>
              <td style={{ padding: '10px 14px' }}>#f5f5f5 / #e5e5e5 / #b2b2b2</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Typescale (xl)</td>
              <td style={{ padding: '10px 14px' }}>크기 / 행간 / 자간 / 굵기</td>
              <td style={{ padding: '10px 14px' }}><code>Typescale.Body Large</code></td>
              <td style={{ padding: '10px 14px' }}><code>16px / 24px / -0.02em / Medium(500)</code></td>
              <td style={{ padding: '10px 14px' }}>피그마 Typescale 1:1 매칭</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Typescale (lg)</td>
              <td style={{ padding: '10px 14px' }}>크기 / 행간 / 자간 / 굵기</td>
              <td style={{ padding: '10px 14px' }}><code>Typescale.Body Medium</code></td>
              <td style={{ padding: '10px 14px' }}><code>15px / 24px / -0.02em / Medium(500)</code></td>
              <td style={{ padding: '10px 14px' }}>피그마 Typescale 1:1 매칭</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Typescale (md)</td>
              <td style={{ padding: '10px 14px' }}>크기 / 행간 / 자간 / 굵기</td>
              <td style={{ padding: '10px 14px' }}><code>Typescale.Body Small</code></td>
              <td style={{ padding: '10px 14px' }}><code>14px / 22px / -0.02em / Medium(500)</code></td>
              <td style={{ padding: '10px 14px' }}>피그마 Typescale 1:1 매칭</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Typescale (sm)</td>
              <td style={{ padding: '10px 14px' }}>크기 / 행간 / 자간 / 굵기</td>
              <td style={{ padding: '10px 14px' }}><code>Typescale.Body XSmall</code></td>
              <td style={{ padding: '10px 14px' }}><code>13px / 22px / -0.02em / Medium(500)</code></td>
              <td style={{ padding: '10px 14px' }}>피그마 Typescale 1:1 매칭</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>Typescale (xs)</td>
              <td style={{ padding: '10px 14px' }}>크기 / 행간 / 자간 / 굵기</td>
              <td style={{ padding: '10px 14px' }}><code>Typescale.Caption Small</code></td>
              <td style={{ padding: '10px 14px' }}><code>12px / 22px / -0.02em / Medium(500)</code></td>
              <td style={{ padding: '10px 14px' }}>피그마 Typescale 1:1 매칭</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};
