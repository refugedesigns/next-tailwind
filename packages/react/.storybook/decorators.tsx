import React from 'react';
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

const WithState: Decorator = (Story, context) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return <Story {...context} openMenu={openMenu} setOpenMenu={setOpenMenu} />;
};

const WithTheme: Decorator = (Story, context) => {
  const [theme, setTheme] = React.useState('light');

  return (
    <div
      data-mode={theme}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <Story {...context} />
    </div>
  )
}

export const globalDecorators: Decorator[] = [withTheme];
