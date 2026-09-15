import { useState } from 'react';
import type { ButtonHTMLAttributes, ReactNode, FC, MouseEvent } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconName } from '../Icon/types';
import './icon-button.css';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onToggle'> {
  /** 피그마 버튼 위계 타입 (Figma Type: icon) */
  type?: 'icon';
  /** 피그마 컴포넌트 상태 강제 지정 (Figma State: normal | hover | active | disabled) */
  state?: 'normal' | 'hover' | 'active' | 'disabled';
  /** 버튼 크기 (Figma Size: xl | lg | md | sm | xs) */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /** 활성화 상태 제어 (controlled) */
  isActive?: boolean;
  /** 초기 활성화 상태 (uncontrolled) */
  initialActive?: boolean;
  /** 활성화/비활성화 토글 핸들러 */
  onToggle?: (active: boolean) => void;
  /** 등록된 피그마 아이콘 이름 (기본값: 'wish') */
  name?: IconName;
  /** 커스텀 아이콘 직접 주입 */
  icon?: ReactNode;
  /** 웹 접근성 스크린리더용 라벨 (필수 권장) */
  'aria-label'?: string;
}

/**
 * 피그마 기본 위시(Heart) 아이콘 SVG 렌더러
 * - normal / hover: 아웃라인 스트로크
 * - active: 브랜드 포인트 오렌지 솔리드 채움
 */
const DefaultHeartIcon: FC<{ active: boolean; sizePx: number }> = ({ active, sizePx }) => {
  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {active ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99525 3.66357C6.60001 1.94217 4.26183 1.37039 2.50828 2.84418C0.754748 4.31798 0.507879 6.78211 1.88494 8.52516C3.02988 9.97439 6.48408 12.8087 7.61971 13.798C7.74676 13.9087 7.81032 13.964 7.88438 13.9857C7.94906 14.0048 8.01983 14.0048 8.08451 13.9857C8.15857 13.964 8.22213 13.9087 8.34918 13.798C9.48479 12.8087 12.9606 9.97439 14.1055 8.52516C15.4825 6.78211 15.2658 4.30248 13.4821 2.84418C11.6985 1.3859 9.40001 1.94217 7.99525 3.66357Z"
          fill="var(--color-icon-point)"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99525 3.66357C6.60001 1.94217 4.26183 1.37039 2.50828 2.84418C0.754748 4.31798 0.507879 6.78211 1.88494 8.52516C3.02988 9.97439 6.48408 12.8087 7.61971 13.798C7.74676 13.9087 7.81032 13.964 7.88438 13.9857C7.94906 14.0048 8.01983 14.0048 8.08451 13.9857C8.15857 13.964 8.22213 13.9087 8.34918 13.798C9.48479 12.8087 12.9606 9.97439 14.1055 8.52516C15.4825 6.78211 15.2658 4.30248 13.4821 2.84418C11.6985 1.3859 9.40001 1.94217 7.99525 3.66357Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export const IconButton: FC<IconButtonProps> = ({
  type = 'icon',
  state = 'normal',
  size = 'xl',
  isActive: controlledActive,
  initialActive = false,
  onToggle,
  name,
  icon,
  className = '',
  disabled,
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [internalActive, setInternalActive] = useState(initialActive);

  const isExplicitActive = state === 'active';
  const effectiveActive = controlledActive !== undefined 
    ? controlledActive 
    : (isExplicitActive || internalActive);

  const isButtonDisabled = Boolean(disabled || state === 'disabled');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isButtonDisabled) return;
    
    if (controlledActive === undefined && state === 'normal') {
      const nextActive = !internalActive;
      setInternalActive(nextActive);
      onToggle?.(nextActive);
    } else {
      onToggle?.(!effectiveActive);
    }

    onClick?.(e);
  };

  const iconSizes = {
    xl: 20,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12,
  };

  const isWish = !name || name === 'wish' || name.startsWith('wish_');

  const classNames = [
    'icon-btn',
    `icon-btn--${size}`,
    state !== 'normal' ? `icon-btn--state-${state}` : 'icon-btn--state-normal',
    effectiveActive ? 'icon-btn--active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const defaultLabel = isWish 
    ? (effectiveActive ? '관심 상품에서 제거' : '관심 상품에 추가')
    : '아이콘 버튼';

  return (
    <button
      type="button"
      data-type={type}
      className={classNames}
      disabled={isButtonDisabled}
      onClick={handleClick}
      aria-pressed={effectiveActive}
      aria-label={ariaLabel || defaultLabel}
      {...props}
    >
      <span className={`icon-btn__icon ${isWish && effectiveActive ? 'icon-btn__icon--wish-active' : ''}`}>
        {icon ? (
          icon
        ) : isWish ? (
          <DefaultHeartIcon active={effectiveActive} sizePx={iconSizes[size]} />
        ) : (
          <Icon
            name={name}
            size={iconSizes[size] as 12 | 16 | 24}
            color={effectiveActive ? 'point' : 'inherit'}
          />
        )}
      </span>
    </button>
  );
};
