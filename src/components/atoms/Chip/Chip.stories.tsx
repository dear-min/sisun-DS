import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Chip, ChipGroup } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Chip Atom Component
피그마 **"00. Common Design System"**의 **Chip** 원자 단위 컴포넌트입니다.

- **Class Name**: \`chip\`
- **Variants**:
  - **Type (2종)**:
    - \`unchecked\` (default): 미선택 상태 (1px 외곽선 \`--color-chip-border\` + 화이트 서피스 \`--color-chip-bg\`)
    - \`checked\`: 선택 상태 (솔리드 블랙 1px 외곽선 \`--color-chip-border-checked\` + 화이트 서피스 \`--color-chip-bg-checked\`)
  - **Disabled (2종)**:
    - \`false\` (default): 활성 상태 (\`cursor: pointer\`, 기본 텍스트 \`--color-chip-text\`)
    - \`true\`: 비활성 상태 (비활성 서피스 \`--color-chip-bg-disabled\` + 비활성 텍스트 \`--color-chip-text-disabled\`, \`cursor: not-allowed\`)
  - **Icon (2종)**:
    - \`false\` (default): 텍스트 전용 칩
    - \`true\`: 알림 벨 아이콘(\`alarm_12\`) 또는 커스텀 아이콘 포함 칩
- **치수 및 규격**:
  - 높이: 32px (\`--primitive-number-10\`)
  - 좌우 패딩: 16px (\`--primitive-number-7\`)
  - 모서리 곡률: 2px (\`--radius-xsmall\`)
  - 외곽선: 1px solid
  - 아이콘-라벨 간격: 4px (\`--primitive-number-2\`)
  - 타이포그래피: 14px Regular (\`--primitive-font-size-body-small\`), 행간 1.4, 자간 -0.02em
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
      table: { defaultValue: { summary: '옵션' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

/**
 * 1. Type (Unchecked vs Checked) - 피그마 시안 Card 1 100% 재현
 */
export const TypeVariants: Story = {
  name: '1. Type (Unchecked vs Checked)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Type</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>
                unchecked <span style={{ color: '#71717a', fontSize: '11px' }}>default</span>
              </span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>checked</span>
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
              <Chip checked={false} label="옵션" />
              <Chip checked={false} disabled label="옵션" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Chip checked={true} label="옵션" />
              <Chip checked={true} disabled label="옵션" />
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
 * 2. Disabled (False vs True) - 피그마 시안 Card 2 100% 재현
 */
export const DisabledVariants: Story = {
  name: '2. Disabled (False vs True)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Disabled</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>
                false <span style={{ color: '#71717a', fontSize: '11px' }}>default</span>
              </span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>true</span>
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
          {/* False Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Chip checked={false} label="옵션" />
              <Chip checked={true} label="옵션" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              False
            </span>
          </div>

          {/* True Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Chip checked={false} disabled label="옵션" />
              <Chip checked={true} disabled label="옵션" />
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
 * 3. Icon (False vs True) - 피그마 시안 Card 3 100% 재현
 */
export const IconVariants: Story = {
  name: '3. Icon (False vs True)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '800px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Icon</h2>
              <span style={{ fontSize: '13px', color: '#666666' }}>=</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>
                false <span style={{ color: '#71717a', fontSize: '11px' }}>default</span>
              </span>
              <span style={{ background: '#e4e4e7', padding: '2px 8px', borderRadius: '4px', fontWeight: 500 }}>true</span>
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
          {/* False Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Chip icon={false} label="옵션" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              False
            </span>
          </div>

          {/* True Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Chip icon={true} label="옵션" />
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
 * 4. Component Matrix (Figma Spec View) - 피그마 시안 Card 4 보라색 점선 뷰 100% 재현
 */
export const ComponentMatrix: Story = {
  name: '4. Component Matrix (Figma Spec View)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '640px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Component</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Component 프레임 내 가로 4종 칩 매트릭스
          </p>
        </div>

        <div
          style={{
            border: '1.5px dashed #8b5cf6',
            borderRadius: '16px',
            padding: '24px 32px',
            background: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Chip 1: Unchecked Normal */}
          <Chip checked={false} label="옵션" />
          {/* Chip 2: Checked Normal */}
          <Chip checked={true} label="옵션" />
          {/* Chip 3: Checked Disabled */}
          <Chip checked={true} disabled label="옵션" />
          {/* Chip 4: Unchecked Disabled */}
          <Chip checked={false} disabled label="옵션" />
        </div>
      </div>
    );
  },
};

/**
 * 5. Interactive Chip Group (패션 이커머스 실무 필터 쇼케이스)
 */
export const InteractiveChipGroup: Story = {
  name: '5. Interactive Chip Group (E-Commerce)',
  render: () => {
    const [selectedSizes, setSelectedSizes] = useState<(string | number)[]>(['S', 'M']);
    const [selectedCategory, setSelectedCategory] = useState<string | number>('all');
    const [alarmEnabled, setAlarmEnabled] = useState(false);

    return (
      <div style={{ padding: '32px 24px', maxWidth: '760px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Interactive Chip Group
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          Atelier 패션 이커머스 다중/단일 선택 필터 및 알림 토글 칩 쇼케이스
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Section 1: Single-Select Category */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              카테고리 필터 (단일 선택 / Single Select)
            </h3>
            <ChipGroup
              multiple={false}
              value={selectedCategory}
              onChange={setSelectedCategory}
            >
              <Chip value="all" label="전체보기" />
              <Chip value="outer" label="아우터 (Outer)" />
              <Chip value="top" label="상의 (Top)" />
              <Chip value="bottom" label="하의 (Bottom)" />
              <Chip value="shoes" label="신발 (Shoes)" />
              <Chip value="accessory" disabled label="액세서리 (준비중)" />
            </ChipGroup>
            <div style={{ marginTop: '16px', fontSize: '13px', color: '#4b5563' }}>
              <strong>선택된 카테고리:</strong> {selectedCategory}
            </div>
          </div>

          {/* Section 2: Multi-Select Sizes */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              사이즈 필터 (다중 선택 / Multi Select)
            </h3>
            <ChipGroup
              multiple={true}
              value={selectedSizes}
              onChange={setSelectedSizes}
            >
              <Chip value="XS" label="XS (85)" />
              <Chip value="S" label="S (90)" />
              <Chip value="M" label="M (95)" />
              <Chip value="L" label="L (100)" />
              <Chip value="XL" label="XL (105)" />
              <Chip value="XXL" disabled label="XXL (품절)" />
            </ChipGroup>
            <div style={{ marginTop: '16px', fontSize: '13px', color: '#4b5563' }}>
              <strong>선택된 사이즈 ({selectedSizes.length}개):</strong> {selectedSizes.join(', ')}
            </div>
          </div>

          {/* Section 3: Icon Toggle Chip */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              재입고 알림 신청 (Icon Toggle Chip)
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Chip
                icon={true}
                checked={alarmEnabled}
                onToggle={setAlarmEnabled}
                label={alarmEnabled ? '재입고 알림 신청됨' : '재입고 알림 받기'}
              />
              <span style={{ fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
                {alarmEnabled ? '🔔 알림이 신청되었습니다.' : '알림 버튼을 클릭하여 설정하세요.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 6. Token Mapping Table - 제로 하드코딩 토큰 1:1 바인딩 대조표
 */
export const TokenMappingTable: Story = {
  name: '6. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tokens = [
      {
        part: 'Height',
        prop: 'Component Height',
        figma: '32px',
        token: 'var(--primitive-number-10)',
        desc: '표준 32px 칩 높이',
      },
      {
        part: 'Radius',
        prop: 'Border Radius',
        figma: '2px',
        token: 'var(--radius-xsmall)',
        desc: '모서리 2px 마이크로 곡률',
      },
      {
        part: 'Padding',
        prop: 'Horizontal Padding',
        figma: '16px (좌/우)',
        token: 'var(--primitive-number-7)',
        desc: '라벨 텍스트 좌우 16px 내부 패딩',
      },
      {
        part: 'Gap',
        prop: 'Icon-to-Label Gap',
        figma: '4px',
        token: 'var(--primitive-number-2)',
        desc: '아이콘과 텍스트 사이 거리',
      },
      {
        part: 'Typography',
        prop: 'Label Text',
        figma: 'Pretendard 14px Regular',
        token: 'var(--primitive-font-size-body-small)',
        desc: '행간 1.4, 자간 -0.02em',
      },
      {
        part: 'Unchecked Normal',
        prop: 'Border / Surface',
        figma: '#d9d9d9 / #ffffff',
        token: 'var(--color-chip-border) / var(--color-chip-bg)',
        desc: '기본 화이트 배경 + 1px 그레이 보더',
      },
      {
        part: 'Checked Normal',
        prop: 'Border / Surface',
        figma: '#000000 / #ffffff',
        token: 'var(--color-chip-border-checked) / var(--color-chip-bg-checked)',
        desc: '화이트 배경 + 1px 솔리드 블랙 보더',
      },
      {
        part: 'Unchecked Disabled',
        prop: 'Border / Surface / Text',
        figma: '#d9d9d9 / #f5f5f5 / #b2b2b2',
        token: 'var(--color-chip-border-disabled) / var(--color-chip-bg-disabled) / var(--color-chip-text-disabled)',
        desc: '비활성 소프트 그레이 배경 + 비활성 보더/텍스트',
      },
      {
        part: 'Checked Disabled',
        prop: 'Border / Surface / Text',
        figma: '#b2b2b2 / #f5f5f5 / #b2b2b2',
        token: 'var(--color-chip-border-checked-disabled) / var(--color-chip-bg-disabled) / var(--color-chip-text-disabled)',
        desc: '비활성 소프트 그레이 배경 + 다크 그레이 보더/텍스트',
      },
      {
        part: 'Icon',
        prop: 'Alarm Bell Asset',
        figma: '12px x 12px',
        token: 'var(--primitive-number-6), <Icon name="alarm_12" />',
        desc: '피그마 공식 alarm_12 에셋 1:1 연동',
      },
    ];

    return (
      <div style={{ padding: '32px 24px', maxWidth: '960px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Chip Design Token 1:1 Mapping Table
        </h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          피그마 '00. Common Design System'의 Chip 시각 요소를 프로젝트 공식 CSS 변수로 1:1 엄격 매핑한 결과입니다.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>구분 (Part)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>속성 (Property)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>피그마 추출값</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>적용 CSS 변수 토큰</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>비고 및 설명</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((t, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>{t.part}</td>
                <td style={{ padding: '12px 16px', color: '#4b5563' }}>{t.prop}</td>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#111827' }}>{t.figma}</td>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#4f46e5', fontWeight: 500 }}>
                  {t.token}
                </td>
                <td style={{ padding: '12px 16px', color: '#6b7280' }}>{t.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
