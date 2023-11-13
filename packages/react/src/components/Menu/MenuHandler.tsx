import React from 'react';
import { useMergeRefs, useListItem } from '@floating-ui/react';
import { useMenu } from './MenuContext';
import type { children } from '../../types/components/menu';
import { propTypesChildren } from '../../types/components/menu';

export interface MenuHandlerProps extends React.ComponentPropsWithRef<any> {
  children?: children | React.ComponentPropsWithRef<any>;
}

export const MenuHandler = React.forwardRef<HTMLElement, MenuHandlerProps>(
  ({ children, ...rest }, ref) => {
    const { reference, getReferenceProps, nested, activeIndex } = useMenu();
    const item = useListItem();

    const mergedRefs = useMergeRefs([ref, reference]);

    return React.cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRefs,
        tabIndex: !nested ? undefined : activeIndex === item.index ? 0 : -1,
        role: nested ? 'menuitem' : undefined,
        onClick(event) {
          event.stopPropagation();
        },
        ...(nested && {
          role: 'menuitem',
        }),
      }),
    });
  },
);

MenuHandler.displayName = 'MenuHandler';

MenuHandler.defaultProps = {
  children: propTypesChildren,
};

export default MenuHandler;
