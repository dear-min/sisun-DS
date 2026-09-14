import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 버튼 텍스트 또는 컨텐츠 */
  children?: ReactNode;
  /** 버튼 위계 타입 (Figma Type: primary | secondary | tertiary) */
  type?: 'primary' | 'secondary' | 'tertiary';
  /** 기존 코드 호환용 variant (outline은 tertiary로 자동 매핑) */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'sale';
  /** 버튼 크기 (Figma Size: xl | lg | md | sm | xs) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** 버튼 상태 강제 지정 (Figma State: normal | hover | pressed | disabled) */
  state?: 'normal' | 'hover' | 'pressed' | 'disabled';
  /** 아이콘 포함 여부 (Figma Icon) */
  icon?: boolean;
  /** 좌측 아이콘 */
  leftIcon?: ReactNode;
  /** 우측 아이콘 */
  rightIcon?: ReactNode;
  /** 너비 100% 확장 여부 */
  fullWidth?: boolean;
  /** 로딩 스피너 상태 */
  isLoading?: boolean;
  /** HTML 네이티브 버튼 type */
  htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  variant,
  size = 'md',
  state = 'normal',
  icon,
  leftIcon,
  rightIcon,
  fullWidth = false,
  isLoading = false,
  disabled,
  className = '',
  htmlType = 'button',
  ...props
}) => {
  // Figma type 우선, variant 호환 (outline -> tertiary)
  let resolvedType: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'sale' = type;
  if (variant) {
    if (variant === 'outline') resolvedType = 'tertiary';
    else resolvedType = variant;
  }

  const hasIcon = Boolean(icon || leftIcon || rightIcon);
  const isButtonDisabled = Boolean(disabled || isLoading || state === 'disabled');

  const classNames = [
    'btn',
    'fashion-btn', // 호환 클래스
    `btn--${resolvedType}`,
    `fashion-btn--${resolvedType}`,
    `btn--${size}`,
    `fashion-btn--${size}`,
    state !== 'normal' ? `btn--state-${state}` : '',
    hasIcon ? 'btn--has-icon' : '',
    fullWidth ? 'btn--full-width fashion-btn--full-width' : '',
    isLoading ? 'btn--loading fashion-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={htmlType}
      className={classNames}
      disabled={isButtonDisabled}
      {...props}
    >
      {isLoading && <span className="btn__spinner" aria-hidden="true" />}
      {!isLoading && leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__label">{children}</span>
      {!isLoading && rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </button>
  );
};
