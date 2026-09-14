import React from 'react';
import './swatch.css';

export interface ColorOption {
  id: string;
  name: string;
  colorHex: string;
  isSoldOut?: boolean;
}

export interface ColorSwatchGroupProps {
  options: ColorOption[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({
  options,
  selectedId,
  onSelect,
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`color-swatch-group color-swatch-group--${size} ${className}`} role="radiogroup">
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            className={`color-swatch-chip ${isSelected ? 'color-swatch-chip--selected' : ''} ${
              opt.isSoldOut ? 'color-swatch-chip--soldout' : ''
            }`}
            onClick={() => !opt.isSoldOut && onSelect?.(opt.id)}
            title={opt.name + (opt.isSoldOut ? ' (품절)' : '')}
            aria-label={`${opt.name}${opt.isSoldOut ? ' - 품절' : ''}`}
            aria-checked={isSelected}
            role="radio"
            disabled={opt.isSoldOut}
          >
            <span className="color-swatch-chip__fill" style={{ backgroundColor: opt.colorHex }} />
            {opt.isSoldOut && <span className="color-swatch-chip__strike" />}
          </button>
        );
      })}
    </div>
  );
};

export interface SizeOption {
  id: string;
  label: string;
  isSoldOut?: boolean;
}

export interface SizeSwatchGroupProps {
  options: SizeOption[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export const SizeSwatchGroup: React.FC<SizeSwatchGroupProps> = ({
  options,
  selectedId,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`size-swatch-group ${className}`} role="radiogroup">
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            className={`size-swatch-chip ${isSelected ? 'size-swatch-chip--selected' : ''} ${
              opt.isSoldOut ? 'size-swatch-chip--soldout' : ''
            }`}
            onClick={() => !opt.isSoldOut && onSelect?.(opt.id)}
            aria-label={`${opt.label}${opt.isSoldOut ? ' - 품절' : ''}`}
            aria-checked={isSelected}
            role="radio"
            disabled={opt.isSoldOut}
          >
            <span className="size-swatch-chip__label">{opt.label}</span>
            {opt.isSoldOut && <span className="size-swatch-chip__strike" />}
          </button>
        );
      })}
    </div>
  );
};
