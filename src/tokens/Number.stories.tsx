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
          '피그마(Figma) `00. Common Design System`의 `.Primitive / Number` 컬렉션에 정의된 22개 수치 베리어블(0px ~ 160px 및 circle 999px)의 전용 명세서 및 실시간 박스 모델 시각화 도구입니다. 여백(Spacing/Gap/Padding), 컴포넌트 크기(Sizing), 코너 곡률(Corner Radius)의 단일 진실 공급원(SSOT)입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberShowcase>;

/**
 * 전체 22개 수치 토큰 스케일 매트릭스 및 실시간 뷰어 통합 뷰
 */
export const Overview: Story = {
  args: {
    subCategory: 'all',
  },
};

/**
 * 여백 및 갭 스케일 (Spacing, Gap & Padding: 0px ~ 160px)
 */
export const SpacingScale: Story = {
  args: {
    subCategory: 'spacing',
  },
};

/**
 * 모서리 곡률 스케일 (Corner Radius: 0px, 2px, 4px, 6px, 8px, 12px, 16px, circle 999px)
 */
export const RadiusScale: Story = {
  args: {
    subCategory: 'radius',
  },
};

/**
 * 실시간 수치 인터랙티브 뷰어 (슬라이더 조작에 따른 박스 모델, 패딩, 래디우스 동적 반영)
 */
export const InteractiveVisualizer: Story = {
  args: {
    subCategory: 'visualizer',
  },
};
