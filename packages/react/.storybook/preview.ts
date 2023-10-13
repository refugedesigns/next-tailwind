import type { Preview } from '@storybook/react';
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
  },
  decorators: globalDecorators,
  // globalTypes: {
  //   darkMode: {
  //     defaultValue: true, // Enable dark mode by default on all stories
  //   },
  // },
};

export default preview;
