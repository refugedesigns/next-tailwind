import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vFkueIQlwz9KdoPGqrDNns/Evergreen-v6-(Community)-(Community)?type=design&node-id=2658%3A10459&mode=design&t=cVZdkWGdpAxgtq2i-1',
    },
  },
  args: {
    children: 'Button',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};
export const Minimal: Story = {
  args: {
    color: 'minimal',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
export const Elevated: Story = {
  args: {
    elevated: true,
  },
};

export const Capsule: Story = {
  args: {
    capsule: true,
  },
};

export const NoRipple: Story = {
  args: {
    ripple: false,
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: React.createElement(BsArrowRight, { className: '' }),
  },
};
export const EndIcon: Story = {
  args: {
    endIcon: React.createElement(BsArrowRight, { className: '' }),
    color: 'primary',
    variant: 'outlined',
  },
};
export const Loading: Story = {
  args: {
    startIcon: React.createElement(BsArrowRight, { className: '' }),
    color: 'error',
    loading: true,
  },
};
