import type { Meta, StoryObj } from '@storybook/react';
import { TokensShowcase } from './TokensShowcase';

const meta: Meta<typeof TokensShowcase> = {
  title: 'Foundations/Design Tokens/Overview',
  component: TokensShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '피그마(Figma) `00. Common Design System`에 정의된 85개 전체 토큰(Typography 15개, Number 22개, Color 48개)을 1:1 오차 없이 조회하고 복사할 수 있는 마스터 대시보드입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokensShowcase>;

/**
 * 전체 85개 토큰 마스터 스위트 (상단 탭으로 Typography, Number, Color 간 즉시 전환)
 */
export const AllTokens: Story = {
  args: {
    category: 'all',
  },
};
