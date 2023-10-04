import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../react/src/components/server/Buttons/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Server/Button',
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
