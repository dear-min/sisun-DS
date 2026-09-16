import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import './filter-chip.css';

export interface FilterChipProps {
  /** 칩 텍스트 */
  label: string;
  /** 활성화(선택) 여부 */
  selected?: boolean;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 카테고리별 상품 수 표기 (선택) */
  count?: number;
  /** 좌측 아이콘 또는 색상 도트 */
  icon?: ReactNode;
  /** 크기 */
  size?: 'sm' | 'md';
  /** 비활성화 여부 */
  disabled?: boolean;
  className?: string;
}

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  selected = false,
  onClick,
  count,
  icon,
  size = 'md',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`filter-chip filter-chip--${size} ${selected ? 'filter-chip--selected' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {selected ? (
        <Check size={14} className="filter-chip__check" strokeWidth={2.5} />
      ) : (
        icon && <span className="filter-chip__icon">{icon}</span>
      )}
      <span className="filter-chip__label">{label}</span>
      {typeof count === 'number' && (
        <span className="filter-chip__count tabular-nums">({count})</span>
      )}
    </button>
  );
};
