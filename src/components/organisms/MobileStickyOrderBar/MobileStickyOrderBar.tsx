import React from 'react';
import { WishlistButton } from '../../atoms/WishlistButton/WishlistButton';
import { Button } from '../../atoms/Button/Button';
import { Price } from '../../atoms/Price/Price';
import { ShoppingBag } from 'lucide-react';
import './mobile-sticky-order-bar.css';

export interface MobileStickyOrderBarProps {
  /** 상품 가격 */
  price: number;
  /** 정가 (할인가 계산용) */
  originalPrice?: number;
  /** 위시리스트 활성화 여부 */
  isWishlistActive?: boolean;
  /** 위시리스트 토글 핸들러 */
  onWishlistToggle?: (active: boolean) => void;
  /** 장바구니 담기 핸들러 */
  onAddToCart?: () => void;
  /** 바로 구매하기 핸들러 */
  onBuyNow?: () => void;
  /** 품절 상태 */
  isSoldOut?: boolean;
  className?: string;
}

export const MobileStickyOrderBar: React.FC<MobileStickyOrderBarProps> = ({
  price,
  originalPrice,
  isWishlistActive = false,
  onWishlistToggle,
  onAddToCart,
  onBuyNow,
  isSoldOut = false,
  className = '',
}) => {
  return (
    <aside className={`mobile-sticky-bar ${className}`} aria-label="주문 고정 바">
      <div className="mobile-sticky-bar__left">
        <WishlistButton
          size="md"
          variant="subtle"
          initialActive={isWishlistActive}
          onToggle={onWishlistToggle}
        />
        <div className="mobile-sticky-bar__price-wrap">
          <span className="mobile-sticky-bar__total-label">TOTAL</span>
          <Price price={price} originalPrice={originalPrice} size="md" isSoldOut={isSoldOut} />
        </div>
      </div>

      <div className="mobile-sticky-bar__actions">
        {isSoldOut ? (
          <Button variant="secondary" size="md" fullWidth disabled>
            Sold Out
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              size="md"
              onClick={onAddToCart}
              leftIcon={<ShoppingBag size={16} />}
              className="mobile-sticky-bar__cart-btn"
            >
              Bag
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={onBuyNow}
              className="mobile-sticky-bar__buy-btn"
            >
              Buy Now
            </Button>
          </>
        )}
      </div>
    </aside>
  );
};
