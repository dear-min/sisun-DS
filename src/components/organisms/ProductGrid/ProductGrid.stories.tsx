import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from './ProductGrid';
import type { ProductCardProps } from '../../molecules/ProductCard/ProductCard';

const meta: Meta<typeof ProductGrid> = {
  title: 'Organisms/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '모바일 2열 / 태블릿 3열 / 데스크톱 4열 반응형 패션 상품 그리드입니다. 스토리북 상단 뷰포트 변경 툴바에서 iPhone, iPad, Desktop을 전환하며 확인할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

const MOCK_PRODUCTS: ProductCardProps[] = [
  {
    id: '1',
    brand: 'LEMAIRE',
    title: 'Twisted Collar Wool Blend Shirt',
    price: 490000,
    originalPrice: 700000,
    badgeText: 'SALE -30%',
    badgeVariant: 'sale',
    primaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    initialWishlist: false,
  },
  {
    id: '2',
    brand: 'THE ROW',
    title: 'Minimalist Relaxed Fit Silk Trench',
    price: 1850000,
    badgeText: 'NEW IN',
    badgeVariant: 'new',
    primaryImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    initialWishlist: true,
  },
  {
    id: '3',
    brand: 'AURALEE',
    title: 'Super Fine Cashmere Ribbed Cardigan',
    price: 680000,
    originalPrice: 850000,
    badgeText: 'EXCLUSIVE',
    badgeVariant: 'exclusive',
    primaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    brand: 'TOTEME',
    title: 'Signature Wool Cape Jacket',
    price: 920000,
    isSoldOut: true,
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  },
];

export const DesktopFourColumns: Story = {
  args: {
    title: 'Autumn / Winter 2026 Collection',
    totalCount: 4,
    columns: 4,
    products: MOCK_PRODUCTS,
  },
};

export const LoadingSkeletonState: Story = {
  args: {
    title: 'Loading Collection...',
    totalCount: 4,
    isLoading: true,
    products: [],
  },
};
