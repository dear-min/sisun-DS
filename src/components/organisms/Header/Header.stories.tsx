import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '하이엔드 패션 이커머스 글로벌 네비게이션 헤더입니다. 무료 배송 프로모션 티커, 카테고리 네비게이션, 검색/위시리스트/장바구니 뱃지 및 모바일 드로어 토글을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DefaultLuxuryHeader: Story = {
  args: {
    brandName: 'ATELIER',
    wishlistCount: 4,
    cartCount: 2,
  },
};
