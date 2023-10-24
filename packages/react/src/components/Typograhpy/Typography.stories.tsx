import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/vFkueIQlwz9KdoPGqrDNns/Evergreen-v6-(Community)-(Community)?type=design&node-id=2658%3A10459&mode=design&t=cVZdkWGdpAxgtq2i-1',
    // },
  },
  args: {
    children: 'The quick brown fox jump over the lazy dog',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
  },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
  },
};

export const As: Story = {
  args: {
    as: 'h2',
  },
};
