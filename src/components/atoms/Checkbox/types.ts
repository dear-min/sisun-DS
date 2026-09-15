import type { InputHTMLAttributes, ReactNode, ChangeEvent } from 'react';

/**
 * 피그마 "00. Common Design System" Check Box Type 규격
 * - unchecked: 미체크 상태 (기본 1px 외곽선 + 화이트 배경)
 * - checked: 체크 상태 (솔리드 블랙 배경 + 화이트 체크 아이콘)
 */
export type CheckboxType = 'unchecked' | 'checked';

/**
 * Checkbox 컴포넌트 Props 인터페이스
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** 피그마 명세 Type (unchecked | checked, checked prop과 상호 호환) */
  type?: CheckboxType;
  /** 체크 선택 여부 (Controlled) */
  checked?: boolean;
  /** 초기 기본 체크 선택 여부 (Uncontrolled) */
  defaultChecked?: boolean;
  /** 부분 선택(미정) 상태 여부 */
  indeterminate?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 체크박스 우측 라벨 텍스트 */
  label?: ReactNode;
  /** 체크박스 고유 값 */
  value?: string | number;
  /** 체크박스 그룹 식별자 */
  name?: string;
  /** 상태 변경 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 추가 커스텀 클래스명 */
  className?: string;
}

/**
 * CheckboxGroup 컴포넌트 Props 인터페이스
 */
export interface CheckboxGroupProps {
  /** 현재 선택된 체크박스 값 배열 (Controlled) */
  value?: (string | number)[];
  /** 초기 기본 선택값 배열 (Uncontrolled) */
  defaultValue?: (string | number)[];
  /** 그룹 식별자 이름 */
  name?: string;
  /** 그룹 전체 비활성화 여부 */
  disabled?: boolean;
  /** 체크박스 선택 변경 핸들러 */
  onChange?: (values: (string | number)[]) => void;
  /** 레이아웃 방향 (vertical: 세로 배열, horizontal: 가로 배열) */
  direction?: 'vertical' | 'horizontal';
  /** 자식 체크박스 컴포넌트들 */
  children?: ReactNode;
  /** 추가 커스텀 클래스명 */
  className?: string;
}
