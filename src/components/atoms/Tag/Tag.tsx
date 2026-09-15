import React from 'react';
import type { TagProps } from './types';
import './tag.css';

/**
 * Atelier Fashion Design System - Tag Component
 * 피그마 "00. Common Design System"의 Tag 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `tag`
 * - Type: `normal` (default) | `point` | `inverse` | `positive` | `negative`
 * - Token: 피그마 Typography(Caption Small 12px Medium -0.02em) 및 Color 1:1 바인딩
 */
export const Tag: React.FC<TagProps> = ({
  children,
  type = 'normal',
  className = '',
  as: Component = 'span',
  ...rest
}) => {
  const classNames = [
    'tag',
    `tag--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};
