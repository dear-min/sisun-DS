import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 토스트(Toast) 컴포넌트입니다. 마케팅 프로모션, 장바구니 담기 피드백, 재입고 알림 완료 등 사용자에게 즉각적인 상태 피드백을 전달할 때 화면 전면에 오버레이로 노출됩니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['marketing', 'feedback'],
      description: '토스트 성격 유형 (Type)',
      table: { defaultValue: { summary: 'marketing' } },
    },
    message: {
      control: 'text',
      description: '메인 텍스트 (marketing: 오렌지 포인트 텍스트 / feedback: 알림 텍스트)',
      defaultValue: '메인 문구',
    },
    subMessage: {
      control: 'text',
      description: '보조 서브 텍스트 (marketing 전용)',
      defaultValue: '서브 문구',
    },
    timer: {
      control: 'number',
      description: '카운트다운 타이머 초 (marketing 전용)',
      defaultValue: 2,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastOverview: React.FC<React.ComponentProps<typeof Toast>> = (args) => {
  // 실제 인터랙션 데모용 상태
  const [activeToast, setActiveToast] = useState<'marketing' | 'feedback' | null>(null);

  const triggerToast = (type: 'marketing' | 'feedback') => {
    setActiveToast(type);
    setTimeout(() => {
      setActiveToast(null);
    }, 3000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--primitive-number-11, 40px)',
        maxWidth: '860px',
        fontFamily: 'var(--primitive-font-family)',
        color: 'var(--color-text-default)',
      }}
    >
        {/* 헤더 섹션: 피그마 시안 상단 명세 100% 매핑 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--primitive-color-gray-0)',
            paddingBottom: 'var(--primitive-number-6, 12px)',
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 700, letterSpacing: 'var(--primitive-letter-spacing-1, -0.02em)' }}>
              Toast
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              피그마 <code>00. Common Design System</code> 1:1 토큰 바인딩
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--primitive-number-4, 8px)', fontSize: '13px', fontWeight: 600 }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Class Name</span>
            <code
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: 'var(--primitive-number-1, 2px) var(--primitive-number-4, 8px)',
                borderRadius: 'var(--radius-small, 4px)',
                color: 'var(--color-text-default)',
              }}
            >
              toast
            </code>
          </div>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 Type, 문구, 타이머 값을 직접 변경해보세요.
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
            <Toast {...args} />
          </div>
        </section>

        {/* 1. Type = marketing (피그마 시안 100% 매핑) */}
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
                marketing <span style={{ color: 'var(--color-text-tertiary)', fontSize: '11px' }}>default</span>
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              이미지 썸네일, 서브 문구, 오렌지 포인트 메인 문구(최대 2줄), 그리고 원형 카운트다운 타이머 배지로 구성됩니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-10, 32px) var(--primitive-number-8, 20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--primitive-number-7, 16px)',
            }}
          >
            {/* 1-1. 한 줄 메인 문구 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', maxWidth: '320px' }}>
              <Toast
                type="marketing"
                subMessage="서브 문구"
                message="메인 문구"
                timer={2}
              />
              <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                기본 1줄 메인 문구 케이스
              </span>
            </div>

            {/* 1-2. 두 줄 메인 문구 (최대 2줄 제한) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', maxWidth: '320px' }}>
              <Toast
                type="marketing"
                subMessage="서브 문구"
                message={<>메인 문구<br />글자 수 최대 2줄까지 사용 가능합니다.</>}
                timer={2}
              />
              <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                글자 수 최대 2줄 확장 케이스
              </span>
            </div>
          </div>
        </section>

        {/* 2. Type = feedback (피그마 시안 100% 매핑) */}
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
                feedback <span style={{ color: 'var(--color-text-tertiary)', fontSize: '11px' }}>default</span>
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              사용자 액션(담기, 신청, 삭제 등)에 대한 신속한 결과 확인용 심플 텍스트 알림입니다.
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
            <div style={{ width: '100%', maxWidth: '320px' }}>
              <Toast type="feedback" message="재입고 알림이 완료되었습니다." />
            </div>
          </div>
        </section>

        {/* 3. 디자인 토큰 및 규격 가이드 */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Design Token Specifications
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Toast 컴포넌트에 적용된 100% 공식 디자인 토큰 매핑 가이드입니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-8, 20px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--primitive-number-6, 12px)',
            }}
          >
            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Surface & Shadow</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-default)', marginTop: '4px' }}>
                --color-toast-bg (#333333 / Gray 20)
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Radius: 8px (--radius-large)</div>
            </div>

            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Point Text Token</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-point-primary)', marginTop: '4px' }}>
                --color-toast-text-point (#e4541b)
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Body Small 14px Medium (최대 2줄)</div>
            </div>

            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Thumbnail & Timer</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-default)', marginTop: '4px' }}>
                Thumb: 52px / Timer: 22px Ring
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Background: --color-toast-thumb-bg</div>
            </div>
          </div>
        </section>

        {/* 4. 실제 인터랙션 트리거 데모 (Real-World Interaction) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Live Interaction Demo
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              버튼을 클릭하면 하단에 실제 토스트가 나타나며 3초 후 자동으로 사라집니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-8, 20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--primitive-number-6, 12px)',
              position: 'relative',
              minHeight: '140px',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--primitive-number-4, 8px)', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => triggerToast('marketing')}
                style={{
                  padding: 'var(--primitive-number-4, 8px) var(--primitive-number-7, 16px)',
                  backgroundColor: 'var(--primitive-color-gray-0)',
                  color: 'var(--color-text-inverse)',
                  border: 'none',
                  borderRadius: 'var(--radius-small, 4px)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                마케팅 토스트 띄우기
              </button>
              <button
                type="button"
                onClick={() => triggerToast('feedback')}
                style={{
                  padding: 'var(--primitive-number-4, 8px) var(--primitive-number-7, 16px)',
                  backgroundColor: 'var(--color-bg-secondary)',
                  color: 'var(--color-text-default)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-small, 4px)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                피드백 토스트 띄우기
              </button>
            </div>

            {/* 오버레이 토스트 표시 영역 */}
            {activeToast === 'marketing' && (
              <div style={{ marginTop: 'var(--primitive-number-6, 12px)', animation: 'fadeIn 0.2s ease' }}>
                <Toast
                  type="marketing"
                  subMessage="2026 S/S 신상 기획전"
                  message="장바구니에 15% 쿠폰이 적용되었습니다."
                  timer={2}
                />
              </div>
            )}

            {activeToast === 'feedback' && (
              <div style={{ marginTop: 'var(--primitive-number-6, 12px)', animation: 'fadeIn 0.2s ease' }}>
                <Toast type="feedback" message="재입고 알림 신청이 완료되었습니다." />
              </div>
            )}
          </div>
        </section>
      </div>
    );
  };

/**
 * Toast 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    type: 'marketing',
    message: '메인 문구',
    subMessage: '서브 문구',
    timer: 2,
  },
  render: (args) => <ToastOverview {...args} />,
};

