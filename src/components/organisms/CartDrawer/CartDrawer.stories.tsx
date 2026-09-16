import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CartDrawer } from './CartDrawer';
import type { CartDrawerItem } from './CartDrawer';
import { Button } from '../../atoms/Button/Button';
import { ShoppingBag } from 'lucide-react';

const meta: Meta<typeof CartDrawer> = {
  title: 'Organisms/CartDrawer',
  component: CartDrawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '우측에서 부드럽게 슬라이드되는 미니 카트 드로어(Slide-over Cart Drawer)입니다. 무료 배송 달성 프로그레스 바, 실시간 수량 변경, 소계 계산 및 Checkout CTA를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartDrawer>;

const INITIAL_ITEMS: CartDrawerItem[] = [
  {
    id: 'item-1',
    brand: 'LEMAIRE',
    title: 'Double-Breasted Wool Oversized Coat',
    colorName: 'Noir Black',
    size: 'M',
    price: 890000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'item-2',
    brand: 'THE ROW',
    title: 'Cashmere Ribbed Knit Cardigan',
    colorName: 'Oatmeal Ivory',
    size: 'S',
    price: 620000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
  },
];

export const InteractiveCart: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [items, setItems] = useState<CartDrawerItem[]>(INITIAL_ITEMS);

    const handleQuantityChange = (id: string, qty: number) => {
      setItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, quantity: qty } : it))
      );
    };

    const handleRemove = (id: string) => {
      setItems((prev) => prev.filter((it) => it.id !== id));
    };

    return (
      <div style={{ padding: '40px', minHeight: '100vh', background: 'var(--bg-app)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="font-editorial" style={{ fontSize: '32px', marginBottom: '16px' }}>
            Shopping Experience Demo
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            아래 버튼을 눌러 장바구니 드로어를 열고 닫을 수 있습니다.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsOpen(true)}
            leftIcon={<ShoppingBag size={18} />}
          >
            Open Shopping Bag ({items.length})
          </Button>
        </div>

        <CartDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={items}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemove}
          freeShippingThreshold={1000000}
          onCheckout={() => alert('결제 단계로 이동합니다.')}
        />
      </div>
    );
  },
};
