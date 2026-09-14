import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import './header.css';

export interface HeaderNavCategory {
  id: string;
  label: string;
  href?: string;
  isHighlight?: boolean;
}

export interface HeaderProps {
  /** 브랜드 로고 텍스트 또는 워드마크 */
  brandName?: string;
  /** 네비게이션 카테고리 목록 */
  categories?: HeaderNavCategory[];
  /** 위시리스트 아이템 수 */
  wishlistCount?: number;
  /** 장바구니 아이템 수 */
  cartCount?: number;
  /** 검색 아이콘 클릭 콜백 */
  onSearchClick?: () => void;
  /** 위시리스트 아이콘 클릭 콜백 */
  onWishlistClick?: () => void;
  /** 장바구니 아이콘 클릭 콜백 */
  onCartClick?: () => void;
  className?: string;
}

const DEFAULT_CATEGORIES: HeaderNavCategory[] = [
  { id: 'new', label: 'NEW ARRIVALS' },
  { id: 'collection', label: 'COLLECTIONS' },
  { id: 'apparel', label: 'APPAREL' },
  { id: 'accessories', label: 'ACCESSORIES' },
  { id: 'editorial', label: 'LOOKBOOK' },
  { id: 'sale', label: 'SALE -30%', isHighlight: true },
];

export const Header: React.FC<HeaderProps> = ({
  brandName = 'ATELIER',
  categories = DEFAULT_CATEGORIES,
  wishlistCount = 3,
  cartCount = 2,
  onSearchClick,
  onWishlistClick,
  onCartClick,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fashion-header ${className}`}>
      {/* Top Banner Ticker */}
      <div className="fashion-header__ticker">
        <span>COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER ₩200,000</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="fashion-header__main">
        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="fashion-header__icon-btn fashion-header__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand Logo / Wordmark */}
        <div className="fashion-header__brand">
          <a href="#" className="fashion-header__brand-link font-editorial">
            {brandName}
          </a>
        </div>

        {/* Desktop Category Navigation */}
        <nav className="fashion-header__nav" aria-label="메인 카테고리">
          <ul className="fashion-header__nav-list">
            {categories.map((cat) => (
              <li key={cat.id} className="fashion-header__nav-item">
                <a
                  href={cat.href || '#'}
                  className={`fashion-header__nav-link ${
                    cat.isHighlight ? 'fashion-header__nav-link--highlight' : ''
                  }`}
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Utility Icons (Search, Wishlist, Cart) */}
        <div className="fashion-header__actions">
          <button
            type="button"
            className="fashion-header__icon-btn"
            onClick={onSearchClick}
            aria-label="상품 검색"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            className="fashion-header__icon-btn"
            onClick={onWishlistClick}
            aria-label="위시리스트"
          >
            <Heart size={20} strokeWidth={1.75} />
            {wishlistCount > 0 && (
              <span className="fashion-header__badge tabular-nums">{wishlistCount}</span>
            )}
          </button>

          <button
            type="button"
            className="fashion-header__icon-btn"
            onClick={onCartClick}
            aria-label="쇼핑백"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="fashion-header__badge tabular-nums">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fashion-header__mobile-drawer">
          <ul className="fashion-header__mobile-list">
            {categories.map((cat) => (
              <li key={cat.id} className="fashion-header__mobile-item">
                <a
                  href={cat.href || '#'}
                  className={`fashion-header__mobile-link ${
                    cat.isHighlight ? 'fashion-header__mobile-link--highlight' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
