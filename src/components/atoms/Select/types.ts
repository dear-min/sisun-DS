import type { ReactNode, MouseEvent } from 'react';

/**
 * 피그마 "00. Common Design System" Select Size 규격
 * - md: 높이 40px, 패딩 0 12px, 폰트 14px Regular
 * - sm: 높이 32px, 패딩 0 8px, 폰트 12px Regular/Medium
 */
export type SelectSize = 'md' | 'sm';

/**
 * 피그마 Select Trigger State 4종
 * - normal: 기본 대기 상태 (플레이스홀더 회색)
 * - active: 값 선택 완료 상태 (기본 텍스트 검정)
 * - disabled: 비활성화 상태 (비활성 배경 #f5f5f5, 비활성 텍스트 #b2b2b2)
 * - readonly: 읽기 전용 상태 (배경 #f5f5f5, 기본 보더 #d9d9d9, 기본 텍스트 #000000)
 */
export type SelectState = 'normal' | 'active' | 'disabled' | 'readonly';

/**
 * 피그마 Select Option Item State 4종
 * - normal: 기본 옵션 텍스트
 * - disabled: 선택 불가 옵션 (#f5f5f5 배경, #b2b2b2 텍스트)
 * - button: 우측 액션 버튼/링크 ("재입고 알림 >") 포함 옵션
 * - message: 하단 보조 안내 문구 ("안내 메세지") 포함 옵션
 */
export type SelectOptionState = 'normal' | 'disabled' | 'button' | 'message';

/**
 * 개별 옵션 항목 인터페이스
 */
export interface SelectOption {
  value: string;
  label: string;
  state?: SelectOptionState;
  disabled?: boolean;
  message?: string;
  buttonText?: string;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
}

/**
 * Select 컴포넌트 Props 인터페이스
 */
export interface SelectProps {
  /** 컴포넌트 크기 (md: 40px, sm: 32px) */
  size?: SelectSize;
  /** 트리거 상태 (normal | active | disabled | readonly) */
  state?: SelectState;
  /** 피그마 Box 속성: true = 닫힌 셀렉트 박스, false = 펼쳐진 드롭다운 메뉴 */
  box?: boolean;
  /** 미선택 시 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 현재 선택된 값 */
  value?: string;
  /** 초기 기본 선택값 */
  defaultValue?: string;
  /** 드롭다운에 표시할 옵션 목록 */
  options?: SelectOption[];
  /** 드롭다운 열림 상태 (Controlled) */
  open?: boolean;
  /** 초기 드롭다운 열림 상태 (Uncontrolled) */
  defaultOpen?: boolean;
  /** 펼쳐진 드롭다운 상단 헤더 타이틀 (예: '사이즈 선택', '선택') */
  headerTitle?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 읽기 전용 여부 */
  readOnly?: boolean;
  /** 옵션 선택 변경 이벤트 핸들러 */
  onChange?: (value: string, option: SelectOption) => void;
  /** 추가 커스텀 CSS 클래스명 */
  className?: string;
  /** 자식 요소 */
  children?: ReactNode;
}
