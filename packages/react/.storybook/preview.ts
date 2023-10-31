import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { globalDecorators } from './decorators';
import '../styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '1024px',
          },
          type: 'desktop',
        },
      },
    },
  },
  decorators: globalDecorators,

  // globalTypes: {
  //   darkMode: {
  //     defaultValue: true, // Enable dark mode by default on all stories
  //   },
  // },
};

export default preview;
