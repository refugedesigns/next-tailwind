import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Menu, MenuItem, MenuList } from '.';
import { MenuHandler } from './MenuHandler';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Button from '../Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    design: {},
    layout: 'fullscreen',
  },
  args: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="h-60">
        <Menu {...args}>
          <MenuHandler className="mx-auto grid place-items-center">
            <Button>Open menu</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  },
  args: {
    // allowHover: true,
  },
};

const useOpenMenu = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    action(`setOpen: ${open}`)();
  }, [open, setOpen]);

  return {
    open,
    setOpen,
  };
};

export const Nested: Story = {
  render: function Component(args) {
    const { open, setOpen } = useOpenMenu();

    return (
      <div className="h-60">
        <Menu {...args}>
          <MenuHandler className="mx-auto grid place-items-center">
            <Button>Open menu</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <Menu
              open={open}
              handler={setOpen}
              placement="right-start"
              offset={5}
            >
              <MenuHandler>
                <MenuItem className="flex justify-between group">
                  submenu
                  <MdKeyboardArrowUp
                    className={`w-5 h-5 ${open && 'rotate-90'}`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
      </div>
    );
  },
  args: {},
  decorators: [
    (Story, context) => {
      return <Story {...context} />;
    },
  ],
};

export const AllowHover: Story = {
  render: (args) => {
    return (
      <div className="h-60">
        <Menu {...args}>
          <MenuHandler className="mx-auto grid place-items-center">
            <Button>Open menu</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  },
  args: {
    allowHover: true,
  },
};

export const Divide: Story = {
  render: (args) => {
    return (
      <div className="h-60">
        <Menu {...args}>
          <MenuHandler className="mx-auto grid place-items-center">
            <Button>Open menu</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  },
  args: {
    divide: true,
  },
};

export const Placement: Story = {
  render: (args) => {
    return (
      <div className="h-[30rem] grid place-content-center">
        <div className="mb-3 flex gap-3">
          <Menu placement="top">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="top-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="top-end">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="mb-3 flex gap-3">
          <Menu placement="right">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="right-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="right-end">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="mb-3 flex gap-3">
          <Menu placement="bottom">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="flex gap-3">
          <Menu placement="left">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="left-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
          <Menu placement="left-end">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    );
  },
};
