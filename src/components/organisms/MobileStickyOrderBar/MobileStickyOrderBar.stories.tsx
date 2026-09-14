import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MobileStickyOrderBar } from './MobileStickyOrderBar';

const meta: Meta<typeof MobileStickyOrderBar> = {
  title: 'Organisms/MobileStickyOrderBar',
  component: MobileStickyOrderBar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobileStandard',
    },
    docs: {
      description: {
        component: '모바일 환경에서 상품 상세 페이지 스크롤 중 화면 하단에 상시 고정되는 주문 및 장바구니 바(Sticky Bottom Bar)입니다. 모바일 뷰포트(iPhone 15)에서 확인하는 것을 권장합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MobileStickyOrderBar>;

export const MobileViewSimulation: Story = {
  render: () => {
    const [wishlist, setWishlist] = useState(false);
    return (
      <div style={{ minHeight: '120vh', background: '#fafafa', padding: '20px 16px 100px 16px' }}>
        <div style={{ maxWidth: '393px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LEMAIRE</span>
          <h1 style={{ fontSize: '20px', fontWeight: 600, margin: '6px 0 16px 0' }}>Dry Silk Oversized Trench</h1>
          <div style={{ width: '100%', height: '360px', background: '#f5f2eb', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '13px', marginBottom: '24px' }}>
            Lookbook Scroll Area
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#666', marginBottom: '20px' }}>
            스크롤을 아래로 내려도 화면 하단에 구매/장바구니 고정바가 안전하게 위치합니다. 위시리스트 토글 애니메이션과 합계 가격을 즉각적으로 확인할 수 있습니다.
          </p>
          <div style={{ width: '100%', height: '400px', background: '#eee', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '13px' }}>
            Product Details & Reviews
          </div>
        </div>

        <MobileStickyOrderBar
          price={890000}
          originalPrice={1250000}
          isWishlistActive={wishlist}
          onWishlistToggle={setWishlist}
          onAddToCart={() => alert('장바구니에 담겼습니다.')}
          onBuyNow={() => alert('바로 주문 페이지로 이동합니다.')}
        />
      </div>
    );
  },
};
