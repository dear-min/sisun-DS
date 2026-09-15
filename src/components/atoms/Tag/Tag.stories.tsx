import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag } from './Tag';
import type { TagType } from './types';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Atelier Fashion Design System - Tag Atom Component
피그마 **"00. Common Design System"**의 **Tag** 원자 단위 컴포넌트입니다.

- **Class Name**: \`tag\`
- **Type (5종)**:
  - \`normal\` (default): 뉴트럴 그레이 배경 (\`--color-bg-secondary\`) + 보조 텍스트 (\`--color-text-secondary\`)
  - \`point\`: 브랜드 소프트 오렌지 틴트 배경 (\`--primitive-color-orange-96\`) + 포인트 오렌지 텍스트 (\`--color-text-point-primary\`)
  - \`inverse\`: 디폴트 화이트 배경 (\`--color-bg-default\`) + 서브틀 다크 그레이 텍스트 (\`--color-text-subtle\`)
  - \`positive\`: 소프트 성공 블루 틴트 배경 (\`--primitive-color-blue-95\`) + 포지티브 블루 텍스트 (\`--color-text-success\`)
  - \`negative\`: 소프트 에러 레드 틴트 배경 (\`--primitive-color-red-95\`) + 네거티브 레드 텍스트 (\`--color-text-error\`)
- **타이포그래피**: 피그마 \`Caption Small\` (12px Medium 500, Letter-spacing: 1 / -0.02em, Pretendard)
- **치수 토큰**: 높이 22px, 좌우 여백 8px (\`--primitive-number-4\`), 모서리 2px (\`--radius-xsmall\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['normal', 'point', 'inverse', 'positive', 'negative'],
      description: '피그마 정의 Tag Type 5종',
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    children: {
      control: 'text',
      description: '태그 라벨 문구',
      table: {
        defaultValue: { summary: '라벨명' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * 1. Figma Specs: Type 5종 가로 배열 (첨부 이미지 상단 원본 100% 재현)
 */
export const AllTypesRow: Story = {
  name: '1. All Types (Figma Type Matrix)',
  render: () => {
    const types: { id: TagType; name: string; isDefault?: boolean }[] = [
      { id: 'normal', name: 'Normal', isDefault: true },
      { id: 'point', name: 'Point' },
      { id: 'inverse', name: 'Inverse' },
      { id: 'positive', name: 'Positive' },
      { id: 'negative', name: 'Negative' },
    ];

    return (
      <div style={{ padding: '32px 24px', maxWidth: '860px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        {/* Header section mimicking Figma frame */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid #000000', paddingBottom: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Tag</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
              <span>Class Name</span>
              <code style={{ background: '#f4f4f5', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono, monospace)' }}>tag</code>
            </div>
          </div>
        </div>

        {/* Type selector header */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '15px', fontWeight: 700 }}>Type =</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>
            normal <span style={{ opacity: 0.65, fontWeight: 400 }}>default</span>
          </span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>point</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>inverse</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>positive</span>
          <span style={{ background: '#e4e4e7', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace', fontWeight: 600 }}>negative</span>
        </div>

        {/* 5 Columns Display Box */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '48px 24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          {types.map((t) => (
            <div key={t.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Tag type={t.id}>라벨명</Tag>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary, #666666)' }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * 2. Component Vertical Stack (첨부 이미지 하단 Component 점선 박스 원본 100% 재현)
 */
export const ComponentVerticalStack: Story = {
  name: '2. Component Vertical Stack (Figma Spec)',
  render: () => {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '720px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: 700 }}>Component</h3>

        {/* White Card Surface */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '56px 24px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Purple Dashed Bounding Box from Figma */}
          <div
            style={{
              border: '1.5px dashed #8a38f5',
              borderRadius: '8px',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              minWidth: '100px',
            }}
          >
            <Tag type="point">라벨명</Tag>
            <Tag type="normal">라벨명</Tag>
            <Tag type="inverse">라벨명</Tag>
            <Tag type="positive">라벨명</Tag>
            <Tag type="negative">라벨명</Tag>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * 3. Figma Tokens 1:1 매핑 명세표 (Design Tokens Verification)
 */
export const TokenMappingTable: Story = {
  name: '3. Token Mapping Table (Zero Hardcoding)',
  render: () => {
    const tableData = [
      {
        type: 'normal (default)',
        bgToken: 'var(--color-bg-secondary)',
        bgValue: '#f5f5f5 (Color/Gray/96)',
        textToken: 'var(--color-text-secondary)',
        textValue: '#666666 (Color/Gray/40)',
        role: '기본 상품 속성, 소재, 핏 정보 표기',
      },
      {
        type: 'point',
        bgToken: 'var(--primitive-color-orange-96)',
        bgValue: '#fdf1ed (Color/Orange/96)',
        textToken: 'var(--color-text-point-primary)',
        textValue: '#e4541b (Color/Primary/Default)',
        role: '브랜드 시그니처 웜 테라코타 강조, 기획전, 주요 옵션',
      },
      {
        type: 'inverse',
        bgToken: 'var(--color-bg-default)',
        bgValue: '#ffffff (Color/Background/Default)',
        textToken: 'var(--color-text-subtle)',
        textValue: '#333333 (Color/Gray/20)',
        role: '화이트 서피스 태그, 미니멀 클린 레이블, 에디토리얼 키워드',
      },
      {
        type: 'positive',
        bgToken: 'var(--primitive-color-blue-95)',
        bgValue: '#e7ecfd (Color/Blue/95)',
        textToken: 'var(--color-text-success)',
        textValue: '#1e4eed (Color/Blue/52)',
        role: '신규 입고, 재입고 완료, 무료 배송 달성, 인증 혜택',
      },
      {
        type: 'negative',
        bgToken: 'var(--primitive-color-red-95)',
        bgValue: '#fce8e8 (Color/Red/95)',
        textToken: 'var(--color-text-error)',
        textValue: '#e51a1a (Color/Red/50)',
        role: '품절 임박, 한정 세일, 긴급 공지, 잔여 수량 경고',
      },
    ];

    return (
      <div style={{ padding: '24px', maxWidth: '960px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700 }}>
          피그마 1:1 토큰 바인딩 명세표
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Preview</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Type</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>배경 토큰 (Background)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>텍스트 토큰 (Color)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>역할 및 활용처</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.type} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 16px' }}>
                  <Tag type={row.type.split(' ')[0] as TagType}>라벨명</Tag>
                </td>
                <td style={{ padding: '12px 16px', fontWeight: 600 }}>{row.type}</td>
                <td style={{ padding: '12px 16px' }}>
                  <code style={{ fontSize: '11px', background: '#f3f4f6', padding: '2px 4px', borderRadius: '4px' }}>{row.bgToken}</code>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{row.bgValue}</div>
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
 * 4. Fashion E-Commerce Real World Use Cases
 */
export const FashionEcommerceUseCases: Story = {
  name: '4. Fashion E-Commerce Use Cases',
  render: () => {
    return (
      <div style={{ padding: '24px', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: 'var(--primitive-font-family, sans-serif)' }}>
        {/* Product Card Tag Row Example */}
        <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600, color: '#666' }}>
            상품 카드 상단 뱃지/태그 레이아웃
          </h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag type="point">MD PICK</Tag>
            <Tag type="positive">당일출고</Tag>
            <Tag type="negative">마감임박</Tag>
            <Tag type="normal">울 100%</Tag>
            <Tag type="inverse">#오버핏코트</Tag>
          </div>
        </div>

        {/* Order Status Tags */}
        <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600, color: '#666' }}>
            주문 / 배송 상태 태그
          </h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag type="positive">무료특급배송</Tag>
            <Tag type="point">쿠폰적용가</Tag>
            <Tag type="normal">일반배송</Tag>
            <Tag type="negative">품절 (SOLD OUT)</Tag>
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
    type: 'normal',
    children: '라벨명',
  },
};
