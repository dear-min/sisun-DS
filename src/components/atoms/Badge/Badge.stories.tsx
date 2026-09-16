import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '상품의 프로모션 상태(SALE, NEW, BEST, EXCLUSIVE, SOLD OUT)를 직관적으로 전달하는 뱃지 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['sale', 'new', 'best', 'soldout', 'exclusive', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    shape: {
      control: 'select',
      options: ['sharp', 'pill', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const SaleDiscount: Story = {
  args: {
    variant: 'sale',
    children: 'SALE -40%',
    shape: 'sharp',
  },
};

export const NewArrival: Story = {
  args: {
    variant: 'new',
    children: 'NEW',
    shape: 'sharp',
  },
};

export const ExclusiveLimited: Story = {
  args: {
    variant: 'exclusive',
    children: 'ONLY ONLINE',
    shape: 'pill',
  },
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="sale" shape="sharp">-30% OFF</Badge>
      <Badge variant="new" shape="sharp">NEW IN</Badge>
      <Badge variant="best" shape="sharp">BESTSELLER</Badge>
      <Badge variant="exclusive" shape="pill">EXCLUSIVE</Badge>
      <Badge variant="soldout" shape="square">SOLD OUT</Badge>
      <Badge variant="neutral" shape="pill">PRE-ORDER</Badge>
    </div>
  ),
};
