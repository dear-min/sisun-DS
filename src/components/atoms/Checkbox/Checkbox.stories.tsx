import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Checkbox Atom Component
피그마 **"00. Common Design System"**의 **Check Box** 원자 단위 컴포넌트입니다.

- **Class Name**: \`check\` (개발자 편의 및 호환성을 위한 \`checkbox\` 별칭 동시 지원)
- **Variants**:
  - **Type (2종)**:
    - \`unchecked\` (default): 미선택 상태 (1px 외곽선 \`--color-checkbox-border\` + 화이트 서피스 \`--color-checkbox-bg\`)
    - \`checked\`: 선택 상태 (솔리드 블랙 서피스 \`--color-checkbox-bg-checked\` + 화이트 SVG 체크 마크 \`--color-checkbox-icon-checked\`)
  - **Disabled (2종)**:
    - \`false\` (default): 활성 상태 (\`cursor: pointer\`, 기본 텍스트 \`--color-checkbox-text\`)
    - \`true\`: 비활성 상태 (비활성 서피스 \`--color-checkbox-bg-disabled\` 또는 솔리드 그레이 \`--color-checkbox-bg-checked-disabled\`, \`cursor: not-allowed\`)
- **치수 및 규격**:
  - 박스 크기: 16px x 16px (\`--primitive-number-7\`)
  - 박스 곡률: 2px (\`--radius-xsmall\`)
  - 외곽선: 1px solid
  - 간격: 박스와 라벨 텍스트 사이 8px (\`--primitive-number-4\`)
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
      table: { defaultValue: { summary: '옵션값' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
              <Checkbox checked={false} label="옵션값" readOnly />
              <Checkbox checked={false} disabled label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              Unchecked
            </span>
          </div>

          {/* Checked Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Checkbox checked={true} disabled label="옵션값" readOnly />
              <Checkbox checked={true} label="옵션값" readOnly />
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
              <Checkbox checked={false} label="옵션값" readOnly />
              <Checkbox checked={true} label="옵션값" readOnly />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
              False
            </span>
          </div>

          {/* True Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Checkbox checked={false} disabled label="옵션값" readOnly />
              <Checkbox checked={true} disabled label="옵션값" readOnly />
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
 * 3. Component Matrix (Figma Spec View) - 피그마 시안 Card 3 보라색 점선 뷰 100% 재현
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
          <Checkbox checked={false} label="옵션값" readOnly />
          {/* Row 2: Unchecked Disabled */}
          <Checkbox checked={false} disabled label="옵션값" readOnly />
          {/* Row 3: Checked Normal */}
          <Checkbox checked={true} label="옵션값" readOnly />
          {/* Row 4: Checked Disabled */}
          <Checkbox checked={true} disabled label="옵션값" readOnly />
        </div>
      </div>
    );
  },
};

/**
 * 4. Resource (Checkbox Controls Only) - 피그마 시안 Card 4 2x2 단독 박스 뷰 100% 재현
 */
export const Resource: Story = {
  name: '4. Resource (Checkbox Controls Only)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '600px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Resource</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary, #666666)' }}>
            피그마 Resource 프레임 내 2x2 단독 체크박스 컨트롤 에셋
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
          <Checkbox checked={true} readOnly />
          {/* Top-Right: Unchecked Normal */}
          <Checkbox checked={false} readOnly />
          {/* Bottom-Left: Checked Disabled */}
          <Checkbox checked={true} disabled readOnly />
          {/* Bottom-Right: Unchecked Disabled */}
          <Checkbox checked={false} disabled readOnly />
        </div>
      </div>
    );
  },
};

/**
 * 5. Interactive Checkbox Group (패션 이커머스 실무 쇼케이스)
 */
export const InteractiveCheckboxGroup: Story = {
  name: '5. Interactive Checkbox Group (E-Commerce)',
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState<(string | number)[]>([
      'new',
      'sale',
    ]);
    const [termsAll, setTermsAll] = useState(false);
    const [termItems, setTermItems] = useState<(string | number)[]>([]);

    const handleTermsAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setTermsAll(checked);
      setTermItems(checked ? ['service', 'privacy', 'marketing'] : []);
    };

    const handleTermItemChange = (values: (string | number)[]) => {
      setTermItems(values);
      setTermsAll(values.length === 3);
    };

    const isIndeterminate = termItems.length > 0 && termItems.length < 3;

    return (
      <div style={{ padding: '32px 24px', maxWidth: '720px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Interactive Checkbox Group
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          Atelier 패션 이커머스 상품 필터 및 약관 동의 실무 패턴 구현
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Example 1: Product Filters */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              상품 필터 선택 (가로 배열 / Horizontal)
            </h3>
            <CheckboxGroup
              direction="horizontal"
              value={selectedFilters}
              onChange={setSelectedFilters}
            >
              <Checkbox value="new" label="신상품 (NEW)" />
              <Checkbox value="sale" label="시즌 세일 (SALE)" />
              <Checkbox value="exclusive" label="단독 특가 (EXCLUSIVE)" />
              <Checkbox value="soldout" disabled label="품절 포함 (SOLD OUT)" />
            </CheckboxGroup>

            <div style={{ marginTop: '20px', padding: '12px 16px', background: 'var(--color-bg-secondary, #f5f5f5)', borderRadius: '8px', fontSize: '13px' }}>
              <strong>선택된 필터:</strong> {selectedFilters.length > 0 ? selectedFilters.join(', ') : '선택 없음'}
            </div>
          </div>

          {/* Example 2: Terms Agreement (Indeterminate State) */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
              주문/결제 약관 동의 (Indeterminate 전체 동의 패턴)
            </h3>

            <div style={{ paddingBottom: '16px', borderBottom: '1px solid #e5e7eb', marginBottom: '16px' }}>
              <Checkbox
                checked={termsAll}
                indeterminate={isIndeterminate}
                onChange={handleTermsAllChange}
                label={<strong>전체 약관에 동의합니다</strong>}
              />
            </div>

            <CheckboxGroup
              direction="vertical"
              value={termItems}
              onChange={handleTermItemChange}
            >
              <Checkbox value="service" label="[필수] Atelier 서비스 이용약관 동의" />
              <Checkbox value="privacy" label="[필수] 개인정보 수집 및 제3자 제공 동의" />
              <Checkbox value="marketing" label="[선택] 신상품 할인 혜택 SMS/알림톡 수신 동의" />
            </CheckboxGroup>
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
        part: 'Box Dimensions',
        prop: 'Width & Height',
        figma: '16px x 16px',
        token: 'var(--primitive-number-7)',
        desc: '16px 정방형 박스 컨트롤',
      },
      {
        part: 'Box Radius',
        prop: 'Border Radius',
        figma: '2px',
        token: 'var(--radius-xsmall)',
        desc: '모서리 2px 마이크로 곡률',
      },
      {
        part: 'Gap',
        prop: 'Box-to-Label',
        figma: '8px',
        token: 'var(--primitive-number-4)',
        desc: '박스와 텍스트 사이 거리',
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
        token: 'var(--color-checkbox-border) / var(--color-checkbox-bg)',
        desc: '기본 화이트 배경 + 1px 그레이 보더',
      },
      {
        part: 'Checked Normal',
        prop: 'Border / Surface / Icon',
        figma: '#000000 / #000000 / #ffffff',
        token: 'var(--color-checkbox-border-checked) / var(--color-checkbox-bg-checked) / var(--color-checkbox-icon-checked)',
        desc: '솔리드 블랙 배경 + 화이트 SVG 체크 아이콘',
      },
      {
        part: 'Unchecked Disabled',
        prop: 'Border / Surface / Text',
        figma: '#d9d9d9 / #f5f5f5 / #b2b2b2',
        token: 'var(--color-checkbox-border-disabled) / var(--color-checkbox-bg-disabled) / var(--color-checkbox-text-disabled)',
        desc: '비활성 소프트 그레이 배경 + 흐린 텍스트',
      },
      {
        part: 'Checked Disabled',
        prop: 'Border / Surface / Icon',
        figma: '#b2b2b2 / #b2b2b2 / #ffffff',
        token: 'var(--color-checkbox-border-checked-disabled) / var(--color-checkbox-bg-checked-disabled) / var(--color-checkbox-icon-checked)',
        desc: '비활성 솔리드 그레이 채움 + 화이트 SVG 체크 아이콘',
      },
    ];

    return (
      <div style={{ padding: '32px 24px', maxWidth: '960px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 700 }}>
          Checkbox Design Token 1:1 Mapping Table
        </h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'var(--color-text-secondary, #666666)' }}>
          피그마 '00. Common Design System'의 Check Box 시각 요소를 프로젝트 공식 CSS 변수로 1:1 엄격 매핑한 결과입니다.
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
