import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Price } from './Price';

const meta: Meta<typeof Price> = {
  title: 'Atoms/Price',
  component: Price,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패션 이커머스에서 할인율 자동 계산, 원가 취소선 및 통화 포맷팅(KRW, USD 등)을 제공하는 가격 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'number',
      description: '실제 판매 가격',
    },
    originalPrice: {
      control: 'number',
      description: '정상 가격 (할인 전)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '크기 변형',
    },
    currency: {
      control: 'select',
      options: ['KRW', 'USD', 'EUR'],
    },
    isSoldOut: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Price>;

export const DiscountedKRW: Story = {
  args: {
    price: 189000,
    originalPrice: 270000,
    currency: 'KRW',
    size: 'lg',
  },
};

export const NormalNoDiscount: Story = {
  args: {
    price: 98000,
    currency: 'KRW',
    size: 'md',
  },
};

export const LuxuryUSD: Story = {
  args: {
    price: 495,
    originalPrice: 750,
    currency: 'USD',
    size: 'lg',
  },
};

export const SoldOut: Story = {
  args: {
    price: 189000,
    originalPrice: 270000,
    isSoldOut: true,
    size: 'md',
  },
};

export const AllSizesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '4px' }}>Small (Cart / Mini item)</span>
        <Price price={84000} originalPrice={120000} size="sm" />
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '4px' }}>Medium (Product Card)</span>
        <Price price={189000} originalPrice={270000} size="md" />
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '4px' }}>Large (PDP Main Price)</span>
        <Price price={329000} originalPrice={470000} size="lg" />
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '4px' }}>Extra Large (Hero Promotion)</span>
        <Price price={540000} originalPrice={900000} size="xl" />
      </div>
    </div>
  ),
};
