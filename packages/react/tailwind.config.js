/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,tsx,ts}',
    '../storybook/**/*.stories.mdx',
    '../storybook/stories/**/*.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
};
