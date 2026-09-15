import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';
import type { SelectOption } from './types';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Select Atom Component
피그마 **"00. Common Design System"**의 **Select** 원자 단위 컴포넌트입니다.

- **Class Name**: \`select\`
- **Variants**:
  - **Size (2종)**:
    - \`md\` (Medium): 높이 40px (\`--primitive-number-11\`), 패딩 0 12px (\`--primitive-number-6\`), 서체 14px Regular (\`--primitive-font-size-body-small\`), 아이콘 24px (\`arrow_down_24\`)
    - \`sm\` (Small): 높이 32px (\`--primitive-number-10\`), 패딩 0 8px (\`--primitive-number-4\`), 서체 12px Regular/Medium (\`--primitive-font-size-body-xxsmall\`), 아이콘 16px (\`arrow_down_16\`)
  - **State (4종)**:
    - \`normal\` (default / Inactive): 기본 대기 상태 (플레이스홀더 회색 \`--color-select-placeholder\`)
    - \`active\`: 옵션 선택 완료 상태 (기본 텍스트 검정 \`--color-select-text\`)
    - \`disabled\`: 비활성화 상태 (서피스 \`--color-select-disabled-surface\` + 보더 \`--color-select-disabled-border\` + 텍스트 \`--color-select-disabled-text\`)
    - \`readonly\`: 읽기 전용 상태 (서피스 \`--color-select-readonly-surface\` + 보더 \`--color-select-readonly-border\` + 텍스트 \`--color-select-readonly-text\`)
  - **Box (2종)**:
    - \`true\` (default): 닫힌 셀렉트 박스 (Trigger)
    - \`false\`: 펼쳐진 드롭다운 메뉴 (Header + Option List)
  - **Option Item State (4종)**:
    - \`normal\`: 기본 옵션
    - \`disabled\`: 비활성/품절 옵션 (\`#f5f5f5\` 배경, \`#b2b2b2\` 텍스트)
    - \`button\`: 우측 액션 버튼/링크 ("재입고 알림 >")
    - \`message\`: 하단 보조 안내 문구 ("안내 메세지")
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm'],
      description: '컴포넌트 크기 (md: 40px, sm: 32px)',
      table: { defaultValue: { summary: 'md' } },
    },
    state: {
      control: 'select',
      options: ['normal', 'active', 'disabled', 'readonly'],
      description: '트리거 상태 (normal | active | disabled | readonly)',
      table: { defaultValue: { summary: 'normal' } },
    },
    box: {
      control: 'boolean',
      description: 'true: 닫힌 트리거 형태, false: 펼쳐진 드롭다운 메뉴 형태',
      table: { defaultValue: { summary: 'true' } },
    },
    placeholder: {
      control: 'text',
      description: '미선택 시 플레이스홀더 안내 문구',
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
type Story = StoryObj<typeof Select>;

// Mock options reflecting the Figma spec
const figmaSampleOptions: SelectOption[] = [
  { value: 'opt1', label: '옵션명', state: 'normal' },
  { value: 'opt2', label: '옵션명', state: 'normal' },
  { value: 'opt3', label: '옵션명', state: 'message', message: '안내 메세지' },
  { value: 'opt4', label: '옵션명', state: 'button', buttonText: '재입고 알림' },
  { value: 'opt5', label: '옵션명', state: 'disabled' },
];

/**
 * 1. Size (Medium vs Small) - 첨부 이미지 Card 1 재현
 */
export const Sizes: Story = {
  name: '1. Sizes (Medium vs Small)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Size</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
              <code style={{ background: '#f4f4f5', padding: '2px 8px', borderRadius: '4px' }}>md</code>
              <code style={{ background: '#f4f4f5', padding: '2px 8px', borderRadius: '4px' }}>sm</code>
            </div>
          </div>
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            컨텐츠 내 적당한 자율을 가진 크기로 사용합니다.
          </p>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '40px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Medium */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '220px' }}>
            <Select size="md" placeholder="선택해주세요" options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Medium (40px)
            </span>
          </div>

          {/* Small */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '140px' }}>
            <Select size="sm" placeholder="선택" options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Small (32px)
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 2. State 4종 (Normal, Active, Disabled, Readonly) - 첨부 이미지 Card 2 재현
 */
export const AllStates: Story = {
  name: '2. All States (Normal, Active, Disabled, Readonly)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '1000px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>State</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>normal default</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>active</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>disabled</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>readonly</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '40px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {/* Normal */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Select state="normal" placeholder="선택해주세요" options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Normal <span style={{ opacity: 0.65 }}>(Inactive)</span>
            </span>
          </div>

          {/* Active */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Select state="active" defaultValue="선택해주세요" options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Active
            </span>
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Select state="disabled" defaultValue="옵션 값" disabled options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Disabled
            </span>
          </div>

          {/* Readonly */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Select state="readonly" defaultValue="옵션 값" readOnly options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Readonly
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 3. Box (True vs False) - 첨부 이미지 Card 3 재현
 */
export const BoxModes: Story = {
  name: '3. Box (True vs False)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Box</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>true</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>false</span>
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
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Box = true (Closed Trigger Box) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Select box={true} size="md" placeholder="선택해주세요" options={figmaSampleOptions} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              True (닫힌 트리거 형태)
            </span>
          </div>

          {/* Box = false (Open Dropdown Menu per Figma spec) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100%', maxWidth: '280px' }}>
              <Select
                box={false}
                size="md"
                headerTitle="사이즈 선택"
                options={figmaSampleOptions}
              />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              False (펼쳐진 드롭다운 메뉴)
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 4. Option Item States (Normal, Disabled, Button, Message) - 첨부 이미지 Card 4 & Card 6 재현
 */
export const OptionStates: Story = {
  name: '4. Option States (Normal, Disabled, Button, Message)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '900px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>State (Option Items)</h2>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>normal default</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>disabled</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>button</span>
              <span style={{ background: '#e4e4e7', padding: '2px 6px', borderRadius: '4px' }}>message</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '40px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {/* Normal */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <div className="select__option select__option--normal" style={{ padding: '8px 12px' }}>
                <span>옵션명</span>
              </div>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Normal <span style={{ opacity: 0.65 }}>(Inactive)</span>
            </span>
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <div className="select__option select__option--disabled" style={{ padding: '8px 12px' }}>
                <span>옵션명</span>
              </div>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Disabled
            </span>
          </div>

          {/* Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <div className="select__option select__option--button" style={{ padding: '8px 12px' }}>
                <span>옵션명</span>
                <span className="select__option-btn">
                  <span>재입고 알림</span>
                  <span>&gt;</span>
                </span>
              </div>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Button
            </span>
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <div className="select__option select__option--message" style={{ padding: '8px 12px' }}>
                <span className="select__option-title">옵션명</span>
                <span className="select__option-desc">안내 메세지</span>
              </div>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Message
            </span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 5. Full Component Matrix (Figma Spec View) - 첨부 이미지 Card 5 보라색 점선 뷰 100% 재현
 */
export const ComponentMatrix: Story = {
  name: '5. Component Matrix (Figma Spec View)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '1000px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Component</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Component 프레임 내 상단 트리거 매트릭스 및 하단 드롭다운 매트릭스
          </p>
        </div>

        {/* Purple Dashed Spec Container 1: Trigger Matrix (Medium + Small) */}
        <div
          style={{
            border: '1.5px dashed #8b5cf6',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '32px',
            background: '#ffffff',
          }}
        >
          {/* Medium Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '16px' }}>
            <Select size="md" state="normal" placeholder="선택해주세요" options={figmaSampleOptions} />
            <Select size="md" state="active" defaultValue="선택해주세요" options={figmaSampleOptions} />
            <Select size="md" state="disabled" defaultValue="옵션 값" disabled options={figmaSampleOptions} />
            <Select size="md" state="readonly" defaultValue="옵션 값" readOnly options={figmaSampleOptions} />
          </div>

          {/* Small Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 120px)', gap: '14px' }}>
            <Select size="sm" state="normal" placeholder="선택" options={figmaSampleOptions} />
            <Select size="sm" state="active" defaultValue="선택" options={figmaSampleOptions} />
            <Select size="sm" state="disabled" defaultValue="선택" disabled options={figmaSampleOptions} />
            <Select size="sm" state="readonly" defaultValue="선택" readOnly options={figmaSampleOptions} />
          </div>
        </div>

        {/* Purple Dashed Spec Container 2: Dropdown Menu Matrix */}
        <div
          style={{
            border: '1.5px dashed #8b5cf6',
            borderRadius: '16px',
            padding: '24px',
            background: '#ffffff',
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
          }}
        >
          {/* Medium Dropdown List */}
          <div style={{ width: '280px' }}>
            <Select
              box={false}
              size="md"
              headerTitle="사이즈 선택"
              options={figmaSampleOptions}
            />
          </div>

          {/* Small Dropdown List */}
          <div style={{ width: '200px' }}>
            <Select
              box={false}
              size="sm"
              headerTitle="선택"
              options={figmaSampleOptions}
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 6. Token Mapping Table (Zero Hardcoding)
 */
export const TokenMappingTable: Story = {
  name: '6. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tableData = [
      {
        part: 'Select normal (md)',
        surface: 'var(--color-select-surface) (#ffffff)',
        border: 'var(--color-select-border) (#d9d9d9)',
        text: 'var(--color-select-placeholder) (#999999)',
        dim: '40px 높이, 0 12px 패딩, 14px Regular, 4px 곡률',
      },
      {
        part: 'Select normal (sm)',
        surface: 'var(--color-select-surface) (#ffffff)',
        border: 'var(--color-select-border) (#d9d9d9)',
        text: 'var(--color-select-placeholder) (#999999)',
        dim: '32px 높이, 0 8px 패딩, 12px Regular, 4px 곡률',
      },
      {
        part: 'Select active',
        surface: 'var(--color-select-surface) (#ffffff)',
        border: 'var(--color-select-border) (#d9d9d9)',
        text: 'var(--color-select-text) (#000000)',
        dim: '값 선택 완료 시 텍스트 검정 토큰 바인딩',
      },
      {
        part: 'Select Focus / Open',
        surface: 'var(--color-select-surface) (#ffffff)',
        border: 'var(--color-select-border-active) (#4d4d4d)',
        text: 'var(--color-select-text) (#000000)',
        dim: '1px 단일 포커스 보더 (box-shadow 제거)',
      },
      {
        part: 'Select disabled',
        surface: 'var(--color-select-disabled-surface) (#f5f5f5)',
        border: 'var(--color-select-disabled-border) (#d9d9d9)',
        text: 'var(--color-select-disabled-text) (#b2b2b2)',
        dim: '비활성 서피스 및 비활성 텍스트 바인딩',
      },
      {
        part: 'Select readonly',
        surface: 'var(--color-select-readonly-surface) (#f5f5f5)',
        border: 'var(--color-select-readonly-border) (#d9d9d9)',
        text: 'var(--color-select-readonly-text) (#000000)',
        dim: '읽기 전용 서피스 및 1px 기본 보더 유지',
      },
      {
        part: 'Option disabled',
        surface: 'var(--color-select-option-disabled-bg) (#f5f5f5)',
        border: '구분선 var(--color-border-secondary)',
        text: 'var(--color-select-disabled-text) (#b2b2b2)',
        dim: '선택 불가 옵션 (품절 등)',
      },
      {
        part: 'Option message',
        surface: 'var(--color-bg-default) (#ffffff)',
        border: '구분선 var(--color-border-secondary)',
        text: '메인: #000000, 서브: #999999',
        dim: '2줄 레이아웃 (52px/44px 높이)',
      },
      {
        part: 'Option button',
        surface: 'var(--color-bg-default) (#ffffff)',
        border: '구분선 var(--color-border-secondary)',
        text: '메인: #000000, 버튼: #666666',
        dim: '우측 액션 버튼/링크 ("재입고 알림 >")',
      },
    ];

    return (
      <div style={{ padding: '24px', maxWidth: '1000px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700 }}>
          피그마 1:1 토큰 바인딩 명세표 (Select Component)
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#f4f4f5', textAlign: 'left', borderBottom: '2px solid #d4d4d8' }}>
              <th style={{ padding: '10px 12px' }}>파트 / 상태</th>
              <th style={{ padding: '10px 12px' }}>배경 토큰 (Surface)</th>
              <th style={{ padding: '10px 12px' }}>보더 토큰 (Border)</th>
              <th style={{ padding: '10px 12px' }}>텍스트 / 아이콘 토큰</th>
              <th style={{ padding: '10px 12px' }}>치수 및 타이포그래피</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #e4e4e7', background: idx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>{row.part}</td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.surface}
                  </code>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.border}
                  </code>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <code style={{ fontSize: '11px', background: '#f1f5f9', padding: '2px 4px', borderRadius: '3px' }}>
                    {row.text}
                  </code>
                </td>
                <td style={{ padding: '10px 12px', color: '#52525b' }}>{row.dim}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/**
 * 7. Interactive Playground - 실시간 옵션 선택 및 드롭다운 조작
 */
export const InteractivePlayground: Story = {
  name: '7. Interactive Playground',
  args: {
    size: 'md',
    state: 'normal',
    box: true,
    placeholder: '사이즈를 선택하세요',
    options: [
      { value: 's', label: 'S (Small - 90)', state: 'normal' },
      { value: 'm', label: 'M (Medium - 95)', state: 'normal' },
      { value: 'l', label: 'L (Large - 100)', state: 'message', message: '마지막 1점 남음' },
      { value: 'xl', label: 'XL (X-Large - 105)', state: 'button', buttonText: '재입고 알림' },
      { value: 'xxl', label: 'XXL (XX-Large - 110)', state: 'disabled' },
    ],
  },
  render: (args) => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '400px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>상품 옵션 선택</h4>
        <Select {...args} />
      </div>
    );
  },
};
