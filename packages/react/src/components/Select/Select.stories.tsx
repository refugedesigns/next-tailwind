import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BiChevronDown, BiHomeAlt2 } from 'react-icons/bi';

import { Select, Option } from '.';

const option = ['Cat', 'Pig', 'Cow', 'Dog', 'Goat'];

const options = [
  { name: 'Cat', age: 5 },
  { name: 'Pig', age: 2 },
  { name: 'Cow', age: 4 },
  { name: 'Dog', age: 1 },
  { name: 'Goat', age: 4 },
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/vFkueIQlwz9KdoPGqrDNns/Evergreen-v6-(Community)-(Community)?type=design&node-id=2768%3A10540&mode=design&t=ykI81oXt38FxyzQL-1',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  args: {
    children: options.map((option, index) => (
      <Option key={index} value={option.name}>
        <p>{option.name}</p>
        <p>{option.age}</p>
      </Option>
    )),
    label: 'Select...',
    arrow: <BiChevronDown className="w-6 h-6" />,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'minimal', 'error', 'success'],
      control: { type: 'radio' },
    },
    onChange: {
      control: {
        type: null,
        description: 'The onChange handler passed to the Select',
      },
    },
    arrow: {
      control: { type: null },
    },
    children: {
      control: { type: null },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};

export const Standard: Story = {
  args: {
    variant: 'standard',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    variant: 'default',
    color: 'error',
  },
};

export const Success: Story = {
  args: {
    variant: 'default',
    color: 'success',
  },
};

export const WithInitialValue: Story = {
  args: {
    value: 'Pig',
    onChange: undefined,
  },
};

export const WithSelectFunc: Story = {
  args: {
    selected: (element, index) => {
      return (
        element &&
        React.cloneElement(element, {
          disabled: true,
          className:
            'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
        })
      );
    },
  },
};

export const WithIcon: Story = {
  args: {
    icon: <BiHomeAlt2 />,
  },
};

export const LargeWithIcon: Story = {
  args: {
    icon: <BiHomeAlt2 />,
    size: 'lg',
    variant: 'standard'
  },
};

export const FullWith: Story = {
  args: {
    fullWidth: true,
  },
};

export const Animate: Story = {
  args: {
    animate: true,
  },
};
