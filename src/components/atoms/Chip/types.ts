import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

/**
 * 피그마 "00. Common Design System" Chip Type 규격
 * - unchecked: 미선택 상태 (기본 1px 외곽선 + 화이트 배경)
 * - checked: 선택 상태 (솔리드 블랙 1px 외곽선 + 화이트 배경)
 */
export type ChipType = 'unchecked' | 'checked';

/**
 * Chip 컴포넌트 Props 인터페이스
 */
export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onChange'> {
  /** 피그마 명세 Type (unchecked | checked, checked prop과 상호 호환) */
  type?: ChipType;
  /** 선택 여부 (Controlled) */
  checked?: boolean;
  /** 초기 기본 선택 여부 (Uncontrolled) */
  defaultChecked?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 아이콘 표시 여부 (true 시 기본 alarm_12 아이콘) 또는 커스텀 아이콘 ReactNode */
  icon?: boolean | ReactNode;
  /** 아이콘 위치 ('left' | 'right', 기본값: 'left') */
  iconPosition?: 'left' | 'right';
  /** 칩 라벨 텍스트 */
  label?: ReactNode;
  /** 칩 고유 식별 값 (ChipGroup 내 사용) */
  value?: string | number;
  /** 클릭/선택 토글 핸들러 */
  onToggle?: (checked: boolean) => void;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 클릭 핸들러 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** 추가 커스텀 클래스명 */
  className?: string;
  /** 자식 엘리먼트 */
  children?: ReactNode;
}

/**
 * ChipGroup 컴포넌트 Props 인터페이스
 */
export interface ChipGroupProps {
  /** 현재 선택된 칩 값 (다중 선택 시 배열, 단일 선택 시 단일 값) */
  value?: (string | number)[] | string | number;
  /** 초기 기본 선택값 */
  defaultValue?: (string | number)[] | string | number;
  /** 다중 선택 모드 여부 (기본값: true) */
  multiple?: boolean;
  /** 그룹 전체 비활성화 여부 */
  disabled?: boolean;
  /** 칩 선택 변경 핸들러 */
  onChange?: (values: any) => void;
  /** 자식 칩 컴포넌트들 */
  children?: ReactNode;
  /** 추가 커스텀 클래스명 */
  className?: string;
}
