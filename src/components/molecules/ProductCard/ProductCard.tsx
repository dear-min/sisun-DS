import React, { useState } from 'react';
import { WishlistButton } from '../../atoms/WishlistButton/WishlistButton';
import { Badge } from '../../atoms/Badge/Badge';
import { Price } from '../../atoms/Price/Price';
import { ShoppingBag } from 'lucide-react';
import './product-card.css';

export interface ProductColorVariant {
  id: string;
  name: string;
  colorHex: string;
  primaryImage: string;
  secondaryImage?: string;
}

export interface ProductCardProps {
  /** 상품 고유 ID */
  id: string;
  /** 브랜드명 (영문 대문자 권장) */
  brand: string;
  /** 상품 타이틀 */
  title: string;
  /** 현재 판매 가격 */
  price: number;
  /** 정상 가격 (할인 전) */
  originalPrice?: number;
  /** 기본 메인 이미지 URL */
  primaryImage: string;
  /** 마우스 호버 시 노출될 서브/착용컷 이미지 URL (선택) */
  secondaryImage?: string;
  /** 프로모션 뱃지 텍스트 (예: 'SALE -30%', 'NEW') */
  badgeText?: string;
  /** 프로모션 뱃지 종류 */
  badgeVariant?: 'sale' | 'new' | 'best' | 'exclusive' | 'soldout';
  /** 품절 여부 */
  isSoldOut?: boolean;
  /** 위시리스트 초기 활성 상태 */
  initialWishlist?: boolean;
  /** 위시리스트 토글 콜백 */
  onWishlistToggle?: (active: boolean) => void;
  /** 빠른 장바구니 담기(Quick Add) 콜백 */
  onQuickAdd?: () => void;
  /** 카드 클릭 콜백 */
  onClick?: () => void;
  /** 컬러 옵션 목록 (선택) */
  colorVariants?: ProductColorVariant[];
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  title,
  price,
  originalPrice,
  primaryImage,
  secondaryImage,
  badgeText,
  badgeVariant = 'sale',
  isSoldOut = false,
  initialWishlist = false,
  onWishlistToggle,
  onQuickAdd,
  onClick,
  colorVariants,
  className = '',
}) => {
  const [activeColorId, setActiveColorId] = useState<string | null>(
    colorVariants && colorVariants.length > 0 ? colorVariants[0].id : null
  );

  const activeColor = colorVariants?.find((c) => c.id === activeColorId);
  const currentPrimaryImage = activeColor ? activeColor.primaryImage : primaryImage;
  const currentSecondaryImage = activeColor ? activeColor.secondaryImage || secondaryImage : secondaryImage;

  return (
    <article className={`fashion-product-card ${isSoldOut ? 'fashion-product-card--soldout' : ''} ${className}`}>
      {/* 3:4 Fashion Image Container */}
      <div className="fashion-product-card__media" onClick={onClick}>
        <img
          src={currentPrimaryImage}
          alt={`${brand} ${title}`}
          className="fashion-product-card__image fashion-product-card__image--primary"
          loading="lazy"
        />
        {currentSecondaryImage && !isSoldOut && (
          <img
            src={currentSecondaryImage}
            alt={`${brand} ${title} detail`}
            className="fashion-product-card__image fashion-product-card__image--secondary"
            loading="lazy"
          />
        )}

        {/* Top Badges & Wishlist Overlay */}
        <div className="fashion-product-card__overlay-top">
          <div className="fashion-product-card__badge-wrap">
            {badgeText && (
              <Badge variant={isSoldOut ? 'soldout' : badgeVariant} size="sm" shape="sharp">
                {isSoldOut ? 'SOLD OUT' : badgeText}
              </Badge>
            )}
          </div>
          <div className="fashion-product-card__wishlist-wrap" onClick={(e) => e.stopPropagation()}>
            <WishlistButton
              size="sm"
              variant="floating"
              initialActive={initialWishlist}
              onToggle={onWishlistToggle}
            />
          </div>
        </div>

        {/* Quick Add To Bag Hover Bar */}
        {!isSoldOut && (
          <div className="fashion-product-card__quick-add-wrap" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="fashion-product-card__quick-add-btn"
              onClick={onQuickAdd}
              aria-label="빠른 장바구니 담기"
            >
              <ShoppingBag size={15} />
              <span>QUICK ADD</span>
            </button>
          </div>
        )}

        {/* Sold Out Mask */}
        {isSoldOut && (
          <div className="fashion-product-card__soldout-overlay">
            <span>OUT OF STOCK</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="fashion-product-card__content" onClick={onClick}>
        {/* Color Swatch Dots */}
        {colorVariants && colorVariants.length > 1 && (
          <div className="fashion-product-card__colors" onClick={(e) => e.stopPropagation()}>
            {colorVariants.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`fashion-product-card__color-dot ${
                  activeColorId === c.id ? 'fashion-product-card__color-dot--active' : ''
                }`}
                style={{ backgroundColor: c.colorHex }}
                onClick={() => setActiveColorId(c.id)}
                title={c.name}
                aria-label={c.name}
              />
            ))}
          </div>
        )}

        <div className="fashion-product-card__brand">{brand}</div>
        <h3 className="fashion-product-card__title">{title}</h3>
        <Price
          price={price}
          originalPrice={originalPrice}
          size="md"
          isSoldOut={isSoldOut}
        />
      </div>
    </article>
  );
};
