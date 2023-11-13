import React from 'react';
import {
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import objectsToString from '../utils/objectsToString';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import type { children, className } from '../../types/components/menu';
import type { NewAnimatePresenceProps } from '../../types/generics';
import {
  propTypesChildren,
  propTypesClassName,
} from '../../types/components/menu';
import { useMenu } from './MenuContext';
export interface MenuListProps extends React.ComponentPropsWithRef<'ul'> {
  className?: className;
  children?: children;
}

export const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(
  ({ children, className, ...rest }, ref) => {
    const {
      open,
      listItemsRef,
      internalAllowHover,
      handler,
      getFloatingProps,
      context,
      nested,
      getItemProps,
      floating,
      activeIndex,
      tree,
      allowHover,
      setActiveIndex,
      x,
      y,
      strategy,
      lockScroll,
      divide,
      appliedAnimation,
    } = useMenu();

    const { menu } = useTheme();
    const {
      styles: { base },
    } = menu;

    const menuClasses = twMerge(
      clsx(objectsToString(base.menu), divide && 'divide-y divide-slate-700'),
      className,
    );

    const mergedRefs = useMergeRefs([ref, floating]);

    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> =
      AnimatePresence;

    const menuComponent = (
      <motion.div
        {...rest}
        ref={mergedRefs}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        className={menuClasses}
        {...getFloatingProps({
          onKeyDown(event) {
            if (event.key === 'Tab') {
              handler(false);
            }

            if (event.shiftKey) {
              event.preventDefault();
            }
          },
        })}
        initial="unmount"
        exit="unmount"
        animate={open ? 'mount' : 'unmount'}
        variants={appliedAnimation}
      >
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(
              child,
              getItemProps({
                tabIndex: activeIndex === index ? 0 : -1,
                role: 'menuitem',
                className: child.props.className,
                ref(node: HTMLButtonElement) {
                  listItemsRef.current[index] = node;
                },
                onClick: (event) => {
                  if (child.props.onClick) {
                    child.props.onClick?.(event);
                  }
                  tree?.events.emit('click');
                },
                onMouseEnter() {
                  if ((allowHover && open) || (internalAllowHover && open)) {
                    setActiveIndex(index);
                  }
                },
              }),
            ),
        )}
      </motion.div>
    );
    return (
      <FloatingPortal>
        <NewAnimatePresence>
        {open && (
          <>
            {lockScroll ? (
              <FloatingOverlay lockScroll>
                <FloatingFocusManager
                  context={context}
                  modal={!nested}
                  initialFocus={nested ? -1 : 0}
                  returnFocus={!nested}
                  visuallyHiddenDismiss
                >
                  {menuComponent}
                </FloatingFocusManager>
              </FloatingOverlay>
            ) : (
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={nested ? -1 : 0}
                returnFocus={!nested}
                visuallyHiddenDismiss
              >
                {menuComponent}
              </FloatingFocusManager>
            )}
          </>
        )}
        </NewAnimatePresence>
      </FloatingPortal>
    );
  },
);

MenuList.displayName = 'MenuList';

MenuList.propTypes = {
  children: propTypesChildren,
  className: propTypesClassName,
};

export default MenuList;
