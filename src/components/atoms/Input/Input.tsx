import React, { forwardRef } from 'react';
import type { InputProps } from './types';
import './input.css';

/**
 * Atelier Fashion Design System - Input Component
 * 피그마 "00. Common Design System"의 Input 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `input`
 * - State: `normal` (default) | `focus` | `active` | `disabled` | `readonly` | `negative`
 * - Token: 피그마 Body Small(14px Regular) 및 Component Input 토큰 1:1 바인딩
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = 'normal',
      error = false,
      disabled,
      readOnly,
      className = '',
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const isEffectiveError = error || state === 'negative';
    const isEffectiveDisabled = disabled || state === 'disabled';
    const isEffectiveReadOnly = readOnly || state === 'readonly';

    const classNames = [
      'input',
      `input--${state}`,
      isEffectiveError ? 'input--error' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <input
        ref={ref}
        type={type}
        className={classNames}
        disabled={isEffectiveDisabled}
        readOnly={isEffectiveReadOnly}
        aria-invalid={isEffectiveError ? 'true' : undefined}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
