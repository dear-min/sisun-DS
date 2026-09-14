import React from 'react';
import './price.css';

export interface PriceProps {
  /** 실제 판매 가격 (할인 적용가) */
  price: number;
  /** 정가 (할인 전 원래 가격, 선택) */
  originalPrice?: number;
  /** 수동 지정 할인율 (지정하지 않고 originalPrice가 있으면 자동 계산) */
  discountRate?: number;
  /** 통화 단위 */
  currency?: 'KRW' | 'USD' | 'EUR' | 'JPY';
  /** 크기 변형 (sm: 미니카트/연관상품, md: 일반 상품카드, lg: PDP 상단 타이틀, xl: 메인 프로모션) */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** 품절 표시 여부 */
  isSoldOut?: boolean;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  price,
  originalPrice,
  discountRate: customDiscountRate,
  currency = 'KRW',
  size = 'md',
  isSoldOut = false,
  className = '',
}) => {
  // 할인율 계산
  const calculatedDiscount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const discount = customDiscountRate !== undefined ? customDiscountRate : calculatedDiscount;
  const hasDiscount = discount > 0 && !isSoldOut;

  // 통화 포맷
  const formatAmount = (amount: number) => {
    if (currency === 'KRW') {
      return `₩${amount.toLocaleString()}`;
    }
    if (currency === 'USD') {
      return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (currency === 'EUR') {
      return `€${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `${amount.toLocaleString()}`;
  };

  return (
    <div className={`fashion-price fashion-price--${size} ${isSoldOut ? 'fashion-price--soldout' : ''} ${className}`}>
      {isSoldOut ? (
        <span className="fashion-price__soldout-label">SOLD OUT</span>
      ) : (
        <div className="fashion-price__row">
          {hasDiscount && (
            <span className="fashion-price__discount tabular-nums">
              {discount}%
            </span>
          )}
          <span className="fashion-price__current tabular-nums">
            {formatAmount(price)}
          </span>
          {hasDiscount && originalPrice && (
            <span className="fashion-price__original tabular-nums">
              {formatAmount(originalPrice)}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
