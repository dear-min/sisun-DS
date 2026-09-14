import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './wishlist-button.css';

export interface WishlistButtonProps {
  /** 초기 활성화 상태 */
  initialActive?: boolean;
  /** 활성화 상태 제어 (controlled) */
  isActive?: boolean;
  /** 클릭 이벤트 핸들러 */
  onToggle?: (active: boolean) => void;
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 스타일 형태: 카드 위 플로팅(floating) vs 일반 인라인(standard) */
  variant?: 'floating' | 'subtle' | 'outline';
  /** 찜 개수 표기 (선택) */
  count?: number;
  className?: string;
  'aria-label'?: string;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  initialActive = false,
  isActive: controlledActive,
  onToggle,
  size = 'md',
  variant = 'floating',
  count,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const [internalActive, setInternalActive] = useState(initialActive);
  const [isAnimating, setIsAnimating] = useState(false);

  const active = controlledActive !== undefined ? controlledActive : internalActive;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const nextState = !active;
    if (controlledActive === undefined) {
      setInternalActive(nextState);
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 450);
    onToggle?.(nextState);
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      type="button"
      className={`wishlist-btn wishlist-btn--${size} wishlist-btn--${variant} ${
        active ? 'wishlist-btn--active' : ''
      } ${isAnimating ? 'wishlist-btn--pop' : ''} ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel || (active ? '위시리스트에서 제거' : '위시리스트에 담기')}
      aria-pressed={active}
    >
      <Heart
        size={iconSizes[size]}
        className="wishlist-btn__icon"
        fill={active ? 'var(--wishlist-active)' : 'transparent'}
        stroke={active ? 'var(--wishlist-active)' : 'currentColor'}
        strokeWidth={1.75}
      />
      {typeof count === 'number' && (
        <span className="wishlist-btn__count tabular-nums">{count}</span>
      )}
    </button>
  );
};
