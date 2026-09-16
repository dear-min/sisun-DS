import type { FC, CSSProperties } from 'react';
import type { IconProps, IconDefinition } from './types';
import { iconRegistry } from './iconData';
import './icon.css';

/**
 * 아이콘 이름 및 크기를 기반으로 최적의 아이콘 정의를 검색하는 헬퍼 함수
 */
function resolveIcon(name: string, requestedSize?: number): IconDefinition | undefined {
  // 1. 레지스트리에 정확히 일치하는 키가 있는 경우
  if (iconRegistry[name]) {
    return iconRegistry[name];
  }

  // 2. 'ico_' 접두사가 붙어있는 경우 제거 후 검색
  const cleanName = name.replace(/^ico_/, '');
  if (iconRegistry[cleanName]) {
    return iconRegistry[cleanName];
  }

  // 3. 베이스 이름 + 요청된 크기 접미사 검색 (예: name='cart', size=16 -> 'cart_16')
  if (requestedSize) {
    const withSize = `${cleanName}_${requestedSize}`;
    if (iconRegistry[withSize]) {
      return iconRegistry[withSize];
    }
  }

  // 4. 베이스 이름 매칭 (예: 'arrow_down' -> 'arrow_down_16' 또는 사용 가능한 첫 번째 크기)
  const matchingKeys = Object.keys(iconRegistry).filter(k => 
    k === cleanName || k.startsWith(`${cleanName}_`)
  );

  if (matchingKeys.length > 0) {
    // 요청된 크기와 가장 가까운 항목 우선 선택
    if (requestedSize) {
      const exactOrClosest = matchingKeys.find(k => k.endsWith(`_${requestedSize}`));
      if (exactOrClosest) return iconRegistry[exactOrClosest];
    }
    return iconRegistry[matchingKeys[0]];
  }

  return undefined;
}

export const Icon: FC<IconProps> = ({
  name,
  size,
  color = 'inherit',
  rotate,
  className = '',
  style,
  'aria-label': ariaLabel,
  ...restProps
}) => {
  const numericSize = size ? Number(size) : undefined;
  const iconDef = resolveIcon(name, numericSize);

  if (!iconDef) {
    console.warn(`[Icon] Icon "${name}" was not found in the Atelier Design System registry.`);
    return null;
  }

  const effectiveSize = numericSize || iconDef.defaultSize;
  const isStandardSize = [8, 12, 16, 24, 32, 64].includes(effectiveSize);

  const classNames = [
    'ds-icon',
    `ds-icon--${iconDef.name}`,
    isStandardSize ? `ds-icon--size-${effectiveSize}` : '',
    `ds-icon--color-${color}`,
    className,
  ].filter(Boolean).join(' ');

  const combinedStyles: CSSProperties = {
    ...style,
    transform: rotate ? `rotate(${rotate}deg)` : style?.transform,
  };

  // 비표준 크기이거나 썸네일(직사각형 등)인 경우 인라인 스타일로 종횡비 보장
  if (!isStandardSize) {
    const [, , vbWidth, vbHeight] = iconDef.viewBox.split(' ').map(Number);
    if (vbWidth && vbHeight) {
      combinedStyles.width = `${vbWidth}px`;
      combinedStyles.height = `${vbHeight}px`;
    } else {
      combinedStyles.width = `${effectiveSize}px`;
      combinedStyles.height = `${effectiveSize}px`;
    }
  }

  return (
    <span
      className={classNames}
      style={combinedStyles}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <svg
        viewBox={iconDef.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        {...restProps}
      >
        {iconDef.render()}
      </svg>
    </span>
  );
};

export default Icon;
