import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Chip, ChipGroup } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 칩(Chip) 컴포넌트입니다. 검색 필터, 다중 태그 선택, 옵션 선택 등 컴팩트한 상호작용 인터페이스를 제공합니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unchecked', 'checked'],
      description: '칩 선택 상태 (Type)',
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
    icon: {
      control: 'boolean',
      description: '아이콘 표시 여부 (기본값: alarm_12)',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: '칩 라벨 텍스트',
      defaultValue: '옵션',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

/**
 * Chip 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    type: 'unchecked',
    checked: false,
    disabled: false,
    icon: false,
    label: '옵션',
  },
  render: (args) => {
    return <ChipStoryView {...args} />;
  },
};

// 인터랙티브 상태 및 그룹 선택 동작을 위한 뷰 컴포넌트
const ChipStoryView: React.FC<any> = (args) => {
  const [selectedFilters, setSelectedFilters] = useState<(string | number)[]>(['outer', 'top']);

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
            Chip
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
              chip
            </code>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          컴팩트한 크기(32px)로 검색 필터링, 태그 토글, 세부 옵션 선택을 지원하는 칩 컴포넌트입니다.
        </p>
      </div>

      {/* 0. 대화형 미리보기 (Interactive Playground) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
            Interactive Playground
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            하단 Controls 패널에서 Checked, Disabled, Icon, Label을 직접 조작해보세요.
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
          <Chip {...args} />
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
            선택 여부에 따라 1px 서브틀 그레이 보더(미선택) 또는 솔리드 블랙 1px 보더(선택)로 전환됩니다.
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
              <Chip type="unchecked" label="옵션" />
              <Chip type="unchecked" disabled label="옵션" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Chip type="checked" label="옵션" />
              <Chip type="checked" disabled label="옵션" />
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
            비활성화 상태에서는 소프트 그레이 배경과 비활성 텍스트 컬러로 표시됩니다.
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
              <Chip checked={false} label="옵션" />
              <Chip checked={true} label="옵션" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              False
            </span>
          </div>

          {/* Disabled (True) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Chip checked={false} disabled label="옵션" />
              <Chip checked={true} disabled label="옵션" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              True
            </span>
          </div>
        </div>
      </section>

      {/* 3. Icon Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Icon</h3>
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
            알림 벨(alarm_12) 등 시각적 상징 아이콘을 포함할 수 있습니다.
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Chip icon={false} label="텍스트 전용" />
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Icon = false
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Chip icon={true} label="재입고 알림" />
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Icon = true (알림 벨)
            </span>
          </div>
        </div>
      </section>

      {/* 4. Usage Example (필터 그룹) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
            Usage Example (카테고리 필터링)
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            이커머스 상품 목록 상단에서 복수 카테고리 필터를 토글하는 실무 예시입니다.
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
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-default)' }}>
            상품 카테고리 다중 필터
          </span>
          <ChipGroup value={selectedFilters} onChange={setSelectedFilters} multiple>
            <Chip value="all" label="전체보기" />
            <Chip value="outer" label="아우터" />
            <Chip value="top" label="상의/니트" />
            <Chip value="bottom" label="팬츠/스커트" />
            <Chip value="acc" label="액세서리" />
            <Chip value="sale" label="시즌오프 (품절)" disabled />
          </ChipGroup>
        </div>
      </section>
    </div>
  );
};
