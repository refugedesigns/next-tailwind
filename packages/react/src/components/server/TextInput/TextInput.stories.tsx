import type { Meta, StoryObj } from '@storybook/react';
import { BsArrowRight } from 'react-icons/bs';

import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Server/TextInput',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/vFkueIQlwz9KdoPGqrDNns/Evergreen-v6-(Community)-(Community)?type=design&node-id=2768%3A10540&mode=design&t=ykI81oXt38FxyzQL-1',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  args: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'minimal', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};

export const Filled: Story = {};
Filled.args = {
  variant: 'filled',
  color: 'primary',
};

export const Standard: Story = {};
Standard.args = {
  variant: 'standard',
  color: 'primary',
};
export const Default: Story = {};
Default.args = {
  variant: 'default',
  color: 'minimal',
};

export const WithIcon: Story = {};
WithIcon.args = {
  icon: <BsArrowRight />,
  color: 'success',
};

export const Large: Story = {};
Large.args = {
  size: 'lg',
};
export const Required: Story = {};
Required.args = {
  required: true,
  color: 'error'
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    color: 'secondary'
  },
}
