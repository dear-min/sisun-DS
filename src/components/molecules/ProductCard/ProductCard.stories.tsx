import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패션 이커머스의 정수인 3:4 비율 룩북 상품 카드입니다. 마우스 호버 시 상세/착용컷 크로스페이드 전환, 위시리스트 플로팅 버튼, 퀵 담기(Quick Add) 바, 컬러 도트 스위칭 기능을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const SAMPLE_COAT_COLORS = [
  {
    id: 'black',
    name: 'Noir Black',
    colorHex: '#18181b',
    primaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'oatmeal',
    name: 'Warm Oatmeal',
    colorHex: '#e5dec9',
    primaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'burgundy',
    name: 'Deep Burgundy',
    colorHex: '#721c24',
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
  },
];

export const DefaultInteractive: Story = {
  args: {
    id: 'prod-01',
    brand: 'LEMAIRE',
    title: 'Double-Breasted Wool Oversized Coat',
    price: 890000,
    originalPrice: 1250000,
    badgeText: 'SALE -28%',
    badgeVariant: 'sale',
    primaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    colorVariants: SAMPLE_COAT_COLORS,
    initialWishlist: false,
  },
  render: (args) => (
    <div style={{ width: '280px' }}>
      <ProductCard {...args} />
    </div>
  ),
};

export const NewArrivalCard: Story = {
  args: {
    id: 'prod-02',
    brand: 'THE ROW',
    title: 'Cashmere Ribbed Knit Cardigan',
    price: 620000,
    badgeText: 'NEW IN',
    badgeVariant: 'new',
    primaryImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    initialWishlist: true,
  },
  render: (args) => (
    <div style={{ width: '280px' }}>
      <ProductCard {...args} />
    </div>
  ),
};

export const SoldOutCard: Story = {
  args: {
    id: 'prod-03',
    brand: 'TOTEME',
    title: 'Structured Signature Trench Coat',
    price: 1150000,
    originalPrice: 1150000,
    isSoldOut: true,
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  },
  render: (args) => (
    <div style={{ width: '280px' }}>
      <ProductCard {...args} />
    </div>
  ),
};
