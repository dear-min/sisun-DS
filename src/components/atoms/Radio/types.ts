import type { InputHTMLAttributes, ReactNode, ChangeEvent } from 'react';

/**
 * 피그마 "00. Common Design System" Radio Type 규격
 * - unchecked: 미선택 상태 (기본 1px 외곽선)
 * - checked: 선택 상태 (볼드 링 + 센터)
 */
export type RadioType = 'unchecked' | 'checked';

/**
 * Radio 컴포넌트 Props 인터페이스
 */
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** 피그마 명세 Type (unchecked | checked, checked prop과 상호 호환) */
  type?: RadioType;
  /** 체크 선택 여부 (Controlled) */
  checked?: boolean;
  /** 초기 기본 체크 선택 여부 (Uncontrolled) */
  defaultChecked?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 라디오 버튼 우측 라벨 텍스트 */
  label?: ReactNode;
  /** 라디오 고유 값 */
  value?: string | number;
  /** 라디오 그룹 식별자 */
  name?: string;
  /** 상태 변경 이벤트 핸들러 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 추가 커스텀 클래스명 */
  className?: string;
}

/**
 * RadioGroup 컴포넌트 Props 인터페이스
 */
export interface RadioGroupProps {
  /** 현재 선택된 라디오 값 */
  value?: string | number;
  /** 초기 기본 선택값 */
  defaultValue?: string | number;
  /** 그룹 식별자 이름 */
  name?: string;
  /** 그룹 전체 비활성화 여부 */
  disabled?: boolean;
  /** 라디오 선택 변경 핸들러 */
  onChange?: (value: string | number) => void;
  /** 레이아웃 방향 (vertical: 세로 배열, horizontal: 가로 배열) */
  direction?: 'vertical' | 'horizontal';
  /** 자식 라디오 컴포넌트들 */
  children?: ReactNode;
  /** 추가 커스텀 클래스명 */
  className?: string;
}
