import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { QuantitySelector } from '../../molecules/QuantitySelector/QuantitySelector';
import { Button } from '../../atoms/Button/Button';
import './cart-drawer.css';

export interface CartDrawerItem {
  id: string;
  brand: string;
  title: string;
  colorName: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartDrawerProps {
  /** 드로어 열림 여부 */
  isOpen: boolean;
  /** 닫기 콜백 */
  onClose: () => void;
  /** 장바구니 상품 목록 */
  items: CartDrawerItem[];
  /** 수량 변경 콜백 */
  onQuantityChange?: (id: string, newQuantity: number) => void;
  /** 아이템 삭제 콜백 */
  onRemoveItem?: (id: string) => void;
  /** 무료 배송 기준 금액 (기본 200,000원) */
  freeShippingThreshold?: number;
  /** 결제하기 클릭 콜백 */
  onCheckout?: () => void;
  className?: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onQuantityChange,
  onRemoveItem,
  freeShippingThreshold = 200000,
  onCheckout,
  className = '',
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className={`cart-drawer-backdrop ${className}`} onClick={onClose} role="dialog" aria-modal="true">
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-header__title-wrap">
            <h2 className="cart-drawer-header__title font-editorial">Shopping Bag</h2>
            <span className="cart-drawer-header__count tabular-nums">({items.length})</span>
          </div>
          <button
            type="button"
            className="cart-drawer-close-btn"
            onClick={onClose}
            aria-label="장바구니 닫기"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="cart-drawer-shipping-progress">
          <p className="cart-drawer-shipping-progress__text">
            {isFreeShipping ? (
              <strong>🎉 무료 특급 배송 혜택이 적용되었습니다!</strong>
            ) : (
              <>
                무료 배송까지 <strong className="tabular-nums">₩{amountNeeded.toLocaleString()}</strong> 남았습니다
              </>
            )}
          </p>
          <div className="cart-drawer-shipping-progress__track">
            <div
              className="cart-drawer-shipping-progress__bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-drawer-empty">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>쇼핑백이 비어 있습니다.</p>
              <Button variant="outline" size="md" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="cart-drawer-items">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer-item">
                  <div className="cart-drawer-item__thumb">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-drawer-item__info">
                    <div className="cart-drawer-item__brand">{item.brand}</div>
                    <h4 className="cart-drawer-item__title">{item.title}</h4>
                    <div className="cart-drawer-item__options">
                      <span>{item.colorName}</span> • <span>Size {item.size}</span>
                    </div>
                    <div className="cart-drawer-item__price tabular-nums">
                      ₩{(item.price * item.quantity).toLocaleString()}
                    </div>
                    <div className="cart-drawer-item__actions">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(qty) => onQuantityChange?.(item.id, qty)}
                        size="sm"
                      />
                      <button
                        type="button"
                        className="cart-drawer-item__remove-btn"
                        onClick={() => onRemoveItem?.(item.id)}
                        aria-label={`${item.title} 삭제`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with Subtotal and Checkout CTA */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-footer__row">
              <span className="cart-drawer-footer__label">소계 (Subtotal)</span>
              <span className="cart-drawer-footer__amount tabular-nums">₩{subtotal.toLocaleString()}</span>
            </div>
            <div className="cart-drawer-footer__row">
              <span className="cart-drawer-footer__label">배송비</span>
              <span className="cart-drawer-footer__amount">
                {isFreeShipping ? 'FREE' : '₩3,000'}
              </span>
            </div>
            <p className="cart-drawer-footer__tax-note">세금 및 관세는 결제 단계에서 계산됩니다.</p>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onCheckout}
              rightIcon={<ArrowRight size={18} />}
            >
              Checkout • ₩{(subtotal + (isFreeShipping ? 0 : 3000)).toLocaleString()}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
