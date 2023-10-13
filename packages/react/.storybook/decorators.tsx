import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Decorator } from '@storybook/react';

const withTheme: Decorator = withThemeByDataAttribute({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
  attributeName: 'data-mode',
});

export const globalDecorators: Decorator[] = [withTheme];
