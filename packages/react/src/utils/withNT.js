const merge = require('deepmerge');
const colors = require('../theme/base/colors');
const typography = require('../theme/base/typography');
const shadows = require('../theme/base/shadows');
const breakpoints = require('../theme/base/breakpoints');

const nextTailwindConfig = {
  darkMode: 'class',
  content: [
    './node_modules/@eras-library/react/components/**/*.{jsx,js,tsx,ts}',
    './node_modules/@eras-library/react/themes/**/*.{jsx,js,tsx,ts}',
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
};

module.exports = function (tailwindConfig) {
  const themeFont = nextTailwindConfig.theme.fontFamily;

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily;

    themeFont.sans = sans || themeFont.sans;
    themeFont.serif = serif || themeFont.serif;
    themeFont.body = body || themeFont.body;
  }

  return merge(nextTailwindConfig, { ...tailwindConfig });
};
