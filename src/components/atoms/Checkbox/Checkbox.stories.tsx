import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 체크박스(Checkbox) 컴포넌트입니다. 사용자가 하나 이상의 선택지를 독립적으로 선택할 수 있습니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unchecked', 'checked'],
      description: '체크박스 선택 상태 (Type)',
      table: { defaultValue: { summary: 'unchecked' } },
    },
    checked: {
      control: 'boolean',
      description: '체크 선택 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: '체크박스 라벨 텍스트',
      defaultValue: '옵션값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * Checkbox 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    type: 'unchecked',
    checked: false,
    disabled: false,
    label: '옵션값',
  },
  render: (args) => {
    return <CheckboxStoryView {...args} />;
  },
};

// 인터랙티브 상태 및 그룹 선택 동작을 위한 뷰 컴포넌트
const CheckboxStoryView: React.FC<any> = (args) => {
  const [agreedTerms, setAgreedTerms] = useState<(string | number)[]>(['service']);

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
            Check Box
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
              check
            </code>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          단일 또는 다수의 선택지를 독립적으로 선택할 수 있는 체크 선택 컴포넌트입니다.
        </p>
      </div>

      {/* 0. 대화형 미리보기 (Interactive Playground) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
            Interactive Playground
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            하단 Controls 패널에서 Checked, Disabled, Label 문구를 직접 조작해보세요.
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
          <Checkbox {...args} />
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
              unchecked <span style={{ color: 'var(--color-text-tertiary)', fontSize: '11px' }}>default</span>
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
              checked
            </code>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            선택 여부에 따라 1px 외곽선(미선택) 또는 솔리드 블랙 채움과 화이트 체크 마크(선택)로 구분됩니다.
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
            gap: 'var(--primitive-number-12, 48px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Unchecked Group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Checkbox type="unchecked" label="옵션값" readOnly />
              <Checkbox type="unchecked" disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Checkbox type="checked" disabled label="옵션값" readOnly />
              <Checkbox type="checked" label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Checked
            </span>
          </div>
        </div>
      </section>

      {/* 2. Disabled Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Disabled</h3>
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
              false <span style={{ color: 'var(--color-text-tertiary)', fontSize: '11px' }}>default</span>
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
              true
            </code>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            비활성화 시 배경, 보더, 텍스트가 Disabled 전용 색상 토큰으로 변경됩니다.
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
            gap: 'var(--primitive-number-12, 48px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Enabled (False) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Checkbox checked={false} label="옵션값" readOnly />
              <Checkbox checked={true} label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              False
            </span>
          </div>

          {/* Disabled (True) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Checkbox checked={false} disabled label="옵션값" readOnly />
              <Checkbox checked={true} disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              True
            </span>
          </div>
        </div>
      </section>

      {/* 3. Usage Example (다중 선택 그룹) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
            Usage Example (약관 동의 및 다중 선택)
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            실제 쇼핑몰 회원가입 및 주문서 작성 시 약관 동의 항목 다중 선택 예시입니다.
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
            gap: 'var(--primitive-number-6, 12px)',
            maxWidth: '380px',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-default)' }}>
            주문 필수 및 선택 동의
          </span>
          <CheckboxGroup name="termsAgreement" value={agreedTerms} onChange={setAgreedTerms}>
            <Checkbox value="service" label="[필수] 쇼핑몰 이용약관 동의" />
            <Checkbox value="privacy" label="[필수] 개인정보 수집 및 이용 동의" />
            <Checkbox value="marketing" label="[선택] 혜택 및 마케팅 정보 수신 동의" />
            <Checkbox value="night" label="[선택] 야간 마케팅 알림 동의 (미지원)" disabled />
          </CheckboxGroup>
        </div>
      </section>
    </div>
  );
};
