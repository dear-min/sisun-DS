import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FilterChip } from './FilterChip';

const meta: Meta<typeof FilterChip> = {
  title: 'Molecules/FilterChip',
  component: FilterChip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카테고리 목록 및 상품 필터링(아우터, 드레스, 니트웨어, 세일 상품 등)에 사용하는 알약형 필터 칩입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const FilterGroup: StoryObj = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['All']);
    const filters = [
      { id: 'All', label: 'All Items', count: 480 },
      { id: 'Coats', label: 'Coats & Jackets', count: 124 },
      { id: 'Knitwear', label: 'Knitwear', count: 86 },
      { id: 'Dresses', label: 'Dresses', count: 62 },
      { id: 'Sale', label: 'Sale 40% Off', count: 19 },
    ];

    const toggleFilter = (id: string) => {
      if (id === 'All') {
        setSelectedFilters(['All']);
        return;
      }
      const withoutAll = selectedFilters.filter((f) => f !== 'All');
      if (withoutAll.includes(id)) {
        const next = withoutAll.filter((f) => f !== id);
        setSelectedFilters(next.length === 0 ? ['All'] : next);
      } else {
        setSelectedFilters([...withoutAll, id]);
      }
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <FilterChip
            key={f.id}
            label={f.label}
            count={f.count}
            selected={selectedFilters.includes(f.id)}
            onClick={() => toggleFilter(f.id)}
          />
        ))}
      </div>
    );
  },
};
