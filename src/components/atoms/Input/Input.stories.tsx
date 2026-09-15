import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';
import type { InputState } from './types';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Input Atom Component
피그마 **"00. Common Design System"**의 **Input** 원자 단위 컴포넌트입니다.

- **Class Name**: \`input\`
- **State (6종)**:
  - \`normal\` (default / Inactive): 기본 입력 대기 상태 (플레이스홀더)
  - \`focus\`: 활성 포커스 상태 (어두운 보더 \`--color-border-subtle\`)
  - \`active\`: 텍스트 입력 완료 상태
  - \`disabled\`: 비활성 상태 (비활성 서피스 배경 \`--color-bg-disabled\` + 보더 \`--color-border-disabled\` + \`--color-text-disabled\`)
  - \`readonly\`: 읽기 전용 상태 (소프트 배경 \`--color-bg-secondary\` + 기본 보더 \`--color-input-readonly-border\` + 기본 텍스트)
  - \`negative\`: 유효성 에러 상태 (에러 레드 보더 \`--color-border-negative\`)
- **타이포그래피**: 피그마 \`Body Small\` (14px Regular 400, Letter-spacing: 1 / -0.02em, Pretendard)
- **치수 토큰**: 높이 40px (\`--primitive-number-11\`), 좌우 패딩 12px (\`--primitive-number-6\`), 모서리 4px (\`--radius-small\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'focus', 'active', 'disabled', 'readonly', 'negative'],
      description: '피그마 정의 Input State 6종',
      table: { defaultValue: { summary: 'normal' } },
    },
    error: {
      control: 'boolean',
      description: '유효성 오류 여부 (true일 경우 negative 보더 적용)',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 안내 문구',
      table: { defaultValue: { summary: '내용을 입력하세요' } },
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
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * 1. Figma State 6종 가로 배열 (첨부 이미지 상단 원본 100% 재현)
 */
export const AllStatesRow: Story = {
  name: '1. All States (Figma State Matrix)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '1100px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        {/* Header section mimicking Figma frame */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Input</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
              <span>Class Name</span>
              <code style={{ background: '#f4f4f5', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono, monospace)' }}>input</code>
            </div>
          </div>
        </div>

        {/* State selector pills */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '15px', fontWeight: 700 }}>State =</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>
            normal <span style={{ opacity: 0.65, fontWeight: 400 }}>default</span>
          </span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>focus</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>active</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>disabled</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>readonly</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>negative</span>
        </div>

        {/* 6 Inputs Display Box */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '48px 24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
          }}
        >
          {/* 1. Normal (Inactive) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Input state="normal" placeholder="내용을 입력하세요" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Normal (Inactive)
            </span>
          </div>

          {/* 2. Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Input state="focus" placeholder="|" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Focus
            </span>
          </div>

          {/* 3. Active */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Input state="active" defaultValue="입력 값" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Active
            </span>
          </div>

          {/* 4. Disabled */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Input state="disabled" defaultValue="입력 값" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Disabled
            </span>
          </div>

          {/* 5. Readonly */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Input state="readonly" defaultValue="입력 값" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Readonly
            </span>
          </div>

          {/* 6. Negative */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Input state="negative" defaultValue="입력 값" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Negative
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 2. Component Horizontal Stack (첨부 이미지 하단 Component 점선 박스 원본 100% 재현)
 */
export const ComponentHorizontalStack: Story = {
  name: '2. Component Horizontal Stack (Figma Spec)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '1100px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: 700 }}>Component</h3>

        {/* White Card Surface */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '56px 24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Purple Dashed Bounding Box from Figma */}
          <div
            style={{
              border: '1.5px dashed #8a38f5',
              borderRadius: '8px',
              padding: '24px 20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '14px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Input state="normal" placeholder="내용을 입력하세요" />
            <Input state="focus" placeholder="|" />
            <Input state="active" defaultValue="내용을 입력하세요" />
            <Input state="negative" defaultValue="내용을 입력하세요" />
            <Input state="disabled" defaultValue="내용을 입력하세요" />
            <Input state="readonly" defaultValue="내용을 입력하세요" />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 3. Figma Tokens 1:1 매핑 명세표
 */
export const TokenMappingTable: Story = {
  name: '3. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tableData = [
      {
        state: 'normal (default)',
        surfaceToken: 'var(--color-input-surface)',
        surfaceValue: '#ffffff (Color/Background/Default)',
        borderToken: 'var(--color-input-border)',
        borderValue: '#d9d9d9 (Color/Border/Default)',
        textToken: 'var(--color-input-placeholder)',
        textValue: '#999999 (Color/Text/Tertiary)',
        role: '입력 전 대기 상태 (플레이스홀더)',
      },
      {
        state: 'focus',
        surfaceToken: 'var(--color-input-surface)',
        surfaceValue: '#ffffff (Color/Background/Default)',
        borderToken: 'var(--color-input-border-active)',
        borderValue: '#4d4d4d (Color/Border/Subtle)',
        textToken: 'var(--color-input-text)',
        textValue: '#000000 (Color/Text/Default)',
        role: '입력 포커스 활성화 (아웃라인 강조)',
      },
      {
        state: 'active',
        surfaceToken: 'var(--color-input-surface)',
        surfaceValue: '#ffffff (Color/Background/Default)',
        borderToken: 'var(--color-input-border)',
        borderValue: '#d9d9d9 (Color/Border/Default)',
        textToken: 'var(--color-input-text)',
        textValue: '#000000 (Color/Text/Default)',
        role: '값 입력 완료 상태',
      },
      {
        state: 'disabled',
        surfaceToken: 'var(--color-input-disabled-surface)',
        surfaceValue: '#f5f5f5 (Color/Background/Disabled)',
        borderToken: 'var(--color-input-disabled-border)',
        borderValue: '#d9d9d9 (Color/Border/Disabled)',
        textToken: 'var(--color-input-disabled-text)',
        textValue: '#b2b2b2 (Color/Text/Disabled)',
        role: '입력 및 인터랙션 비활성화',
      },
      {
        state: 'readonly',
        surfaceToken: 'var(--color-input-readonly-surface)',
        surfaceValue: '#f5f5f5 (Color/Background/Secondary)',
        borderToken: 'var(--color-input-readonly-border)',
        borderValue: '#d9d9d9 (Color/Border/Default)',
        textToken: 'var(--color-input-readonly-text)',
        textValue: '#000000 (Color/Text/Default)',
        role: '읽기 전용 상태 (복사 가능, 수정 불가)',
      },
      {
        state: 'negative',
        surfaceToken: 'var(--color-input-surface)',
        surfaceValue: '#ffffff (Color/Background/Default)',
        borderToken: 'var(--color-input-border-error)',
        borderValue: '#e51a1a (Color/Border/Negative)',
        textToken: 'var(--color-input-text)',
        textValue: '#000000 (Color/Text/Default)',
        role: '입력 유효성 에러 및 경고',
      },
    ];

    return (
      <div style={{ padding: '24px', maxWidth: '1000px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700 }}>
          피그마 1:1 토큰 바인딩 명세표
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Preview</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>State</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>배경 토큰 (Surface)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>보더 토큰 (Border)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>텍스트 토큰</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>역할</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.state} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px', width: '160px' }}>
                  <Input state={row.state.split(' ')[0] as InputState} defaultValue="입력 값" />
                </td>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>{row.state}</td>
                <td style={{ padding: '12px 16px' }}>
                  <code style={{ fontSize: '11px', background: '#f3f4f6', padding: '2px 4px', borderRadius: '4px' }}>{row.surfaceToken}</code>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{row.surfaceValue}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <code style={{ fontSize: '11px', background: '#f3f4f6', padding: '2px 4px', borderRadius: '4px' }}>{row.borderToken}</code>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{row.borderValue}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <code style={{ fontSize: '11px', background: '#f3f4f6', padding: '2px 4px', borderRadius: '4px' }}>{row.textToken}</code>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{row.textValue}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#444' }}>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/**
 * 4. Fashion E-Commerce Real World Form Examples
 */
export const FashionFormExamples: Story = {
  name: '4. Fashion E-Commerce Form Examples',
  render: () => {
    return (
      <div style={{ padding: '24px', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '32px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        {/* Checkout Delivery Address Form */}
        <div style={{ background: '#ffffff', padding: '28px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: 700 }}>
            주문서 배송지 정보 입력
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>수령인 성명</label>
              <Input state="active" defaultValue="김아뜰리에" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>휴대폰 번호</label>
              <Input state="active" defaultValue="010-1234-5678" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>배송지 주소 (기본)</label>
              <Input state="readonly" defaultValue="서울특별시 강남구 압구정로 123 아뜰리에 빌딩 4층" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>배송 요청사항</label>
              <Input state="normal" placeholder="부재 시 경비실에 맡겨주세요" />
            </div>
          </div>
        </div>

        {/* Promo Code & Error Validation */}
        <div style={{ background: '#ffffff', padding: '28px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: 700 }}>
            프로모션 쿠폰 코드 (유효성 오류 상태)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600 }}>할인 쿠폰 번호</label>
            <Input state="negative" defaultValue="ATELIER-EXPIRED-2025" />
            <span style={{ fontSize: '12px', color: 'var(--color-text-error, #e51a1a)', marginTop: '2px' }}>
              유효기간이 만료되었거나 이미 사용된 쿠폰 코드입니다.
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 5. Interactive Playground
 */
export const InteractivePlayground: Story = {
  name: '5. Interactive Playground',
  args: {
    state: 'normal',
    placeholder: '내용을 입력하세요',
    defaultValue: '',
    error: false,
    disabled: false,
    readOnly: false,
  },
};
