import type { Meta, StoryObj } from '@storybook/react';
import { TypographyShowcase } from './TokensShowcase';

const meta: Meta<typeof TypographyShowcase> = {
  title: 'Foundations/Design Tokens/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '피그마(Figma) `00. Common Design System`의 `.Primitive / Typography` 컬렉션에 정의된 15개 타이포그래피 베리어블(Heading 4종, Body 5종, Letter-spacing 2종, Font-weight 3종)의 전용 명세서 및 실시간 인터랙티브 테스터입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypographyShowcase>;

/**
 * 타이포그래피 전체 15개 베리어블 및 인터랙티브 테스터 통합 뷰
 */
export const Overview: Story = {
  args: {
    subCategory: 'all',
  },
};

/**
 * Heading 스케일 (4 Variables: XLarge 32px, Large 24px, Medium 18px, Small 16px)
 */
export const Headings: Story = {
  args: {
    subCategory: 'heading',
  },
};

/**
 * Body 스케일 (5 Variables: Large 16px, Medium 15px, Small 14px, XSmall 13px, XXSmall 12px)
 */
export const Body: Story = {
  args: {
    subCategory: 'body',
  },
};

/**
 * Letter-spacing 스케일 (2 Variables: 0: 0em, 1: -0.02em 국문 최적화)
 */
export const LetterSpacing: Story = {
  args: {
    subCategory: 'spacing',
  },
};

/**
 * Font-weight 스케일 (3 Variables: Regular 400, Medium 500, SemiBold 600)
 */
export const FontWeight: Story = {
  args: {
    subCategory: 'weight',
  },
};

/**
 * 실시간 타이포그래피 인터랙티브 테스터 (문구 입력, 사이즈/굵기/자간 실시간 변경)
 */
export const InteractiveTester: Story = {
  args: {
    subCategory: 'tester',
  },
};
