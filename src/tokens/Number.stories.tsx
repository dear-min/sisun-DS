import type { Meta, StoryObj } from '@storybook/react';
import { NumberShowcase } from './TokensShowcase';

const meta: Meta<typeof NumberShowcase> = {
  title: 'Foundations/Design Tokens/Number',
  component: NumberShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '피그마(Figma) `00. Common Design System`의 `.Primitive / Number` (22개) 및 `Semantic / Layout / Radius` (8개) 토큰 명세서 및 실시간 인터랙티브 비주얼라이저입니다. 곡률(Radius)은 None(0px: Number/0)부터 Circle(999px: Number/circle)까지 피그마와 1:1로 매핑됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberShowcase>;

/**
 * 전체 22개 Number 수치 매트릭스 + 8개 Semantic Radius 토큰 통합 뷰
 */
export const Overview: Story = {
  args: {
    subCategory: 'all',
  },
};

/**
 * 피그마 Semantic Radius 곡률 스케일 (8종 1:1 매핑)
 * - None -> Number/0 (0px)
 * - XSmall -> Number/1 (2px)
 * - Small -> Number/2 (4px)
 * - Medium -> Number/3 (6px)
 * - Large -> Number/4 (8px)
 * - XLarge -> Number/6 (12px)
 * - XXLarge -> Number/7 (16px)
 * - Circle -> Number/circle (999px)
 */
export const RadiusScale: Story = {
  args: {
    subCategory: 'radius',
  },
};

/**
 * 여백 및 갭 수치 스케일 (Spacing, Gap & Padding: Number/0 ~ Number/20)
 */
export const SpacingScale: Story = {
  args: {
    subCategory: 'spacing',
  },
};

/**
 * 실시간 곡률 & 수치 인터랙티브 뷰어 (Radius Mode와 Number Mode 전환 지원)
 */
export const InteractiveVisualizer: Story = {
  args: {
    subCategory: 'visualizer',
  },
};
