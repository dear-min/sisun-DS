import type { ReactNode } from 'react';
import './badge.css';

export interface BadgeProps {
  /** 뱃지 텍스트 또는 내용 */
  children: ReactNode;
  /** 뱃지 비주얼 테마 */
  variant?: 'sale' | 'new' | 'best' | 'soldout' | 'exclusive' | 'neutral';
  /** 뱃지 크기 */
  size?: 'sm' | 'md';
  /** 모서리 형태: sharp(직각, 럭셔리) vs pill(둥근 알약형) */
  shape?: 'sharp' | 'pill' | 'square';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'new',
  size = 'md',
  shape = 'sharp',
  className = '',
}) => {
  const classNames = [
    'fashion-badge',
    `fashion-badge--${variant}`,
    `fashion-badge--${size}`,
    `fashion-badge--${shape}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};
