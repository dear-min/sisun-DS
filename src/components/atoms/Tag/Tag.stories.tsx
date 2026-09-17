import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import type { TagType } from './types';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9NPZzytVoEfRCuBiUo6JXh/00.-Common-Design-System?node-id=77-1403&t=2UCgEKCwPtky2wTX-4',
    },
    docs: {
      description: {
        component: `피그마 **00. Common Design System**의 태그(Tag) 컴포넌트입니다. 상품의 주요 속성(소재, 핏), 혜택(배송, 할인), 상태(신상품, 품절임박) 등을 직관적으로 전달하는 컴팩트한 시각적 라벨입니다.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['normal', 'point', 'inverse', 'positive', 'negative'],
      description: '피그마 정의 Tag Type 5종',
      table: { defaultValue: { summary: 'normal' } },
    },
    children: {
      control: 'text',
      description: '태그 라벨 텍스트',
      defaultValue: '라벨명',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * Tag 컴포넌트 통합 명세 및 미리보기 (1depth 단일 뷰)
 */
export const Overview: Story = {
  name: 'Overview',
  args: {
    type: 'normal',
    children: '라벨명',
  },
  render: (args) => {
    const types: { id: TagType; name: string; role: string; isDefault?: boolean }[] = [
      { id: 'normal', name: 'Normal', role: '기본 상품 속성, 소재, 핏 정보', isDefault: true },
      { id: 'point', name: 'Point', role: '브랜드 시그니처 웜 테라코타, 기획전, 주요 옵션' },
      { id: 'inverse', name: 'Inverse', role: '화이트 서피스 태그, 미니멀 클린 레이블' },
      { id: 'positive', name: 'Positive', role: '신규 입고, 재입고 완료, 무료 배송 혜택' },
      { id: 'negative', name: 'Negative', role: '품절 임박, 타임 세일, 긴급 공지' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--primitive-number-11, 40px)',
          maxWidth: '860px',
          fontFamily: 'var(--primitive-font-family)',
          color: 'var(--color-text-default)',
        }}
      >
        {/* 헤더 섹션: 피그마 프레임 명세 100% 매핑 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--primitive-color-gray-0)',
            paddingBottom: 'var(--primitive-number-6, 12px)',
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 700, letterSpacing: 'var(--primitive-letter-spacing-1, -0.02em)' }}>
              Tag
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              피그마 <code>00. Common Design System</code> (node-id: 77-1403) 1:1 토큰 바인딩
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--primitive-number-4, 8px)', fontSize: '13px', fontWeight: 600 }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Class Name</span>
            <code
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: 'var(--primitive-number-1, 2px) var(--primitive-number-4, 8px)',
                borderRadius: 'var(--radius-small, 4px)',
                color: 'var(--color-text-default)',
              }}
            >
              tag
            </code>
          </div>
        </div>

        {/* 0. 대화형 미리보기 (Interactive Playground) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Interactive Playground
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              하단 Controls 패널에서 Type 테마 및 라벨 문구를 직접 변경해보세요.
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
            <Tag {...args} />
          </div>
        </section>

        {/* 1. Type Section (피그마 5종 매트릭스) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
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
                point
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
                inverse
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
                positive
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
                negative
              </code>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              전달하려는 정보의 중요도와 속성에 맞게 5가지 시각적 테마를 제공합니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-11, 40px) var(--primitive-number-7, 16px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 'var(--primitive-number-8, 20px)',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            {types.map((t) => (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--primitive-number-4, 8px)',
                  textAlign: 'center',
                }}
              >
                <Tag type={t.id}>라벨명</Tag>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-default)' }}>
                    {t.name}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', lineHeight: 1.3 }}>
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 스타일 규격 및 디자인 토큰 가이드 */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Design Token Specifications
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Tag 컴포넌트에 엄격하게 적용된 100% 토큰 바인딩 규격입니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-8, 20px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--primitive-number-6, 12px)',
            }}
          >
            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Typography</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-default)', marginTop: '4px' }}>
                Caption Small (12px / Medium 500)
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Letter-spacing: -0.02em</div>
            </div>

            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Dimensions</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-default)', marginTop: '4px' }}>
                Height: 22px / Radius: 2px
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Padding: 2px 8px (--primitive-number-4)</div>
            </div>

            <div style={{ padding: 'var(--primitive-number-4, 8px)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-small, 4px)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Color Tokens</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-default)', marginTop: '4px' }}>
                Type별 시맨틱 배경 및 텍스트 토큰
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>--color-tag-*-bg / --color-tag-*-text</div>
            </div>
          </div>
        </section>

        {/* 3. 실제 사용 예시 (Real-World Use Cases) */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--primitive-number-4, 8px)' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>
              Usage Examples (패션 이커머스 활용 예시)
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              실제 쇼핑몰 상품 카드 및 주문 내역 화면에서의 조합 예시입니다.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--color-bg-default)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-large, 8px)',
              padding: 'var(--primitive-number-8, 20px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--primitive-number-6, 12px)',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                상품 카드 뱃지 / 키워드 조합
              </span>
              <div style={{ display: 'flex', gap: 'var(--primitive-number-4, 8px)', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                <Tag type="point">MD PICK</Tag>
                <Tag type="positive">당일출고</Tag>
                <Tag type="negative">마감임박</Tag>
                <Tag type="normal">울 100%</Tag>
                <Tag type="inverse">#오버핏코트</Tag>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border-tertiary)', paddingTop: 'var(--primitive-number-6, 12px)' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                주문 / 배송 상태 피드백
              </span>
              <div style={{ display: 'flex', gap: 'var(--primitive-number-4, 8px)', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                <Tag type="positive">무료특급배송</Tag>
                <Tag type="point">쿠폰적용가</Tag>
                <Tag type="normal">일반배송</Tag>
                <Tag type="negative">품절 (SOLD OUT)</Tag>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
