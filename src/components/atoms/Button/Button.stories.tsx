import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 버튼(Button) 컴포넌트입니다. 사용자의 핵심 액션과 인터랙션을 유도합니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼 중요도 위계 (Type)',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      description: '버튼 크기 (Size)',
      table: { defaultValue: { summary: 'md' } },
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'pressed', 'disabled'],
      description: '버튼 인터랙션 상태 (State)',
      table: { defaultValue: { summary: 'normal' } },
    },
    children: {
      control: 'text',
      description: '버튼 텍스트 라벨',
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
 * Button 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    type: 'primary',
    size: 'md',
    state: 'normal',
    children: '버튼명',
    fullWidth: false,
    isLoading: false,
    disabled: false,
  },
  render: (args) => {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          margin: '0 auto',
          fontFamily: 'var(--primitive-font-family, Pretendard, sans-serif)',
          color: 'var(--color-text-default)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--primitive-number-10, 32px)',
        }}
      >
        {/* 컴포넌트 헤더 */}
        <div style={{ borderBottom: '2px solid var(--color-border-subtle, #333333)', paddingBottom: 'var(--primitive-number-7, 16px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--primitive-number-3, 6px)' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Button
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--primitive-number-3, 6px)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Class Name</span>
              <code
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  backgroundColor: 'var(--color-bg-secondary)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-small, 4px)',
                  color: 'var(--color-text-default)',
                  fontWeight: 600,
                }}
              >
                btn
              </code>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            사용자의 핵심 액션(클릭, 저장, 구매 등)을 유도하는 인터랙션 컴포넌트입니다.
          </p>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 Type, Size, State, Loading 등 속성을 변경하여 실시간으로 확인해보세요.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-10, 32px) var(--primitive-number-8, 20px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button {...args}>
              {args.children || '버튼명'}
            </Button>
          </div>
        </section>

        {/* 1. Type (위계 분류) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Type (위계 분류)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              중요도에 따라 버튼 간 위계를 구분하여 사용합니다. 화면당 가장 핵심적인 액션에 Primary를 적용합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--primitive-number-9, 24px)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Primary (핵심)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="secondary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Secondary (보조)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="tertiary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Tertiary (외곽선)</span>
            </div>
          </div>
        </section>

        {/* 2. Size (크기 규격) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Size (크기 규격)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              배치되는 영역의 비중과 시각적 계층에 적합한 크기(XL, LG, MD, SM, XS)로 사용합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--primitive-number-7, 16px)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="xl">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>XL (52px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>LG (48px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="md">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>MD (40px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="sm">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>SM (36px)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="xs">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>XS (32px)</span>
            </div>
          </div>
        </section>

        {/* 3. State (인터랙션 상태) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              State (인터랙션 상태)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              사용자의 상호작용 시점에 따라 명확한 시각적 피드백을 전달합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--primitive-number-8, 20px)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" state="normal">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Default</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" state="hover">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Hover</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" state="pressed">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Pressed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" state="disabled">버튼명</Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Disabled</span>
            </div>
          </div>
        </section>

        {/* 4. Icon (아이콘 결합) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Icon (아이콘 결합)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              버튼의 속성을 시각화하여 이해를 돕거나(Left), 다음 액션 방향을 안내(Right)할 때 사용합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--primitive-number-9, 24px)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="tertiary" size="md" leftIcon={<Icon name="download" size={16} />}>
                쿠폰 다운로드
              </Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Left Icon (속성 보조)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="tertiary" size="md" rightIcon={<Icon name="arrow_right_12" size={12} />}>
                배송지 목록
              </Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Right Icon (이동 보조)</span>
            </div>
          </div>
        </section>

        {/* 5. Options (확장 옵션) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Options (확장 옵션)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              부모 컨테이너 너비에 맞춤 확장(Full Width) 및 비동기 처리 중(Loading) 상태를 지원합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--primitive-number-8, 20px)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" isLoading>
                저장 중
              </Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Loading (스피너)</span>
            </div>
            <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Button type="primary" size="lg" fullWidth>
                구매하기
              </Button>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Full Width (너비 100%)</span>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
