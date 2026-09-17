import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 입력(Input) 필드 컴포넌트입니다. 사용자로부터 텍스트, 숫자 등의 정보를 입력받습니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'focus', 'active', 'disabled', 'readonly', 'negative'],
      description: '입력 상태 (Figma State)',
      table: { defaultValue: { summary: 'normal' } },
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 안내 문구',
      defaultValue: '내용을 입력하세요',
    },
    defaultValue: {
      control: 'text',
      description: '기본 입력 값',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 여부',
    },
    error: {
      control: 'boolean',
      description: '유효성 오류 여부 (Negative 에러 보더 적용)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Input 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    state: 'normal',
    placeholder: '내용을 입력하세요',
    disabled: false,
    readOnly: false,
    error: false,
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
              Input
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
                input
              </code>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            사용자로부터 단일 행의 텍스트, 검색어, 숫자 등의 데이터를 입력받는 기본 입력 필드 컴포넌트입니다.
          </p>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 State, Placeholder, Error, Disabled 등을 직접 조작하여 실시간 반응을 확인해보세요.
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
            <div style={{ width: '100%', maxWidth: '360px' }}>
              <Input {...args} />
            </div>
          </div>
        </section>

        {/* 1. State Section */}
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
                focus
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
                active
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
                disabled
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
                readonly
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
                negative
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              사용자의 상호작용 시 컬러가 변경됩니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--primitive-number-8, 20px)',
            }}
          >
            {/* Normal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="normal" placeholder="내용을 입력하세요" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Default (Normal)
              </span>
            </div>

            {/* Focus */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="focus" placeholder="|" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Focus (어두운 보더 #4d4d4d)
              </span>
            </div>

            {/* Active */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="active" defaultValue="내용을 입력하세요" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Active (입력 완료)
              </span>
            </div>

            {/* Disabled */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="disabled" defaultValue="내용을 입력하세요" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Disabled (비활성)
              </span>
            </div>

            {/* Readonly */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="readonly" defaultValue="내용을 입력하세요" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Readonly (읽기 전용)
              </span>
            </div>

            {/* Negative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input state="negative" defaultValue="내용을 입력하세요" />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-error)' }}>
                Negative (유효성 오류)
              </span>
            </div>
          </div>
        </section>

        {/* 2. Usage Example Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Usage Example (폼 필드 결합)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              실제 폼 작성 시 라벨(Label) 및 유효성 안내 문구와 결합하여 사용합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'flex',
              gap: 'var(--primitive-number-9, 24px)',
              flexWrap: 'wrap',
            }}
          >
            {/* 기본 헬퍼 */}
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-default)' }}>이메일 주소</span>
              <Input state="normal" placeholder="example@email.com" />
              <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                주문 확인 및 배송 안내를 받을 이메일을 입력하세요.
              </span>
            </div>

            {/* 에러 헬퍼 */}
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-default)' }}>비밀번호</span>
              <Input state="negative" defaultValue="1234" type="password" />
              <span style={{ fontSize: '12px', color: 'var(--color-text-error)' }}>
                비밀번호는 영문, 숫자 포함 8자 이상이어야 합니다.
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
