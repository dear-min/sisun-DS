import type { ReactNode, HTMLAttributes, ElementType } from 'react';

export type TagType = 'normal' | 'point' | 'inverse' | 'positive' | 'negative';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** 태그 라벨 명칭 또는 컨텐츠 */
  children: ReactNode;
  /**
   * 피그마 Tag Type (5종)
   * - normal (default): 기본 그레이 배경 + 세컨더리 텍스트
   * - point: 소프트 오렌지(테라코타) 틴트 배경 + 브랜드 메인 포인트 텍스트
   * - inverse: 투명 배경 + 서브틀 텍스트
   * - positive: 소프트 블루 틴트 배경 + 포지티브 성공 블루 텍스트
   * - negative: 소프트 레드 틴트 배경 + 네거티브 에러 레드 텍스트
   */
  type?: TagType;
  /** 추가 커스텀 CSS 클래스 */
  className?: string;
  /** 렌더링할 시맨틱 HTML 태그 (기본: 'span') */
  as?: ElementType;
}
