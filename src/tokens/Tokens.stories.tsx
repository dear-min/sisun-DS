import type { Meta, StoryObj } from '@storybook/react';
import { TokensShowcase } from './TokensShowcase';

const meta: Meta<typeof TokensShowcase> = {
  title: 'Foundations/Design Tokens',
  component: TokensShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '피그마(Figma) 디자인 토큰 및 변수와 연동되는 패션 이커머스 전용 색상, 타이포그래피, 비율 토큰 모음입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokensShowcase>;

export const Overview: Story = {};
