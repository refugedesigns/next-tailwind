/** @type {import('tailwindcss').Config} */
const withNT = require('../react/src/utils/withNT');

module.exports = withNT({
  darkMode: 'class',
  content: [
    './src/**/*.{jsx,js,tsx,ts}',
    './storybook/**/*.stories.mdx',
    './storybook/stories/**/*.mdx',
    './storybook/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  plugins: [],
  theme: {},
});
