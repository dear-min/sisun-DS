import type { InputHTMLAttributes } from 'react';

export type InputState = 'normal' | 'focus' | 'active' | 'disabled' | 'readonly' | 'negative';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 피그마 정의 Input State (6종)
   * - normal (default / Inactive): 기본 대기 상태 (플레이스홀더)
   * - focus: 포커스 활성화 상태 (어두운 보더)
   * - active: 값 입력 완료 상태
   * - disabled: 비활성화 상태 (클릭/입력 불가, 그레이 배경)
   * - readonly: 읽기 전용 상태 (값 복사 가능, 그레이 배경)
   * - negative: 유효성 에러 상태 (레드 보더)
   */
  state?: InputState;

  /**
   * 유효성 에러 표시 단축 프로퍼티 (true일 경우 negative 상태 적용)
   */
  error?: boolean;

  /** 추가 커스텀 CSS 클래스명 */
  className?: string;
}
