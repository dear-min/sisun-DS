import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 라디오(Radio) 컴포넌트입니다. 상호 배타적인 다수의 선택지 중 단 하나를 선택할 때 사용합니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unchecked', 'checked'],
      description: '라디오 선택 상태 (Type)',
      table: { defaultValue: { summary: 'unchecked' } },
    },
    checked: {
      control: 'boolean',
      description: '선택 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: '라디오 라벨 텍스트',
      defaultValue: '옵션값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/**
 * Radio 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
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
    return <RadioStoryView {...args} />;
  },
};

// 인터랙티브 상태 및 그룹 선택 동작을 위한 뷰 컴포넌트
const RadioStoryView: React.FC<any> = (args) => {
  const [selectedMethod, setSelectedMethod] = useState<string | number>('standard');

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
            Radio
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
              radio
            </code>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          다수의 선택 항목 중 하나의 항목만을 배타적으로 선택할 때 사용하는 선택 컴포넌트입니다.
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
          <Radio {...args} />
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
            선택 여부에 따라 외곽선(미선택) 또는 5px 볼드 블랙 링(선택) 형태로 시각적 상태가 구분됩니다.
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
              <Radio type="unchecked" label="옵션값" readOnly />
              <Radio type="unchecked" disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Radio type="checked" disabled label="옵션값" readOnly />
              <Radio type="checked" label="옵션값" readOnly />
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
            비활성화 시 테두리, 배경, 텍스트가 비활성 토큰으로 변경됩니다.
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
              <Radio checked={false} label="옵션값" readOnly />
              <Radio checked={true} label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              False
            </span>
          </div>

          {/* Disabled (True) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Radio checked={false} disabled label="옵션값" readOnly />
              <Radio checked={true} disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              True
            </span>
          </div>
        </div>
      </section>

      {/* 3. Usage Example (RadioGroup 결합) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
            Usage Example (라디오 그룹 선택)
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            실제 이커머스 체크아웃 화면에서 RadioGroup을 결합하여 단일 항목을 선택하는 예시입니다.
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
            배송 방법 선택
          </span>
          <RadioGroup name="deliveryMethod" value={selectedMethod} onChange={setSelectedMethod}>
            <Radio value="standard" label="일반 택배 배송 (무료)" />
            <Radio value="express" label="당일 특급 배송 (+3,000원)" />
            <Radio value="pickup" label="오프라인 매장 직접 수령" />
            <Radio value="overseas" label="해외 특송 배송 (품절)" disabled />
          </RadioGroup>
        </div>
      </section>
    </div>
  );
};
