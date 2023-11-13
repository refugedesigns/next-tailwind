import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileNav } from './MobileNav';
import Typography from '../Typography';

const meta = {
  title: 'Components/MobileNav',
  component: MobileNav,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    viewport: {
      defaultViewport: 'iphone6',
    },
    layout: 'fullscreen',
  },
  args: {
    children: (
      <div className="flex w-full items-center justify-center">
        <Typography className="cursor-pointer select-none uppercase">
          Logo
        </Typography>
      </div>
    ),
    open: true,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'minimal', 'error', 'success'],
      },
    },
  },
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'filled',
    color: 'minimal',
  },
};

export const Success: Story = {
  args: {
    variant: 'filled',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    variant: 'filled',
    color: 'error',
  },
};

export const Outlined: Story = {
  args: {
    fullWidth: true,
    variant: 'outlined',
    color: 'success',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    color: 'error',
  },
};
