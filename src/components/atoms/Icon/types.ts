import type { SVGAttributes, ReactNode } from 'react';

export type ExactIconName = 
  | 'alarm_12'
  | 'arrow_down_12'
  | 'arrow_left_12'
  | 'arrow_right_12'
  | 'arrow_up_12'
  | 'delete_12'
  | 'minus_12'
  | 'plus_12'
  | 'arrow_star_16'
  | 'celeb_16'
  | 'setup_16'
  | 'arrow_down_16'
  | 'arrow_left_16'
  | 'arrow_left_double_16'
  | 'arrow_right_16'
  | 'arrow_right_double_16_1'
  | 'arrow_right_double_16'
  | 'arrow_up_16'
  | 'cart_16'
  | 'copy_16'
  | 'delete_16'
  | 'minus_16'
  | 'plus_16'
  | 'secret_16'
  | 'share_16'
  | 'wish_16'
  | 'arrow_down_24'
  | 'arrow_up_24'
  | 'close_24'
  | 'download_24'
  | 'wish_24'
  | 'zoom_24'
  | 'download_32'
  | 'bullet_8'
  | 'thumbnail_mobile'
  | 'thumbnail_name_ico_wish_state_active'
  | 'thumbnail_name_ico_wish_state_inactive'
  | 'thumbnail_pc_name_ico_wish_state_active'
  | 'thumbnail_pc_name_ico_wish_state_inactive'
  | 'thumbnail_pc_resource'
  | 'thumbnail_pc'
  | 'thumbnail_type_default_state_active'
  | 'thumbnail_type_default_state_inactive'
  | 'thumbnail_type_hover_state_active'
  | 'thumbnail_type_hover_state_inactive'
  | 'nodata_64';

export type BaseIconName =
  | 'alarm'
  | 'ico_alarm_12'
  | 'arrow_down'
  | 'ico_arrow_down_12'
  | 'arrow_left'
  | 'ico_arrow_left_12'
  | 'arrow_right'
  | 'ico_arrow_right_12'
  | 'arrow_up'
  | 'ico_arrow_up_12'
  | 'delete'
  | 'ico_delete_12'
  | 'minus'
  | 'ico_minus_12'
  | 'plus'
  | 'ico_plus_12'
  | 'arrow_star'
  | 'ico_arrow_star_16'
  | 'celeb'
  | 'ico_celeb_16'
  | 'setup'
  | 'ico_setup_16'
  | 'ico_arrow_down_16'
  | 'ico_arrow_left_16'
  | 'arrow_left_double'
  | 'ico_arrow_left_double_16'
  | 'ico_arrow_right_16'
  | 'arrow_right_double'
  | 'ico_arrow_right_double_16_1'
  | 'ico_arrow_right_double_16'
  | 'ico_arrow_up_16'
  | 'cart'
  | 'ico_cart_16'
  | 'copy'
  | 'ico_copy_16'
  | 'ico_delete_16'
  | 'ico_minus_16'
  | 'ico_plus_16'
  | 'secret'
  | 'ico_secret_16'
  | 'share'
  | 'ico_share_16'
  | 'wish'
  | 'ico_wish_16'
  | 'ico_arrow_down_24'
  | 'ico_arrow_up_24'
  | 'close'
  | 'ico_close_24'
  | 'download'
  | 'ico_download_24'
  | 'ico_wish_24'
  | 'zoom'
  | 'ico_zoom_24'
  | 'ico_download_32'
  | 'bullet'
  | 'ico_bullet_8'
  | 'nodata'
  | 'ico_nodata_64';

export type IconName = ExactIconName | BaseIconName | (string & {});

export type IconSize = 8 | 12 | 16 | 24 | 32 | 64 | '8' | '12' | '16' | '24' | '32' | '64';

export type IconColorToken =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'subtle'
  | 'negative'
  | 'positive'
  | 'point'
  | 'inherit';

export interface IconProps extends SVGAttributes<SVGElement> {
  /** 등록된 아이콘 명칭 (정확한 명칭 또는 접미사 없는 베이스 명칭) */
  name: IconName;
  /** 아이콘 크기 (8, 12, 16, 24, 32, 64) */
  size?: IconSize;
  /** 피그마 시맨틱 아이콘 컬러 토큰 */
  color?: IconColorToken;
  /** 회전 각도 (deg) */
  rotate?: number;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 스크린 리더용 웹 접근성 라벨 */
  'aria-label'?: string;
}

export interface IconDefinition {
  name: string;
  displayName: string;
  defaultSize: number;
  viewBox: string;
  category: 'system' | 'thumbnail';
  style: 'line' | 'fill' | 'component';
  originalFile: string;
  render: () => ReactNode;
}
