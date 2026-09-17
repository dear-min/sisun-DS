import type { ReactNode, HTMLAttributes } from 'react';

export type ToastType = 'marketing' | 'feedback';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 피그마 정의 Toast Type (2종)
   * - `marketing` (default): 이미지 썸네일 + 서브 문구 + 오렌지 포인트 메인 문구 + 타이머 배지
   * - `feedback`: 단일 텍스트 피드백 결과 알림
   */
  type?: ToastType;

  /**
   * 토스트 메인 텍스트
   * - marketing: 하단 오렌지 포인트 텍스트 (최대 2줄)
   * - feedback: 전체 피드백 메시지
   */
  message?: ReactNode;

  /**
   * 마케팅 토스트 상단 보조 문구 (marketing 전용)
   */
  subMessage?: ReactNode;

  /**
   * 좌측 썸네일 이미지 URL 또는 커스텀 노드 (marketing 전용)
   */
  thumbnail?: ReactNode;

  /**
   * 우측 상단 카운트다운 타이머 초 표시 (기본값: 2, marketing 전용)
   */
  timer?: number;

  /**
   * children (message 대신 전달 가능)
   */
  children?: ReactNode;

  /**
   * 추가 커스텀 CSS 클래스
   */
  className?: string;
}
