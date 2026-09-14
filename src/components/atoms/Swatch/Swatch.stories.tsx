import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ColorSwatchGroup, SizeSwatchGroup } from './Swatch';

const meta: Meta = {
  title: 'Atoms/Swatches',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '의류/패션 제품 옵션 선택을 위한 컬러 스와치(Color Swatch) 및 사이즈 스와치(Size Swatch) 컴포넌트입니다. 선택 상태 및 품절 사선 처리 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const ColorSwatches: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState('black');
    const colors = [
      { id: 'black', name: 'Charcoal Black', colorHex: '#18181b' },
      { id: 'ivory', name: 'Warm Ivory', colorHex: '#f5f2eb' },
      { id: 'burgundy', name: 'Deep Burgundy', colorHex: '#801323' },
      { id: 'olive', name: 'Sage Olive', colorHex: '#4f6352' },
      { id: 'camel', name: 'Camel Brown', colorHex: '#c89d7c', isSoldOut: true },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600 }}>
          Color: <span style={{ fontWeight: 400, color: 'var(--color-grey-600)' }}>{colors.find(c => c.id === selected)?.name}</span>
        </span>
        <ColorSwatchGroup
          options={colors}
          selectedId={selected}
          onSelect={setSelected}
          size="md"
        />
      </div>
    );
  },
};

export const SizeSwatches: StoryObj = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = [
      { id: 'XS', label: 'XS' },
      { id: 'S', label: 'S' },
      { id: 'M', label: 'M' },
      { id: 'L', label: 'L' },
      { id: 'XL', label: 'XL', isSoldOut: true },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600 }}>
          Select Size: <span style={{ fontWeight: 400, color: 'var(--color-grey-600)' }}>{selectedSize}</span>
        </span>
        <SizeSwatchGroup
          options={sizes}
          selectedId={selectedSize}
          onSelect={setSelectedSize}
        />
      </div>
    );
  },
};
