import React from 'react';
import { Minus, Plus } from 'lucide-react';
import './quantity-selector.css';

export interface QuantitySelectorProps {
  /** 현재 수량 */
  value: number;
  /** 수량 변경 콜백 */
  onChange: (value: number) => void;
  /** 최소 수량 (기본값: 1) */
  min?: number;
  /** 최대 수량 (기본값: 99) */
  max?: number;
  /** 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 비활성화 여부 */
  disabled?: boolean;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const handleDecrement = () => {
    if (!disabled && value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (!disabled && value < max) {
      onChange(value + 1);
    }
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <div className={`quantity-selector quantity-selector--${size} ${disabled ? 'quantity-selector--disabled' : ''} ${className}`}>
      <button
        type="button"
        className="quantity-selector__btn quantity-selector__btn--minus"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        aria-label="수량 1 감소"
      >
        <Minus size={iconSizes[size]} strokeWidth={2} />
      </button>
      <span className="quantity-selector__value tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="quantity-selector__btn quantity-selector__btn--plus"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        aria-label="수량 1 증가"
      >
        <Plus size={iconSizes[size]} strokeWidth={2} />
      </button>
    </div>
  );
};
