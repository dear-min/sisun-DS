import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingButton } from './FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: 'Atoms/Floating Button',
  component: FloatingButton,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 플로팅 버튼(Floating Button) 컴포넌트입니다. Overlay White 반투명 서피스로 이미지 및 컨텐츠 상단에 배치되어 인터랙션을 유도합니다.`,
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
      description: '버튼 인터랙션 상태 (Figma State)',
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
      description: '버튼 라벨 문구',
      defaultValue: '버튼명',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

// 플로팅 버튼의 Overlay White 반투명 서피스를 부각하기 위한 공통 그레이 캔버스 스타일
const grayCanvasStyle: React.CSSProperties = {
  backgroundColor: 'var(--primitive-color-gray-60, #999999)',
  borderRadius: 'var(--radius-xxlarge, 16px)',
  padding: 'var(--primitive-number-11, 40px) var(--primitive-number-8, 20px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '120px',
  boxSizing: 'border-box',
};

/**
 * Floating Button 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    size: 'md',
    state: 'normal',
    label: '버튼명',
    icon: true,
    iconPosition: 'left',
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
              Floating Button
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
                floating-btn
              </code>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Overlay White 글래스모피즘 서피스로 이미지 및 컨텐츠 위에 떠서 속성을 보조하거나 액션을 유도합니다.
          </p>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 Size, State, Label, Icon Position 등을 조작하여 실시간 동작을 확인해보세요.
            </p>
          </div>
          <div style={grayCanvasStyle}>
            <FloatingButton {...args} />
          </div>
        </section>

        {/* 1. Type Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Type</h3>
              <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>=</span>
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
                floating
              </code>
            </div>
            <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              버튼 내 시각적인 상징이 필요한 경우 사용합니다.
            </p>
            <p style={{ margin: '0 0 2px 0', fontSize: '12px', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>
              • Left : 버튼의 속성을 시각화하여 이해를 보조하는 경우
            </p>
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>
              • Right : 버튼의 다음 액션을 시각화하여 이해를 보조하는 경우
            </p>
          </div>
          <div style={grayCanvasStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="md" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Floating
              </span>
            </div>
          </div>
        </section>

        {/* 2. Size Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Size</h3>
              <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>=</span>
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
                md
              </code>
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
                sm
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              컨텐츠 내 적합한 계층을 가진 크기로 사용합니다.
            </p>
          </div>
          <div style={{ ...grayCanvasStyle, gap: 'var(--primitive-number-11, 40px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="md" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Medium (40px)
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="sm" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Small (32px)
              </span>
            </div>
          </div>
        </section>

        {/* 3. State Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>State</h3>
              <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>=</span>
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
                normal <span style={{ color: 'var(--color-text-tertiary)', fontSize: '11px' }}>default</span>
              </code>
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
                hover
              </code>
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
                pressed
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              사용자의 상호작용 시 컬러 및 엘리베이션이 변경됩니다.
            </p>
          </div>
          <div style={{ ...grayCanvasStyle, gap: 'var(--primitive-number-10, 32px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="md" state="normal" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Default
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="md" state="hover" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Hover
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <FloatingButton size="md" state="pressed" label="버튼명" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                Pressed
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
