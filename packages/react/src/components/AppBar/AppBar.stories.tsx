import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppBar from '.';
import Typography from '../Typography';

const navItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Careers',
    href: '#',
  },
];

function NavBar({ ...props }) {
  return (
    <div {...props}>
      {navItems.map((item, index) => (
        <Typography
          key={index}
          className="cursor-pointer select-none"
          variant="paragraph"
        >
          {item.name}
        </Typography>
      ))}
    </div>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  args: {
    children: <NavBar className="flex space-x-4 items-center justify-center" />,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
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
} satisfies Meta<typeof AppBar>;

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

export const Error: Story = {
  args: {
    variant: 'filled',
    color: 'error',
  },
};

export const Success: Story = {
  args: {
    variant: 'filled',
    color: 'success',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    color: 'minimal',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'filled',
    color: 'success',
  },
  parameters: {
    layout: 'fullwidth',
  },
};
export const OutlinedFullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'outlined',
    color: 'success',
  },
  parameters: {
    layout: 'fullwidth',
  },
};

export const NoShadow: Story = {
  args: {
    variant: 'filled',
    color: 'error',
    shadow: false,
  },
};

export const Blurred: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
    shadow: false,
    blurred: true,
  },
};
