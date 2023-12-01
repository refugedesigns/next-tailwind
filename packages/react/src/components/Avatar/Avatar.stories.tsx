import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AiFillAppstore } from 'react-icons/ai';
import { GrBar } from 'react-icons/gr';
import Avatar from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {},
  },
  args: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  args: {
    src: 'https://i.pravatar.cc/300?img=1',
    alt: 'Avatar',
  },
  render: (args) => {
    return (
      <div className="flex max-w-sm items-end">
        <Avatar {...args} size="xs" />
        <Avatar {...args} size="sm" />
        <Avatar {...args} size="md" />
        <Avatar {...args} size="lg" />
        <Avatar {...args} size="xl" />
        <Avatar {...args} size="xxl" />
      </div>
    );
  },
};

export const Variants: Story = {
  args: {
    src: 'https://i.pravatar.cc/300?img=1',
    alt: 'Avatar',
    size: 'xl',
  },
  render: (args) => {
    return (
      <div className="flex max-w-[20rem] items-end">
        <Avatar {...args} variant="circular" />
        <Avatar {...args} variant="rounded" />
        <Avatar {...args} variant="square" />
      </div>
    );
  },
};

export const WithBorder: Story = {
  args: {
    src: 'https://i.pravatar.cc/300?img=1',
    alt: 'Avatar',
    size: 'xl',
    withBorder: true,
  },
  render: (args) => {
    return (
      <div className="flex max-w-[24rem] items-end">
        <Avatar {...args} size="xs" />
        <Avatar {...args} color="secondary" size="sm" />
        <Avatar {...args} color="success" size="md" />
        <Avatar {...args} color="error" size="lg" />
        <Avatar {...args} color="teal" size="xl" />
        <Avatar {...args} color="blue-gray" size="xxl" />
      </div>
    );
  },
};

export const WithCildren: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => {
    return (
      <div className="flex max-w-[20rem] items-end">
        <Avatar {...args} size="md">
          R
        </Avatar>
        <Avatar {...args} color="secondary" size="md">
          <AiFillAppstore />
        </Avatar>
        <Avatar {...args} color="success" size="md">
          <GrBar />
        </Avatar>
        <Avatar {...args} color="error" size="md">
          R
        </Avatar>
        <Avatar {...args} color="teal" size="md">
          F
        </Avatar>
        <Avatar {...args} color="blue-gray" size="md">
          H
        </Avatar>
      </div>
    );
  },
};
