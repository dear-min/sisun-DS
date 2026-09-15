import type { Meta, StoryObj } from '@storybook/react';
import { ColorShowcase } from './TokensShowcase';

const meta: Meta<typeof ColorShowcase> = {
  title: 'Foundations/Design Tokens/Color',
  component: ColorShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '피그마(Figma) `00. Common Design System`의 `Semantic / Color` 컬렉션에 정의된 48개 시맨틱 색상 베리어블(Text 11종, Border 10종, Background 8종, Icon 9종, Overlay 6종, Primary 4종)의 전용 명세서입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorShowcase>;

/**
 * 전체 48개 시맨틱 컬러 토큰 통합 뷰
 */
export const Overview: Story = {
  args: {
    subCategory: 'all',
  },
};

/**
 * 텍스트 전용 컬러 (11 Variables: Default, Subtle, Secondary, Tertiary, Disabled, Inverse, Error, Success, Point 3종)
 */
export const TextColors: Story = {
  args: {
    subCategory: 'text',
  },
};

/**
 * 보더 및 외곽선 전용 컬러 (10 Variables: Default, Secondary, Tertiary, Subtle, Disabled, Negative, Positive, Point 3종)
 */
export const BorderColors: Story = {
  args: {
    subCategory: 'border',
  },
};

/**
 * 배경 및 서피스 전용 컬러 (8 Variables: Default, Secondary, Tertiary, Disabled, Point 4종)
 */
export const BackgroundColors: Story = {
  args: {
    subCategory: 'background',
  },
};

/**
 * 아이콘 전용 컬러 (9 Variables: Default, Secondary, Tertiary, Disabled, Inverse, Subtle, Negative, Positive, Point)
 */
export const IconColors: Story = {
  args: {
    subCategory: 'icon',
  },
};

/**
 * 오버레이 및 딤드 전용 컬러 (6 Variables: Black-Light, Black-Balance, Black-Strong, White-Light, White-Balance, White-Strong)
 */
export const OverlayColors: Story = {
  args: {
    subCategory: 'overlay',
  },
};

/**
 * 브랜드 시그니처 프라이머리 컬러 (4 Variables: Default, Secondary, Tertiary, Subtle)
 */
export const PrimaryBrand: Story = {
  args: {
    subCategory: 'primary',
  },
};
