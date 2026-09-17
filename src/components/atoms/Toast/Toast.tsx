import React, { forwardRef } from 'react';
import type { ToastProps } from './types';
import './toast.css';

/**
 * 기본 이미지 플레이스홀더 아이콘 (Figma Image Placeholder SVG)
 */
const DefaultThumbnailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

/**
 * 원형 카운트다운 타이머 배지 컴포넌트
 */
const CountdownBadge: React.FC<{ seconds?: number }> = ({ seconds = 2 }) => {
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  // 3/4 채워진 시안 형태 재현
  const dashoffset = circumference * 0.25;

  return (
    <div className="toast__timer" aria-label={`남은 시간 ${seconds}초`}>
      <svg className="toast__timer-svg" viewBox="0 0 22 22">
        <circle className="toast__timer-track" cx="11" cy="11" r={radius} />
        <circle
          className="toast__timer-progress"
          cx="11"
          cy="11"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
      </svg>
      <span className="toast__timer-number">{seconds}</span>
    </div>
  );
};

/**
 * Atelier Fashion Design System - Toast Component
 * 피그마 "00. Common Design System"의 Toast 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `toast`
 * - Variants:
 *   - Type: `marketing` (default) | `feedback`
 *   - Marketing: 썸네일 + 서브문구 + 메인문구(최대 2줄) + 원형 타이머 배지
 *   - Feedback: 단일 텍스트 피드백 알림 (화이트 텍스트)
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      type = 'marketing',
      message,
      subMessage = '서브 문구',
      thumbnail,
      timer = 2,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'toast',
      `toast--${type}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const mainContent = message ?? children;

    if (type === 'feedback') {
      return (
        <div ref={ref} className={classNames} role="status" aria-live="polite" {...rest}>
          <div className="toast__message">{mainContent}</div>
        </div>
      );
    }

    // Type: marketing (default)
    return (
      <div ref={ref} className={classNames} role="status" aria-live="polite" {...rest}>
        <div className="toast__thumbnail">
          {typeof thumbnail === 'string' ? (
            <img src={thumbnail} alt="" />
          ) : (
            thumbnail ?? <DefaultThumbnailIcon />
          )}
        </div>

        <div className="toast__content">
          {subMessage && <div className="toast__sub">{subMessage}</div>}
          <div className="toast__main">{mainContent}</div>
        </div>

        {timer !== undefined && timer > 0 && <CountdownBadge seconds={timer} />}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
