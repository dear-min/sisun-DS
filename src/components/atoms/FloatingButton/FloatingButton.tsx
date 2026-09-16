import { forwardRef } from 'react';
import type { FloatingButtonProps } from './types';
import { Icon } from '../Icon/Icon';
import './floating-button.css';

/**
 * Atelier Fashion Design System - Floating Button Component
 * 피그마 "00. Common Design System"의 Floating Button 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `floating-btn`
 * - Type: `floating`
 * - Size: `md` (40px) | `sm` (32px)
 * - State: `normal` (default) | `hover` | `pressed`
 */
export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      type = 'floating',
      size = 'md',
      state = 'normal',
      icon = true,
      iconPosition = 'left',
      label,
      disabled = false,
      onClick,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'floating-btn',
      `floating-btn--${size}`,
      state !== 'normal' ? `floating-btn--${state}` : '',
      disabled ? 'floating-btn--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconSize = size === 'sm' ? 12 : 16;

    const renderIcon = () => {
      if (icon === false || icon === null) return null;
      if (icon === true || icon === undefined) {
        return (
          <span className="floating-btn__icon" aria-hidden="true">
            <Icon name="setup_16" size={iconSize} />
          </span>
        );
      }
      return <span className="floating-btn__icon" aria-hidden="true">{icon}</span>;
    };

    const content = label !== undefined ? label : children;

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {iconPosition === 'left' && renderIcon()}
        {content !== undefined && <span className="floating-btn__label">{content}</span>}
        {iconPosition === 'right' && renderIcon()}
      </button>
    );
  }
);

FloatingButton.displayName = 'FloatingButton';
