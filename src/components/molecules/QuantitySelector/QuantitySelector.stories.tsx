import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { QuantitySelector } from './QuantitySelector';

const meta: Meta<typeof QuantitySelector> = {
  title: 'Molecules/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '장바구니 및 상품 상세 페이지(PDP)에서 수량을 조절할 수 있는 미니멀 스텝퍼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Interactive: StoryObj = {
  render: () => {
    const [count, setCount] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <QuantitySelector value={count} onChange={setCount} min={1} max={10} size="md" />
        <span style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>
          선택된 수량: {count}개
        </span>
      </div>
    );
  },
};

export const Sizes: StoryObj = {
  render: () => {
    const [c1, setC1] = useState(1);
    const [c2, setC2] = useState(2);
    const [c3, setC3] = useState(1);
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <QuantitySelector value={c1} onChange={setC1} size="sm" />
        <QuantitySelector value={c2} onChange={setC2} size="md" />
        <QuantitySelector value={c3} onChange={setC3} size="lg" />
      </div>
    );
  },
};
