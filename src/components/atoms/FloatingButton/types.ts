import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

/**
 * 피그마 "00. Common Design System" Floating Button 크기 규격
 * - md: Medium (높이 40px, 패딩 16px, 폰트 14px)
 * - sm: Small (높이 32px, 패딩 12px, 폰트 13px)
 */
export type FloatingButtonSize = 'md' | 'sm';

/**
 * 피그마 "00. Common Design System" Floating Button 상태 규격
 * - normal: 기본 대기 상태 (소프트 그림자)
 * - hover: 마우스 호버 상태 (엘리베이션 상승, 그림자 깊어짐)
 * - pressed: 클릭 눌림 상태 (회색 채움 피드백)
 */
export type FloatingButtonState = 'normal' | 'hover' | 'pressed';

/**
 * FloatingButton 컴포넌트 Props 인터페이스
 */
export interface FloatingButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 피그마 명세 버튼 위계 타입 ('floating') */
  type?: 'floating';
  /** 버튼 크기 (md: 40px, sm: 32px) */
  size?: FloatingButtonSize;
  /** 버튼 인터랙션 상태 강제 지정 (normal | hover | pressed) */
  state?: FloatingButtonState;
  /** 아이콘 표시 여부 (true 시 기본 setup_16 태그 아이콘) 또는 커스텀 아이콘 ReactNode */
  icon?: boolean | ReactNode;
  /** 아이콘 위치 ('left' | 'right', 기본값: 'left') */
  iconPosition?: 'left' | 'right';
  /** 버튼 라벨 텍스트 */
  label?: ReactNode;
  /** 클릭 핸들러 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** 추가 커스텀 클래스명 */
  className?: string;
  /** 자식 엘리먼트 */
  children?: ReactNode;
}
