import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import type { SelectOption } from './types';
import { Icon } from '../Icon';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 선택(Select) 컴포넌트입니다. 사용자가 여러 선택지 중 하나를 선택할 수 있는 드롭다운 인터페이스를 제공합니다.`,
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
      description: '미선택 시 플레이스홀더 문구',
      defaultValue: '선택해주세요',
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

// 대화형 플레이그라운드 샘플 옵션 데이터
const sampleOptions: SelectOption[] = [
  { value: 'opt1', label: '옵션 1 (기본)', state: 'normal' },
  { value: 'opt2', label: '옵션 2 (재입고 알림)', state: 'button', buttonText: '재입고 알림' },
  { value: 'opt3', label: '옵션 3 (안내 메시지)', state: 'message', message: '당일 출고 가능' },
  { value: 'opt4', label: '옵션 4 (품절)', state: 'disabled' },
];

// 피그마 시안 1:1 드롭다운 옵션 데이터 (Box = false)
const figmaDropdownOptions: SelectOption[] = [
  { value: 'opt1', label: '옵션명', state: 'normal' },
  { value: 'opt2', label: '옵션명', state: 'normal' },
  { value: 'opt3', label: '옵션명', state: 'message', message: '안내 메세지' },
  { value: 'opt4', label: '옵션명', state: 'button', buttonText: '재입고 알림' },
  { value: 'opt5', label: '옵션명', state: 'disabled' },
];

/**
 * Select 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    size: 'md',
    state: 'normal',
    box: true,
    placeholder: '선택해주세요',
    disabled: false,
    readOnly: false,
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
              Select
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
                select
              </code>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            여러 선택지 중 하나를 선택하거나 드롭다운 목록을 펼쳐 옵션을 탐색하는 인터랙션 컴포넌트입니다.
          </p>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 Size, State, Box, Disabled 등을 직접 조작해보거나 클릭하여 드롭다운을 열어보세요.
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
              minHeight: '140px',
            }}
          >
            <div style={{ width: '100%', maxWidth: '280px' }}>
              <Select {...args} options={sampleOptions} />
            </div>
          </div>
        </section>

        {/* 1. Size Section */}
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
              컨텐츠 내 적당한 자율을 가진 크기(Medium: 40px, Small: 32px)로 사용합니다.
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
              gap: 'var(--primitive-number-11, 40px)',
              flexWrap: 'wrap',
            }}
          >
            {/* Medium */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '220px' }}>
              <Select size="md" placeholder="선택해주세요" options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Medium (40px)
              </span>
            </div>

            {/* Small */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '160px' }}>
              <Select size="sm" placeholder="선택" options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Small (32px)
              </span>
            </div>
          </div>
        </section>

        {/* 2. State Section */}
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
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              사용자의 상호작용 및 선택 상태에 따라 컬러 및 활성화 여부가 변경됩니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--primitive-number-7, 16px)',
            }}
          >
            {/* Normal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Select state="normal" placeholder="선택해주세요" options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Default (Normal)
              </span>
            </div>

            {/* Active */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Select state="active" defaultValue="옵션 1 (기본)" options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Active (선택 완료)
              </span>
            </div>

            {/* Disabled */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Select state="disabled" defaultValue="선택 불가" disabled options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Disabled (비활성)
              </span>
            </div>

            {/* Readonly */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Select state="readonly" defaultValue="고정 옵션" readOnly options={sampleOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Readonly (읽기 전용)
              </span>
            </div>
          </div>
        </section>

        {/* 3. Box & Dropdown Menu Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Box & Dropdown Menu</h3>
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
                true
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
                false
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              닫힌 트리거 형태(True)와 펼쳐진 드롭다운 메뉴 형태(False)를 지원합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-10, 32px) var(--primitive-number-9, 24px)',
              display: 'flex',
              gap: 'var(--primitive-number-11, 40px)',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Box = true (Trigger) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '240px' }}>
              <Select box={true} size="md" placeholder="선택해주세요" options={figmaDropdownOptions} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Box = true (닫힌 트리거)
              </span>
            </div>

            {/* Box = false (Dropdown Menu) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '280px' }}>
              <div style={{ width: '100%' }}>
                <Select
                  box={false}
                  size="md"
                  headerTitle="사이즈 선택"
                  options={figmaDropdownOptions}
                />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Box = false (펼쳐진 드롭다운 메뉴)
              </span>
            </div>
          </div>
        </section>

        {/* 4. Option States Section (피그마 4번째 섹션: State = normal | disabled | button | message) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>State (Option Item)</h3>
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
                button
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
                message
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              드롭다운 리스트 내 각 옵션 항목이 가질 수 있는 4가지 상태 및 레이아웃입니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-9, 24px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--primitive-number-7, 16px)',
            }}
          >
            {/* Normal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--primitive-number-5, 10px)' }}>
              <div className="select select--md" style={{ width: '100%', border: '1px solid var(--color-select-border)', borderRadius: 'var(--radius-small, 4px)', overflow: 'hidden' }}>
                <div className="select__option select__option--normal">
                  <span className="select__option-label">옵션명</span>
                </div>
              </div>
              <span style={{ fontSize: 'var(--primitive-font-size-body-xxsmall, 12px)', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Normal (inactive)
              </span>
            </div>

            {/* Disabled */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--primitive-number-5, 10px)' }}>
              <div className="select select--md" style={{ width: '100%', border: '1px solid var(--color-select-border)', borderRadius: 'var(--radius-small, 4px)', overflow: 'hidden' }}>
                <div className="select__option select__option--disabled">
                  <span className="select__option-label">옵션명</span>
                </div>
              </div>
              <span style={{ fontSize: 'var(--primitive-font-size-body-xxsmall, 12px)', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Disabled
              </span>
            </div>

            {/* Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--primitive-number-5, 10px)' }}>
              <div className="select select--md" style={{ width: '100%', border: '1px solid var(--color-select-border)', borderRadius: 'var(--radius-small, 4px)', overflow: 'hidden' }}>
                <div className="select__option select__option--button">
                  <span className="select__option-label">옵션명</span>
                  <button type="button" className="select__option-btn">
                    <span>재입고 알림</span>
                    <Icon name="arrow_right_12" />
                  </button>
                </div>
              </div>
              <span style={{ fontSize: 'var(--primitive-font-size-body-xxsmall, 12px)', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Button
              </span>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--primitive-number-5, 10px)' }}>
              <div className="select select--md" style={{ width: '100%', border: '1px solid var(--color-select-border)', borderRadius: 'var(--radius-small, 4px)', overflow: 'hidden' }}>
                <div className="select__option select__option--message">
                  <div className="select__option-title">옵션명</div>
                  <div className="select__option-desc">안내 메세지</div>
                </div>
              </div>
              <span style={{ fontSize: 'var(--primitive-font-size-body-xxsmall, 12px)', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                Message
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
