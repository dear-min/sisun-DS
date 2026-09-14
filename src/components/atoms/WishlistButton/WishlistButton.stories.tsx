import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WishlistButton } from './WishlistButton';

const meta: Meta<typeof WishlistButton> = {
  title: 'Atoms/WishlistButton',
  component: WishlistButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패션 상품 카드 및 상세 페이지 전용 위시리스트(찜) 버튼입니다. 활성화 시 시각적 만족도를 주는 바운스 마이크로 인터랙션과 글래스모피즘 플로팅 스타일을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['floating', 'subtle', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    initialActive: {
      control: 'boolean',
    },
    count: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WishlistButton>;

export const FloatingCardBadge: Story = {
  args: {
    variant: 'floating',
    size: 'md',
    initialActive: false,
  },
  render: (args) => (
    <div style={{ position: 'relative', width: '220px', height: '290px', background: 'var(--color-warm-sand)', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>Fashion Lookbook Image</span>
      <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
        <WishlistButton {...args} />
      </div>
    </div>
  ),
};

export const ActiveStateWithCount: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    initialActive: true,
    count: 1420,
  },
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <WishlistButton variant="floating" size="sm" />
      <WishlistButton variant="floating" size="md" initialActive={true} />
      <WishlistButton variant="floating" size="lg" />
      <WishlistButton variant="outline" size="md" count={89} />
      <WishlistButton variant="subtle" size="md" initialActive={true} count={342} />
    </div>
  ),
};
