import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Radio Atom Component
피그마 **"00. Common Design System"**의 **Radio** 원자 단위 컴포넌트입니다.

- **Class Name**: \`radio\`
- **Variants**:
  - **Type (2종)**:
    - \`unchecked\` (default): 미선택 상태 (1px 그레이 외곽선 \`--color-radio-border\` + 화이트 서피스)
    - \`checked\`: 선택 상태 (볼드 5px 블랙 링 \`--color-radio-border-checked\` + 화이트 센터)
  - **Disabled (2종)**:
    - \`false\` (default): 활성 상태 (\`cursor: pointer\`, 기본 텍스트 검정 \`--color-radio-text\`)
    - \`true\`: 비활성 상태 (비활성 서피스 \`--color-radio-bg-disabled\` + 텍스트 \`--color-radio-text-disabled\`, \`cursor: not-allowed\`)
- **치수 및 규격**:
  - 컨트롤 직경: 16px (\`--primitive-number-7\`)
  - 컨트롤 곡률: 50% / 원형 (\`--primitive-radius-circle\`, 999px)
  - 간격: 컨트롤과 라벨 텍스트 사이 8px (\`--primitive-number-4\`)
  - 타이포그래피: 14px Regular (\`--primitive-font-size-body-small\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unchecked', 'checked'],
      description: '피그마 정의 Type 속성',
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
      description: '라디오 라벨 텍스트',
      table: { defaultValue: { summary: '옵션값' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/**
 * 1. Type (Unchecked vs Checked) - 첨부 이미지 Card 1 재현
 */
export const TypeVariants: Story = {
  name: '1. Type (Unchecked vs Checked)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Type</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>unchecked default</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>checked</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '40px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            justifyItems: 'center',
          }}
        >
          {/* Unchecked Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Radio type="unchecked" label="옵션값" readOnly />
              <Radio type="unchecked" disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Radio type="checked" disabled label="옵션값" readOnly />
              <Radio type="checked" label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Checked
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 2. Disabled (False vs True) - 첨부 이미지 Card 2 재현
 */
export const DisabledVariants: Story = {
  name: '2. Disabled (False vs True)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Disabled</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>false default</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>true</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '40px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            justifyItems: 'center',
          }}
        >
          {/* False (Enabled) Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Radio checked={false} label="옵션값" readOnly />
              <Radio checked={true} label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              False
            </span>
          </div>

          {/* True (Disabled) Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Radio checked={false} disabled label="옵션값" readOnly />
              <Radio checked={true} disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              True
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 3. Component Matrix (Figma Spec View) - 첨부 이미지 Card 3 보라색 점선 뷰 100% 재현
 */
export const ComponentMatrix: Story = {
  name: '3. Component Matrix (Figma Spec View)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '600px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Component</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Component 프레임 내 4종 세로 스택 매트릭스
          </p>
        </div>

        <div
          style={{
            border: '1.5px dashed #8b5cf6',
            borderRadius: '16px',
            padding: '32px',
            background: '#ffffff',
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '200px',
          }}
        >
          {/* Row 1: Unchecked Normal */}
          <Radio checked={false} label="옵션값" readOnly />
          {/* Row 2: Unchecked Disabled */}
          <Radio checked={false} disabled label="옵션값" readOnly />
          {/* Row 3: Checked Normal */}
          <Radio checked={true} label="옵션값" readOnly />
          {/* Row 4: Checked Disabled */}
          <Radio checked={true} disabled label="옵션값" readOnly />
        </div>
      </div>
    );
  },
};

/**
 * 4. Resource (Radio Controls Only) - 첨부 이미지 Card 4 2x2 라디오 원형 뷰 100% 재현
 */
export const Resource: Story = {
  name: '4. Resource (Radio Controls Only)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '600px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Resource</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Resource 프레임 내 2x2 라디오 원형 컨트롤 에셋
          </p>
        </div>

        <div
          style={{
            border: '1.5px dashed #8b5cf6',
            borderRadius: '16px',
            padding: '32px',
            background: '#ffffff',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(2, 24px)',
            gap: '16px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {/* Top-Left: Checked Normal */}
          <Radio checked={true} readOnly />
          {/* Top-Right: Unchecked Normal */}
          <Radio checked={false} readOnly />
          {/* Bottom-Left: Checked Disabled */}
          <Radio checked={true} disabled readOnly />
          {/* Bottom-Right: Unchecked Disabled */}
          <Radio checked={false} disabled readOnly />
        </div>
      </div>
    );
  },
};

/**
 * 5. Token Mapping Table (Zero Hardcoding)
 */
export const TokenMappingTable: Story = {
  name: '5. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tableData = [
      {
        state: 'Unchecked Normal',
        border: 'var(--color-radio-border) (#d9d9d9, 1px)',
        bg: 'var(--color-radio-bg) (#ffffff)',
        text: 'var(--color-radio-text) (#000000)',
        spec: '16px 원형, 8px 간격, 14px Regular',
      },
      {
        state: 'Unchecked Disabled',
        border: 'var(--color-radio-border-disabled) (#d9d9d9, 1px)',
        bg: 'var(--color-radio-bg-disabled) (#f5f5f5)',
        text: 'var(--color-radio-text-disabled) (#b2b2b2)',
        spec: '비활성 서피스 배경, 커서 not-allowed',
      },
      {
        state: 'Checked Normal',
        border: 'var(--color-radio-border-checked) (#000000, 5px 볼드 링)',
        bg: 'var(--color-radio-bg) (#ffffff 화이트 센터)',
        text: 'var(--color-radio-text) (#000000)',
        spec: '5px 볼드 링 + 화이트 센터 도넛 구조',
      },
      {
        state: 'Checked Disabled',
        border: 'var(--color-radio-border-checked-disabled) (#b2b2b2, 5px 볼드 링)',
        bg: 'var(--color-radio-bg-disabled) (#f5f5f5 비활성 센터)',
        text: 'var(--color-radio-text-disabled) (#b2b2b2)',
        spec: '비활성 볼드 그레이 링 + 비활성 서피스 센터',
      },
    ];

    return (
      <div style={{ padding: '24px', maxWidth: '900px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700 }}>
          피그마 1:1 토큰 바인딩 명세표 (Radio Component)
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#f4f4f5', textAlign: 'left', borderBottom: '2px solid #d4d4d8' }}>
              <th style={{ padding: '10px 12px' }}>상태 (State)</th>
              <th style={{ padding: '10px 12px' }}>외곽선/링 토큰 (Border)</th>
              <th style={{ padding: '10px 12px' }}>배경/센터 토큰 (Fill)</th>
              <th style={{ padding: '10px 12px' }}>텍스트 토큰 (Text)</th>
              <th style={{ padding: '10px 12px' }}>치수 및 레이아웃</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #e4e4e7', background: idx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>{row.state}</td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.border}
                  </code>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.bg}
                  </code>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.text}
                  </code>
                </td>
                <td style={{ padding: '10px 12px', color: '#52525b' }}>{row.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/**
 * 6. Interactive Radio Group - 실무 패션 이커머스 배송/결제 옵션 선택 쇼케이스
 */
export const InteractiveRadioGroup: Story = {
  name: '6. Interactive Radio Group',
  render: () => {
    const [delivery, setDelivery] = useState<string | number>('standard');
    const [payment, setPayment] = useState<string | number>('card');

    return (
      <div style={{ padding: '32px 24px', maxWidth: '500px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        {/* Delivery Options Group */}
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', fontWeight: 700 }}>배송 방법 선택</h4>
          <RadioGroup name="delivery" value={delivery} onChange={setDelivery}>
            <Radio value="standard" label="일반 택배 배송 (무료)" />
            <Radio value="express" label="당일 특급 배송 (+3,000원)" />
            <Radio value="pickup" label="오프라인 매장 픽업" />
            <Radio value="overseas" label="해외 특송 배송 (현재 불가)" disabled />
          </RadioGroup>
          <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--color-text-secondary, #666666)' }}>
            선택된 배송: <strong>{String(delivery)}</strong>
          </div>
        </div>

        {/* Payment Options Group (Horizontal) */}
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', fontWeight: 700 }}>결제 수단 선택 (가로 배열)</h4>
          <RadioGroup name="payment" direction="horizontal" value={payment} onChange={setPayment}>
            <Radio value="card" label="신용카드" />
            <Radio value="naver" label="네이버페이" />
            <Radio value="kakao" label="카카오페이" />
            <Radio value="bank" label="무통장 입금" disabled />
          </RadioGroup>
          <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--color-text-secondary, #666666)' }}>
            선택된 결제: <strong>{String(payment)}</strong>
          </div>
        </div>
      </div>
    );
  },
};
