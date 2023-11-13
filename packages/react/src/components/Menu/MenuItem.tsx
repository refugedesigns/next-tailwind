import React from 'react';
import { useListItem, useMergeRefs } from '@floating-ui/react';
import { twMerge } from 'tailwind-merge';
import { useMenu } from './MenuContext';
import { useTheme } from '../../context/theme';
import objectsToString from '../utils/objectsToString';
import type {
  children,
  disabled,
  className,
} from '../../types/components/menu';
import {
  propTypesChildren,
  propTypesDisabled,
  propTypesClassName,
} from '../../types/components/menu';
import clsx from 'clsx';

export interface MenuItemsProps extends React.ComponentPropsWithRef<'button'> {
  children?: children;
  disabled?: disabled;
  className?: className;
}

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemsProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, className, ...rest }, ref) => {
  const {
    menu: {
      styles: { base },
    },
  } = useTheme();
  const { getItemProps, setHasFocusInside, tree, activeIndex, nested } =
    useMenu();

  className ??= '';
  disabled ??= false;

  const menuItemClasses = twMerge(
    clsx(
      objectsToString(base.item.initial),
      disabled && objectsToString(base.item.disabled),
    ),
    className,
  );

  return (
    <button role="menuitem" ref={ref} className={menuItemClasses} {...rest}>
      {children}
    </button>
  );
});

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  children: propTypesChildren,
  disabled: propTypesDisabled,
  className: propTypesClassName,
};

export default MenuItem;
