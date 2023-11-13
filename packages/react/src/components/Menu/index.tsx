import React from 'react';
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import { useMenu } from './MenuContext';

import { MenuRoot, MenuRootProps } from './MenuRoot';
import { MenuHandlerProps, MenuHandler } from './MenuHandler';
import { MenuListProps, MenuList } from './MenuList';
import { MenuItemsProps, MenuItem } from './MenuItem';

const Menu = React.forwardRef<HTMLButtonElement, MenuRootProps>(
  (
    {
      open,
      handler,
      placement,
      offset,
      animate,
      lockScroll,
      children,
      allowHover,
      divide,
    },
    ref,
  ) => {
    const parentId = useFloatingParentNodeId();

    const props = {
      open,
      handler,
      placement,
      offset,
      animate,
      lockScroll,
      allowHover,
      divide,
    };
    if (parentId === null) {
      return (
        <FloatingTree>
          <MenuRoot ref={ref} {...props}>
            {children}
          </MenuRoot>
        </FloatingTree>
      );
    }
    return (
      <MenuRoot ref={ref} {...props}>
        {children}
      </MenuRoot>
    );
  },
);
Menu.displayName = 'Menu';

Menu.propTypes = MenuRoot.propTypes;

export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
export type { MenuHandlerProps, MenuListProps, MenuItemsProps, MenuRootProps };

export default Object.assign(Menu, {
  Handler: MenuHandler,
  List: MenuList,
  Item: MenuItem,
});
