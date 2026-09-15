import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/tokens/index.css';

const customViewports = {
  mobileSmall: {
    name: 'Mobile (360px - Galaxy S24)',
    styles: {
      width: '360px',
      height: '780px',
    },
    type: 'mobile',
  },
  mobileStandard: {
    name: 'Mobile (393px - iPhone 15/16)',
    styles: {
      width: '393px',
      height: '852px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet (820px - iPad Air)',
    styles: {
      width: '820px',
      height: '1180px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop (1440px - Standard Fashion Web)',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Fashion Theme (Light Editorial vs Midnight Dark)',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light (Editorial White)' },
          { value: 'dark', title: 'Dark (Midnight Luxury)' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'light';
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', selectedTheme);
      }, [selectedTheme]);

      return (
        <div data-theme={selectedTheme} style={{ minHeight: '100%', transition: 'background-color 0.25s, color 0.25s' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Design Tokens', ['Overview', 'Typography', 'Number', 'Color', 'Icon']],
          'Atoms',
          ['Button', 'Icon Button', 'Input', 'Tag', 'Badge', 'Price', 'Swatch', 'Wishlist Button'],
          'Molecules',
          'Organisms',
        ],
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'responsive',
    },
    backgrounds: {
      default: 'fashion-white',
      values: [
        { name: 'fashion-white', value: '#ffffff' },
        { name: 'warm-ivory', value: '#fcfbf9' },
        { name: 'warm-sand', value: '#f5f2eb' },
        { name: 'dark-luxury', value: '#0f0f10' },
        { name: 'light-grey', value: '#f4f4f5' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;